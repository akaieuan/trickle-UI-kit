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
      className={cn('trickle-pulse-text relative inline-block animate-trickle-pulse-text', className)}
      style={{
        animationDuration: `${duration}ms`,
        ['--trickle-pulse-duration' as string]: `${duration}ms`
      } as CSSProperties}
      data-trickle-pulse-rings='true'
    >
      {children}
    </Component>
  );
}
