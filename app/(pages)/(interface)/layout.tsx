import ContextPanel from '@/app/components/contextualpanel/ContextPanel';
import { Sidebar } from '@/app/components/sidebar/Sidebar'
import { auth } from '@/app/lib/auth';
import { prisma } from '@/app/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'
// /app/dashboard/layout.tsx
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const session = await auth();
    if (!session?.user?.email) {
      // Redirect to sign-in page if not logged in
      redirect("/auth/sign-in");
    }
  
    // 2️⃣ Get the full user profile from the database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        firstname: true,
        lastname: true,
        email: true,
        image: true,
      },
    });
  
    // 3️⃣ If user exists but firstname is missing, redirect to profile page
    if (!user?.firstname) {
      redirect("/profile");
    }

    return (
      <div className="bg-white">
        <aside>
       <Sidebar/>
        </aside>
   
        <main className="bg-white">
         
          {children} {/* This renders the actual page content */}
        </main>

        <aside><ContextPanel /></aside>
      </div>
    )
  }
  