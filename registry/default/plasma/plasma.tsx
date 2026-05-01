import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface PlasmaProps {
  children: React.ReactNode;
  duration?: number;
  as?: ElementType;
  className?: string;
}

export function Plasma({ children, duration = 6000, as: Component = 'span', className }: PlasmaProps) {
  return (
    <Component
      className={cn('trickle-plasma inline-block animate-trickle-plasma', className)}
      style={{ animationDuration: `${duration}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
