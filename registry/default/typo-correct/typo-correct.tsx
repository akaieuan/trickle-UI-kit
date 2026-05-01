'use client';

import { useEffect, useState, type ElementType } from 'react';
import { cn } from '@/lib/cn';
import { useTextRoot } from '@/registry/default/text-root/text-root';

type Phase = 'hidden' | 'flying' | 'misspelled' | 'correcting' | 'done';

export interface TypoCorrectProps {
  /** The correct word that the animation resolves to. */
  word: string;
  /** A misspelling of `word`. Must be the same length and contain the same letters. */
  misspelled: string;
  /** Delay in ms before the chaotic fly-in begins. */
  delay?: number;
  /** Duration of the chaotic fly-in animation, in ms. */
  flyDuration?: number;
  /** Pause in ms after letters land in misspelled order, before correction starts. */
  pauseAfterFly?: number;
  /** Delay in ms between each correction step. */
  charDelay?: number;
  /** Element tag to render. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  /** Trigger source: `mount` (default) or `view`. */
  trigger?: 'mount' | 'view';
}

export function TypoCorrect({
  word,
  misspelled,
  delay = 300,
  flyDuration = 1000,
  pauseAfterFly = 500,
  charDelay = 120,
  as: Component = 'span',
  className,
  trigger = 'mount'
}: TypoCorrectProps) {
  if (process.env.NODE_ENV !== 'production' && word.length !== misspelled.length) {
    console.warn(
      `[trickle/TypoCorrect] "word" (${word.length}) and "misspelled" (${misspelled.length}) must be the same length.`
    );
  }

  const { ready, prefersReducedMotion, setRef } = useTextRoot({ trigger, delay });
  const [phase, setPhase] = useState<Phase>('hidden');
  const [correctedChars, setCorrectedChars] = useState(0);

  useEffect(() => {
    if (!ready || prefersReducedMotion) return;

    setPhase('flying');
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setPhase('misspelled'), flyDuration));

    const correctionStart = flyDuration + pauseAfterFly;
    timers.push(window.setTimeout(() => setPhase('correcting'), correctionStart));

    for (let i = 1; i <= word.length; i++) {
      timers.push(
        window.setTimeout(() => {
          setCorrectedChars(i);
          if (i === word.length) setPhase('done');
        }, correctionStart + i * charDelay)
      );
    }

    return () => timers.forEach(window.clearTimeout);
  }, [ready, prefersReducedMotion, flyDuration, pauseAfterFly, charDelay, word.length]);

  if (prefersReducedMotion || phase === 'done') {
    return (
      <Component ref={setRef} className={className}>
        {word}
      </Component>
    );
  }

  if (!ready || phase === 'hidden') {
    return (
      <Component ref={setRef} className={cn(className, 'opacity-0')}>
        {word}
      </Component>
    );
  }

  const FLY_VARIANTS = [
    'animate-trickle-letter-fly-1',
    'animate-trickle-letter-fly-2',
    'animate-trickle-letter-fly-3',
    'animate-trickle-letter-fly-4'
  ] as const;
  const flyVariant = (i: number) => FLY_VARIANTS[i % 4];

  if (phase === 'flying') {
    return (
      <Component ref={setRef} className={cn(className, 'inline-block')}>
        {misspelled.split('').map((char, i) => (
          <span key={`fly-${i}`} className={cn('inline-block', flyVariant(i))}>
            {char}
          </span>
        ))}
      </Component>
    );
  }

  if (phase === 'misspelled') {
    return (
      <Component ref={setRef} className={cn(className, 'inline-block')}>
        {misspelled.split('').map((char, i) => (
          <span key={`mis-${i}`} className='inline-block animate-trickle-letter-land'>
            {char}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component ref={setRef} className={cn(className, 'inline-block')}>
      {word.split('').map((correctChar, i) => {
        const isRevealed = i < correctedChars;
        const shown = isRevealed ? correctChar : (misspelled[i] ?? correctChar);
        return (
          <span
            key={`correct-${i}`}
            className={cn('inline-block', isRevealed && 'animate-trickle-precise')}
          >
            {shown}
          </span>
        );
      })}
    </Component>
  );
}
