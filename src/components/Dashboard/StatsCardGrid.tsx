import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';
import StatCard from './StatCard';

const StatsCardGrid: React.FC = () => {
  return (
    <div>
      <Tabs defaultValue="leads" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList className="bg-muted/60">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="h-9 text-sm text-muted-foreground font-normal">
            <CalendarDays className="mr-2 h-4 w-4" />
            last 6 months
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </div>
        <TabsContent value="sales">
          <div className="text-center p-16 border rounded-lg bg-muted/30">
            <p className="text-muted-foreground">Sales data would be displayed here.</p>
          </div>
        </TabsContent>
        <TabsContent value="leads">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StatCard type="funnel" />
            <StatCard type="sources" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatsCardGrid;
