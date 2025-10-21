import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/app/lib/auth"; // from your auth.js setup
import { prisma } from "@/app/lib/prisma"; // adjust if your prisma client path differs

// 1️⃣ Define Zod schema for validation
const userUpdateSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().refine(
    (val) => !isNaN(Date.parse(val)), // ensure valid date string
    { message: "Invalid date format" }
  ),
});

// 2️⃣ Infer TypeScript type from schema
type UserUpdateInput = z.infer<typeof userUpdateSchema>;

// 3️⃣ POST handler
export async function POST(request: Request) {

    
  try {
    // 1. Authenticate user (server-side session)
    const session = await auth();

    if (!session || !session.user?.email) {
      console.log("Session not authenticated");  
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    }

    // 2. Parse and validate request body
    const body = await request.json();
    const parsed = userUpdateSchema.safeParse(body);

    if (!parsed.success) {
        console.log("Couldn't parse");
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const data: UserUpdateInput = parsed.data;

    // 3. Update the user in the database using email as identifier
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        dateOfBirth: new Date(data.dateOfBirth),
      },
    });

    // 4. Respond with updated user info
    console.log("✅ Incoming request body:", body);
console.log("✅ Session user:", session?.user);

console.log(updatedUser,"the user was updated")
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.log("This is the line that threw an error");
    console.error("POST /api/user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
