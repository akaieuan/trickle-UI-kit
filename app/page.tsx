import { DemoStrip } from '@/components/site/demo-strip';
import { InstallSnippet } from '@/components/site/install-snippet';
import {
  HighlighterSweepStrip,
  MagnetizeStrip,
  TextRevealStrip,
  TypewriterStrip
} from '@/components/site/controlled-strips';

import { AuroraText } from '@/registry/default/aurora-text/aurora-text';
import { CharStagger } from '@/registry/default/char-stagger/char-stagger';
import { ConfettiText } from '@/registry/default/confetti-text/confetti-text';
import { CurtainReveal } from '@/registry/default/curtain-reveal/curtain-reveal';
import { DecryptScramble } from '@/registry/default/decrypt-scramble/decrypt-scramble';
import { DigitalRain } from '@/registry/default/digital-rain/digital-rain';
import { Drip } from '@/registry/default/drip/drip';
import { Echo } from '@/registry/default/echo/echo';
import { Float } from '@/registry/default/float/float';
import { Flutter } from '@/registry/default/flutter/flutter';
import { GlitchSplit } from '@/registry/default/glitch-split/glitch-split';
import { GradientShift } from '@/registry/default/gradient-shift/gradient-shift';
import { HighlighterSweep } from '@/registry/default/highlighter-sweep/highlighter-sweep';
import { InkBleed } from '@/registry/default/ink-bleed/ink-bleed';
import { Magnetize } from '@/registry/default/magnetize/magnetize';
import { MarqueeRibbon } from '@/registry/default/marquee-ribbon/marquee-ribbon';
import { MorphSwap } from '@/registry/default/morph-swap/morph-swap';
import { NeonFlicker } from '@/registry/default/neon-flicker/neon-flicker';
import { PaperFold } from '@/registry/default/paper-fold/paper-fold';
import { PulseText } from '@/registry/default/pulse-text/pulse-text';
import { RainbowRoll } from '@/registry/default/rainbow-roll/rainbow-roll';
import { ScaleSlam } from '@/registry/default/scale-slam/scale-slam';
import { ShinyShimmer } from '@/registry/default/shiny-shimmer/shiny-shimmer';
import { Spotlight } from '@/registry/default/spotlight/spotlight';
import { Stamp } from '@/registry/default/stamp/stamp';
import { Stretch } from '@/registry/default/stretch/stretch';
import { TextReveal } from '@/registry/default/text-reveal/text-reveal';
import { Typewriter } from '@/registry/default/typewriter/typewriter';
import { TypoCorrect } from '@/registry/default/typo-correct/typo-correct';
import { UnderlineDraw } from '@/registry/default/underline-draw/underline-draw';
import { VerticalSlide } from '@/registry/default/vertical-slide/vertical-slide';
import { Wave } from '@/registry/default/wave/wave';
import { Wobble3D } from '@/registry/default/wobble-3d/wobble-3d';
import { WordCascade } from '@/registry/default/word-cascade/word-cascade';
import { WordRotate } from '@/registry/default/word-rotate/word-rotate';

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
    <section className={`${PAGE_WIDTH} ${PAGE_PADDING} pt-16 pb-20 sm:pt-24 sm:pb-28`}>
      <p className='mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70'>
        Open-source · MIT · v0.1
      </p>
      <h1 className='max-w-4xl text-balance text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
        <span>Text animations that </span>
        <DigitalRain text='trickle' delay={400} stagger={85} duration={650} />
        <br />
        <span>into your React app.</span>
      </h1>
      <div className='mt-8 max-w-xl'>
        <pre className='overflow-x-auto rounded-md border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[12px] leading-[1.7] text-foreground/80 dark:bg-foreground/[0.025]'>
{`runtime    : 0 deps · pure CSS keyframes
bundle     : <1kb median (gzip) · per component
react      : 18.3+ · next 15+ · tailwind v4
ssr        : safe by construction · 29 of 34 zero-JS`}
        </pre>
      </div>
      <div id='install' className='mt-8 scroll-mt-20 flex flex-col gap-2 sm:flex-row sm:items-center'>
        <InstallSnippet command='npx shadcn add https://trickle.dev/r/typewriter.json' />
        <span className='font-mono text-[11px] text-muted-foreground/50'>
          → writes <span className='text-foreground/70'>components/trickle/typewriter.tsx</span> + merges{' '}
          <span className='text-foreground/70'>globals.css</span>
        </span>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section>
      <div className={`${PAGE_WIDTH} ${PAGE_PADDING} grid grid-cols-2 gap-y-6 py-10 sm:grid-cols-4 sm:gap-y-0`}>
        <Stat value='34' label='Components' />
        <Stat value='29' label='Pure server (zero JS)' />
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
            34 components
          </span>
        </h2>
        <p className='hidden font-light text-sm text-muted-foreground sm:block'>
          Click any preview to replay.
        </p>
      </header>

      <div className='divide-y divide-border'>
        <HighlighterSweepStrip />

        <DemoStrip
          index={2}
          name='TypoCorrect'
          description='Letters fly in misspelled, then correct themselves character-by-character.'
          installCommand='shadcn add @trickle/typo-correct'
          replay={6000}
          side='left'
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            We value{' '}
            <TypoCorrect
              word='accuracy'
              misspelled='aurccayc'
              delay={300}
              className='text-primary'
            />
          </h3>
        </DemoStrip>

        <TextRevealStrip />

        <TypewriterStrip />

        <DemoStrip
          index={5}
          name='WordCascade'
          description='Words slide in from below, staggered. Reads like a careful sentence.'
          installCommand='shadcn add @trickle/word-cascade'
          replay={6000}
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            <WordCascade text='Words that cascade in.' delay={200} stagger={120} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={6}
          name='CharStagger'
          description='Per-char fade or slide reveal with tighter rhythm.'
          installCommand='shadcn add @trickle/char-stagger'
          replay={6000}
          side='left'
        >
          <h3 className='text-2xl font-normal leading-snug tracking-wide sm:text-3xl'>
            <CharStagger text='Character' mode='slide' delay={200} stagger={60} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={7}
          name='GradientShift'
          description='Animated gradient bg-clip-text via @property — angle rotates smoothly.'
          installCommand='shadcn add @trickle/gradient-shift'
        >
          <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
            <GradientShift>Vibrant</GradientShift>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={8}
          name='ShinyShimmer'
          description='Light glare panning across text. Always-on or hover-only.'
          installCommand='shadcn add @trickle/shiny-shimmer'
          side='left'
        >
          <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
            <ShinyShimmer>Premium</ShinyShimmer>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={9}
          name='WordRotate'
          description='Vertical wheel cycling through a list of words. Crossfade with subtle slide.'
          installCommand='shadcn add @trickle/word-rotate'
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            Move{' '}
            <WordRotate
              words={['fast', 'smart', 'bold', 'kind']}
              duration={2400}
              className='text-primary'
            />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={10}
          name='AuroraText'
          description='Animated multi-stop aurora gradient — green/sky/violet/amber.'
          installCommand='shadcn add @trickle/aurora-text'
          side='left'
        >
          <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
            <AuroraText>Aurora</AuroraText>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={11}
          name='UnderlineDraw'
          description='Underline draws left-to-right under the text. Configurable thickness + color.'
          installCommand='shadcn add @trickle/underline-draw'
          replay={6000}
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            Pay attention to{' '}
            <UnderlineDraw delay={400} color='oklch(70% 0.18 250)'>
              this part
            </UnderlineDraw>
            .
          </h3>
        </DemoStrip>

        <DemoStrip
          index={12}
          name='DecryptScramble'
          description='Random characters scramble into the target text. Configurable charset.'
          installCommand='shadcn add @trickle/decrypt-scramble'
          replay={6000}
          side='left'
        >
          <h3 className='font-mono text-2xl font-normal tracking-wider sm:text-3xl'>
            <DecryptScramble text='DECRYPTED' charset='binary' duration={1400} delay={300} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={13}
          name='InkBleed'
          description='Reveals via clip-path circle from origin + blur unmask.'
          installCommand='shadcn add @trickle/ink-bleed'
          replay={6000}
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            <InkBleed delay={200} duration={1400}>
              Bleeds in like ink.
            </InkBleed>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={14}
          name='PaperFold'
          description='Letters fold open via 3D rotateX with parent perspective.'
          installCommand='shadcn add @trickle/paper-fold'
          replay={6000}
          side='left'
        >
          <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
            <PaperFold text='Unfold' delay={200} stagger={80} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={15}
          name='Echo'
          description='Multi-layer ghost ripple — translates, scales, and blurs outward.'
          installCommand='shadcn add @trickle/echo'
        >
          <h3 className='text-3xl font-medium uppercase tracking-widest text-primary sm:text-4xl'>
            <Echo>Echo</Echo>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={16}
          name='ConfettiText'
          description='One-shot burst of small colored squares from each character on mount.'
          installCommand='shadcn add @trickle/confetti-text'
          replay={6000}
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <ConfettiText text='Done!' delay={300} duration={1100} piecesPerChar={5} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={17}
          name='MorphSwap'
          description='Cycles through words with letter-staggered morph between each.'
          installCommand='shadcn add @trickle/morph-swap'
        >
          <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
            Designed to be{' '}
            <MorphSwap
              words={['simple', 'fast', 'beautiful', 'yours']}
              interval={1800}
              className='text-primary'
            />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={18}
          name='NeonFlicker'
          description='Neon glow with irregular flicker pattern. Pure CSS infinite loop.'
          installCommand='shadcn add @trickle/neon-flicker'
          spec={[
            { label: 'gzip', value: '0.5kb' },
            { label: 'client', value: 'no', tone: 'good' },
            { label: 'since', value: 'v0.1' }
          ]}
          side='left'
          code={`<NeonFlicker color="oklch(72% 0.22 350)">
  OPEN
</NeonFlicker>`}
        >
          <h3 className='text-4xl font-medium uppercase tracking-widest sm:text-5xl'>
            <NeonFlicker>OPEN</NeonFlicker>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={19}
          name='GlitchSplit'
          description='RGB-channel-split glitch via twin pseudo-elements. Loop or hover trigger.'
          installCommand='shadcn add @trickle/glitch-split'
        >
          <h3 className='font-mono text-3xl font-medium tracking-tight sm:text-4xl'>
            <GlitchSplit>SYSTEM</GlitchSplit>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={20}
          name='ScaleSlam'
          description='Letters slam in from huge to normal with a slight bounce.'
          installCommand='shadcn add @trickle/scale-slam'
          replay={6000}
          side='left'
        >
          <h3 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
            <ScaleSlam text='Slam' delay={200} stagger={80} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={21}
          name='Stamp'
          description='Lands like a rubber stamp with a bouncy scale settle. Configurable rotation + color.'
          installCommand='shadcn add @trickle/stamp'
          replay={6000}
        >
          <Stamp delay={200} color='oklch(60% 0.22 25)'>
            Approved
          </Stamp>
        </DemoStrip>

        <DemoStrip
          index={22}
          name='MarqueeRibbon'
          description='Horizontally scrolling ribbon with edge-fade gradient masks.'
          installCommand='shadcn add @trickle/marquee-ribbon'
          side='left'
        >
          <div className='w-full max-w-md'>
            <MarqueeRibbon duration={18}>
              <span className='font-mono text-sm text-muted-foreground'>
                SHIPPING · BUILD · DEPLOY · SHIPPING · BUILD · DEPLOY · SHIPPING · BUILD · DEPLOY ·
              </span>
            </MarqueeRibbon>
          </div>
        </DemoStrip>

        <DemoStrip
          index={23}
          name='Wave'
          description='Letters undulate vertically in a sine-wave pattern. Pure CSS infinite loop.'
          installCommand='shadcn add @trickle/wave'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Wave text='Wave' />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={24}
          name='Drip'
          description='Letters drop down from above with a slight overshoot bounce.'
          installCommand='shadcn add @trickle/drip'
          replay={6000}
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Drip text='Falling' delay={200} stagger={80} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={25}
          name='Stretch'
          description='Letters stretch wide-and-short, then settle to natural size.'
          installCommand='shadcn add @trickle/stretch'
          replay={6000}
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Stretch delay={200}>Stretch</Stretch>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={26}
          name='Wobble3D'
          description='Letters rotate around the Y-axis. Pure CSS perspective + rotateY.'
          installCommand='shadcn add @trickle/wobble-3d'
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Wobble3D text='Wobble' />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={27}
          name='Spotlight'
          description='Bright spot moves across text via radial-gradient bg-clip-text.'
          installCommand='shadcn add @trickle/spotlight'
        >
          <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
            <Spotlight>SPOTLIGHT</Spotlight>
          </h3>
        </DemoStrip>

        <MagnetizeStrip />

        <DemoStrip
          index={29}
          name='Float'
          description='Letters bob gently up and down with phase-offset stagger.'
          installCommand='shadcn add @trickle/float'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Float text='Floating' />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={30}
          name='PulseText'
          description='Rhythmic scale + opacity pulse. Like a heartbeat.'
          installCommand='shadcn add @trickle/pulse-text'
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <PulseText>Pulse</PulseText>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={31}
          name='RainbowRoll'
          description='Hue rotates through the spectrum, staggered per character.'
          installCommand='shadcn add @trickle/rainbow-roll'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <RainbowRoll text='Rainbow' />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={32}
          name='CurtainReveal'
          description='Text revealed by a clip-path wipe. Configurable direction.'
          installCommand='shadcn add @trickle/curtain-reveal'
          replay={6000}
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <CurtainReveal direction='right' delay={200}>
              Curtain rises.
            </CurtainReveal>
          </h3>
        </DemoStrip>

        <DemoStrip
          index={33}
          name='VerticalSlide'
          description='Letters slide in from above with stagger. Counterpart to WordCascade.'
          installCommand='shadcn add @trickle/vertical-slide'
          replay={6000}
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <VerticalSlide text='Falling in' delay={200} stagger={70} />
          </h3>
        </DemoStrip>

        <DemoStrip
          index={34}
          name='Flutter'
          description='Subtle random tremor per character, infinite loop. Like nervous text.'
          installCommand='shadcn add @trickle/flutter'
          side='left'
        >
          <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            <Flutter text='Flutter' />
          </h3>
        </DemoStrip>
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
              no extra bundle weight. 29 of 34 components are pure server components &mdash; they
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
