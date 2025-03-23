
import React from 'react';
import { cn } from '@/lib/utils';
import { SearchIcon, XCircleIcon } from 'lucide-react';

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
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={cn(
      'relative flex items-center w-full max-w-2xl mx-auto',
      className
    )}>
      <div className="absolute left-4 text-muted-foreground">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-14 pl-12 pr-10 rounded-full bg-background android-elevation-1 glass-input focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground dark:bg-secondary/20"
      />
      {value && (
        <button 
          onClick={handleClear}
          className="absolute right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <XCircleIcon className="w-5 h-5" />
        </button>
      )}
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/5 blur-sm opacity-50"></div>
    </div>
  );
};

export default SearchBar;
