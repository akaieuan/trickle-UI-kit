'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode
} from 'react';
import Link from 'next/link';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ══════════════════════════════════════════════════════════════════
   The catalog card — akabuild.dev's plate, adapted for text.

   A tinted 4:3 plate holds one live animation in a wide centred
   field, with the component's name and its group below. The hue
   arrives through `--plate-tint`, set once per group on CardGrid and
   inherited by every .plate underneath it; the group's name arrives
   through context, so a card never has to be told twice.
   ══════════════════════════════════════════════════════════════════ */

const CardTagContext = createContext<string | undefined>(undefined);

export function CardGrid({
  tag,
  tint,
  className,
  children
}: {
  /** One-word group name, printed under every card in this grid. */
  tag: string;
  /** The group's hue. Falls back to the accent when absent. */
  tint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <CardTagContext.Provider value={tag}>
      <div
        style={{ '--plate-tint': tint } as CSSProperties}
        // Two columns, not akabuild's three: a text animation needs
        // horizontal room to read, and a third column steals it.
        className={cn('grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2', className)}
      >
        {children}
      </div>
    </CardTagContext.Provider>
  );
}

export interface ComponentCardProps {
  index: number;
  name: string;
  /** The component's own page. Without it the card is not a link. */
  href?: string;
  /** Overrides the group name from CardGrid. */
  tag?: string;
  installCommand?: string;
  /** If set, the demo remounts every `replay` ms while the card is in view. */
  replay?: number;
  className?: string;
  children: ReactNode;
}

export function ComponentCard({
  name,
  href,
  tag,
  installCommand,
  replay,
  className,
  children
}: ComponentCardProps) {
  const [tick, setTick] = useState(0);
  const [copied, setCopied] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const groupTag = useContext(CardTagContext);
  const label = tag ?? groupTag;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Scrolling a card into view starts its animation from the top, and a
  // looping demo keeps going while it is on screen. Neither re-runs on
  // its own for a reader who asked for less motion — only a click does.
  useEffect(() => {
    if (!inView || reduced) return;
    setTick((t) => t + 1);
  }, [inView, reduced]);

  useEffect(() => {
    if (!replay || !inView || reduced) return;
    const id = window.setInterval(() => setTick((t) => t + 1), replay);
    return () => window.clearInterval(id);
  }, [replay, inView, reduced]);

  function copy() {
    if (!installCommand) return;
    navigator.clipboard.writeText(`npx ${installCommand}`).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <article ref={cardRef} className={cn('group', className)}>
      {/* The plate is a query container so the field scales to the card's
          real width — the grid changes column count and the page changes
          gutter at different points, so breakpoints alone mis-predict it. */}
      <div className='plate @container relative'>
        {/* A wide centred field, not akabuild's square: a line of type needs
            the width. The zoom sits on the content, not the field — on the
            field a percentage width would scale with it. */}
        <span className='relative block w-[86%] overflow-hidden rounded-[10px] text-center'>
          <span
            key={tick}
            className={cn(
              'inline-block',
              // Demos set their own type sizes (text-2xl/3xl). Zoom fits that
              // fixed design to whatever width the card actually has, instead
              // of clipping it; the field's overflow is the backstop.
              '[zoom:0.6] @min-[340px]:[zoom:0.72] @min-[440px]:[zoom:0.86] @min-[500px]:[zoom:1]'
            )}
          >
            {children}
          </span>
        </span>

        {/* The plate opens the component's page: that is what a reader
            wants from a card once the page exists. Replay and copy sit
            above the link rather than inside it — neither can nest in an
            anchor — and both appear on hover. */}
        {href && (
          <Link
            href={href}
            aria-label={`Open ${name}`}
            className='absolute inset-0 z-10 rounded-[inherit]'
          />
        )}

        <div className='absolute right-2.5 top-2.5 z-20 flex items-center gap-0.5 opacity-0 transition-opacity duration-[var(--dur-hover)] focus-within:opacity-100 group-hover:opacity-100'>
          <button
            type='button'
            onClick={() => setTick((t) => t + 1)}
            aria-label={`Replay the ${name} animation`}
            className='inline-flex h-7 w-7 items-center justify-center rounded-md text-ink-faint transition-colors duration-[var(--dur-hover)] hover:text-foreground'
          >
            <RotateCcw className='h-3 w-3' aria-hidden='true' />
          </button>

          {installCommand && (
            <button
              type='button'
              onClick={copy}
              aria-label={`Copy the install command for ${name}`}
              className='inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 font-mono text-10 text-ink-faint transition-colors duration-[var(--dur-hover)] hover:text-foreground'
            >
              {copied ? (
                <>
                  <Check className='h-3 w-3 text-select' aria-hidden='true' />
                  copied
                </>
              ) : (
                <>
                  <Copy className='h-3 w-3' aria-hidden='true' />
                  copy
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <span className='mt-3.5 block text-14 font-light tracking-tight text-foreground/90 transition-colors duration-[var(--dur-hover)] group-hover:text-foreground'>
        {name}
      </span>
      {label && <span className='mt-0.5 block text-13 font-light text-ink-quiet'>{label}</span>}
    </article>
  );
}
