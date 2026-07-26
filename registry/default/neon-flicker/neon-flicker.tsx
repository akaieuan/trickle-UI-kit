import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export interface NeonFlickerProps {
  children: React.ReactNode;
  /** Neon glow color (any CSS color). Default warm pink. */
  color?: string;
  /** Full flicker cycle duration in ms. Default 3000. */
  duration?: number;
  /** Glow intensity multiplier on the halo radii. 1 = stock tube. Default 1. */
  glow?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function NeonFlicker({
  children,
  color = 'oklch(72% 0.22 350)',
  duration = 3000,
  glow = 1,
  as: Component = 'span',
  className
}: NeonFlickerProps) {
  // Three stacked halos: tight core, mid bloom, wide ambient spill.
  const halo = [4, 12, 32].map((r) => `0 0 ${r * glow}px ${color}`).join(', ');

  return (
    <Component
      className={cn('inline-block animate-trickle-neon-flicker', className)}
      style={{
        color,
        animationDuration: `${duration}ms`,
        textShadow: halo
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
