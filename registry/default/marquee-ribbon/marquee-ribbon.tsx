import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface MarqueeRibbonProps {
  children: React.ReactNode;
  /** Scroll speed in seconds for one full loop. */
  duration?: number;
  /** Direction. */
  direction?: 'left' | 'right';
  /** Pause animation on hover. */
  pauseOnHover?: boolean;
  /** Width of the edge fade in `px` or any length. Set to `'0'` to disable. */
  fadeWidth?: string;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function MarqueeRibbon({
  children,
  duration = 25,
  direction = 'left',
  pauseOnHover = true,
  fadeWidth = '64px',
  as: Component = 'div',
  className
}: MarqueeRibbonProps) {
  const maskStyle =
    fadeWidth === '0'
      ? undefined
      : (`linear-gradient(to right, transparent, black ${fadeWidth}, black calc(100% - ${fadeWidth}), transparent)` as string);

  return (
    <Component
      className={cn(
        'group relative w-full overflow-hidden',
        pauseOnHover && '[&:hover_.trickle-marquee-track]:[animation-play-state:paused]',
        className
      )}
      style={{
        WebkitMaskImage: maskStyle,
        maskImage: maskStyle
      } as CSSProperties}
    >
      <div
        className={cn(
          'trickle-marquee-track flex w-max gap-12 animate-trickle-marquee',
          direction === 'right' && '[animation-direction:reverse]'
        )}
        style={{ animationDuration: `${duration}s` } as CSSProperties}
      >
        <div className='flex shrink-0 gap-12'>{children}</div>
        <div className='flex shrink-0 gap-12' aria-hidden='true'>
          {children}
        </div>
      </div>
    </Component>
  );
}
