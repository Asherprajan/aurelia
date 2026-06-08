import * as admin from 'firebase-admin';

// Initialize Firebase Admin only if it hasn't been initialized yet
if (!admin.apps.length) {
  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    
    if (!serviceAccountJson) {
      console.warn("FIREBASE_SERVICE_ACCOUNT_KEY is not set. Firebase Admin will not initialize.");
    } else {
      const serviceAccount = JSON.parse(serviceAccountJson);
      
      if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
      }

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Firebase Admin Initialized successfully.");
    }
  } catch (error) {
    console.error("Firebase Admin Initialization Error:", error);
  }
}

export const db = admin.apps.length ? admin.firestore() : null;
