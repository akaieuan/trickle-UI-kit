'use client';

import { DemoStrip } from '@/components/site/demo-strip';
import { HighlighterSweep } from '@/registry/default/highlighter-sweep/highlighter-sweep';
import { Magnetize } from '@/registry/default/magnetize/magnetize';
import { TextReveal } from '@/registry/default/text-reveal/text-reveal';
import { Typewriter } from '@/registry/default/typewriter/typewriter';

export function HighlighterSweepStrip() {
  return (
    <DemoStrip
      index={1}
      name='HighlighterSweep'
      description='Sequential word highlight reveal driven by a CSS background-size keyframe.'
      installCommand='shadcn add @trickle/highlighter-sweep'
      spec={[
        { label: 'gzip', value: '0.7kb' },
        { label: 'client', value: 'no', tone: 'good' },
        { label: 'since', value: 'v0.1' }
      ]}
      replay={6000}
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
      render={(values) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <HighlighterSweep
            as='span'
            segments={[
              { text: 'Built to ' },
              { text: 'amplify', highlight: true },
              { text: ' your ' },
              { text: 'work', highlight: true },
              { text: '.' }
            ]}
            color='oklch(80% 0.18 80 / 0.55)'
            delay={values.delay ?? 300}
            interval={values.interval ?? 250}
          />
        </h3>
      )}
    />
  );
}

export function TextRevealStrip() {
  return (
    <DemoStrip
      index={3}
      name='TextReveal'
      description='Fade-up, blur, slide, or scale reveal — per char, per word, or as a single block.'
      installCommand='shadcn add @trickle/text-reveal'
      spec={[
        { label: 'gzip', value: '0.6kb' },
        { label: 'client', value: 'no', tone: 'good' },
        { label: 'since', value: 'v0.1' }
      ]}
      replay={6000}
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 70 }}
      code={`<TextReveal split="word" delay={200} stagger={70}>
  Hello, beautiful world.
</TextReveal>`}
      render={(values) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <TextReveal split='word' stagger={values.stagger ?? 70} delay={values.delay ?? 200}>
            Hello, beautiful world.
          </TextReveal>
        </h3>
      )}
    />
  );
}

export function TypewriterStrip() {
  return (
    <DemoStrip
      index={4}
      name='Typewriter'
      description='Character-by-character typing with caret. Multi-string cycling.'
      installCommand='shadcn add @trickle/typewriter'
      spec={[
        { label: 'gzip', value: '1.1kb' },
        { label: 'client', value: 'yes', tone: 'warn' },
        { label: 'since', value: 'v0.1' }
      ]}
      replay={6000}
      side='left'
      controls={[
        { key: 'charDelay', label: 'speed', min: 30, max: 200, step: 10, unit: 'ms' },
        { key: 'holdDuration', label: 'hold', min: 500, max: 3000, step: 100, unit: 'ms' }
      ]}
      defaultValues={{ charDelay: 70, holdDuration: 1200 }}
      code={`<Typewriter
  strings={['Beautiful.', 'Server-safe.', 'Yours.']}
  loop
  charDelay={70}
  holdDuration={1200}
/>`}
      render={(values) => (
        <h3 className='text-2xl font-normal leading-snug sm:text-3xl'>
          <Typewriter
            strings={['Beautiful.', 'Server-safe.', 'Yours.']}
            loop
            charDelay={values.charDelay ?? 70}
            holdDuration={values.holdDuration ?? 1200}
          />
        </h3>
      )}
    />
  );
}

export function MagnetizeStrip() {
  return (
    <DemoStrip
      index={28}
      name='Magnetize'
      description='Letters scattered, then snap into place with a slight overshoot.'
      installCommand='shadcn add @trickle/magnetize'
      spec={[
        { label: 'gzip', value: '0.9kb' },
        { label: 'client', value: 'no', tone: 'good' },
        { label: 'since', value: 'v0.1' }
      ]}
      replay={6000}
      side='left'
      controls={[
        { key: 'delay', label: 'delay', min: 0, max: 1000, step: 50, unit: 'ms' },
        { key: 'stagger', label: 'stagger', min: 20, max: 200, step: 10, unit: 'ms' }
      ]}
      defaultValues={{ delay: 200, stagger: 70 }}
      code={`<Magnetize text="Magnetize" delay={200} stagger={70} />`}
      render={(values) => (
        <h3 className='text-3xl font-medium tracking-tight sm:text-4xl'>
          <Magnetize text='Magnetize' delay={values.delay ?? 200} stagger={values.stagger ?? 70} />
        </h3>
      )}
    />
  );
}
