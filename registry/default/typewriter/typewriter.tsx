'use client';

import { useEffect, useState, type ElementType } from 'react';
import { cn } from '@/lib/cn';
import { useTextRoot } from '@/registry/default/text-root/text-root';

export interface TypewriterProps {
  /** Single string to type. Use `strings` for multi-string cycling. */
  text?: string;
  /** Multiple strings to cycle through. Overrides `text` if provided. */
  strings?: string[];
  /** Delay between each character, in ms. */
  charDelay?: number;
  /** Delay before typing starts (or before each new string in cycle), in ms. */
  delay?: number;
  /** When cycling `strings`, ms to hold the fully-typed string before deleting. */
  holdDuration?: number;
  /** When cycling, ms between delete characters. */
  deleteDelay?: number;
  /** Show a blinking caret. */
  cursor?: boolean;
  /** Loop through `strings` indefinitely. Ignored when only `text` is set. */
  loop?: boolean;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
  cursorClassName?: string;
  trigger?: 'mount' | 'view';
}

export function Typewriter({
  text,
  strings,
  charDelay = 80,
  delay = 200,
  holdDuration = 1500,
  deleteDelay = 40,
  cursor = true,
  loop = false,
  as: Component = 'span',
  className,
  cursorClassName,
  trigger = 'mount'
}: TypewriterProps) {
  const { ready, prefersReducedMotion, setRef } = useTextRoot({ trigger, delay });
  const targets = strings && strings.length > 0 ? strings : text ? [text] : [];
  const finalText = targets[0] ?? '';

  const [displayed, setDisplayed] = useState('');
  const [stringIdx, setStringIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!ready || targets.length === 0) return;
    if (prefersReducedMotion) {
      setDisplayed(finalText);
      return;
    }

    const current = targets[stringIdx % targets.length] ?? '';
    let timer: number;

    if (!deleting && displayed.length < current.length) {
      timer = window.setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        charDelay
      );
    } else if (!deleting && displayed.length === current.length) {
      if (targets.length > 1 && loop) {
        timer = window.setTimeout(() => setDeleting(true), holdDuration);
      }
    } else if (deleting && displayed.length > 0) {
      timer = window.setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        deleteDelay
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setStringIdx((i) => (i + 1) % targets.length);
    }

    return () => window.clearTimeout(timer);
  }, [ready, prefersReducedMotion, displayed, deleting, stringIdx, targets, finalText, charDelay, deleteDelay, holdDuration, loop]);

  return (
    <Component ref={setRef} className={cn('inline', className)}>
      <span aria-hidden='true'>{displayed}</span>
      <span className='sr-only'>{finalText}</span>
      {cursor && (
        <span
          aria-hidden='true'
          className={cn(
            'ml-0.5 inline-block w-[0.08em] -mb-0.5 h-[1em] translate-y-[0.1em] bg-current align-baseline animate-trickle-caret-blink',
            cursorClassName
          )}
        />
      )}
    </Component>
  );
}
