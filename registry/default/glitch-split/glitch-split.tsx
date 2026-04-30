import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface GlitchSplitProps {
  children: string;
  /** RGB-split colors as [red-channel, blue-channel]. Default cyan + magenta. */
  colors?: [string, string];
  /** Trigger source: `loop` (default) or `hover`. */
  trigger?: 'loop' | 'hover';
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function GlitchSplit({
  children,
  colors = ['oklch(75% 0.22 200)', 'oklch(70% 0.27 320)'],
  trigger = 'loop',
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
          ['--trickle-glitch-b' as string]: b
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
