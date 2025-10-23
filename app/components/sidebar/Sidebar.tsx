// Sidebar.tsx
'use client'
import React from 'react';
import {  Webhook} from 'lucide-react';
import { TopItems, BottomItems } from './SidebarData';
import { SidebarItem } from './SidebarItem';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Signout from '@/app/components/Signout';





export function Sidebar() {

  const pathname = usePathname();

  return (
    <div
      className="
       left-0 top-0 h-screen w-20 
        bg-white border-r border-gray-100
        flex flex-col items-center justify-between
        pt-3 pb-6 shadow-xl z-20
      "
    >
      {/* --- Top Section: Logo and Main Navigation --- */}
      <div className="flex flex-col items-center w-full">
        {/* 1. App Logo/Initial Icon (Large Blue Icon) */}
        <Link href="/" passHref>
            <div className="p-3 rounded-xl cursor-pointer text-black shadow-lg transition-transform hover:scale-105">
                < Webhook size={26} />
            </div>
        </Link>
        
        {/* 2. Top Navigation Items */}
        <nav className="mt-8">
            {TopItems.map((item) => (
            <SidebarItem key={item.name} {...item} isActive={pathname==item.href}/>
            ))}
        </nav>
      

      {/* --- Middle Section: Separated Navigation --- */}
      <nav className="flex flex-col items-center w-full">
        {/* {MiddleItems.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))} */}
        {/* The image has some teal icons in the middle section, applying the 'isAccent' prop */}
        <SidebarItem key={BottomItems[0].name} {...BottomItems[0]} isAccent={true} />
      </nav>
      </div>
      {/* --- Bottom Section: User Profile and Settings --- */}
      <div className="flex flex-col items-center w-full">
        {/* The refresh icon is in the middle section in the image, but we'll add the user profile here */}
        
        {/* User Profile Image */}
        <div className=" rounded-full cursor-pointer transition-shadow hover:shadow-lg">
          {/* Replace with your actual user image source */}
          {/* Using a placeholder for the image source based on the visual */}
          {/* <Image
            src={null} // You'd use a real path or URL here
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <Signout/>
        </div>
      </div>
    </div>
  );
}