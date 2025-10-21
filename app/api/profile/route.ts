// app/api/profile/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth"; // your Auth.js setup
import { prisma } from "@/app/lib/prisma"; // Prisma client

export async function GET(req: Request) {
  try {
    // 1️⃣ Check user session
    const session = await auth();

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = session.user.email;

    // 2️⃣ Fetch user info from DB
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        dateOfBirth: true,
        emailVerified: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 3️⃣ Return user info
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
