import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export type CharStaggerMode = 'fade' | 'slide';

export interface CharStaggerProps {
  text: string;
  /** Reveal style per character. */
  mode?: CharStaggerMode;
  /** Delay before the first char appears, in ms. */
  delay?: number;
  /** Delay between successive characters, in ms. */
  stagger?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const MODE_CLASS: Record<CharStaggerMode, string> = {
  fade: 'animate-trickle-stagger-fade',
  slide: 'animate-trickle-stagger-slide'
};

export function CharStagger({
  text,
  mode = 'fade',
  delay = 0,
  stagger = 40,
  as: Component = 'span',
  className
}: CharStaggerProps) {
  const animationClass = MODE_CLASS[mode];

  return (
    <Component
      className={cn('inline-block', className)}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className={cn('inline-block whitespace-pre', animationClass)}
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
