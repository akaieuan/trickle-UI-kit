import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface NeonFlickerProps {
  children: React.ReactNode;
  /** Neon glow color (any CSS color). Default warm pink. */
  color?: string;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function NeonFlicker({
  children,
  color = 'oklch(72% 0.22 350)',
  as: Component = 'span',
  className
}: NeonFlickerProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-neon-flicker', className)}
      style={{
        color,
        textShadow: `0 0 4px ${color}, 0 0 12px ${color}, 0 0 32px ${color}`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
