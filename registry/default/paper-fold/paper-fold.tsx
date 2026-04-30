import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface PaperFoldProps {
  text: string;
  /** Delay before the first letter folds, in ms. */
  delay?: number;
  /** Delay between successive letters, in ms. */
  stagger?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

export function PaperFold({
  text,
  delay = 0,
  stagger = 60,
  as: Component = 'span',
  className
}: PaperFoldProps) {
  return (
    <Component
      className={cn('inline-block [perspective:600px]', className)}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-paper-fold [transform-origin:50%_0%] [backface-visibility:hidden]'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
