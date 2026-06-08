import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      // If no password is set, default to a secure setup phase or deny
      return NextResponse.json({ success: false, error: "Admin password not configured on server." }, { status: 500 });
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Verification failed." }, { status: 500 });
  }
}
