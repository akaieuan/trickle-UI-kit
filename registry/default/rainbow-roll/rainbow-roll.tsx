import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface RainbowRollProps {
  text: string;
  /** Cycle duration in ms. */
  duration?: number;
  /** Phase offset between adjacent characters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function RainbowRoll({
  text,
  duration = 4000,
  stagger = 80,
  as: Component = 'span',
  className
}: RainbowRollProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-rainbow-roll'
          style={{
            animationDelay: `${-i * stagger}ms`,
            animationDuration: `${duration}ms`
          } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
