import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface ShatterProps {
  /** The text to assemble from shards. */
  text: string;
  /** Delay before the first character begins, in ms. */
  delay?: number;
  /** Delay between successive characters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Shatter({
  text,
  delay = 0,
  stagger = 80,
  as: Component = 'span',
  className
}: ShatterProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='trickle-shatter-char relative inline-block whitespace-pre'
          style={{ ['--trickle-shatter-delay' as string]: `${delay + i * stagger}ms` } as CSSProperties}
        >
          <span className='trickle-shatter-spacer' aria-hidden='true'>{char}</span>
          <span className='trickle-shatter-shard trickle-shatter-shard-1'>{char}</span>
          <span className='trickle-shatter-shard trickle-shatter-shard-2'>{char}</span>
          <span className='trickle-shatter-shard trickle-shatter-shard-3'>{char}</span>
          <span className='trickle-shatter-shard trickle-shatter-shard-4'>{char}</span>
        </span>
      ))}
    </Component>
  );
}
