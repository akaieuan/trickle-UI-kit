import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface HalftoneProps {
  children: React.ReactNode;
  /** Delay before the reveal begins, in ms. */
  delay?: number;
  /** Reveal duration, in ms. */
  duration?: number;
  /** Dot size in pixels. */
  dotSize?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Halftone({
  children,
  delay = 0,
  duration = 1400,
  dotSize = 6,
  as: Component = 'span',
  className
}: HalftoneProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-halftone', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ['--trickle-halftone-size' as string]: `${dotSize}px`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
