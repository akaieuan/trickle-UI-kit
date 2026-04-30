import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface GradientShiftProps {
  children: React.ReactNode;
  /** Array of CSS color stops, in order. Defaults to a blue/purple/pink gradient. */
  colors?: string[];
  /** Animation cycle duration in ms. */
  duration?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const DEFAULT_COLORS = ['oklch(70% 0.18 250)', 'oklch(72% 0.2 320)', 'oklch(70% 0.18 20)'];

export function GradientShift({
  children,
  colors = DEFAULT_COLORS,
  duration = 6000,
  as: Component = 'span',
  className
}: GradientShiftProps) {
  const stops = [...colors, colors[0]].join(', ');

  return (
    <Component
      className={cn(
        'trickle-gradient-shift inline-block bg-clip-text text-transparent animate-trickle-gradient-shift',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(var(--trickle-gradient-angle, 0deg), ${stops})`,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animationDuration: `${duration}ms`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
