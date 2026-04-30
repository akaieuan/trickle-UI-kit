import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface WaveProps {
  text: string;
  /** Cycle duration in ms. */
  duration?: number;
  /** Delay between adjacent characters' phases, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Wave({
  text,
  duration = 1800,
  stagger = 80,
  as: Component = 'span',
  className
}: WaveProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-wave'
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
