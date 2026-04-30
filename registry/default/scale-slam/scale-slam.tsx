import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface ScaleSlamProps {
  text: string;
  /** Delay before the slam starts, in ms. */
  delay?: number;
  /** Delay between successive characters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function ScaleSlam({
  text,
  delay = 0,
  stagger = 50,
  as: Component = 'span',
  className
}: ScaleSlamProps) {
  return (
    <Component
      className={cn('inline-block', className)}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-scale-slam'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
