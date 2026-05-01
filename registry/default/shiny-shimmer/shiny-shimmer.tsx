import { type ElementType } from 'react';
import { cn } from '@/lib/cn';

export interface ShinyShimmerProps {
  children: React.ReactNode;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  /** Trigger the shimmer only on hover. Default: always animating. */
  hoverOnly?: boolean;
  /** Width of the shimmer band as a CSS length. Default `'100%'`. */
  shimmerWidth?: string;
}

export function ShinyShimmer({
  children,
  as: Component = 'span',
  className,
  hoverOnly = false,
  shimmerWidth = '100%'
}: ShinyShimmerProps) {
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
        backgroundImage: `linear-gradient(110deg, var(--trickle-shimmer-base, oklch(35% 0 0)) 0%, var(--trickle-shimmer-base, oklch(35% 0 0)) 40%, var(--trickle-shimmer-highlight, oklch(100% 0 0)) 50%, var(--trickle-shimmer-base, oklch(35% 0 0)) 60%, var(--trickle-shimmer-base, oklch(35% 0 0)) 100%)`,
        backgroundSize: `200% 100%`,
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
      }}
    >
      {children}
    </Component>
  );
}
