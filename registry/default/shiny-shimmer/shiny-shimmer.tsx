import { type CSSProperties, type ElementType } from 'react';
import { cn } from '@/lib/utils';

export interface ShinyShimmerProps {
  children: React.ReactNode;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  /** Trigger the shimmer only on hover. Default: always animating. */
  hoverOnly?: boolean;
  /** Sweep duration in ms. Default 2500. */
  duration?: number;
  /**
   * Width of the bright band, as a percentage of the gradient. Small values
   * give a tight specular glint, large values a broad wash. Default 20.
   */
  shimmerWidth?: number;
}

export function ShinyShimmer({
  children,
  as: Component = 'span',
  className,
  hoverOnly = false,
  duration = 2500,
  shimmerWidth = 20
}: ShinyShimmerProps) {
  const base = 'var(--trickle-shimmer-base, oklch(35% 0 0))';
  const highlight = 'var(--trickle-shimmer-highlight, oklch(100% 0 0))';
  // Band is centred on the gradient midpoint and grows outward symmetrically.
  const half = Math.min(Math.max(shimmerWidth, 0), 100) / 2;

  return (
    <Component
      data-trickle-shimmer={hoverOnly ? 'hover' : 'always'}
      className={cn(
        'trickle-shimmer relative inline-block bg-clip-text text-transparent',
        !hoverOnly && 'animate-trickle-shimmer',
        hoverOnly && 'hover:animate-trickle-shimmer',
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        backgroundImage: `linear-gradient(110deg, ${base} 0%, ${base} ${50 - half}%, ${highlight} 50%, ${base} ${50 + half}%, ${base} 100%)`,
        backgroundSize: `200% 100%`,
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
