import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface AuroraTextProps {
  children: React.ReactNode;
  /** Aurora color stops in order. */
  colors?: string[];
  /** Cycle duration in ms. */
  duration?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const DEFAULT_AURORA = [
  'oklch(75% 0.2 130)', // green
  'oklch(75% 0.18 220)', // sky
  'oklch(72% 0.22 290)', // violet
  'oklch(75% 0.2 30)' // amber
];

export function AuroraText({
  children,
  colors = DEFAULT_AURORA,
  duration = 8000,
  as: Component = 'span',
  className
}: AuroraTextProps) {
  return (
    <Component
      className={cn(
        'trickle-aurora inline-block bg-clip-text text-transparent animate-trickle-aurora',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(120deg, ${colors.join(', ')})`,
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
