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
  const Strip = STRIPS[s] ?? BounceStrip;
  return (
    <div className='mx-auto max-w-5xl px-8 sm:px-12 lg:px-16 pt-8'>
      <Strip key={s} index={1} />
    </div>
  );
}
