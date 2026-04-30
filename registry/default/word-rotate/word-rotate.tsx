'use client';

import { useEffect, useState, type ElementType } from 'react';
import { cn } from '@/lib/cn';

export interface WordRotateProps {
  words: string[];
  /** ms each word stays before rotating to the next. */
  duration?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  /** Per-word className. */
  wordClassName?: string;
}

export function WordRotate({
  words,
  duration = 2400,
  as: Component = 'span',
  className,
  wordClassName
}: WordRotateProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIdx((i) => (i + 1) % words.length);
    }, duration);
    return () => window.clearInterval(timer);
  }, [words.length, duration]);

  if (words.length === 0) return null;
  const firstWord = words[0] ?? '';

  return (
    <Component
      className={cn('relative inline-grid align-baseline', className)}
      aria-label={words.join(', ')}
    >
      {words.map((word, i) => {
        const isActive = i === activeIdx;
        const offset = i - activeIdx;
        return (
          <span
            key={i}
            aria-hidden='true'
            style={{
              gridArea: '1 / 1',
              transform: `translateY(${isActive ? 0 : offset > 0 ? '0.4em' : '-0.4em'})`,
              transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform, opacity'
            }}
            className={cn(
              'whitespace-nowrap',
              isActive ? 'opacity-100' : 'opacity-0',
              wordClassName
            )}
          >
            {word}
          </span>
        );
      })}
      <span className='sr-only'>{firstWord}</span>
    </Component>
  );
}
