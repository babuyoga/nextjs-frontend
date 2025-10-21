import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
// Define the list of popular email providers, their URLs, and SVG icons.
// The brand colors are now exclusively in the SVG fills, not the button background.
const emailProviders = [
  { 
    name: 'Gmail', 
    url: 'https://mail.google.com/', 
    icon: (
      <Image src="/gmail.svg" width={20} height={20} alt="Gmail icon"/>
    )
  },
  { 
    name: 'Outlook', 
    url: 'https://outlook.live.com/mail/', 
    icon: (
     <Image src="/outlook.png" width={20} height={20} alt="Outlook icon"/>
    )
  },
  { 
    name: '', 
    url: 'https://mail.yahoo.com/', 
    icon: (
      <Image src="/yahoo.svg" width={60} height={30} alt="Yahoo Mail icon"/>
    )
  },
];

export default async function VerifyRequest() {

  const session = await auth()
  if (session?.user) redirect("/dashboard");

  // Common style classes for all buttons
  const buttonClasses = `flex items-center justify-center w-full px-3 py-3 text-gray-800 font-medium rounded-lg 
                         bg-white shadow-sm border border-gray-200 
                         hover:bg-gray-50 
                         transition duration-150 ease-in-out text-base
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                         transform hover:scale-[1.02] active:scale-[0.98]`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-xl w-full mx-auto p-10 bg-white shadow-2xl rounded-xl space-y-8 text-center border border-gray-100">
        
        {/* Icon (Envelope) */}
        <div className="flex justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-blue-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Title and Instruction */}
        <h2 className="text-3xl font-extrabold text-gray-900">
          Check Your Email
        </h2>
        <p className="text-lg text-gray-700">
          We've sent a secure magic link to your email address. Please click the link inside to finish signing in.
        </p>
        <p className="text-sm text-gray-500 pt-2">
          If you don't see it right away, check your spam or junk folder.
        </p>

        {/* Links to Email Providers */}
        <div className="w-full pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
            Quick links to your inbox:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {emailProviders.map((provider) => (
              <a 
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClasses} flex flex-row gap-2`} // Use the unified button styles
              >
                <div>{provider.icon}</div>
                {provider.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}


