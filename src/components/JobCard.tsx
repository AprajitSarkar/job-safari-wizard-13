
import React from 'react';
import { cn } from '@/lib/utils';
import { Job } from '@/utils/types';
import { BuildingIcon, MapPinIcon, ArrowUpRightIcon, CalendarIcon } from 'lucide-react';

interface JobCardProps {
  job: Job;
  index: number;
  className?: string;
}

const JobCard = ({ job, index, className }: JobCardProps) => {
  const formattedDate = new Date(job.created_at * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div 
      className={cn(
        'relative android-card p-5 rounded-xl transition-all duration-300 hover:shadow-md will-change-transform bg-white dark:bg-[#1A1F2C]',
        'opacity-0 animate-slide-in-bottom',
        `animate-delay-${Math.min(index * 100, 500)}`,
        className
      )}
      style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold line-clamp-2 text-pretty">{job.title}</h3>
          
          {job.remote && (
            <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full whitespace-nowrap dark:bg-primary/20">
              Remote
            </span>
          )}
        </div>
        
        <div className="mt-3 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BuildingIcon className="w-4 h-4 text-primary/70" />
            <span>{job.company_name}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="w-4 h-4 text-primary/70" />
            <span>{job.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 text-primary/70" />
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <a 
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/90 transition-colors android-btn px-4 py-2"
          >
            View Job 
            <ArrowUpRightIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
