"use client";

import React from "react";
import { Power } from "lucide-react";

const Signout = () => {
  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/auth/signout", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        console.log("Signed out successfully");
        window.location.href = "/auth/sign-in"; 
      } else {
        // Only log real errors from the server
        console.log("Sign-out failed:", data.error);
      }
    } catch (error) {
      // Only log network or unexpected errors
      console.log("Error during sign-out:", error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="w-fit h-fit p-2 bg-gray-100 rounded-lg text-black hover:bg-gray-200 hover:cursor-pointer"
    >
      <Power size={20} />
    </button>
  );
};

export default Signout;
