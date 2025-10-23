// SidebarData.ts

import {// Placeholder for the top logo icon
    MessagesSquare,
    LayoutDashboard,
    Logs,
    Forward,
    RefreshCw,
    LucideIcon,
    Phone,
    ContactRound
  } from 'lucide-react';
  
  // Define the shape of a navigation item
  export type SidebarItemType = {
    name: string;
    icon: LucideIcon; // Component type for the icon
    href: string;
    // Optional for different visual styles, like the teal/blue in the image
    isActive?: boolean;
  };
  
  // --- Top Section Icons ---
  export const TopItems: SidebarItemType[] = [
    // The image shows an initial blue icon at the very top, which we'll treat separately (Logo/App Icon)
    // The first interactive icon looks like a list or clipboard.
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      isActive: true, 
      // Example of an active state (blue/darker blue in the image)

    },
    // {
    //   name: 'Dialer',
    //   icon: Phone,
    //   href: '/dialer',
    //   // Example of an active state (blue/darker blue in the image)

    // },
    {
      name: 'Messages',
      icon: MessagesSquare,
      href: '/inbox',
          },
    // {
    //   name: 'Call Logs',
    //   icon: Logs,
    //   href: '/logs',
    // },
  
    // {
    //   name: 'Contacts',
    //   icon: ContactRound,
    //   href: '/contacts',
    // }, 
    // {
    //   name: 'Forwarding',
    //   icon: Forward,
    //   href: '/forwarding',
    // },
  ];
  
  // --- Middle Section Icons ---
  // export const MiddleItems: SidebarItemType[] = [
  //   {
  //     name: 'Forwarding',
  //     icon: Forward,
  //     href: '/forwarding',
  //   },
  // ];
  
  // --- Bottom Section Icons (Refresh) ---
  export const BottomItems: SidebarItemType[] = [
    {
      name: 'Refresh',
      icon: RefreshCw,
      href: '#refresh', // Example of a non-navigation action
    },
  ];