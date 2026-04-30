'use client';

import { useEffect, useRef, useState, type ElementType } from 'react';
import { cn } from '@/lib/cn';
import { useTextRoot } from '@/registry/default/text-root/text-root';

export type DecryptCharset = 'alphanum' | 'binary' | 'hex' | 'katakana' | 'symbols';

export interface DecryptScrambleProps {
  text: string;
  /** Character pool used while a position is unresolved. */
  charset?: DecryptCharset | string;
  /** Total duration to fully resolve, in ms. */
  duration?: number;
  /** Delay before scrambling starts, in ms. */
  delay?: number;
  /** ms between random-character re-rolls (lower = faster scramble). */
  scrambleSpeed?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  trigger?: 'mount' | 'view';
}

const PRESETS: Record<DecryptCharset, string> = {
  alphanum: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  binary: '01',
  hex: '0123456789ABCDEF',
  katakana: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
};

const SEED = 1779;
function deterministicChar(charset: string, seed: number): string {
  const idx = Math.abs((seed * SEED) | 0) % charset.length;
  return charset[idx] ?? '?';
}

export function DecryptScramble({
  text,
  charset = 'alphanum',
  duration = 1500,
  delay = 200,
  scrambleSpeed = 40,
  as: Component = 'span',
  className,
  trigger = 'mount'
}: DecryptScrambleProps) {
  const { ready, prefersReducedMotion, setRef } = useTextRoot({ trigger, delay });
  const pool = typeof charset === 'string' && PRESETS[charset as DecryptCharset]
    ? PRESETS[charset as DecryptCharset]!
    : (charset as string);

  const [resolved, setResolved] = useState(0);
  const [tick, setTick] = useState(0);
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    if (!ready || prefersReducedMotion) {
      setResolved(text.length);
      return;
    }
    startedAt.current = performance.now();
    const perChar = duration / Math.max(text.length, 1);
    const resolveTimer = window.setInterval(() => {
      const elapsed = performance.now() - (startedAt.current ?? 0);
      setResolved(Math.min(text.length, Math.floor(elapsed / perChar)));
      if (elapsed >= duration) window.clearInterval(resolveTimer);
    }, Math.max(perChar / 2, 30));

    const scrambleTimer = window.setInterval(() => setTick((t) => t + 1), scrambleSpeed);
    const stopScramble = window.setTimeout(
      () => window.clearInterval(scrambleTimer),
      duration + scrambleSpeed
    );

    return () => {
      window.clearInterval(resolveTimer);
      window.clearInterval(scrambleTimer);
      window.clearTimeout(stopScramble);
    };
  }, [ready, prefersReducedMotion, text.length, duration, scrambleSpeed]);

  return (
    <Component
      ref={setRef}
      className={cn('inline-block whitespace-pre tabular-nums', className)}
      aria-label={text}
    >
      {text.split('').map((target, i) => {
        if (i < resolved || prefersReducedMotion) {
          return (
            <span key={i} aria-hidden='true'>
              {target}
            </span>
          );
        }
        if (target === ' ') {
          return (
            <span key={i} aria-hidden='true'>
              {' '}
            </span>
          );
        }
        return (
          <span key={i} aria-hidden='true'>
            {deterministicChar(pool, i + tick * 31)}
          </span>
        );
      })}
    </Component>
  );
}
