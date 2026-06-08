import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/lib/firebase-admin";
import { 
  generateConsultationOwnerEmailHtml, 
  generateConsultationClientEmailHtml 
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, eventDate, message } = data;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Save to Firebase Firestore
    if (db) {
      await db.collection("consultations").add({
        name,
        email,
        phone,
        eventDate: eventDate || null,
        message,
        createdAt: new Date().toISOString(),
      });
    } else {
      console.warn("Firestore db is not initialized. Skipping database save.");
    }

    // 2. Send Email to Owner
    const ownerEmail = process.env.OWNER_EMAIL || "aureliaeventsbyaleena@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from: `Aurelia Events <${fromEmail}>`,
      to: [ownerEmail],
      subject: `New Consultation Request: ${name}`,
      html: generateConsultationOwnerEmailHtml(data),
    });

    // 3. Send Email to Client
    await resend.emails.send({
      from: `Aurelia Events <${fromEmail}>`,
      to: [email],
      subject: "We received your consultation request - Aurelia Events",
      html: generateConsultationClientEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Consultation Submission Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit consultation request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!db) {
      throw new Error("Firestore not initialized");
    }
    
    const snapshot = await db.collection("consultations").orderBy("createdAt", "desc").get();
    const consultations = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ success: true, consultations });
  } catch (error: any) {
    console.error("Fetch Consultations Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch consultations." },
      { status: 500 }
    );
  }
}
