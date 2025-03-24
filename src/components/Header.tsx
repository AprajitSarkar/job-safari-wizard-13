
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { BriefcaseIcon, SearchIcon } from 'lucide-react';
import AnimatedContainer from './AnimatedContainer';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

interface HeaderProps {
  className?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Header = ({ className, searchValue = '', onSearchChange }: HeaderProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className={cn('w-full border-b border-border/20 backdrop-blur-sm bg-background/80 sticky top-0 z-10 android-elevation-2 dark:bg-[#1A1F2C]/90', className)}>
      <div className="container flex flex-col px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <AnimatedContainer className="flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">Global Remote Jobs Finder</span>
          </AnimatedContainer>
          
          <AnimatedContainer delay={100} className="flex items-center gap-4">
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full bg-secondary/80 dark:bg-secondary/40 text-foreground"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <ThemeToggle />
          </AnimatedContainer>
        </div>
        
        {isSearchVisible && (
          <AnimatedContainer className="py-2 w-full">
            <SearchBar 
              value={searchValue}
              onChange={onSearchChange || (() => {})}
              className="w-full"
              placeholder="Search for jobs, companies, or locations..."
            />
          </AnimatedContainer>
        )}
      </div>
    </header>
  );
};

export default Header;
