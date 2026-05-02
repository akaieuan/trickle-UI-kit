import type { ComponentType } from 'react';
import { InstallSnippet } from '@/components/site/install-snippet';
import {
  AuroraTextStrip,
  BounceStrip,
  CarouselFlipStrip,
  CharStaggerStrip,
  CompressStrip,
  ConfettiTextStrip,
  DecryptScrambleStrip,
  EchoStrip,
  FloatStrip,
  FlutterStrip,
  GlitchSplitStrip,
  GradientShiftStrip,
  GrainStrip,
  HalftoneStrip,
  HighlighterSweepStrip,
  InkBleedStrip,
  MagnetizeStrip,
  MarqueeRibbonStrip,
  MorphSwapStrip,
  MosaicStrip,
  NeonFlickerStrip,
  ShatterStrip,
  PhaseStrip,
  PixelateStrip,
  PlasmaStrip,
  PulseTextStrip,
  RainbowRollStrip,
  ReflectStrip,
  ScaleSlamStrip,
  ScanlineStrip,
  ShinyShimmerStrip,
  ShutterStrip,
  SpinInStrip,
  SpotlightStrip,
  StampStrip,
  StaticTextStrip,
  StretchStrip,
  TearStrip,
  TextRevealStrip,
  TypewriterStrip,
  TypoCorrectStrip,
  UnderlineDrawStrip,
  WaveStrip,
  WireframeStrip,
  Wobble3DStrip,
  WordCascadeStrip,
  WordRotateStrip
} from '@/components/site/controlled-strips';

import { CharStagger } from '@/registry/default/char-stagger/char-stagger';

const PAGE_PADDING = 'px-8 sm:px-12 lg:px-16';
const PAGE_WIDTH = 'mx-auto max-w-5xl';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Philosophy />
      <Catalog />
    </>
  );
}

function Hero() {
  return (
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} pt-6 pb-8 sm:pt-8 sm:pb-10`}>
      <h1 className='max-w-3xl text-balance text-2xl font-light leading-[1.2] tracking-tight sm:text-3xl md:text-[2.25rem] lg:text-[2.625rem]'>
        Text animations that{' '}
        <CharStagger text='trickle' mode='slide' delay={400} stagger={70} />
        {' '}into any React UI.
      </h1>

      <div className='mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8'>
        <div id='install' className='scroll-mt-20 flex min-w-0 flex-col gap-2'>
          <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60'>
            Example — every component installs the same way
          </p>
          <InstallSnippet command='npx shadcn add https://tricklekit.dev/r/typewriter.json' />
          <p className='font-mono text-[11px] leading-relaxed text-muted-foreground/50'>
            → writes <span className='text-foreground/70'>components/trickle/typewriter.tsx</span> + merges{' '}
            <span className='text-foreground/70'>globals.css</span>
          </p>
          <p className='mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60'>
            <a href='#catalog' className='underline-offset-4 transition-colors hover:text-foreground hover:underline'>
              browse all 47 ↓
            </a>
          </p>
        </div>

        <dl className='rounded-md border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[12px] leading-[1.7] text-foreground/80 dark:bg-foreground/[0.025]'>
          {[
            ['runtime', '0 deps · pure CSS keyframes'],
            ['bundle', '<1kb median (gzip) · per component'],
            ['react', '18.3+ · next 15+ · tailwind v4'],
            ['ssr', 'safe by construction · 42 of 47 zero-JS']
          ].map(([k, v]) => (
            <div key={k} className='grid grid-cols-[64px_auto_1fr] items-baseline gap-x-2'>
              <dt className='text-foreground/55'>{k}</dt>
              <span className='text-foreground/40' aria-hidden='true'>:</span>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Stats() {
  const items: { value: string; label: string }[] = [
    { value: '47', label: 'components' },
    { value: '42', label: 'pure server' },
    { value: '<1kb', label: 'median gzip' },
    { value: '0', label: 'anim deps' }
  ];
  return (
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} pb-8`}>
      <ul className='flex flex-wrap items-baseline gap-x-5 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/55'>
        {items.map((it, i) => (
          <li key={it.label} className='flex items-baseline gap-1.5'>
            {i > 0 && <span aria-hidden='true' className='text-muted-foreground/25'>·</span>}
            <span className='tabular-nums text-foreground/85'>{it.value}</span>
            <span>{it.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

type StripComponent = ComponentType<{ index: number }>;
type CatalogSection = { id: string; name: string; items: StripComponent[] };

const SECTIONS: CatalogSection[] = [
  {
    id: 'reveal',
    name: 'Reveal',
    items: [
      TextRevealStrip,
      TypewriterStrip,
      WordCascadeStrip,
      CharStaggerStrip,
      DecryptScrambleStrip,
      TypoCorrectStrip,
      InkBleedStrip
    ]
  },
  {
    id: 'emphasis',
    name: 'Emphasis',
    items: [HighlighterSweepStrip, UnderlineDrawStrip, SpotlightStrip, StampStrip, ConfettiTextStrip]
  },
  {
    id: 'color',
    name: 'Color',
    items: [
      AuroraTextStrip,
      ShinyShimmerStrip,
      GradientShiftStrip,
      RainbowRollStrip,
      NeonFlickerStrip,
      PlasmaStrip
    ]
  },
  {
    id: 'motion',
    name: 'Motion',
    items: [
      BounceStrip,
      FloatStrip,
      MagnetizeStrip,
      ScaleSlamStrip,
      SpinInStrip,
      WaveStrip,
      StretchStrip,
      CompressStrip,
      Wobble3DStrip,
      FlutterStrip,
      PulseTextStrip
    ]
  },
  {
    id: 'glitch',
    name: 'Glitch',
    items: [GlitchSplitStrip, ShatterStrip, TearStrip, MorphSwapStrip]
  },
  {
    id: 'texture',
    name: 'Texture',
    items: [GrainStrip, PixelateStrip, ScanlineStrip, HalftoneStrip, WireframeStrip, MosaicStrip]
  },
  {
    id: 'sequence',
    name: 'Sequence',
    items: [
      WordRotateStrip,
      CarouselFlipStrip,
      EchoStrip,
      PhaseStrip,
      ShutterStrip,
      MarqueeRibbonStrip,
      StaticTextStrip,
      ReflectStrip
    ]
  }
];

function Catalog() {
  let n = 0;
  return (
    <section id='catalog' className={`${PAGE_WIDTH} ${PAGE_PADDING} scroll-mt-20 pt-10`}>
      <header className='mb-4 flex items-baseline justify-between gap-6'>
        <h2 className='text-lg font-normal tracking-tight sm:text-xl'>
          Catalog
          <span className='ml-2 font-mono text-[11px] font-light text-muted-foreground/60'>
            47 components · 7 groups
          </span>
        </h2>
        <p className='hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/55 sm:block'>
          <span className='text-foreground/75'>tweak</span> appears on configurable ·{' '}
          <span className='text-foreground/75'>code</span> &amp;{' '}
          <span className='text-foreground/75'>replay</span> on every strip
        </p>
      </header>

      <nav
        aria-label='Catalog sections'
        className='sticky top-[57px] z-30 -mx-8 mb-4 bg-background/85 px-8 backdrop-blur sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16'
      >
        <ul className='flex flex-nowrap items-center gap-x-5 overflow-x-auto py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:gap-y-2 sm:overflow-visible'>
          <li className='shrink-0'>
            <a href='#catalog' className='transition-colors hover:text-foreground'>
              All
            </a>
          </li>
          {SECTIONS.map((sec) => (
            <li key={sec.id} className='flex shrink-0 items-baseline gap-1.5'>
              <a href={`#catalog-${sec.id}`} className='transition-colors hover:text-foreground'>
                {sec.name}
              </a>
              <span className='tabular-nums text-muted-foreground/35'>{sec.items.length}</span>
            </li>
          ))}
        </ul>
      </nav>

      {SECTIONS.map((sec) => (
        <div key={sec.id} id={`catalog-${sec.id}`} className='scroll-mt-28'>
          <header className='mt-10 mb-1 flex items-baseline gap-3'>
            <span className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60'>
              {sec.name}
            </span>
            <span className='font-mono text-[11px] tabular-nums text-muted-foreground/40'>
              {sec.items.length}
            </span>
          </header>
          <div>
            {sec.items.map((Strip) => {
              n += 1;
              return <Strip key={n} index={n} />;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

function Philosophy() {
  const items: { tag: string; title: string; body: string }[] = [
    {
      tag: 'Why',
      title: 'Pure CSS, zero runtime.',
      body:
        'Every keyframe runs natively in the browser. No motion library, no animation engine, no extra bundle weight. 42 of 47 components are pure server components — they ship zero client JS.'
    },
    {
      tag: 'How',
      title: 'SSR-safe by construction.',
      body:
        'The server renders the final HTML with animation classes applied. The browser starts the animation immediately on first paint — no flash, no hydration mismatch, no JS required.'
    },
    {
      tag: 'Distribution',
      title: 'You own the source.',
      body:
        'Shadcn-style. Run one CLI command and the component file lives in your repo. No version lock-in, no upgrade churn, customize freely.'
    }
  ];
  return (
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} py-10`}>
      <div className='grid gap-6 sm:grid-cols-3 sm:gap-8'>
        {items.map((it) => (
          <div key={it.tag}>
            <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60'>{it.tag}</p>
            <h3 className='mt-2 text-base font-normal tracking-tight'>{it.title}</h3>
            <p className='mt-1.5 text-[13px] font-light leading-relaxed text-muted-foreground'>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
