import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export type TextRevealMode = 'fade-up' | 'blur' | 'slide' | 'scale';
export type TextRevealSplit = 'none' | 'word' | 'char';

export interface TextRevealProps {
  children: string;
  /** Visual mode for the reveal. */
  mode?: TextRevealMode;
  /** How to split the text for staggered reveal. `none` reveals as a single block. */
  split?: TextRevealSplit;
  /** Delay before the first element appears, in ms. */
  delay?: number;
  /** Delay between staggered elements, in ms. Ignored when `split='none'`. */
  stagger?: number;
  /** Element tag to render. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const MODE_TO_ANIMATION: Record<TextRevealMode, string> = {
  'fade-up': 'animate-trickle-fade-up',
  blur: 'animate-trickle-fade-blur',
  slide: 'animate-trickle-fade-slide',
  scale: 'animate-trickle-fade-scale'
};

export function TextReveal({
  children,
  mode = 'fade-up',
  split = 'none',
  delay = 0,
  stagger = 50,
  as: Component = 'span',
  className
}: TextRevealProps) {
  const animationClass = MODE_TO_ANIMATION[mode];

  if (split === 'none') {
    return (
      <Component
        className={cn('inline-block', animationClass, className)}
        style={{ animationDelay: `${delay}ms` } as CSSProperties}
      >
        {children}
      </Component>
    );
  }

  const parts = split === 'word' ? children.split(/(\s+)/) : children.split('');

  return (
    <Component className={cn('inline-block', className)} aria-label={children}>
      {parts.map((part, i) => {
        if (part.match(/^\s+$/)) {
          return (
            <span key={i} aria-hidden='true'>
              {part}
            </span>
          );
        }
        return (
          <span
            key={i}
            aria-hidden='true'
            className={cn('inline-block', animationClass)}
            style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
          >
            {part}
          </span>
        );
      })}
    </Component>
  );
}
