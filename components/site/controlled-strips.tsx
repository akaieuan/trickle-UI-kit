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

export function HighlighterSweepStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='HighlighterSweep'
      description='Sequential word highlight reveal driven by a CSS background-size keyframe.'
      installCommand='shadcn add https://tricklekit.dev/r/highlighter-sweep.json'
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

export function TypoCorrectStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='TypoCorrect'
      description='Letters fly in misspelled, then correct themselves character-by-character.'
      installCommand='shadcn add https://tricklekit.dev/r/typo-correct.json'
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

export function TextRevealStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='TextReveal'
      description='Fade-up, blur, slide, or scale reveal — per char, per word, or as a single block.'
      installCommand='shadcn add https://tricklekit.dev/r/text-reveal.json'
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

export function TypewriterStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Typewriter'
      description='Character-by-character typing with caret. Multi-string cycling.'
      installCommand='shadcn add https://tricklekit.dev/r/typewriter.json'
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

export function WordCascadeStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='WordCascade'
      description='Words slide in from below, staggered. Reads like a careful sentence.'
      installCommand='shadcn add https://tricklekit.dev/r/word-cascade.json'
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

export function CharStaggerStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='CharStagger'
      description='Per-char fade or slide reveal with tighter rhythm.'
      installCommand='shadcn add https://tricklekit.dev/r/char-stagger.json'
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

export function GradientShiftStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='GradientShift'
      description='Animated gradient bg-clip-text via @property — angle rotates smoothly.'
      installCommand='shadcn add https://tricklekit.dev/r/gradient-shift.json'
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

export function ShinyShimmerStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='ShinyShimmer'
      description='Light glare panning across text. Always-on or hover-only.'
      installCommand='shadcn add https://tricklekit.dev/r/shiny-shimmer.json'
      spec={SPEC_RSC}
      code={`<ShinyShimmer>Shimmer</ShinyShimmer>`}
    >
      <h3 className='text-3xl font-medium uppercase tracking-widest sm:text-4xl'>
        <ShinyShimmer>Shimmer</ShinyShimmer>
      </h3>
    </DemoStrip>
  );
}

export function WordRotateStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='WordRotate'
      description='Vertical wheel cycling through a list of words. Crossfade with subtle slide.'
      installCommand='shadcn add https://tricklekit.dev/r/word-rotate.json'
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

export function AuroraTextStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='AuroraText'
      description='Animated multi-stop aurora gradient — green/sky/violet/amber.'
      installCommand='shadcn add https://tricklekit.dev/r/aurora-text.json'
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

export function UnderlineDrawStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='UnderlineDraw'
      description='Underline draws left-to-right under the text. Configurable thickness + color.'
      installCommand='shadcn add https://tricklekit.dev/r/underline-draw.json'
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

export function DecryptScrambleStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='DecryptScramble'
      description='Random characters scramble into the target text. Configurable charset.'
      installCommand='shadcn add https://tricklekit.dev/r/decrypt-scramble.json'
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

export function InkBleedStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='InkBleed'
      description='Reveals via clip-path circle from origin + blur unmask.'
      installCommand='shadcn add https://tricklekit.dev/r/ink-bleed.json'
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

export function ShatterStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Shatter'
      description='Each letter assembles from four triangular shards converging from random offsets.'
      installCommand='shadcn add https://tricklekit.dev/r/shatter.json'
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

export function EchoStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Echo'
      description='Five staggered ghost copies pulse outward from the word, fading and blurring as they go.'
      installCommand='shadcn add https://tricklekit.dev/r/echo.json'
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

export function ConfettiTextStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='ConfettiText'
      description='One-shot burst of small colored squares from each character on mount.'
      installCommand='shadcn add https://tricklekit.dev/r/confetti-text.json'
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

export function MorphSwapStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='MorphSwap'
      description='Cycles through words with letter-staggered morph between each.'
      installCommand='shadcn add https://tricklekit.dev/r/morph-swap.json'
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

export function NeonFlickerStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='NeonFlicker'
      description='Cold-start sputter — sign tries to ignite, sputters out, sputters back, then settles to a steady hum with rare flickers.'
      installCommand='shadcn add https://tricklekit.dev/r/neon-flicker.json'
      spec={SPEC_RSC}
      code={`<NeonFlicker color="oklch(72% 0.22 350)">NEON</NeonFlicker>`}
    >
      <h3 className='text-4xl font-medium uppercase tracking-widest sm:text-5xl'>
        <NeonFlicker>NEON</NeonFlicker>
      </h3>
    </DemoStrip>
  );
}

export function GlitchSplitStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='GlitchSplit'
      description='Horizontal slices of the text shift sideways in brief stutter bursts. Broken-signal feel.'
      installCommand='shadcn add https://tricklekit.dev/r/glitch-split.json'
      spec={SPEC_RSC}
      code={`<GlitchSplit>GLITCH</GlitchSplit>`}
    >
      <h3 className='font-mono text-3xl font-medium tracking-tight sm:text-4xl'>
        <GlitchSplit>GLITCH</GlitchSplit>
      </h3>
    </DemoStrip>
  );
}

export function ScaleSlamStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='ScaleSlam'
      description='Letters slam in from huge to normal with a slight bounce.'
      installCommand='shadcn add https://tricklekit.dev/r/scale-slam.json'
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

export function StampStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Stamp'
      description='Drops huge from above with motion blur, slams flat with hard impact, recoils, then settles.'
      installCommand='shadcn add https://tricklekit.dev/r/stamp.json'
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

export function MarqueeRibbonStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='MarqueeRibbon'
      description='Horizontally scrolling ribbon with edge-fade gradient masks.'
      installCommand='shadcn add https://tricklekit.dev/r/marquee-ribbon.json'
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

export function WaveStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Wave'
      description='Letters undulate vertically in a sine-wave pattern. Pure CSS infinite loop.'
      installCommand='shadcn add https://tricklekit.dev/r/wave.json'
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

export function StretchStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Stretch'
      description='Letters stretch wide-and-short, then settle to natural size.'
      installCommand='shadcn add https://tricklekit.dev/r/stretch.json'
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

export function Wobble3DStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Wobble3D'
      description='Letters rotate around the Y-axis. Pure CSS perspective + rotateY.'
      installCommand='shadcn add https://tricklekit.dev/r/wobble-3d.json'
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

export function SpotlightStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Spotlight'
      description='Bright spot moves across text via radial-gradient bg-clip-text.'
      installCommand='shadcn add https://tricklekit.dev/r/spotlight.json'
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

export function MagnetizeStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Magnetize'
      description='Letters scattered, then snap into place with a slight overshoot.'
      installCommand='shadcn add https://tricklekit.dev/r/magnetize.json'
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

export function FloatStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Float'
      description='Letters bob gently up and down with phase-offset stagger.'
      installCommand='shadcn add https://tricklekit.dev/r/float.json'
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

export function PulseTextStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='PulseText'
      description='Text breathes with a soft scale pulse while two ring waves radiate outward like a sonar ping.'
      installCommand='shadcn add https://tricklekit.dev/r/pulse-text.json'
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

export function RainbowRollStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='RainbowRoll'
      description='Hue rotates through the spectrum, staggered per character.'
      installCommand='shadcn add https://tricklekit.dev/r/rainbow-roll.json'
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

export function PixelateStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Pixelate'
      description='Each letter resolves through a chunky pixel grid that snaps in 6 discrete steps. True 8-bit feel.'
      installCommand='shadcn add https://tricklekit.dev/r/pixelate.json'
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

export function ScanlineStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Scanline'
      description='CRT-style horizontal scanlines passing over text. Constant grain overlay.'
      installCommand='shadcn add https://tricklekit.dev/r/scanline.json'
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

export function GrainStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Grain'
      description='Text dissolves into a fine dot pattern, then dots merge until the letters resolve solid.'
      installCommand='shadcn add https://tricklekit.dev/r/grain.json'
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

export function WireframeStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Wireframe'
      description='Each letter drops in as a thick outline that scans across, refines to a thin line, then fills.'
      installCommand='shadcn add https://tricklekit.dev/r/wireframe.json'
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

export function HalftoneStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Halftone'
      description='Halftone dots pulse with increasing amplitude (like a heartbeat building) before merging into solid text.'
      installCommand='shadcn add https://tricklekit.dev/r/halftone.json'
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

export function FlutterStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Flutter'
      description='Subtle random tremor per character, infinite loop. Like nervous text.'
      installCommand='shadcn add https://tricklekit.dev/r/flutter.json'
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

export function BounceStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Bounce'
      description='Each letter drops in then bounces in place 2-3 times like a ball settling.'
      installCommand='shadcn add https://tricklekit.dev/r/bounce.json'
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

export function SpinInStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='SpinIn'
      description='Each letter spins in two full turns on the z-axis, scaling up from zero.'
      installCommand='shadcn add https://tricklekit.dev/r/spin-in.json'
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

export function ShutterStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Shutter'
      description='Vertical-bar mask reveal — like venetian blinds opening.'
      installCommand='shadcn add https://tricklekit.dev/r/shutter.json'
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

export function PlasmaStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Plasma'
      description='Flowing colored plasma blobs inside text via bg-clip + multi radial-gradient.'
      installCommand='shadcn add https://tricklekit.dev/r/plasma.json'
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

export function CompressStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Compress'
      description='Each letter drops in tall, gets slammed flat by a hydraulic press, then springs back to natural size.'
      installCommand='shadcn add https://tricklekit.dev/r/compress.json'
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

export function CarouselFlipStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='CarouselFlip'
      description='Letters live around an invisible 3D ring that spins three full revolutions like a globe, then unwrap and snap into the spelled word.'
      installCommand='shadcn add https://tricklekit.dev/r/carousel-flip.json'
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

export function StaticTextStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='StaticText'
      description='TV-style static noise overlays text, then fades to clear. Atomic texture reveal.'
      installCommand='shadcn add https://tricklekit.dev/r/static-text.json'
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

export function TearStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Tear'
      description='Text rips into top and bottom halves with jagged edges, then heals back together.'
      installCommand='shadcn add https://tricklekit.dev/r/tear.json'
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

export function ReflectStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Reflect'
      description='Mirror reflection beneath text with linear-gradient mask fade.'
      installCommand='shadcn add https://tricklekit.dev/r/reflect.json'
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

export function PhaseStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Phase'
      description='Text phases out and back — fades, blurs, and slips sideways like passing through a barrier.'
      installCommand='shadcn add https://tricklekit.dev/r/phase.json'
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

export function MosaicStrip({ index }: { index: number }) {
  return (
    <DemoStrip
      index={index} name='Mosaic'
      description='Text starts as visible mosaic tiles, then dissolves into clarity as the tiles grow and merge.'
      installCommand='shadcn add https://tricklekit.dev/r/mosaic.json'
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
