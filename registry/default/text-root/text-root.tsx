'use client';

import { useEffect, useState } from 'react';

export interface TextRootOptions {
  /**
   * When the animation should start.
   * - `mount`: fires once on hydration, after `delay` ms.
   * - `view`: fires when the element scrolls into the viewport (delegated to the consumer via the returned `setRef`).
   */
  trigger?: 'mount' | 'view';
  /** Delay in milliseconds before the animation is marked ready. */
  delay?: number;
  /** Threshold passed to IntersectionObserver when `trigger='view'`. Defaults to 0.2. */
  threshold?: number;
}

export interface TextRootState {
  /**
   * `true` once the animation should run. Use this to gate animation classes:
   *   `<span className={ready ? 'animate-fade-up' : 'opacity-0'} />`
   * Server renders with `ready=false` so the static fallback is visible without JS.
   */
  ready: boolean;
  /**
   * `true` if the user prefers reduced motion. CSS keyframes also defend against
   * this via `@media (prefers-reduced-motion: reduce)`, but components doing
   * JS-driven animation (Typewriter, DecryptScramble) should also skip work
   * when this is `true`.
   */
  prefersReducedMotion: boolean;
  /**
   * Ref setter used when `trigger='view'`. Attach to the element you want to
   * observe. Ignored for `trigger='mount'`.
   */
  setRef: (node: Element | null) => void;
}

export function useTextRoot(options: TextRootOptions = {}): TextRootState {
  const { trigger = 'mount', delay = 0, threshold = 0.2 } = options;
  const [ready, setReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [observedNode, setObservedNode] = useState<Element | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (trigger !== 'mount') return;
    if (delay <= 0) {
      setReady(true);
      return;
    }
    const timer = window.setTimeout(() => setReady(true), delay);
    return () => window.clearTimeout(timer);
  }, [trigger, delay]);

  useEffect(() => {
    if (trigger !== 'view' || !observedNode) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          if (delay <= 0) {
            setReady(true);
          } else {
            window.setTimeout(() => setReady(true), delay);
          }
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(observedNode);
    return () => observer.disconnect();
  }, [trigger, delay, threshold, observedNode]);

  return { ready, prefersReducedMotion, setRef: setObservedNode };
}

export interface TextRootProps extends TextRootOptions {
  children: (state: TextRootState) => React.ReactNode;
}

/**
 * Render-prop wrapper around `useTextRoot`. Useful when you want orchestration
 * state without adding a `'use client'` boundary at every call site.
 */
export function TextRoot({ children, ...options }: TextRootProps) {
  const state = useTextRoot(options);
  return <>{children(state)}</>;
}
