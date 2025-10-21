// components/Navbar.tsx
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrow icon
import { signOut } from "@/app/lib/auth"
 
interface NavbarProps {
  name: string;
  title: string;
  origin: string;
  location: string;
  resumeLink?: string;
}

const SignOut = async () => {
    // A mock function for the playground environment. 
    // In a real application, this would execute the actual sign-out logic
    // and potentially redirect the user.
    "use server"
        // The core logic: calling the imported signOut function.
        await signOut()
    console.log("Mock sign out executed successfully.");
    // Optional: Add a client-side message here if not handling redirects via the Server Action
};


const Navbar: React.FC<NavbarProps> = ({
  name,
  title,
  origin,
  location,
}) => {
  return (
    <nav className="bg-white pt-5 fixed top-0 left-0 w-screen">
      <div className=" mx-auto flex justify-between items-center px-20">
        {/* Left Section: Name and Title */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-gray-600">{name}</span>
          <span className="text-sm text-gray-500">{title}</span>
        </div>

        {/* Center Section: Origin and Location (Hidden on small screens) */}
        <div className="hidden sm:flex flex-col text-center space-y-1">
          <span className="text-sm text-gray-800 font-medium w-fit">{`From ${origin}`}</span>
          <span className="text-sm text-gray-500">{`Based in ${location}`}</span>
        </div>

        {/* Right Section: Résumé Link */}
        <button onClick={SignOut}
          className="flex items-center space-x-2 text-sm font-medium text-gray-500  hover:text-gray-500 transition-colors"
        >
          <span>Sign Out</span>
          {/* ArrowRight icon, matching the look in the screenshot */}
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {/* Horizontal line separator */}
      <hr className="mt-6 border-gray-300 " />
    </nav>
  );
};

export default Navbar;