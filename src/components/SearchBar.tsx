
import React from 'react';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  className,
  placeholder = 'Search for jobs...',
}: SearchBarProps) => {
  return (
    <div className={cn(
      'relative flex items-center w-full max-w-2xl mx-auto',
      className
    )}>
      <div className="absolute left-3 text-muted-foreground">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 pl-10 pr-4 rounded-full bg-background glass-input focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground shadow-sm"
      />
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/5 blur-sm opacity-50"></div>
    </div>
  );
};

export default SearchBar;
