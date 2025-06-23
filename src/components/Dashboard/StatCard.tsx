import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

interface SourceData {
  name: 'Clutch' | 'Behance' | 'Instagram' | 'Dribbble';
  value: number;
  amount: number;
  fill: string;
}

interface StatCardProps {
  type: 'funnel' | 'sources';
  className?: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-slate-800' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 50, amount: 3000, fill: '#F87171' }, // red-400
  { name: 'Behance', value: 40, amount: 1000, fill: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, amount: 1000, fill: '#34D399' }, // emerald-400
  { name: 'Dribbble', value: 10, amount: 1000, fill: '#A78BFA' }, // violet-400
];

const FunnelCard: React.FC = () => {
  const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-4xl font-bold">600</p>
          <p className="text-sm text-muted-foreground">active leads</p>
        </div>
        <div className="w-full flex rounded-full h-2 mb-6 overflow-hidden">
          {funnelData.map((stage) => (
            <div key={stage.name} className={cn(stage.color)} style={{ width: `${(stage.count / totalCount) * 100}%` }} />
          ))}
        </div>
        <ul className="space-y-4 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center">
                <span className={cn('w-2.5 h-2.5 rounded-full mr-2.5', stage.color)} />
                <span>{stage.name}</span>
              </div>
              <span className="text-muted-foreground justify-self-end font-medium">{stage.count}</span>
              <span className="text-muted-foreground justify-self-end font-medium">${stage.value.toLocaleString()}</span>
              <div className="text-muted-foreground justify-self-end relative">
                 <span>{stage.duration}</span>
                 {stage.name === 'Qualified' && (
                    <Badge variant="secondary" className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white hover:bg-gray-800 pointer-events-none">average time on this stage</Badge>
                 )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const SourcesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourcesData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={2} labelLine={false}>
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                  ))}
                </Pie>
                <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 text-sm">
            {sourcesData.map((source) => (
              <div key={source.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.fill }} />
                  <span className="font-medium text-card-foreground/90">{source.name}</span>
                </div>
                <span className="text-right text-muted-foreground font-medium">${source.amount.toLocaleString()}</span>
                <span className="text-right text-muted-foreground font-medium">{source.value}%</span>
              </div>
            ))}
            <div className="flex justify-end pt-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="cursor-pointer text-xs font-normal">from leads total</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage is calculated from the total leads from all sources.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard: React.FC<StatCardProps> = ({ type, className }) => {
  if (type === 'funnel') {
    return <FunnelCard />;
  }
  if (type === 'sources') {
    return <SourcesCard />;
  }
  return null;
};

export default StatCard;
