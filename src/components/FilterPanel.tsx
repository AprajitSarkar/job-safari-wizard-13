
import React from 'react';
import { cn } from '@/lib/utils';
import { JobCategory, JobLocation } from '@/utils/types';
import { TagIcon, MapPinIcon } from 'lucide-react';
import AnimatedContainer from './AnimatedContainer';

interface FilterPanelProps {
  selectedCategory: JobCategory;
  selectedLocation: JobLocation;
  onCategoryChange: (category: JobCategory) => void;
  onLocationChange: (location: JobLocation) => void;
  className?: string;
}

const categories: JobCategory[] = ['All', 'Technology', 'Healthcare', 'Finance', 'Education', 'Remote'];
const locations: JobLocation[] = ['All Locations', 'Remote Only', 'United States', 'Europe', 'Asia', 'Australia'];

const FilterPanel = ({
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
  className,
}: FilterPanelProps) => {
  return (
    <div className={cn('flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-center', className)}>
      <AnimatedContainer className="flex flex-col gap-2" delay={200}>
        <div className="flex items-center gap-1.5 text-sm font-medium">
          <TagIcon className="w-4 h-4 text-primary" />
          <span>Categories</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 android-btn',
                selectedCategory === category
                  ? 'bg-primary text-white android-elevation-1'
                  : 'bg-secondary/30 hover:bg-secondary/50 text-foreground dark:bg-secondary/10 dark:hover:bg-secondary/20'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedContainer>

      <AnimatedContainer className="flex flex-col gap-2" delay={300}>
        <div className="flex items-center gap-1.5 text-sm font-medium">
          <MapPinIcon className="w-4 h-4 text-primary" />
          <span>Locations</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => onLocationChange(location)}
              className={cn(
                'px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 android-btn',
                selectedLocation === location
                  ? 'bg-primary text-white android-elevation-1'
                  : 'bg-secondary/30 hover:bg-secondary/50 text-foreground dark:bg-secondary/10 dark:hover:bg-secondary/20'
              )}
            >
              {location}
            </button>
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default FilterPanel;
