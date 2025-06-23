import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-16 border-b bg-background px-8">
      <h1 className="text-3xl font-bold text-foreground">
        Dashboard
      </h1>
      <Button>
        Create
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </header>
  );
};

export default TopHeader;
