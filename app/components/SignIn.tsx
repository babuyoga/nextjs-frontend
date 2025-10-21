import { signIn } from "@/app/lib/auth"
import { SubmitButton } from "./SubmitButton"; 
 
// NOTE: This component is styled and ready.
// You MUST ensure 'import { signIn } from "@/app/lib/auth"' is present
// in the file where this component is used (or passed as a prop).

export function SignIn() {
    return (
      // Outer container for centering and defining the form card
      <div className="flex justify-center items-start pt-20 w-full">
        <div className="max-w-md w-full mx-auto p-8 bg-white shadow-2xl rounded-xl space-y-6 border border-gray-100">
          
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Sign In
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Enter your email to receive a secure sign-in link.
          </p>
  
          {/* Form - Uses the 'action' prop for the Next.js Server Action */}
          <form
            // This uses your required Server Action syntax. 
            // The framework handles the submission, loading, and redirects for you.
            action={async (formData) => {
              "use server"
              // This 'signIn' function must be imported/available where the form is used.
              await signIn("mailgun", formData)
            }}
            className="space-y-4"
          >
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 
                           transition duration-150 ease-in-out 
                           placeholder-gray-500 text-gray-900 
                           text-base"
              />
            </div>
  
            {/* Submit Button - Now using the Client Component */}
            <div>
              {/* This is the only part that changed in the original component */}
              <SubmitButton /> 
            </div>
          </form>
  
        </div>
      </div>
    );
  }