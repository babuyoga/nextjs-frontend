"use client";

import { useFormStatus } from "react-dom";

// Note: You may need to install 'lucide-react' or a similar library 
// for the LoaderIcon, or use an SVG/CSS loader. 
// For this example, we'll use a simple CSS-based circular loader icon.

// Simple CSS for a spinning circle loader
const Loader = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);


export function SubmitButton() {
  // Get the pending status from the form context
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      // Disable the button when the form is pending (submitting)
      disabled={pending}
      className={`
        w-full px-4 py-3 text-white font-semibold rounded-lg shadow-md 
        focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 
        transition duration-300 ease-in-out text-lg flex items-center justify-center space-x-2
        ${pending 
            ? 'bg-blue-400 cursor-not-allowed' // Style for disabled/loading state
            : 'bg-blue-600 hover:bg-blue-700'  // Style for active state
        }
      `}
    >
      {/* Show loader and text based on pending status */}
      {pending && <Loader />}
      <span>{pending ? "Sending link..." : "Send me a magic link"}</span>
    </button>
  );
}