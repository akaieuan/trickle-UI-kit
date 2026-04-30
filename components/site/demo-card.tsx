'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface DemoCardProps {
  index: number;
  name: string;
  description: string;
  installCommand?: string;
  /** If set, the demo remounts every `replay` ms — keeps one-shot animations alive. */
  replay?: number;
  className?: string;
  children: ReactNode;
}

export function DemoCard({
  index,
  name,
  description,
  installCommand,
  replay,
  className,
  children
}: DemoCardProps) {
  const [tick, setTick] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!replay) return;
    const i = window.setInterval(() => setTick((t) => t + 1), replay);
    return () => window.clearInterval(i);
  }, [replay]);

  function copy() {
    if (!installCommand) return;
    navigator.clipboard.writeText(`npx ${installCommand}`).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  const indexLabel = String(index ?? 0).padStart(2, '0');

  return (
    <article className={cn('group flex flex-col gap-4', className)}>
      <header className='flex items-baseline justify-between gap-3 px-1'>
        <div className='flex items-baseline gap-3'>
          <span className='font-mono text-xs tabular-nums text-muted-foreground/50'>{indexLabel}</span>
          <h3 className='text-sm font-normal tracking-tight text-foreground'>{name}</h3>
        </div>
        {installCommand && (
          <button
            type='button'
            onClick={copy}
            aria-label={`Copy install command for ${name}`}
            className='inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/50 opacity-0 transition-all hover:text-foreground group-hover:opacity-100'
          >
            {copied ? (
              <>
                <Check className='h-3 w-3 text-emerald-500' aria-hidden='true' />
                Copied
              </>
            ) : (
              <>
                <Copy className='h-3 w-3' aria-hidden='true' />
                Copy
              </>
            )}
          </button>
        )}
      </header>

      <button
        type='button'
        onClick={() => setTick((t) => t + 1)}
        aria-label='Replay animation'
        className='relative flex min-h-48 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-border/10 bg-foreground/[0.015] px-6 py-12 text-center transition-colors hover:border-border/20 dark:bg-foreground/[0.02]'
      >
        <div key={tick} className='inline-block'>
          {children}
        </div>
        <span className='pointer-events-none absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100'>
          <RotateCcw className='h-3 w-3' aria-hidden='true' />
        </span>
      </button>

      <p className='px-1 text-[13px] font-light leading-relaxed text-muted-foreground'>{description}</p>
    </article>
  );
}
