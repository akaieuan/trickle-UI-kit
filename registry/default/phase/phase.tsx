import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface PhaseProps {
  children: React.ReactNode;
  /** Cycle duration in ms. */
  duration?: number;
  /** Phase-out intensity 0..1. 1 = fully phased out at the dip; 0 = no phase. */
  amplitude?: number;
  as?: ElementType;
  className?: string;
}

export function Phase({ children, duration = 2400, amplitude = 0.85, as: Component = 'span', className }: PhaseProps) {
  const clamped = Math.max(0, Math.min(1, amplitude));
  return (
    <Component
      className={cn('inline-block animate-trickle-phase', className)}
      style={{
        animationDuration: `${duration}ms`,
        ['--trickle-phase-min' as string]: `${1 - clamped}`,
        ['--trickle-phase-blur' as string]: `${clamped}`,
        ['--trickle-phase-slip' as string]: `${clamped}`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
