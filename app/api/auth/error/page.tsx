'use client';

import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  
  const params = useSearchParams();
  const error = params.get('error');

  const messages: Record<string, string> = {
    Verification: 'Your sign-in link has expired or was already used.',
    Configuration: 'There was a problem with the server configuration.',
    AccessDenied: 'You do not have permission to access this resource.',
    Default: 'Something went wrong. Please try again later.',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Uh-Oh!</h1>
        <p className="text-gray-600 mb-6">
          {messages[error ?? 'Default']}
        </p>
        <a
          href="/auth/sign-in"
          className="text-blue-600 hover:underline"
        >
        Click here.
        </a>
      </div>
    </div>
  );
}
