
import React from 'react';
import { cn } from '@/lib/utils';
import { BriefcaseIcon } from 'lucide-react';
import AnimatedContainer from './AnimatedContainer';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('w-full border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10', className)}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <AnimatedContainer className="flex items-center gap-2">
          <BriefcaseIcon className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium">Job Safari</span>
        </AnimatedContainer>
        
        <AnimatedContainer delay={100} className="flex items-center gap-4">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Locations
          </button>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
        </AnimatedContainer>
      </div>
    </header>
  );
};

export default Header;
