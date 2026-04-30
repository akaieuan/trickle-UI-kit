import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface WordCascadeProps {
  text: string;
  /** Delay before the first word reveals, in ms. */
  delay?: number;
  /** Delay between successive words, in ms. */
  stagger?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  /** Per-word className applied to each animated span. */
  wordClassName?: string;
}

export function WordCascade({
  text,
  delay = 0,
  stagger = 80,
  as: Component = 'span',
  className,
  wordClassName
}: WordCascadeProps) {
  const words = text.split(/(\s+)/);

  return (
    <Component
      className={cn('inline-block overflow-hidden align-baseline', className)}
      aria-label={text}
    >
      {words.map((word, i) => {
        if (word.match(/^\s+$/)) {
          return (
            <span key={i} aria-hidden='true'>
              {word}
            </span>
          );
        }
        return (
          <span
            key={i}
            aria-hidden='true'
            className={cn('inline-block animate-trickle-cascade', wordClassName)}
            style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}
