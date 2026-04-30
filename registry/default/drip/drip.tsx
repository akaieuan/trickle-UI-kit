import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface DripProps {
  text: string;
  /** Delay before the first letter drops, in ms. */
  delay?: number;
  /** Delay between successive letters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Drip({
  text,
  delay = 0,
  stagger = 80,
  as: Component = 'span',
  className
}: DripProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-drip'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
