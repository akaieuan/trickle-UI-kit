import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export interface GlitchSplitProps {
  children: string;
  /** RGB-split colors as [red-channel, blue-channel]. Default cyan + magenta. */
  colors?: [string, string];
  /** Trigger source: `loop` (default) or `hover`. */
  trigger?: 'loop' | 'hover';
  /** Full glitch cycle duration in ms. Default 2400. */
  duration?: number;
  /** Slice displacement multiplier. 0 = no shift, 3 = violent. Default 1. */
  offset?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function GlitchSplit({
  children,
  colors = ['oklch(75% 0.22 200)', 'oklch(70% 0.27 320)'],
  trigger = 'loop',
  duration = 2400,
  offset = 1,
  as: Component = 'span',
  className
}: GlitchSplitProps) {
  const [a, b] = colors;

  return (
    <Component
      data-text={children}
      className={cn(
        'trickle-glitch-split relative inline-block',
        trigger === 'loop' && 'trickle-glitch-loop',
        className
      )}
      style={
        {
          ['--trickle-glitch-a' as string]: a,
          ['--trickle-glitch-b' as string]: b,
          // Pseudo-elements inherit these from the host element, so the
          // keyframes below can scale their displacement and timing.
          ['--trickle-glitch-duration' as string]: `${duration}ms`,
          ['--trickle-glitch-offset' as string]: `${offset}`
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
