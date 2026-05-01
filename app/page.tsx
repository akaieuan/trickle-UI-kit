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

import { DigitalRain } from '@/registry/default/digital-rain/digital-rain';

const PAGE_PADDING = 'px-8 sm:px-12 lg:px-16';
const PAGE_WIDTH = 'mx-auto max-w-5xl';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Catalog />
      <Philosophy />
    </>
  );
}

function Hero() {
  return (
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} pt-6 pb-16 sm:pt-10 sm:pb-20`}>
      <h1 className='max-w-4xl text-balance text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
        <span>Text animations that </span>
        <DigitalRain text='trickle' delay={500} />
        <br />
        <span>into any React UI.</span>
      </h1>
      <div className='mt-8 w-full max-w-xl min-w-0 overflow-hidden'>
        <pre className='w-full max-w-full overflow-x-auto rounded-md border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[12px] leading-[1.7] text-foreground/80 dark:bg-foreground/[0.025]'>
{`runtime    : 0 deps · pure CSS keyframes
bundle     : <1kb median (gzip) · per component
react      : 18.3+ · next 15+ · tailwind v4
ssr        : safe by construction · 42 of 47 zero-JS`}
        </pre>
      </div>
      <div id='install' className='mt-8 scroll-mt-20 flex flex-col gap-3'>
        <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60'>
          Example — every component installs the same way · <a href='#catalog' className='underline-offset-4 transition-colors hover:text-foreground hover:underline'>browse all 47 ↓</a>
        </p>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
          <InstallSnippet command='npx shadcn add https://tricklekit.dev/r/typewriter.json' />
          <span className='font-mono text-[11px] text-muted-foreground/50'>
            → writes <span className='text-foreground/70'>components/trickle/typewriter.tsx</span> + merges{' '}
            <span className='text-foreground/70'>globals.css</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section>
      <div className={`${PAGE_WIDTH} ${PAGE_PADDING} grid grid-cols-2 gap-y-6 py-10 sm:grid-cols-4 sm:gap-y-0`}>
        <Stat value='47' label='Components' />
        <Stat value='42' label='Pure server (zero JS)' />
        <Stat value='<1kb' label='Median gzip / component' />
        <Stat value='0' label='Animation deps' />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className='font-mono text-2xl font-light tracking-tight text-foreground sm:text-3xl'>{value}</p>
      <p className='mt-1 text-xs font-light text-muted-foreground'>{label}</p>
    </div>
  );
}

function Catalog() {
  return (
    <section id='catalog' className={`${PAGE_WIDTH} ${PAGE_PADDING} scroll-mt-20 pt-16`}>
      <header className='mb-6 flex items-baseline justify-between gap-6'>
        <h2 className='text-xl font-normal tracking-tight sm:text-2xl'>
          Catalog
          <span className='ml-3 font-mono text-xs font-light text-muted-foreground/60'>
            47 components
          </span>
        </h2>
        <p className='hidden font-light text-sm text-muted-foreground sm:block'>
          tweak · code · replay — every strip is interactive.
        </p>
      </header>

      <div className='divide-y divide-border'>
        <HighlighterSweepStrip />
        <TypoCorrectStrip />
        <TextRevealStrip />
        <TypewriterStrip />
        <WordCascadeStrip />
        <CharStaggerStrip />
        <GradientShiftStrip />
        <ShinyShimmerStrip />
        <WordRotateStrip />
        <AuroraTextStrip />
        <UnderlineDrawStrip />
        <DecryptScrambleStrip />
        <InkBleedStrip />
        <ShatterStrip />
        <EchoStrip />
        <ConfettiTextStrip />
        <MorphSwapStrip />
        <NeonFlickerStrip />
        <GlitchSplitStrip />
        <ScaleSlamStrip />
        <StampStrip />
        <MarqueeRibbonStrip />
        <WaveStrip />
        <StretchStrip />
        <Wobble3DStrip />
        <SpotlightStrip />
        <MagnetizeStrip />
        <FloatStrip />
        <PulseTextStrip />
        <RainbowRollStrip />
        <FlutterStrip />
        <PixelateStrip />
        <ScanlineStrip />
        <GrainStrip />
        <WireframeStrip />
        <HalftoneStrip />
        <BounceStrip />
        <SpinInStrip />
        <ShutterStrip />
        <PlasmaStrip />
        <CompressStrip />
        <CarouselFlipStrip />
        <StaticTextStrip />
        <TearStrip />
        <ReflectStrip />
        <PhaseStrip />
        <MosaicStrip />
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className='mt-16 border-t border-border'>
      <div className={`${PAGE_WIDTH} ${PAGE_PADDING} py-20`}>
        <div className='grid gap-12 sm:grid-cols-3'>
          <div>
            <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70'>Why</p>
            <h3 className='mt-3 text-lg font-normal tracking-tight'>Pure CSS, zero runtime.</h3>
            <p className='mt-2 text-sm font-light leading-relaxed text-muted-foreground'>
              Every keyframe runs natively in the browser. No motion library, no animation engine,
              no extra bundle weight. 42 of 47 components are pure server components &mdash; they
              ship zero client JS.
            </p>
          </div>
          <div>
            <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70'>How</p>
            <h3 className='mt-3 text-lg font-normal tracking-tight'>SSR-safe by construction.</h3>
            <p className='mt-2 text-sm font-light leading-relaxed text-muted-foreground'>
              The server renders the final HTML with animation classes applied. The browser starts
              the animation immediately on first paint &mdash; no flash, no hydration mismatch, no
              JS required.
            </p>
          </div>
          <div>
            <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70'>
              Distribution
            </p>
            <h3 className='mt-3 text-lg font-normal tracking-tight'>You own the source.</h3>
            <p className='mt-2 text-sm font-light leading-relaxed text-muted-foreground'>
              Shadcn-style. Run one CLI command and the component file lives in your repo. No
              version lock-in, no upgrade churn, customize freely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
