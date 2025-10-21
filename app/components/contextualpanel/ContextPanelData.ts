import {
  LucideIcon,
  Headphones,
  HelpCircle,
  Bell,
  Settings,
  User,
} from 'lucide-react';

/**
 * Defines the structure for an icon item.
 */
export type ContextPanelItemType = {
  name: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
};

/**
 * Data for the icons to be rendered.
 */
export const ContextPanelTopIcons: ContextPanelItemType[] = [
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Notifications', icon: Bell, href: '/notifications',
    //  isActive: true
     },
     { name: 'Support', icon:  Headphones, href: '/help' },
  { name: 'Profile', icon: User, href: '/profile' },
];
