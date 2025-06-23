import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface ReasonStat {
  percentage: string;
  reason: string;
}

interface OtherStat {
  value: string;
  label: string;
  hasTooltip?: boolean;
  tooltipText?: string;
}

const reasonsData: ReasonStat[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' },
];

const otherData: OtherStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasTooltip: true, tooltipText: 'Leads that have not been contacted in over 30 days.' },
];

const ReasonsStats: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-2">
            {reasonsData.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-semibold text-foreground">{item.percentage}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {otherData.map((item, index) => (
              <div key={index}>
                <div className="flex items-baseline justify-start gap-2">
                  <p className="text-4xl font-semibold text-foreground">{item.value}</p>
                   {item.hasTooltip && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-muted-foreground hover:text-foreground">
                              <Info className="h-4 w-4 mb-1" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.tooltipText}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 text-left">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsStats;
