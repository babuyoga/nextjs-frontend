import { NextResponse } from "next/server";
import { signOut } from "@/app/lib/auth";

export async function POST() {
  try {
    await signOut();

    // Explicit status 200 and success flag
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Sign-out failed:", error);
    return NextResponse.json({ success: false, error: "Sign-out failed" }, { status: 500 });
  }
}