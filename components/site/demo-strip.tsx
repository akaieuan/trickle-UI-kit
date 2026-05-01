'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Copy, Code2, Eye, RotateCcw, Sliders } from 'lucide-react';
import { cn } from '@/lib/cn';
import { CodeBlock } from '@/components/site/code-block';
import { ControlPanel, type ControlSpec } from '@/components/site/control-panel';
import { SpecLine } from '@/components/site/spec-line';

export interface DemoStripProps {
  index: number;
  name: string;
  description: string;
  installCommand?: string;
  /** Source code shown when user toggles to the Code view. */
  code?: string;
  /** Metadata shown in the spec line (gzip, runtime, since, etc). */
  spec?: { label: string; value: string | number; tone?: 'default' | 'good' | 'warn' }[];
  /** If set, the demo remounts every `replay` ms — keeps one-shot animations alive. */
  replay?: number;
  /** Layout direction: 'right' (default) puts demo on right, 'left' puts demo on left. */
  side?: 'left' | 'right';
  /** Optional control panel — pairs with `render` to drive a live, tweakable demo. */
  controls?: ControlSpec[];
  /** Default values for the controls (keyed by control.key). */
  defaultValues?: Record<string, number>;
  /** Render function used when `controls` is set. Receives current values. */
  render?: (values: Record<string, number>) => ReactNode;
  className?: string;
  /** Static demo content. Used when `render` is not provided. */
  children?: ReactNode;
}

export function DemoStrip({
  index,
  name,
  description,
  installCommand,
  code,
  spec,
  replay,
  side = 'right',
  controls,
  defaultValues,
  render,
  className,
  children
}: DemoStripProps) {
  const [tick, setTick] = useState(0);
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState<'preview' | 'code'>('preview');
  const [showControls, setShowControls] = useState(false);
  const [inView, setInView] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<Record<string, number>>(
    () => defaultValues ?? Object.fromEntries((controls ?? []).map((c) => [c.key, c.min]))
  );

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.45, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!replay || view === 'code' || !inView) return;
    const i = window.setInterval(() => setTick((t) => t + 1), replay);
    return () => window.clearInterval(i);
  }, [replay, view, inView]);

  useEffect(() => {
    if (!inView || view !== 'preview') return;
    setTick((t) => t + 1);
  }, [inView, view]);

  function copy() {
    if (!installCommand) return;
    navigator.clipboard.writeText(`npx ${installCommand}`).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  function resetControls() {
    if (!controls) return;
    setValues(defaultValues ?? Object.fromEntries(controls.map((c) => [c.key, c.min])));
    setTick((t) => t + 1);
  }

  const indexLabel = String(index ?? 0).padStart(2, '0');
  const demoContent = render ? render(values) : children;

  const meta = (
    <div className='flex flex-col gap-3 lg:max-w-xs'>
      <div className='flex items-baseline gap-3'>
        <span className='font-mono text-xs tabular-nums text-muted-foreground/50'>{indexLabel}</span>
        <h3 className='text-base font-normal tracking-tight text-foreground'>{name}</h3>
      </div>
      {spec && spec.length > 0 && <SpecLine items={spec} />}
      <p className='text-sm font-light leading-relaxed text-muted-foreground'>{description}</p>
      {installCommand && (
        <button
          type='button'
          onClick={copy}
          aria-label={`Copy install command for ${name}`}
          className='mt-1 inline-flex items-center gap-2 self-start font-mono text-[11px] text-muted-foreground/60 transition-colors hover:text-foreground'
        >
          {copied ? (
            <>
              <Check className='h-3 w-3 text-emerald-500' aria-hidden='true' />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className='h-3 w-3' aria-hidden='true' />
              <span>npx {installCommand}</span>
            </>
          )}
        </button>
      )}
    </div>
  );

  const stage = (
    <div ref={stageRef} className='flex w-full flex-1 flex-col gap-3'>
      {(code || controls) && (
        <div className='flex items-center justify-between gap-2'>
          {code ? (
            <div className='inline-flex rounded-md border border-border bg-foreground/[0.015] p-0.5 text-[11px] font-mono dark:bg-foreground/[0.025]'>
              <button
                type='button'
                onClick={() => setView('preview')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors',
                  view === 'preview' ? 'bg-background text-foreground' : 'text-muted-foreground/60 hover:text-foreground'
                )}
              >
                <Eye className='h-3 w-3' aria-hidden='true' />
                preview
              </button>
              <button
                type='button'
                onClick={() => setView('code')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors',
                  view === 'code' ? 'bg-background text-foreground' : 'text-muted-foreground/60 hover:text-foreground'
                )}
              >
                <Code2 className='h-3 w-3' aria-hidden='true' />
                code
              </button>
            </div>
          ) : (
            <span />
          )}
          <div className='flex items-center gap-3'>
            {controls && controls.length > 0 && view === 'preview' && (
              <button
                type='button'
                onClick={() => setShowControls((s) => !s)}
                aria-expanded={showControls}
                className={cn(
                  'inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors',
                  showControls ? 'text-foreground' : 'text-muted-foreground/50 hover:text-foreground'
                )}
              >
                <Sliders className='h-3 w-3' aria-hidden='true' />
                tweak
              </button>
            )}
            {view === 'preview' && (
              <button
                type='button'
                onClick={() => setTick((t) => t + 1)}
                aria-label='Replay animation'
                className='inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/50 transition-colors hover:text-foreground'
              >
                <RotateCcw className='h-3 w-3' aria-hidden='true' />
                replay
              </button>
            )}
          </div>
        </div>
      )}

      {view === 'preview' ? (
        <button
          type='button'
          onClick={() => setTick((t) => t + 1)}
          aria-label='Replay animation'
          className='group/demo relative flex min-h-56 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-border bg-foreground/[0.015] px-8 py-16 text-center dark:bg-foreground/[0.025]'
        >
          <div key={tick} className='inline-block'>
            {demoContent}
          </div>
          {!code && (
            <span className='pointer-events-none absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground/40 opacity-0 transition-opacity group-hover/demo:opacity-100'>
              <RotateCcw className='h-3 w-3' aria-hidden='true' />
            </span>
          )}
        </button>
      ) : code ? (
        <CodeBlock code={code} />
      ) : null}

      {controls && controls.length > 0 && view === 'preview' && showControls && (
        <ControlPanel
          specs={controls}
          values={values}
          onChange={(next) => {
            setValues(next);
            setTick((t) => t + 1);
          }}
          trailingActions={
            <button
              type='button'
              onClick={resetControls}
              className='inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/60 transition-colors hover:text-foreground'
            >
              <RotateCcw className='h-3 w-3' aria-hidden='true' />
              reset defaults
            </button>
          }
        />
      )}
    </div>
  );

  return (
    <article
      className={cn(
        'group flex flex-col gap-6 py-12 lg:flex-row lg:gap-12',
        side === 'left' && 'lg:flex-row-reverse',
        className
      )}
    >
      {meta}
      {stage}
    </article>
  );
}
