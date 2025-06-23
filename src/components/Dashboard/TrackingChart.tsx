import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface TrackingChartProps {
  className?: string;
}

const chartData = [
  { name: 'March', 'Closed won': 650, 'Closed lost': 680 },
  { name: 'April', 'Closed won': 590, 'Closed lost': 480 },
  { name: 'May', 'Closed won': 800, 'Closed lost': 600 },
  { name: 'June', 'Closed won': 860, 'Closed lost': 50 },
  { name: 'July', 'Closed won': 550, 'Closed lost': 400 },
  { name: 'August', 'Closed won': 300, 'Closed lost': 950 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-lg shadow-lg">
        <p className="font-bold text-card-foreground mb-2">{label}</p>
        <p style={{ color: payload[0].stroke }} className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].stroke }} className="text-sm">{`${payload[1].name}: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const TrackingChart: React.FC<TrackingChartProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted');

  return (
    <Card className={cn("col-span-2", className)}>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-baseline gap-6 mt-2">
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">680</p>
                <p className="text-sm text-muted-foreground">total closed</p>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">70</p>
                <p className="text-sm text-muted-foreground">total lost</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center bg-muted p-1 rounded-lg">
              <Button size="sm" variant={activeTab === 'came' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('came')} className="h-7 text-xs">Leads came</Button>
              <Button size="sm" variant={activeTab === 'converted' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('converted')} className="h-7 text-xs">Leads Converted</Button>
              <Button size="sm" variant={activeTab === 'size' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('size')} className="h-7 text-xs">Total deals size</Button>
            </div>
            <Button variant="outline" className="h-9 text-sm text-muted-foreground font-normal ml-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              last 6 months
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb7185" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="Closed won" stroke="#2dd4bf" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2.5} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="Closed lost" stroke="#fb7185" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2.5} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-8 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-sm bg-[#2dd4bf]"></span>
            <span>Closed won</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-sm bg-[#fb7185]"></span>
            <span>Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingChart;
