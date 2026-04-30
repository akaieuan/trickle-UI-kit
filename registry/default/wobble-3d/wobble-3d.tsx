import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface Wobble3DProps {
  text: string;
  /** Delay between adjacent characters' phases, in ms. */
  stagger?: number;
  /** Cycle duration, in ms. */
  duration?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Wobble3D({
  text,
  stagger = 100,
  duration = 2400,
  as: Component = 'span',
  className
}: Wobble3DProps) {
  return (
    <Component
      className={cn('inline-block [perspective:600px]', className)}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-wobble-3d [transform-style:preserve-3d] [backface-visibility:hidden]'
          style={{
            animationDelay: `${i * stagger}ms`,
            animationDuration: `${duration}ms`
          } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
