import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface SpotlightProps {
  children: React.ReactNode;
  /** Cycle duration in ms. */
  duration?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Spotlight({
  children,
  duration = 4000,
  as: Component = 'span',
  className
}: SpotlightProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-spotlight', className)}
      style={{ animationDuration: `${duration}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
