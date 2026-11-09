import type { ComponentType } from 'react';
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
  PhaseStrip,
  PixelateStrip,
  PlasmaStrip,
  PulseTextStrip,
  RainbowRollStrip,
  ReflectStrip,
  ScaleSlamStrip,
  ScanlineStrip,
  ShatterStrip,
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

/* ══════════════════════════════════════════════════════════════════
   The catalog, as data.

   The home page lays these out as a grid of cards; /c/[slug] renders
   one of them in full. Both read this file, so a component added here
   appears in the grid and gets its own page in the same move.

   `slug` is the registry name — the directory under registry/default
   and the `/r/<slug>.json` the install command points at. A card
   derives the same slug from its own install command, so the two can
   only agree.
   ══════════════════════════════════════════════════════════════════ */

export type StripComponent = ComponentType<{ index: number }>;

export interface CatalogEntry {
  slug: string;
  name: string;
  Component: StripComponent;
}

export interface CatalogSection {
  id: string;
  name: string;
  /** The group's hue, mixed into the plate ground at --plate-mix. */
  tint: string;
  items: CatalogEntry[];
}

/* Desaturated on purpose: at --plate-mix strength the tint should read
   as a family resemblance between neighbours, not as a colour. */
export const SECTIONS: CatalogSection[] = [
  {
    id: 'reveal',
    name: 'Reveal',
    tint: '#d9a441',
    items: [
      { slug: 'text-reveal', name: 'TextReveal', Component: TextRevealStrip },
      { slug: 'typewriter', name: 'Typewriter', Component: TypewriterStrip },
      { slug: 'word-cascade', name: 'WordCascade', Component: WordCascadeStrip },
      { slug: 'char-stagger', name: 'CharStagger', Component: CharStaggerStrip },
      { slug: 'decrypt-scramble', name: 'DecryptScramble', Component: DecryptScrambleStrip },
      { slug: 'typo-correct', name: 'TypoCorrect', Component: TypoCorrectStrip },
      { slug: 'ink-bleed', name: 'InkBleed', Component: InkBleedStrip }
    ]
  },
  {
    id: 'emphasis',
    name: 'Emphasis',
    tint: '#c4703f',
    items: [
      { slug: 'highlighter-sweep', name: 'HighlighterSweep', Component: HighlighterSweepStrip },
      { slug: 'underline-draw', name: 'UnderlineDraw', Component: UnderlineDrawStrip },
      { slug: 'spotlight', name: 'Spotlight', Component: SpotlightStrip },
      { slug: 'stamp', name: 'Stamp', Component: StampStrip },
      { slug: 'confetti-text', name: 'ConfettiText', Component: ConfettiTextStrip }
    ]
  },
  {
    id: 'color',
    name: 'Color',
    tint: '#bb6079',
    items: [
      { slug: 'aurora-text', name: 'AuroraText', Component: AuroraTextStrip },
      { slug: 'shiny-shimmer', name: 'ShinyShimmer', Component: ShinyShimmerStrip },
      { slug: 'gradient-shift', name: 'GradientShift', Component: GradientShiftStrip },
      { slug: 'rainbow-roll', name: 'RainbowRoll', Component: RainbowRollStrip },
      { slug: 'neon-flicker', name: 'NeonFlicker', Component: NeonFlickerStrip },
      { slug: 'plasma', name: 'Plasma', Component: PlasmaStrip }
    ]
  },
  {
    id: 'motion',
    name: 'Motion',
    tint: '#5580a8',
    items: [
      { slug: 'bounce', name: 'Bounce', Component: BounceStrip },
      { slug: 'float', name: 'Float', Component: FloatStrip },
      { slug: 'magnetize', name: 'Magnetize', Component: MagnetizeStrip },
      { slug: 'scale-slam', name: 'ScaleSlam', Component: ScaleSlamStrip },
      { slug: 'spin-in', name: 'SpinIn', Component: SpinInStrip },
      { slug: 'wave', name: 'Wave', Component: WaveStrip },
      { slug: 'stretch', name: 'Stretch', Component: StretchStrip },
      { slug: 'compress', name: 'Compress', Component: CompressStrip },
      { slug: 'wobble-3d', name: 'Wobble3D', Component: Wobble3DStrip },
      { slug: 'flutter', name: 'Flutter', Component: FlutterStrip },
      { slug: 'pulse-text', name: 'PulseText', Component: PulseTextStrip }
    ]
  },
  {
    id: 'glitch',
    name: 'Glitch',
    tint: '#7a68b4',
    items: [
      { slug: 'glitch-split', name: 'GlitchSplit', Component: GlitchSplitStrip },
      { slug: 'shatter', name: 'Shatter', Component: ShatterStrip },
      { slug: 'tear', name: 'Tear', Component: TearStrip },
      { slug: 'morph-swap', name: 'MorphSwap', Component: MorphSwapStrip }
    ]
  },
  {
    id: 'texture',
    name: 'Texture',
    tint: '#6f8f6a',
    items: [
      { slug: 'grain', name: 'Grain', Component: GrainStrip },
      { slug: 'pixelate', name: 'Pixelate', Component: PixelateStrip },
      { slug: 'scanline', name: 'Scanline', Component: ScanlineStrip },
      { slug: 'halftone', name: 'Halftone', Component: HalftoneStrip },
      { slug: 'wireframe', name: 'Wireframe', Component: WireframeStrip },
      { slug: 'mosaic', name: 'Mosaic', Component: MosaicStrip }
    ]
  },
  {
    id: 'sequence',
    name: 'Sequence',
    tint: '#3f8d88',
    items: [
      { slug: 'word-rotate', name: 'WordRotate', Component: WordRotateStrip },
      { slug: 'carousel-flip', name: 'CarouselFlip', Component: CarouselFlipStrip },
      { slug: 'echo', name: 'Echo', Component: EchoStrip },
      { slug: 'phase', name: 'Phase', Component: PhaseStrip },
      { slug: 'shutter', name: 'Shutter', Component: ShutterStrip },
      { slug: 'marquee-ribbon', name: 'MarqueeRibbon', Component: MarqueeRibbonStrip },
      { slug: 'static-text', name: 'StaticText', Component: StaticTextStrip },
      { slug: 'reflect', name: 'Reflect', Component: ReflectStrip }
    ]
  }
];

/** Every entry in catalog order, carrying the group it belongs to. */
export const ENTRIES: (CatalogEntry & { section: CatalogSection })[] = SECTIONS.flatMap((section) =>
  section.items.map((item) => ({ ...item, section }))
);

export function findEntry(slug: string) {
  const index = ENTRIES.findIndex((e) => e.slug === slug);
  const entry = index === -1 ? undefined : ENTRIES[index];
  if (!entry) return null;
  return {
    entry,
    previous: ENTRIES[index - 1] ?? null,
    next: ENTRIES[index + 1] ?? null
  };
}
