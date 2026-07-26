'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Bounce } from '@/registry/default/bounce/bounce';
import { CharStagger } from '@/registry/default/char-stagger/char-stagger';
import { Compress } from '@/registry/default/compress/compress';
import { Pixelate } from '@/registry/default/pixelate/pixelate';
import { ScaleSlam } from '@/registry/default/scale-slam/scale-slam';
import { Shatter } from '@/registry/default/shatter/shatter';
import { SpinIn } from '@/registry/default/spin-in/spin-in';
import { Wireframe } from '@/registry/default/wireframe/wireframe';

const WORD = 'trickle';

type Showcase = { name: string; node: ReactNode };

/** Each entry is a real catalog component, rendered on the live headline.
 *  The hero is the product demoing itself — no bespoke hero-only animation.
 *  Typed as a non-empty tuple so index 0 is a safe fallback under strict mode. */
const SHOWCASE: [Showcase, ...Showcase[]] = [
  { name: 'CharStagger', node: <CharStagger text={WORD} mode='slide' stagger={55} /> },
  { name: 'Shatter', node: <Shatter text={WORD} stagger={45} /> },
  { name: 'Pixelate', node: <Pixelate text={WORD} duration={1100} /> },
  { name: 'Bounce', node: <Bounce text={WORD} stagger={55} /> },
  { name: 'Wireframe', node: <Wireframe text={WORD} stagger={60} /> },
  { name: 'ScaleSlam', node: <ScaleSlam text={WORD} stagger={45} /> },
  { name: 'SpinIn', node: <SpinIn text={WORD} stagger={50} /> },
  { name: 'Compress', node: <Compress text={WORD} stagger={50} /> }
];

/** Longest showcase animation runs ~1.6s, so this leaves the settled word on
 *  screen for roughly two seconds before the next swap — reads as deliberate
 *  rather than twitchy, and the headline is legible most of the time. */
const CYCLE_MS = 3600;

export function HeroHeadline() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % SHOWCASE.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = SHOWCASE[i] ?? SHOWCASE[0];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className='max-w-3xl text-balance text-[1.75rem] font-medium leading-[1.15] tracking-[-0.022em] sm:text-[2.125rem] lg:text-[2.5rem]'>
        Text animations that{' '}
        {/* The animated copy is absolutely positioned over a static spacer that
            reserves the word's natural width. Components animate at different
            scales (Compress squashes, ScaleSlam overshoots), so without this the
            headline reflows and re-wraps on every swap. */}
        <span className='relative inline-block whitespace-nowrap'>
          {/* Spacer reserving the slot. It splits into per-character
              inline-blocks to match how the showcase components render, since
              a plain text run kerns tighter and would reserve too little. */}
          <span className='invisible inline-block' aria-hidden='true'>
            {WORD.split('').map((c, n) => (
              <span key={n} className='inline-block'>
                {c}
              </span>
            ))}
          </span>
          {/* whitespace-nowrap: an absolutely positioned box shrink-to-fits to
              its containing block, so without this the word wraps mid-slot. */}
          <span key={i} className='absolute left-0 top-0 whitespace-nowrap text-primary'>
            {current.node}
          </span>
        </span>{' '}
        into any React UI.
      </h1>

      <p className='mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60'>
        now showing{' '}
        <span className='text-foreground/80 normal-case tracking-normal'>{current.name}</span>
        <span className='mx-2 text-muted-foreground/30'>·</span>
        <a
          href='#catalog'
          className='underline-offset-4 transition-colors hover:text-foreground hover:underline'
        >
          one of 47
        </a>
      </p>
    </div>
  );
}
