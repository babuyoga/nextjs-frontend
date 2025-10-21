// import Image from "next/image";
// import Dialer from "./components/Dialer";
import {SignIn} from "@/app/components/SignIn";
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export default async function Signin() {
  const session = await auth()
  if (session?.user) redirect("/");

  return (
    <div className="w-full h-screen flex flex-col bg-white justify-center  ">
      {/* <Dialer/> */}
    <SignIn/>
    </div>
  );
}
