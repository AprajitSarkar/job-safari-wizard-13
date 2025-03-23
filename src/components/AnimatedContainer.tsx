
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

const AnimatedContainer = ({
  children,
  delay = 0,
  className = '',
  as: Component = 'div',
}: AnimatedContainerProps) => {
  const delayClass = delay ? `animate-delay-${delay}` : '';
  
  return (
    <Component
      className={cn(
        'opacity-0 animate-slide-in-bottom',
        delayClass,
        className
      )}
    >
      {children}
    </Component>
  );
};

export default AnimatedContainer;
