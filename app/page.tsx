import type { ComponentType } from 'react';
import { InstallSnippet } from '@/components/site/install-snippet';
import { HeroHeadline } from '@/components/site/hero-headline';
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

const PAGE_PADDING = 'px-8 sm:px-12 lg:px-16';
const PAGE_WIDTH = 'mx-auto max-w-5xl';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Catalog />
    </>
  );
}

function Hero() {
  const stats: { value: string; label: string }[] = [
    { value: '47', label: 'components' },
    { value: '42', label: 'pure server' },
    { value: '<1kb', label: 'median gzip' },
    { value: '0', label: 'anim deps' }
  ];

  return (
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} pt-12 pb-12 sm:pt-16`}>
      <HeroHeadline />

      <div
        id='install'
        className='mt-9 flex min-w-0 max-w-2xl scroll-mt-[calc(var(--header-h)+1.5rem)] flex-col gap-2.5'
      >
        <p className='font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60'>
          Every component installs the same way
        </p>
        <InstallSnippet command='npx shadcn add https://tricklekit.dev/r/typewriter.json' />
        <p className='font-mono text-[11px] leading-relaxed text-muted-foreground/60'>
          → writes <span className='text-foreground/75'>components/trickle/typewriter.tsx</span>, merges the
          keyframes into <span className='text-foreground/75'>globals.css</span>. No package, no provider —
          you own the file.
        </p>
      </div>

      <ul className='mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60'>
        {stats.map((it, i) => (
          <li key={it.label} className='flex items-baseline gap-1.5'>
            {i > 0 && (
              <span aria-hidden='true' className='mr-3.5 text-muted-foreground/25'>
                ·
              </span>
            )}
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
    <section
      id='catalog'
      className={`${PAGE_WIDTH} ${PAGE_PADDING} scroll-mt-[var(--header-h)] pt-6`}
    >
      <header className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
        <h2 className='text-[1.375rem] font-medium tracking-[-0.02em] sm:text-2xl'>
          Catalog
          <span className='ml-2.5 font-mono text-[11px] font-normal text-muted-foreground/60'>
            47 components · 7 groups
          </span>
        </h2>
        <p className='font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60'>
          <span className='text-foreground/75'>tweak</span> appears on configurable ·{' '}
          <span className='text-foreground/75'>code</span> &amp;{' '}
          <span className='text-foreground/75'>replay</span> on every strip
        </p>
      </header>

      {/* Pins flush to the header's bottom edge. Both offsets come from
          --header-h so the nav can never slide underneath it. */}
      <nav
        aria-label='Catalog sections'
        className='sticky top-[var(--header-h)] z-30 -mx-8 mb-2 border-b border-border bg-background/90 px-8 backdrop-blur-md sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16'
      >
        <ul className='flex h-[var(--catalog-nav-h)] flex-nowrap items-center gap-x-5 overflow-x-auto font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible'>
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
        <div
          key={sec.id}
          id={`catalog-${sec.id}`}
          className='scroll-mt-[calc(var(--sticky-h)+1.25rem)]'
        >
          {/* Generous space above the label, tight space below it, so the
              label reads as belonging to the group it introduces. */}
          <header className='mt-14 mb-2 flex items-baseline gap-3 border-t border-border pt-6'>
            <span className='font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/75'>
              {sec.name}
            </span>
            <span className='font-mono text-[11px] tabular-nums text-muted-foreground/40'>
              {sec.items.length}
            </span>
          </header>
          <div className='divide-y divide-border/60'>
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
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} border-t border-border py-12`}>
      <div className='grid gap-8 sm:grid-cols-3 sm:gap-10'>
        {items.map((it) => (
          <div key={it.tag}>
            <p className='font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60'>
              {it.tag}
            </p>
            <h3 className='mt-2.5 text-[1.0625rem] font-medium tracking-[-0.015em]'>{it.title}</h3>
            <p className='mt-2 text-sm leading-[1.65] text-muted-foreground'>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
