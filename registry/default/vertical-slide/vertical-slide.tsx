import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface VerticalSlideProps {
  text: string;
  /** Delay before the first letter, in ms. */
  delay?: number;
  /** Delay between successive letters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function VerticalSlide({
  text,
  delay = 0,
  stagger = 60,
  as: Component = 'span',
  className
}: VerticalSlideProps) {
  return (
    <Component
      className={cn('inline-block overflow-hidden align-baseline', className)}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-vertical-slide'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
