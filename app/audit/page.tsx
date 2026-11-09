import type { ComponentType } from 'react';
import {
  BounceStrip,
  CarouselFlipStrip,
  CompressStrip,
  FloatStrip,
  GlitchSplitStrip,
  GrainStrip,
  MosaicStrip,
  PhaseStrip,
  PixelateStrip,
  PlasmaStrip,
  RainbowRollStrip,
  ReflectStrip,
  ShatterStrip,
  ShutterStrip,
  SpinInStrip,
  StaticTextStrip,
  TearStrip,
  WireframeStrip
} from '@/components/site/controlled-strips';

const STRIPS: Record<string, ComponentType<{ index: number }>> = {
  bounce: BounceStrip,
  'spin-in': SpinInStrip,
  shutter: ShutterStrip,
  plasma: PlasmaStrip,
  compress: CompressStrip,
  'carousel-flip': CarouselFlipStrip,
  'static-text': StaticTextStrip,
  tear: TearStrip,
  reflect: ReflectStrip,
  phase: PhaseStrip,
  mosaic: MosaicStrip,
  shatter: ShatterStrip,
  'glitch-split': GlitchSplitStrip,
  float: FloatStrip,
  'rainbow-roll': RainbowRollStrip,
  pixelate: PixelateStrip,
  grain: GrainStrip,
  wireframe: WireframeStrip
};

export default async function AuditPage({
  searchParams
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'bounce' } = await searchParams;
  const key = s in STRIPS ? s : 'bounce';
  const Strip = STRIPS[key] ?? BounceStrip;
  return (
    <div className='site-inset mx-auto max-w-site py-10'>
      <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-rule-soft pb-4'>
        <h1 className='font-mono text-10 uppercase tracking-[0.14em] text-ink-faint'>
          audit
        </h1>
        <span className='text-ink-faint' aria-hidden='true'>
          ·
        </span>
        <p className='font-mono text-11 text-ink-body'>{key}</p>
      </div>
      <div className='mt-8'>
        <Strip key={key} index={1} />
      </div>
    </div>
  );
}
