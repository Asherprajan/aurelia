import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { Resend } from "resend";
import { getOwnerEmailTemplate, getClientEmailTemplate } from "@/lib/email-templates";

// Initialize Resend with API Key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// The email address that will receive the leads
const OWNER_EMAIL = process.env.OWNER_EMAIL || "aureliaeventsbyaleena@gmail.com";
// The 'From' address needs to be verified in Resend (e.g. hello@aureliaevents.com). 
// For testing without a domain, use the Resend onboarding email or your verified domain.
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 1. Save to Firebase Firestore
    let docId = "mock-id";
    if (db) {
      try {
        const docRef = await db.collection("leads").add({
          ...data,
          createdAt: new Date().toISOString(),
          status: "new"
        });
        docId = docRef.id;
        console.log(`Lead saved to Firestore with ID: ${docId}`);
      } catch (err) {
        console.error("Firebase save error:", err);
      }
    } else {
      console.log("Firebase Admin not initialized. Skipping DB save.");
    }

    // 2. Send Emails via Resend
    if (resend) {
      const clientEmail = data.lead?.email;
      const clientName = data.lead?.name || "Client";

      // Send to Owner
      await resend.emails.send({
        from: `Aurelia Events <${FROM_EMAIL}>`,
        to: [OWNER_EMAIL],
        subject: `New Wedding Lead: ${clientName}`,
        html: getOwnerEmailTemplate(data),
      });

      // Send to Client
      if (clientEmail) {
        await resend.emails.send({
          from: `Aurelia Events <${FROM_EMAIL}>`,
          to: [clientEmail],
          subject: "Your Aurelia Events Wedding Inquiry ✨",
          html: getClientEmailTemplate(data),
        });
      }
      
      console.log("Emails sent successfully.");
    } else {
      console.log("Resend API Key not found. Skipping emails.");
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully.", id: docId });
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json({ success: false, error: "Failed to capture lead." }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    if (!db) {
      return NextResponse.json({ success: false, error: "Firebase Admin not initialized." }, { status: 500 });
    }

    const snapshot = await db.collection("leads").orderBy("createdAt", "desc").get();
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch leads." }, { status: 500 });
  }
}
