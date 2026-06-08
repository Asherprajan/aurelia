require("dotenv").config({path: ".env.local"});
const admin = require("firebase-admin");

let dbOk = false;
try {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  const serviceAccount = JSON.parse(serviceAccountJson);
  if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
  }
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase initialized.");
  const db = admin.firestore();
  db.collection("test").limit(1).get().then(() => console.log("Firestore OK")).catch(e => console.log("Firestore Error:", e.message));
} catch(e) {
  console.log("Init Error:", e);
}

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);
resend.emails.send({
  from: process.env.FROM_EMAIL || "onboarding@resend.dev",
  to: process.env.OWNER_EMAIL || "test@example.com",
  subject: "Test",
  html: "<p>Test</p>"
}).then(res => console.log("Resend OK:", res)).catch(e => console.log("Resend Error:", e));

