import NextAuth from "next-auth"
import Mailgun from "next-auth/providers/mailgun"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/app/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers:  [
    Mailgun({
      from: process.env.EMAIL_FROM,
      apiKey: process.env.AUTH_MAILGUN_KEY!,
    }),
  ],
})