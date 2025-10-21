import Link from "next/link";


export default async function Page() {


  // 4️⃣ Render the component if everything is fine
  return (
    <div className="bg-white h-screen w-screen flex justify-center text-black">
     
<Link href="/dashboard" className="m-auto">Dashboard</Link>
    </div>
  );
}
