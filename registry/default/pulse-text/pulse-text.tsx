import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface PulseTextProps {
  children: React.ReactNode;
  /** Cycle duration in ms. */
  duration?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function PulseText({
  children,
  duration = 1800,
  as: Component = 'span',
  className
}: PulseTextProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-pulse-text', className)}
      style={{ animationDuration: `${duration}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
