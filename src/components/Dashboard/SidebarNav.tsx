import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  ReceiptText,
  Archive,
  Mail,
  Calendar,
  Settings,
  HelpCircle,
  Box,
  Menu
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

const mainNavItems: NavItemProps[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: User },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: ReceiptText },
  { href: '#', label: 'Items', icon: Archive },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Sheobox', icon: Archive },
  { href: '#', label: 'Calendar', icon: Calendar },
];

const secondaryNavItems: NavItemProps[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const NavLink: React.FC<NavItemProps> = ({ href, label, icon: Icon, active = false }) => (
  <a
    href={href}
    className={cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary text-sm font-medium',
      active ? 'bg-muted text-primary' : 'hover:bg-muted/50'
    )}
  >
    <Icon className="h-5 w-5" />
    {label}
  </a>
);

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col h-full bg-background border-r p-4">
      <div className="flex items-center justify-between mb-6">
         <a href="#" className="flex items-center gap-2 font-semibold">
           <div className="p-2 bg-foreground text-background rounded-lg">
             <Box className="h-5 w-5" />
           </div>
         </a>
        <button className="p-2 rounded-md hover:bg-muted">
           <Menu className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <nav className="grid items-start gap-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
        <nav className="grid items-start gap-1 pt-4 border-t">
          {secondaryNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
