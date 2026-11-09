'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';
import { CodeBlock } from '@/components/site/code-block';
import { ControlPanel, type ControlSpec } from '@/components/site/control-panel';
import { InstallSnippet } from '@/components/site/install-snippet';
import { SpecLine } from '@/components/site/spec-line';

/* ══════════════════════════════════════════════════════════════════
   One component, in full.

   The card grid shows what a component looks like; this shows what it
   is. The stage is the same tinted plate, given the width it was
   always missing, and the props the card had no room for — the live
   controls, the spec, the source — come back around it.

   Every strip in controlled-strips.tsx already passes all of this; the
   card simply did not render it. Nothing here asks a strip to change.
   ══════════════════════════════════════════════════════════════════ */

export interface ComponentDetailProps {
  name: string;
  description: string;
  installCommand?: string;
  code?: string;
  spec?: { label: string; value: string | number; tone?: 'default' | 'good' | 'warn' }[];
  controls?: ControlSpec[];
  defaultValues?: Record<string, number>;
  replay?: number;
  render?: (values: Record<string, number>) => ReactNode;
  children?: ReactNode;
}

export function ComponentDetail({
  name,
  description,
  installCommand,
  code,
  spec,
  controls,
  defaultValues,
  replay,
  render,
  children
}: ComponentDetailProps) {
  const initial = defaultValues ?? Object.fromEntries((controls ?? []).map((c) => [c.key, c.min]));
  const [values, setValues] = useState<Record<string, number>>(initial);
  const [tick, setTick] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // The stage is the whole point of this page, so it loops on its own —
  // unlike a card, which waits to be scrolled to. A reader who asked for
  // less motion still gets the replay button and nothing automatic.
  useEffect(() => {
    if (!replay || reduced) return;
    const id = window.setInterval(() => setTick((t) => t + 1), replay);
    return () => window.clearInterval(id);
  }, [replay, reduced]);

  // Moving a slider restarts the animation, so the new value is something
  // you watch rather than something you wait for.
  function change(next: Record<string, number>) {
    setValues(next);
    setTick((t) => t + 1);
  }

  return (
    <>
      <header className='mb-6 flex max-w-2xl flex-col gap-2'>
        <h1 className='text-26 font-light tracking-tight'>{name}</h1>
        <p className='text-15 font-light text-ink-body'>{description}</p>
      </header>

      <div className='plate @container relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]'>
        <span className='relative block w-[88%] overflow-hidden rounded-[10px] text-center'>
          <span
            key={tick}
            className='inline-block [zoom:0.62] @min-[420px]:[zoom:0.8] @min-[560px]:[zoom:1] @min-[820px]:[zoom:1.2]'
          >
            {render ? render(values) : children}
          </span>
        </span>

        <button
          type='button'
          onClick={() => setTick((t) => t + 1)}
          aria-label={`Replay the ${name} animation`}
          className='absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-faint transition-colors duration-[var(--dur-hover)] hover:text-foreground'
        >
          <RotateCcw className='h-3.5 w-3.5' aria-hidden='true' />
        </button>
      </div>

      <div className='mt-7 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-8'>
        <div className='flex min-w-0 flex-col gap-5'>
          {installCommand && (
            <div className='flex min-w-0 flex-col gap-2.5'>
              <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>Install</p>
              <InstallSnippet command={`npx ${installCommand}`} />
            </div>
          )}

          {code && (
            <div className='flex min-w-0 flex-col gap-2.5'>
              <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>Usage</p>
              <CodeBlock code={code} />
            </div>
          )}
        </div>

        <aside className='flex flex-col gap-5'>
          {controls && controls.length > 0 && (
            <div className='flex flex-col gap-2.5'>
              <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>Props</p>
              <ControlPanel specs={controls} values={values} onChange={change} />
            </div>
          )}

          {spec && spec.length > 0 && (
            <div className='flex flex-col gap-2.5'>
              <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>Cost</p>
              <SpecLine items={spec} />
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
