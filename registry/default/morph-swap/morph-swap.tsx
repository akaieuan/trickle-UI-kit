'use client';

import { useEffect, useState, type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';
import { useTextRoot } from '@/registry/default/text-root/text-root';

export interface MorphSwapProps {
  words: string[];
  /** ms each word stays before morphing to the next. */
  interval?: number;
  /** ms for each char's morph-out / morph-in. */
  morphDuration?: number;
  /** ms between staggered char morphs within a word. */
  charStagger?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  trigger?: 'mount' | 'view';
}

export function MorphSwap({
  words,
  interval = 2500,
  morphDuration = 300,
  charStagger = 30,
  as: Component = 'span',
  className,
  trigger = 'mount'
}: MorphSwapProps) {
  const { ready, prefersReducedMotion, setRef } = useTextRoot({ trigger });
  const [activeIdx, setActiveIdx] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (!ready || prefersReducedMotion || words.length <= 1) return;
    const cycle = window.setInterval(() => {
      setPhase('out');
      window.setTimeout(() => {
        setActiveIdx((i) => (i + 1) % words.length);
        setPhase('in');
      }, morphDuration);
    }, interval);
    return () => window.clearInterval(cycle);
  }, [ready, prefersReducedMotion, words.length, interval, morphDuration]);

  if (words.length === 0) return null;
  const current = words[activeIdx % words.length] ?? '';
  const fallback = words[0] ?? '';

  return (
    <Component
      ref={setRef}
      className={cn('inline-block whitespace-pre', className)}
      aria-label={fallback}
    >
      {current.split('').map((char, i) => (
        <span
          key={`${activeIdx}-${i}`}
          aria-hidden='true'
          className={cn(
            'inline-block',
            phase === 'in' && 'animate-trickle-morph-in',
            phase === 'out' && 'animate-trickle-morph-out'
          )}
          style={{
            animationDelay: `${i * charStagger}ms`,
            animationDuration: `${morphDuration}ms`
          } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
