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
      // A query container so text-display's `7cqi` term measures this block
      // rather than falling back to the viewport.
      className='@container'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* leading is held slightly looser than the text-display token's 1.02:
          several showcase components translate vertically (Bounce travels a
          full 1.4em), and the tighter line box let them clip the caption. */}
      <h1 className='max-w-3xl text-balance text-display font-light leading-[1.08] tracking-tight'>
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

      {/* mt-6 keeps clear air under the headline's last line so a downward
          travelling showcase never lands on this caption. */}
      <p className='mt-6 font-mono text-11 uppercase tracking-[0.14em] text-ink-faint'>
        now showing{' '}
        <span className='normal-case tracking-normal text-ink-body'>{current.name}</span>
        <span className='mx-2 text-ink-faint' aria-hidden='true'>
          ·
        </span>
        <a
          href='#catalog'
          className='underline-offset-4 transition-colors duration-[var(--dur-hover)] hover:text-select hover:underline'
        >
          one of 47
        </a>
      </p>
    </div>
  );
}
