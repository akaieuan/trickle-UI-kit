import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface ScanlineProps {
  children: React.ReactNode;
  /** Cycle duration in ms. */
  duration?: number;
  /** Pixel thickness of the bright scanline. */
  thickness?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Scanline({
  children,
  duration = 2400,
  thickness = 2,
  as: Component = 'span',
  className
}: ScanlineProps) {
  return (
    <Component
      className={cn('trickle-scanline relative inline-block overflow-hidden align-baseline', className)}
      style={{
        ['--trickle-scanline-duration' as string]: `${duration}ms`,
        ['--trickle-scanline-thickness' as string]: `${thickness}px`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
