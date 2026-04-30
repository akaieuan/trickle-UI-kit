import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface FloatProps {
  text: string;
  /** Cycle duration in ms. */
  duration?: number;
  /** Phase offset between adjacent characters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Float({
  text,
  duration = 3000,
  stagger = 100,
  as: Component = 'span',
  className
}: FloatProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-float'
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
