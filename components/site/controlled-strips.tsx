'use client';

import { DemoStrip } from '@/components/site/demo-strip';
import { AuroraText } from '@/registry/default/aurora-text/aurora-text';
import { CharStagger } from '@/registry/default/char-stagger/char-stagger';
import { ConfettiText } from '@/registry/default/confetti-text/confetti-text';
import { DecryptScramble } from '@/registry/default/decrypt-scramble/decrypt-scramble';
import { Echo } from '@/registry/default/echo/echo';
import { Float } from '@/registry/default/float/float';
import { Flutter } from '@/registry/default/flutter/flutter';
import { GlitchSplit } from '@/registry/default/glitch-split/glitch-split';
import { Grain } from '@/registry/default/grain/grain';
import { GradientShift } from '@/registry/default/gradient-shift/gradient-shift';
import { Halftone } from '@/registry/default/halftone/halftone';
import { HighlighterSweep } from '@/registry/default/highlighter-sweep/highlighter-sweep';
import { InkBleed } from '@/registry/default/ink-bleed/ink-bleed';
import { Magnetize } from '@/registry/default/magnetize/magnetize';
import { MarqueeRibbon } from '@/registry/default/marquee-ribbon/marquee-ribbon';
import { MorphSwap } from '@/registry/default/morph-swap/morph-swap';
import { NeonFlicker } from '@/registry/default/neon-flicker/neon-flicker';
import { Shatter } from '@/registry/default/shatter/shatter';
import { Pixelate } from '@/registry/default/pixelate/pixelate';
import { PulseText } from '@/registry/default/pulse-text/pulse-text';
import { RainbowRoll } from '@/registry/default/rainbow-roll/rainbow-roll';
import { ScaleSlam } from '@/registry/default/scale-slam/scale-slam';
import { Scanline } from '@/registry/default/scanline/scanline';
import { ShinyShimmer } from '@/registry/default/shiny-shimmer/shiny-shimmer';
import { Spotlight } from '@/registry/default/spotlight/spotlight';
import { Stamp } from '@/registry/default/stamp/stamp';
import { Stretch } from '@/registry/default/stretch/stretch';
import { TextReveal } from '@/registry/default/text-reveal/text-reveal';
import { Typewriter } from '@/registry/default/typewriter/typewriter';
import { TypoCorrect } from '@/registry/default/typo-correct/typo-correct';
import { UnderlineDraw } from '@/registry/default/underline-draw/underline-draw';
import { Wave } from '@/registry/default/wave/wave';
import { Wireframe } from '@/registry/default/wireframe/wireframe';
import { Wobble3D } from '@/registry/default/wobble-3d/wobble-3d';

import { Bounce } from '@/registry/default/bounce/bounce';
import { CarouselFlip } from '@/registry/default/carousel-flip/carousel-flip';
import { Compress } from '@/registry/default/compress/compress';
import { Mosaic } from '@/registry/default/mosaic/mosaic';
import { Phase } from '@/registry/default/phase/phase';
import { Plasma } from '@/registry/default/plasma/plasma';
import { Reflect as ReflectText } from '@/registry/default/reflect/reflect';
import { Shutter } from '@/registry/default/shutter/shutter';
import { SpinIn } from '@/registry/default/spin-in/spin-in';
import { StaticText } from '@/registry/default/static-text/static-text';
import { Tear } from '@/registry/default/tear/tear';
import { WordCascade } from '@/registry/default/word-cascade/word-cascade';
import { WordRotate } from '@/registry/default/word-rotate/word-rotate';

const SPEC_RSC = [
  { label: 'gzip', value: '<1kb' },
  { label: 'client', value: 'no', tone: 'good' as const },
  { label: 'since', value: 'v0.1' }
];

const SPEC_CLIENT = [
  { label: 'gzip', value: '<1.5kb' },
  { label: 'client', value: 'yes', tone: 'warn' as const },
  { label: 'since', value: 'v0.1' }
];

export function HighlighterSweepStrip() {
  return (
    <DemoStrip
      index={1} name='HighlighterSweep'
      description='Sequential word highlight reveal driven by a CSS background-size keyframe.'
      installCommand='shadcn add @trickle/highlighter-sweep'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'interval', label: 'interval', min: 0, max: 500, step: 25, unit: 'ms' }
      ]}
      defaultValues={{ delay: 300, interval: 250 }}
      code={`<HighlighterSweep
  segments={[
    { text: 'Built to ' },
    { text: 'amplify', highlight: true },
    { text: ' your ' },
    { text: 'work', highlight: true },
    { text: '.' }
  ]}
  color="oklch(80% 0.18 80 / 0.55)"
  delay={300}
  interval={250}
/>`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <HighlighterSweep as='span'
            segments={[
              { text: 'Built to ' }, { text: 'amplify', highlight: true },
              { text: ' your ' }, { text: 'work', highlight: true }, { text: '.' }
            ]}
            color='oklch(80% 0.18 80 / 0.55)' delay={v.delay ?? 300} interval={v.interval ?? 250} />
        </h3>
      )}
    />
  );
}

export function TypoCorrectStrip() {
  return (
    <DemoStrip
      index={2} name='TypoCorrect' side='left'
      description='Letters fly in misspelled, then correct themselves character-by-character.'
      installCommand='shadcn add @trickle/typo-correct'
      spec={SPEC_CLIENT} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'charDelay', label: 'speed', min: 50, max: 300, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 300, charDelay: 120 }}
      code={`<TypoCorrect word="accuracy" misspelled="aurccayc" delay={300} charDelay={120} />`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          We value{' '}
          <TypoCorrect word='accuracy' misspelled='aurccayc'
            delay={v.delay ?? 300} charDelay={v.charDelay ?? 120}
            className='text-primary' />
        </h3>
      )}
    />
  );
}

export function TextRevealStrip() {
  return (
    <DemoStrip
      index={3} name='TextReveal'
      description='Fade-up, blur, slide, or scale reveal — per char, per word, or as a single block.'
      installCommand='shadcn add @trickle/text-reveal'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 70 }}
      code={`<TextReveal split="word" delay={200} stagger={70}>
  Reveal the text.
</TextReveal>`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <TextReveal split='word' stagger={v.stagger ?? 70} delay={v.delay ?? 200}>
            Reveal the text.
          </TextReveal>
        </h3>
      )}
    />
  );
}

export function TypewriterStrip() {
  return (
    <DemoStrip
      index={4} name='Typewriter' side='left'
      description='Character-by-character typing with caret. Multi-string cycling.'
      installCommand='shadcn add @trickle/typewriter'
      spec={SPEC_CLIENT} replay={6000}
      controls={[
        { key: 'charDelay', label: 'speed', min: 30, max: 200, step: 10, unit: 'ms' },
        { key: 'holdDuration', label: 'hold', min: 500, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ charDelay: 70, holdDuration: 1200 }}
      code={`<Typewriter
  strings={['Type.', 'Typewriter.', 'Typed.']}
  loop charDelay={70} holdDuration={1200}
/>`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <Typewriter strings={['Type.', 'Typewriter.', 'Typed.']} loop
            charDelay={v.charDelay ?? 70} holdDuration={v.holdDuration ?? 1200} />
        </h3>
      )}
    />
  );
}

export function WordCascadeStrip() {
  return (
    <DemoStrip
      index={5} name='WordCascade'
      description='Words slide in from below, staggered. Reads like a careful sentence.'
      installCommand='shadcn add @trickle/word-cascade'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 300, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 120 }}
      code={`<WordCascade text="Words that cascade in." delay={200} stagger={120} />`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <WordCascade text='Words that cascade in.' delay={v.delay ?? 200} stagger={v.stagger ?? 120} />
        </h3>
      )}
    />
  );
}

export function CharStaggerStrip() {
  return (
    <DemoStrip
      index={6} name='CharStagger' side='left'
      description='Per-char fade or slide reveal with tighter rhythm.'
      installCommand='shadcn add @trickle/char-stagger'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 150, step: 5, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 60 }}
      code={`<CharStagger text="Character" mode="slide" delay={200} stagger={60} />`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug tracking-wide sm:text-3xl'>
          <CharStagger text='Character' mode='slide' delay={v.delay ?? 200} stagger={v.stagger ?? 60} />
        </h3>
      )}
    />
  );
}

export function GradientShiftStrip() {
  return (
    <DemoStrip
      index={7} name='GradientShift'
      description='Animated gradient bg-clip-text via @property — angle rotates smoothly.'
      installCommand='shadcn add @trickle/gradient-shift'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1000, max: 12000, step: 500, unit: 'ms' }
      ]}
      defaultValues={{ duration: 6000 }}
      code={`<GradientShift duration={6000}>Gradient</GradientShift>`}
      render={(v) => (
        <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
          <GradientShift duration={v.duration ?? 6000}>Gradient</GradientShift>
        </h3>
      )}
    />
  );
}

export function ShinyShimmerStrip() {
  return (
    <DemoStrip
      index={8} name='ShinyShimmer' side='left'
      description='Light glare panning across text. Always-on or hover-only.'
      installCommand='shadcn add @trickle/shiny-shimmer'
      spec={SPEC_RSC}
      code={`<ShinyShimmer>Shimmer</ShinyShimmer>`}
    >
      <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
        <ShinyShimmer>Shimmer</ShinyShimmer>
      </h3>
    </DemoStrip>
  );
}

export function WordRotateStrip() {
  return (
    <DemoStrip
      index={9} name='WordRotate'
      description='Vertical wheel cycling through a list of words. Crossfade with subtle slide.'
      installCommand='shadcn add @trickle/word-rotate'
      spec={SPEC_CLIENT}
      controls={[
        { key: 'duration', label: 'hold', min: 800, max: 5000, step: 200, unit: 'ms' }
      ]}
      defaultValues={{ duration: 2400 }}
      code={`<WordRotate words={['rotate', 'cycle', 'spin', 'flip']} duration={2400} />`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          Words{' '}
          <WordRotate words={['rotate', 'cycle', 'spin', 'flip']}
            duration={v.duration ?? 2400} className='text-primary' />
        </h3>
      )}
    />
  );
}

export function AuroraTextStrip() {
  return (
    <DemoStrip
      index={10} name='AuroraText' side='left'
      description='Animated multi-stop aurora gradient — green/sky/violet/amber.'
      installCommand='shadcn add @trickle/aurora-text'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 2000, max: 16000, step: 500, unit: 'ms' }
      ]}
      defaultValues={{ duration: 8000 }}
      code={`<AuroraText duration={8000}>Aurora</AuroraText>`}
      render={(v) => (
        <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
          <AuroraText duration={v.duration ?? 8000}>Aurora</AuroraText>
        </h3>
      )}
    />
  );
}

export function UnderlineDrawStrip() {
  return (
    <DemoStrip
      index={11} name='UnderlineDraw'
      description='Underline draws left-to-right under the text. Configurable thickness + color.'
      installCommand='shadcn add @trickle/underline-draw'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1500, step: 50, unit: 'ms' }
      ]}
      defaultValues={{ delay: 400 }}
      code={`<UnderlineDraw delay={400} color="oklch(70% 0.18 250)">
  this part
</UnderlineDraw>`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          Pay attention to{' '}
          <UnderlineDraw delay={v.delay ?? 400} color='oklch(70% 0.18 250)'>
            this part
          </UnderlineDraw>.
        </h3>
      )}
    />
  );
}

export function DecryptScrambleStrip() {
  return (
    <DemoStrip
      index={12} name='DecryptScramble' side='left'
      description='Random characters scramble into the target text. Configurable charset.'
      installCommand='shadcn add @trickle/decrypt-scramble'
      spec={SPEC_CLIENT} replay={6000}
      controls={[
        { key: 'duration', label: 'duration', min: 600, max: 3000, step: 100, unit: 'ms' },
        { key: 'scrambleSpeed', label: 'scramble', min: 20, max: 100, step: 5, unit: 'ms' }
      ]}
      defaultValues={{ duration: 1400, scrambleSpeed: 40 }}
      code={`<DecryptScramble text="DECRYPTED" charset="binary" duration={1400} />`}
      render={(v) => (
        <h3 className='font-mono text-2xl font-normal tracking-wider sm:text-3xl'>
          <DecryptScramble text='DECRYPTED' charset='binary'
            duration={v.duration ?? 1400} scrambleSpeed={v.scrambleSpeed ?? 40} delay={300} />
        </h3>
      )}
    />
  );
}

export function InkBleedStrip() {
  return (
    <DemoStrip
      index={13} name='InkBleed'
      description='Reveals via clip-path circle from origin + blur unmask.'
      installCommand='shadcn add @trickle/ink-bleed'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 600, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, duration: 1400 }}
      code={`<InkBleed delay={200} duration={1400}>Bleeds in like ink.</InkBleed>`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <InkBleed delay={v.delay ?? 200} duration={v.duration ?? 1400}>
            Bleeds in like ink.
          </InkBleed>
        </h3>
      )}
    />
  );
}

export function ShatterStrip() {
  return (
    <DemoStrip
      index={14} name='Shatter' side='left'
      description='Each letter assembles from four triangular shards converging from random offsets.'
      installCommand='shadcn add @trickle/shatter'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 80 }}
      code={`<Shatter text="Shatter" delay={200} stagger={80} />`}
      render={(v) => (
        <h3 className='text-4xl font-medium tracking-tight sm:text-5xl'>
          <Shatter text='Shatter' delay={v.delay ?? 200} stagger={v.stagger ?? 80} />
        </h3>
      )}
    />
  );
}

export function EchoStrip() {
  return (
    <DemoStrip
      index={15} name='Echo'
      description='Five staggered ghost copies pulse outward from the word, fading and blurring as they go.'
      installCommand='shadcn add @trickle/echo'
      spec={SPEC_RSC}
      controls={[
        { key: 'ghostCount', label: 'ghosts', min: 2, max: 8, step: 1 },
        { key: 'ghostDistance', label: 'distance', min: 8, max: 80, step: 4, unit: 'px' }
      ]}
      defaultValues={{ ghostCount: 5, ghostDistance: 32 }}
      code={`<Echo ghostCount={5} ghostDistance={32}>Echo</Echo>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest text-primary sm:text-4xl'>
          <Echo ghostCount={v.ghostCount ?? 5} ghostDistance={v.ghostDistance ?? 32}>
            Echo
          </Echo>
        </h3>
      )}
    />
  );
}

export function ConfettiTextStrip() {
  return (
    <DemoStrip
      index={16} name='ConfettiText' side='left'
      description='One-shot burst of small colored squares from each character on mount.'
      installCommand='shadcn add @trickle/confetti-text'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'piecesPerChar', label: 'pieces', min: 2, max: 10, step: 1 },
        { key: 'duration', label: 'duration', min: 600, max: 2500, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ piecesPerChar: 5, duration: 1100 }}
      code={`<ConfettiText text="Confetti" piecesPerChar={5} duration={1100} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <ConfettiText text='Confetti' delay={300}
            duration={v.duration ?? 1100} piecesPerChar={v.piecesPerChar ?? 5} />
        </h3>
      )}
    />
  );
}

export function MorphSwapStrip() {
  return (
    <DemoStrip
      index={17} name='MorphSwap'
      description='Cycles through words with letter-staggered morph between each.'
      installCommand='shadcn add @trickle/morph-swap'
      spec={SPEC_CLIENT}
      controls={[
        { key: 'interval', label: 'hold', min: 800, max: 4000, step: 100, unit: 'ms' },
        { key: 'morphDuration', label: 'morph', min: 150, max: 800, step: 25, unit: 'ms' }
      ]}
      defaultValues={{ interval: 1800, morphDuration: 300 }}
      code={`<MorphSwap words={['morph', 'swap', 'shift', 'flow']} interval={1800} />`}
      render={(v) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          Watch words{' '}
          <MorphSwap words={['morph', 'swap', 'shift', 'flow']}
            interval={v.interval ?? 1800} morphDuration={v.morphDuration ?? 300}
            className='text-primary' />
        </h3>
      )}
    />
  );
}

export function NeonFlickerStrip() {
  return (
    <DemoStrip
      index={18} name='NeonFlicker' side='left'
      description='Cold-start sputter — sign tries to ignite, sputters out, sputters back, then settles to a steady hum with rare flickers.'
      installCommand='shadcn add @trickle/neon-flicker'
      spec={SPEC_RSC}
      code={`<NeonFlicker color="oklch(72% 0.22 350)">NEON</NeonFlicker>`}
    >
      <h3 className='text-4xl font-medium uppercase tracking-widest sm:text-5xl'>
        <NeonFlicker>NEON</NeonFlicker>
      </h3>
    </DemoStrip>
  );
}

export function GlitchSplitStrip() {
  return (
    <DemoStrip
      index={19} name='GlitchSplit'
      description='Horizontal slices of the text shift sideways in brief stutter bursts. Broken-signal feel.'
      installCommand='shadcn add @trickle/glitch-split'
      spec={SPEC_RSC}
      code={`<GlitchSplit>GLITCH</GlitchSplit>`}
    >
      <h3 className='font-mono text-3xl font-medium tracking-tight sm:text-4xl'>
        <GlitchSplit>GLITCH</GlitchSplit>
      </h3>
    </DemoStrip>
  );
}

export function ScaleSlamStrip() {
  return (
    <DemoStrip
      index={20} name='ScaleSlam' side='left'
      description='Letters slam in from huge to normal with a slight bounce.'
      installCommand='shadcn add @trickle/scale-slam'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 80 }}
      code={`<ScaleSlam text="Slam" delay={200} stagger={80} />`}
      render={(v) => (
        <h3 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
          <ScaleSlam text='Slam' delay={v.delay ?? 200} stagger={v.stagger ?? 80} />
        </h3>
      )}
    />
  );
}

export function StampStrip() {
  return (
    <DemoStrip
      index={21} name='Stamp'
      description='Drops huge from above with motion blur, slams flat with hard impact, recoils, then settles.'
      installCommand='shadcn add @trickle/stamp'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200 }}
      code={`<Stamp delay={200} rotation="-6deg" color="oklch(60% 0.22 25)">
  Stamped
</Stamp>`}
      render={(v) => (
        <Stamp delay={v.delay ?? 200} color='oklch(60% 0.22 25)'>
          Stamped
        </Stamp>
      )}
    />
  );
}

export function MarqueeRibbonStrip() {
  return (
    <DemoStrip
      index={22} name='MarqueeRibbon' side='left'
      description='Horizontally scrolling ribbon with edge-fade gradient masks.'
      installCommand='shadcn add @trickle/marquee-ribbon'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 8, max: 60, step: 2, unit: 's' }
      ]}
      defaultValues={{ duration: 18 }}
      code={`<MarqueeRibbon duration={18}>
  SHIPPING · BUILD · DEPLOY ·
</MarqueeRibbon>`}
      render={(v) => (
        <div className='w-full max-w-md'>
          <MarqueeRibbon duration={v.duration ?? 18}>
            <span className='font-mono text-sm text-muted-foreground'>
              SHIPPING · BUILD · DEPLOY · SHIPPING · BUILD · DEPLOY · SHIPPING · BUILD · DEPLOY ·
            </span>
          </MarqueeRibbon>
        </div>
      )}
    />
  );
}

export function WaveStrip() {
  return (
    <DemoStrip
      index={23} name='Wave'
      description='Letters undulate vertically in a sine-wave pattern. Pure CSS infinite loop.'
      installCommand='shadcn add @trickle/wave'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 800, max: 4000, step: 100, unit: 'ms' },
        { key: 'stagger', label: 'phase', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ duration: 1800, stagger: 80 }}
      code={`<Wave text="Wave" duration={1800} stagger={80} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Wave text='Wave' duration={v.duration ?? 1800} stagger={v.stagger ?? 80} />
        </h3>
      )}
    />
  );
}

export function StretchStrip() {
  return (
    <DemoStrip
      index={25} name='Stretch'
      description='Letters stretch wide-and-short, then settle to natural size.'
      installCommand='shadcn add @trickle/stretch'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 500, max: 2000, step: 50, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, duration: 900 }}
      code={`<Stretch delay={200} duration={900}>Stretch</Stretch>`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Stretch delay={v.delay ?? 200} duration={v.duration ?? 900}>Stretch</Stretch>
        </h3>
      )}
    />
  );
}

export function Wobble3DStrip() {
  return (
    <DemoStrip
      index={26} name='Wobble3D' side='left'
      description='Letters rotate around the Y-axis. Pure CSS perspective + rotateY.'
      installCommand='shadcn add @trickle/wobble-3d'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1200, max: 5000, step: 100, unit: 'ms' },
        { key: 'stagger', label: 'phase', min: 50, max: 300, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ duration: 2400, stagger: 100 }}
      code={`<Wobble3D text="Wobble" duration={2400} stagger={100} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Wobble3D text='Wobble' duration={v.duration ?? 2400} stagger={v.stagger ?? 100} />
        </h3>
      )}
    />
  );
}

export function SpotlightStrip() {
  return (
    <DemoStrip
      index={27} name='Spotlight'
      description='Bright spot moves across text via radial-gradient bg-clip-text.'
      installCommand='shadcn add @trickle/spotlight'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1500, max: 8000, step: 250, unit: 'ms' }
      ]}
      defaultValues={{ duration: 4000 }}
      code={`<Spotlight duration={4000}>SPOTLIGHT</Spotlight>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Spotlight duration={v.duration ?? 4000}>SPOTLIGHT</Spotlight>
        </h3>
      )}
    />
  );
}

export function MagnetizeStrip() {
  return (
    <DemoStrip
      index={28} name='Magnetize' side='left'
      description='Letters scattered, then snap into place with a slight overshoot.'
      installCommand='shadcn add @trickle/magnetize'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 70 }}
      code={`<Magnetize text="Magnetize" delay={200} stagger={70} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Magnetize text='Magnetize' delay={v.delay ?? 200} stagger={v.stagger ?? 70} />
        </h3>
      )}
    />
  );
}

export function FloatStrip() {
  return (
    <DemoStrip
      index={29} name='Float'
      description='Letters bob gently up and down with phase-offset stagger.'
      installCommand='shadcn add @trickle/float'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1500, max: 6000, step: 100, unit: 'ms' },
        { key: 'stagger', label: 'phase', min: 50, max: 300, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ duration: 3000, stagger: 100 }}
      code={`<Float text="Floating" duration={3000} stagger={100} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Float text='Floating' duration={v.duration ?? 3000} stagger={v.stagger ?? 100} />
        </h3>
      )}
    />
  );
}

export function PulseTextStrip() {
  return (
    <DemoStrip
      index={30} name='PulseText' side='left'
      description='Text breathes with a soft scale pulse while two ring waves radiate outward like a sonar ping.'
      installCommand='shadcn add @trickle/pulse-text'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 800, max: 4000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ duration: 1800 }}
      code={`<PulseText duration={1800}>Pulse</PulseText>`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <PulseText duration={v.duration ?? 1800}>Pulse</PulseText>
        </h3>
      )}
    />
  );
}

export function RainbowRollStrip() {
  return (
    <DemoStrip
      index={31} name='RainbowRoll'
      description='Hue rotates through the spectrum, staggered per character.'
      installCommand='shadcn add @trickle/rainbow-roll'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 2000, max: 10000, step: 250, unit: 'ms' },
        { key: 'stagger', label: 'phase', min: 30, max: 250, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ duration: 4000, stagger: 80 }}
      code={`<RainbowRoll text="Rainbow" duration={4000} stagger={80} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <RainbowRoll text='Rainbow' duration={v.duration ?? 4000} stagger={v.stagger ?? 80} />
        </h3>
      )}
    />
  );
}

export function PixelateStrip() {
  return (
    <DemoStrip
      index={35} name='Pixelate'
      description='Each letter resolves through a chunky pixel grid that snaps in 6 discrete steps. True 8-bit feel.'
      installCommand='shadcn add @trickle/pixelate'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 600, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, duration: 1400 }}
      code={`<Pixelate text="PIXELATE" delay={200} duration={1400} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Pixelate text='PIXELATE' delay={v.delay ?? 200} duration={v.duration ?? 1400} />
        </h3>
      )}
    />
  );
}

export function ScanlineStrip() {
  return (
    <DemoStrip
      index={36} name='Scanline' side='left'
      description='CRT-style horizontal scanlines passing over text. Constant grain overlay.'
      installCommand='shadcn add @trickle/scanline'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1200, max: 6000, step: 200, unit: 'ms' },
        { key: 'thickness', label: 'thickness', min: 1, max: 8, step: 1, unit: 'px' }
      ]}
      defaultValues={{ duration: 2400, thickness: 2 }}
      code={`<Scanline duration={2400} thickness={2}>SCANLINE</Scanline>`}
      render={(v) => (
        <h3 className='font-mono text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Scanline duration={v.duration ?? 2400} thickness={v.thickness ?? 2}>SCANLINE</Scanline>
        </h3>
      )}
    />
  );
}

export function GrainStrip() {
  return (
    <DemoStrip
      index={37} name='Grain'
      description='Text dissolves into a fine dot pattern, then dots merge until the letters resolve solid.'
      installCommand='shadcn add @trickle/grain'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'dotSize', label: 'dot size', min: 2, max: 14, step: 1, unit: 'px' },
        { key: 'duration', label: 'duration', min: 600, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ dotSize: 5, duration: 1600 }}
      code={`<Grain dotSize={5} duration={1600}>GRAIN</Grain>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Grain dotSize={v.dotSize ?? 5} duration={v.duration ?? 1600}>GRAIN</Grain>
        </h3>
      )}
    />
  );
}

export function WireframeStrip() {
  return (
    <DemoStrip
      index={38} name='Wireframe' side='left'
      description='Each letter drops in as a thick outline that scans across, refines to a thin line, then fills.'
      installCommand='shadcn add @trickle/wireframe'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 90 }}
      code={`<Wireframe text="Wireframe" delay={200} stagger={90} strokeWidth={3} />`}
      render={(v) => (
        <h3 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
          <Wireframe text='Wireframe' delay={v.delay ?? 200} stagger={v.stagger ?? 90} />
        </h3>
      )}
    />
  );
}

export function HalftoneStrip() {
  return (
    <DemoStrip
      index={39} name='Halftone'
      description='Halftone dots pulse with increasing amplitude (like a heartbeat building) before merging into solid text.'
      installCommand='shadcn add @trickle/halftone'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'dotSize', label: 'dot size', min: 3, max: 16, step: 1, unit: 'px' }
      ]}
      defaultValues={{ delay: 200, dotSize: 6 }}
      code={`<Halftone delay={200} dotSize={6}>HALFTONE</Halftone>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Halftone delay={v.delay ?? 200} dotSize={v.dotSize ?? 6}>HALFTONE</Halftone>
        </h3>
      )}
    />
  );
}

export function FlutterStrip() {
  return (
    <DemoStrip
      index={34} name='Flutter' side='left'
      description='Subtle random tremor per character, infinite loop. Like nervous text.'
      installCommand='shadcn add @trickle/flutter'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1200, max: 5000, step: 100, unit: 'ms' },
        { key: 'stagger', label: 'phase', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ duration: 2400, stagger: 70 }}
      code={`<Flutter text="Flutter" duration={2400} stagger={70} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Flutter text='Flutter' duration={v.duration ?? 2400} stagger={v.stagger ?? 70} />
        </h3>
      )}
    />
  );
}

export function BounceStrip() {
  return (
    <DemoStrip
      index={40} name='Bounce'
      description='Each letter drops in then bounces in place 2-3 times like a ball settling.'
      installCommand='shadcn add @trickle/bounce'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 60 }}
      code={`<Bounce text="Bouncing" delay={200} stagger={60} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Bounce text='Bouncing' delay={v.delay ?? 200} stagger={v.stagger ?? 60} />
        </h3>
      )}
    />
  );
}

export function SpinInStrip() {
  return (
    <DemoStrip
      index={41} name='SpinIn' side='left'
      description='Each letter spins in two full turns on the z-axis, scaling up from zero.'
      installCommand='shadcn add @trickle/spin-in'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 30, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 60 }}
      code={`<SpinIn text="Spinning" delay={200} stagger={60} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <SpinIn text='Spinning' delay={v.delay ?? 200} stagger={v.stagger ?? 60} />
        </h3>
      )}
    />
  );
}

export function ShutterStrip() {
  return (
    <DemoStrip
      index={42} name='Shutter'
      description='Vertical-bar mask reveal — like venetian blinds opening.'
      installCommand='shadcn add @trickle/shutter'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 600, max: 2400, step: 100, unit: 'ms' },
        { key: 'bars', label: 'bars', min: 4, max: 20, step: 1 }
      ]}
      defaultValues={{ delay: 200, duration: 1100, bars: 8 }}
      code={`<Shutter delay={200} duration={1100} bars={8}>SHUTTER</Shutter>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Shutter delay={v.delay ?? 200} duration={v.duration ?? 1100} bars={v.bars ?? 8}>
            SHUTTER
          </Shutter>
        </h3>
      )}
    />
  );
}

export function PlasmaStrip() {
  return (
    <DemoStrip
      index={43} name='Plasma' side='left'
      description='Flowing colored plasma blobs inside text via bg-clip + multi radial-gradient.'
      installCommand='shadcn add @trickle/plasma'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 3000, max: 12000, step: 500, unit: 'ms' }
      ]}
      defaultValues={{ duration: 6000 }}
      code={`<Plasma duration={6000}>Plasma</Plasma>`}
      render={(v) => (
        <h3 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
          <Plasma duration={v.duration ?? 6000}>Plasma</Plasma>
        </h3>
      )}
    />
  );
}

export function CompressStrip() {
  return (
    <DemoStrip
      index={44} name='Compress'
      description='Each letter drops in tall, gets slammed flat by a hydraulic press, then springs back to natural size.'
      installCommand='shadcn add @trickle/compress'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 150, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 50 }}
      code={`<Compress text="Squash" delay={200} stagger={50} />`}
      render={(v) => (
        <h3 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
          <Compress text='Squash' delay={v.delay ?? 200} stagger={v.stagger ?? 50} />
        </h3>
      )}
    />
  );
}

export function CarouselFlipStrip() {
  return (
    <DemoStrip
      index={45} name='CarouselFlip' side='left'
      description='Letters live around an invisible 3D ring that spins three full revolutions like a globe, then unwrap and snap into the spelled word.'
      installCommand='shadcn add @trickle/carousel-flip'
      spec={SPEC_RSC} replay={6500}
      controls={[
        { key: 'duration', label: 'duration', min: 2500, max: 8000, step: 250, unit: 'ms' },
        { key: 'radius', label: 'radius', min: 2, max: 8, step: 0.25, unit: 'em' }
      ]}
      defaultValues={{ duration: 4500, radius: 3.4 }}
      code={`<CarouselFlip text="Carousel" duration={4500} radius={3.4} />`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <CarouselFlip text='Carousel' duration={v.duration ?? 4500} radius={v.radius ?? 3.4} />
        </h3>
      )}
    />
  );
}

export function StaticTextStrip() {
  return (
    <DemoStrip
      index={46} name='StaticText'
      description='TV-style static noise overlays text, then fades to clear. Atomic texture reveal.'
      installCommand='shadcn add @trickle/static-text'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 800, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, duration: 1400 }}
      code={`<StaticText delay={200} duration={1400}>STATIC</StaticText>`}
      render={(v) => (
        <h3 className='font-mono text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <StaticText delay={v.delay ?? 200} duration={v.duration ?? 1400}>STATIC</StaticText>
        </h3>
      )}
    />
  );
}

export function TearStrip() {
  return (
    <DemoStrip
      index={47} name='Tear' side='left'
      description='Text rips into top and bottom halves with jagged edges, then heals back together.'
      installCommand='shadcn add @trickle/tear'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 800, max: 2500, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, duration: 1200 }}
      code={`<Tear delay={200} duration={1200}>Tearing</Tear>`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Tear delay={v.delay ?? 200} duration={v.duration ?? 1200}>Tearing</Tear>
        </h3>
      )}
    />
  );
}

export function ReflectStrip() {
  return (
    <DemoStrip
      index={48} name='Reflect'
      description='Mirror reflection beneath text with linear-gradient mask fade.'
      installCommand='shadcn add @trickle/reflect'
      spec={SPEC_RSC}
      controls={[
        { key: 'opacity', label: 'opacity', min: 0.1, max: 0.6, step: 0.05 }
      ]}
      defaultValues={{ opacity: 0.3 }}
      code={`<Reflect opacity={0.3}>REFLECT</Reflect>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <ReflectText opacity={v.opacity ?? 0.3}>REFLECT</ReflectText>
        </h3>
      )}
    />
  );
}

export function PhaseStrip() {
  return (
    <DemoStrip
      index={49} name='Phase' side='left'
      description='Text phases out and back — fades, blurs, and slips sideways like passing through a barrier.'
      installCommand='shadcn add @trickle/phase'
      spec={SPEC_RSC}
      controls={[
        { key: 'duration', label: 'duration', min: 1200, max: 5000, step: 100, unit: 'ms' },
        { key: 'amplitude', label: 'depth', min: 0.2, max: 1, step: 0.05 }
      ]}
      defaultValues={{ duration: 2400, amplitude: 0.85 }}
      code={`<Phase duration={2400} amplitude={0.85}>PHASE</Phase>`}
      render={(v) => (
        <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
          <Phase duration={v.duration ?? 2400} amplitude={v.amplitude ?? 0.85}>PHASE</Phase>
        </h3>
      )}
    />
  );
}

export function MosaicStrip() {
  return (
    <DemoStrip
      index={50} name='Mosaic'
      description='Text starts as visible mosaic tiles, then dissolves into clarity as the tiles grow and merge.'
      installCommand='shadcn add @trickle/mosaic'
      spec={SPEC_RSC} replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'duration', label: 'duration', min: 800, max: 3000, step: 100, unit: 'ms' },
        { key: 'tileSize', label: 'tile', min: 12, max: 48, step: 2, unit: 'px' }
      ]}
      defaultValues={{ delay: 200, duration: 1500, tileSize: 28 }}
      code={`<Mosaic delay={200} duration={1500} tileSize={28}>Mosaic</Mosaic>`}
      render={(v) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Mosaic delay={v.delay ?? 200} duration={v.duration ?? 1500} tileSize={v.tileSize ?? 28}>
            Mosaic
          </Mosaic>
        </h3>
      )}
    />
  );
}
