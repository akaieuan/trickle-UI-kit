import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface GrainProps {
  children: React.ReactNode;
  /** Starting dot size in pixels — smaller = finer grain. Default 5. */
  dotSize?: number;
  /** Animation delay in ms. */
  delay?: number;
  /** Total dissolve duration in ms. */
  duration?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Grain({
  children,
  dotSize = 5,
  delay = 0,
  duration = 1600,
  as: Component = 'span',
  className
}: GrainProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-grain-dissolve', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ['--trickle-grain-dot-size' as string]: `${dotSize}px`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
