import admin from "firebase-admin";
import { NextResponse } from "next/server";

// Initialize Firebase Admin with service account JSON from env var
if (!admin.apps.length) {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    : undefined;

  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
    });
  } else {
    // If not provided, initialize with default credentials (useful in some environments)
    try {
      admin.initializeApp();
    } catch (e) {
      // ignore
    }
  }
}

const db = admin.firestore();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, budget, details } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const docRef = await db.collection("queries").add({
      name,
      email,
      service: service || null,
      budget: budget || null,
      details: details || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || String(err) },
      { status: 500 },
    );
  }
}
