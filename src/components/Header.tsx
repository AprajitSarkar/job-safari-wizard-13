
import React from 'react';
import { cn } from '@/lib/utils';
import { BriefcaseIcon } from 'lucide-react';
import AnimatedContainer from './AnimatedContainer';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('w-full border-b border-border/20 backdrop-blur-sm bg-background/80 sticky top-0 z-10 android-elevation-1 dark:bg-[#1A1F2C]/90', className)}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <AnimatedContainer className="flex items-center gap-2">
          <BriefcaseIcon className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium">Job Safari</span>
        </AnimatedContainer>
        
        <AnimatedContainer delay={100} className="flex items-center gap-4">
          <ThemeToggle />
        </AnimatedContainer>
      </div>
    </header>
  );
};

export default Header;
