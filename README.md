# trickle

> Pure-CSS text animations for React. Zero runtime, SSR-safe, copy-paste install via the shadcn registry.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Status: v0.1](https://img.shields.io/badge/status-v0.1-orange.svg)](https://github.com/akaieuan/trickle-UI-kit)
[![React 18+](https://img.shields.io/badge/React-18.3+-61dafb.svg?logo=react)](https://react.dev)
[![Next.js 15+](https://img.shields.io/badge/Next.js-15+-black.svg?logo=next.js)](https://nextjs.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript strict](https://img.shields.io/badge/TypeScript-strict-3178c6.svg?logo=typescript)](https://www.typescriptlang.org)
[![Bundle: <1kb median](https://img.shields.io/badge/bundle-<1kb%20median-success.svg)](https://github.com/akaieuan/trickle-UI-kit)
[![Animation runtime: 0 deps](https://img.shields.io/badge/animation%20runtime-0%20deps-success.svg)](https://github.com/akaieuan/trickle-UI-kit)

[**Browse components**](https://tricklekit.dev/#catalog) · [**Install reference**](https://tricklekit.dev/#install) · [**Source**](https://github.com/akaieuan/trickle-UI-kit)

---

## What's in the box

**47 hand-tuned text-animation primitives**, distributed shadcn-style. Every animation is pure CSS keyframes — no `framer-motion`, no `motion`, no `react-spring`. The browser does the work; React just orchestrates a couple of state changes.

- **42 of 47 are pure React Server Components** — they ship zero client JavaScript.
- **5 require minimal client state** for orchestration logic that genuinely cannot be expressed as a single keyframe (`Typewriter`, `TypoCorrect`, `DecryptScramble`, `WordRotate`, `MorphSwap`).
- **<1kb gzip per component** (median across the catalog).
- **SSR-safe by construction** — the server renders the final HTML with animation classes applied, the browser starts the animation on first paint, no flash, no hydration mismatch.

---

## Why

Every popular React text-animation library makes you pay a tax to animate one word.

Install `framer-motion` to fade in a heading, you've added 30kb of runtime JavaScript to your bundle and forced every parent component into a `'use client'` boundary. The animation engine wants to live in your application's runtime, with refs into the live DOM, observing layout shifts, owning the render loop. For a library whose primary use case is *text appears nicely on a marketing page*, this is profoundly the wrong tool for the job.

trickle is the argument that text animation should be CSS, and the components that prove it. The CSS Animations spec is twelve years old, GPU-accelerated, server-renderable, declaratively complete for 80% of what marketing pages, dashboards, and hero sections actually need. The browser has been able to animate text natively since 2012 — the only reason we reach for animation libraries is because writing keyframes by hand is tedious, not because the platform is missing capability.

---

## Quick install

Requires **Tailwind v4** and the **shadcn CLI**. If you don't have shadcn initialized:

```bash
npx shadcn@latest init
```

> Tailwind v3 projects can also install components — the shadcn CLI translates v4 `@theme` syntax to v3 config automatically. v4 is recommended.

### Add a component

```bash
npx shadcn@latest add https://tricklekit.dev/r/typewriter.json
```

The CLI will:

- Write `components/trickle/typewriter.tsx` (and `text-root.tsx` if needed as a dependency)
- Merge the `--animate-trickle-caret-blink` token into your `globals.css` `@theme` block
- Append the `@keyframes trickle-caret-blink` rule and the `prefers-reduced-motion` override

### Use it

```tsx
import { Typewriter } from "@/components/trickle/typewriter";

export default function Hero() {
  return (
    <h1>
      Built to{" "}
      <Typewriter
        strings={["amplify your work", "augment your judgment", "be yours"]}
        loop
        charDelay={70}
      />
    </h1>
  );
}
```

That's the whole API. No provider, no context, no setup.

---

## Catalog

47 components organized by primary mechanism.

### Reveal (text appears on mount or scroll-into-view)

| Component | Mechanism | Notes |
|---|---|---|
| `HighlighterSweep` | Background-size sweep | Sequential per-word highlight |
| `TypoCorrect` | Per-letter scramble + correct | One of trickle's originals |
| `TextReveal` | `mode="fade-up" \| "blur" \| "slide" \| "scale"` | General-purpose primitive |
| `Typewriter` | Char-by-char with caret | `loop`, `strings[]` props |
| `WordCascade` | Per-word stagger from below | CSS `var(--i)` indexing |
| `CharStagger` | Per-char fade or slide | Minimal, dependable |
| `Bounce` | Per-char drop + bounce-in-place | 3 visible bounces with damping |
| `SpinIn` | Per-char z-axis 720° rotation | Scales 0 → 1 |
| `Shatter` | Per-char 4-shard convergence | True sub-character breaking |
| `Compress` | Hydraulic-press squash | Drops in tall, slammed flat, springs back |
| `Wireframe` | Per-char stroke draw + fill | Drops in as outline, refines, fills |
| `Pixelate` | Crossed-gradient mask + steps | 8-bit pixel grid resolves |
| `Grain` | Radial dot mask dissolve | Word forms from dots |
| `Mosaic` | Crossed-gradient with steps(4) | Chunky tile breakdown |
| `Halftone` | Pulsing radial dots | Dots beat before merging |
| `Tear` | Top/bottom polygon clip-path | Rip + heal |
| `Stamp` | Drop + slam + recoil | Motion-blur impact |
| `Shutter` | Mask-size shutter expansion | Vertical-bar reveal |
| `ScaleSlam` | Scale 2.5 → 1 with overshoot | Aggressive entrance |

### Continuous (loop forever)

| Component | Mechanism | Notes |
|---|---|---|
| `GradientShift` | `@property` rotated angle | Smooth gradient rotation |
| `ShinyShimmer` | `bg-clip:text` with panning gradient | Light glare across text |
| `WordRotate` | Vertical wheel through `words[]` | Crossfade per item |
| `AuroraText` | Conic-gradient layers | Aurora-borealis feel |
| `MorphSwap` | Cycle words with letter-stagger morph | Per-letter crossfade |
| `Wave` | Per-char vertical bob | Sine-wave undulation |
| `Wobble3D` | Whole-word 3D rotation | Subtle perspective wobble |
| `Float` | Per-char multi-axis drift | Phase-staggered floating |
| `RainbowRoll` | Per-char hue-rotate offset | Rainbow ripples through word |
| `Flutter` | Per-char jitter | CSS variables for x/y |
| `PulseText` | Scale pulse + ripple rings | Sonar ping effect |
| `Spotlight` | Radial gradient sweep | Light-source pass |
| `Magnetize` | Per-char attract animation | Letters pull together |
| `Plasma` | Multi-layer radial gradient | Plasma color blobs |
| `MarqueeRibbon` | Horizontal scroll | Edge-fade gradients |
| `Phase` | Opacity + blur + slip | Ghostly phase-out |
| `NeonFlicker` | Cold-start sputter sequence | Sign warming up |
| `CarouselFlip` | 3D ring spin → resolve | Globe spin then spell word |

### Effects (special-purpose)

| Component | Mechanism |
|---|---|
| `DecryptScramble` | Random char scramble that resolves to target |
| `InkBleed` | `mask-image: radial-gradient` ink spread |
| `ConfettiText` | Per-char particle burst on mount |
| `GlitchSplit` | Horizontal slice displacement (broken-signal feel) |
| `UnderlineDraw` | Background-size underline draw |
| `Echo` | Multi-layer ghost trail outward |
| `Reflect` | Mirrored text reflection |
| `Stretch` | Letter-spacing + scaleX deformation |
| `Scanline` | CRT scanline overlay |
| `StaticText` | TV-static texture reveal |

---

## Architecture

### How a component becomes installable

trickle is two coordinated artifacts: the React components you write, and the registry JSON that lets shadcn install them.

```
Source                              Built artifact
──────                              ──────────────
registry/default/typewriter/        →   public/r/typewriter.json
  typewriter.tsx                          {
                                            files: [{path, target}],
registry.json                               cssVars: {theme: {...}},
  └─ typewriter entry                       css: {@keyframes, @media},
       ├─ files                             registryDependencies: [...]
       ├─ cssVars.theme                   }
       ├─ css.@keyframes                              ↓
       └─ registryDependencies         npx shadcn add https://tricklekit.dev/r/typewriter.json
                                                      ↓
                                       components/trickle/typewriter.tsx
                                       components/trickle/text-root.tsx (transitive dep)
                                       globals.css (merged @theme + @keyframes + reduced-motion)
```

### The TextRoot pattern

Components that need lifecycle awareness (mount-trigger, view-trigger, reduced-motion) compose the [`useTextRoot`](registry/default/text-root/text-root.tsx) hook. Pure-CSS components don't import it at all — they're plain RSC.

```tsx
// Inside a stateful component (e.g. Typewriter):
const { ready, prefersReducedMotion, setRef } = useTextRoot({ trigger: 'mount', delay: 300 });
```

Server renders with `ready=false` → static fallback visible without JS. Client hydrates → `ready=true` → animation classes applied. No flash, no hydration mismatch.

### The `@property` + CSS variables pattern

Animations that need smooth interpolation of custom properties (gradient angles, dot densities, shard offsets) declare them with `@property`:

```css
@property --trickle-gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
```

This unlocks fluid animation of values that would otherwise snap discretely between keyframes.

### Reduced-motion is a first-class concern

Every keyframe ships with a `@media (prefers-reduced-motion: reduce)` override that skips to the final visible state. Many components also expose `prefers-reduced-motion` to the JS layer via the `useTextRoot` hook so JS-orchestrated effects (Typewriter, DecryptScramble) can also short-circuit.

---

## Repository structure

```
trickle/
├── app/                             Next.js 15 App Router (the docs site)
│   ├── page.tsx                     Marketing page + interactive catalog
│   ├── audit/page.tsx               Single-strip render route for QA
│   ├── globals.css                  Tailwind v4 @theme + @keyframes
│   └── layout.tsx
├── components/
│   └── site/                        Docs site components (DemoStrip, ControlPanel, etc.)
├── registry/                        ── SOURCE OF TRUTH for shipped components ──
│   └── default/
│       ├── text-root/text-root.tsx        Orchestration shell (dep of stateful components)
│       ├── typewriter/typewriter.tsx
│       ├── shatter/shatter.tsx
│       └── … one folder per component
├── public/r/                        ── GENERATED by `pnpm registry:build` ──
│   └── <name>.json                  one per component, served at tricklekit.dev/r/<name>.json
├── registry.json                    ROOT manifest, feeds `shadcn build`
├── components.json                  shadcn config for the docs site itself
├── lib/cn.ts                        tailwind-merge helper
├── scripts/
│   ├── new-component.ts             pnpm new <name> — scaffold tsx + registry entry
│   └── validate-registry.ts         CI: zod-validate every public/r/*.json
└── next.config.ts                   CORS + cache headers on /r/(.*)
```

---

## Local development

```bash
pnpm install
pnpm dev                              # docs site at http://localhost:3000
```

Useful scripts:

| Command | What it does |
|---|---|
| `pnpm dev` | Next.js dev server (Turbopack) |
| `pnpm build` | Registry build + production Next build |
| `pnpm typecheck` | `tsc --noEmit` (strict) |
| `pnpm lint` | ESLint flat config |
| `pnpm registry:build` | Runs `shadcn build`, regenerates `public/r/*.json` |
| `pnpm registry:validate` | Zod-checks every JSON in `public/r/` |
| `pnpm new <name>` | Scaffolds a new component (tsx + registry entry) |

### Adding a component

```bash
pnpm new my-component
```

Generates:

- `registry/default/my-component/my-component.tsx` skeleton
- A new entry block in `registry.json` with placeholder `cssVars` + `css` blocks

Implement the animation, add the keyframe to `app/globals.css` AND to the new entry's `css` block (these must stay in sync — the global stylesheet is for the docs site, the registry block is what consumers receive), then run `pnpm registry:build && pnpm typecheck`.

---

## Design principles

Every animation is judged against three axes before it ships:

**Distinct motion signature** — could you name the component from the visual alone? If two animations look like the same gesture in different colors, one of them shouldn't exist. v0.1 cut four duplicates from the original draft (Drip, CurtainReveal, VerticalSlide, PaperFold) for failing this test.

**Per-character expression where it matters** — generic entrance animations are the easy mode. The interesting components express the *concept* of the animation through the character itself: `Shatter` breaks chars into clip-path shards, `Pixelate` resolves through a sub-character pixel grid, `CarouselFlip` positions chars on a rotating 3D ring, `Wireframe` draws stroke outlines per char before filling.

**Fluidity** — `mask-image` switching between gradient *types* mid-animation snaps discretely (browsers can't interpolate). All masked components keep `mask-image` constant on the class and animate only `mask-size`/`mask-position`. Same rule for `clip-path` polygons.

---

## Browser support

Modern Chrome / Safari / Firefox / Edge (last 2 versions). Components rely on:

- CSS custom properties (`@property` for typed registration)
- `mask-image` + `mask-composite: intersect`
- `clip-path: polygon()`
- `backdrop-filter` (a few components)
- `prefers-reduced-motion` media query
- `IntersectionObserver` (in `useTextRoot` view trigger only)

No IE11. No legacy Edge. No polyfills shipped.

---

## Versioning

trickle follows [Changesets](https://github.com/changesets/changesets) for changelog discipline. v0.1 is the initial public release — 47 components, registry-installable, production build clean.

Distribution is shadcn-CLI only by design. There is no installable npm package and no plan for one — the registry IS the distribution. You own the source the moment you run `shadcn add`.

---

## Contributing

Open an issue describing the new component (concept + reference) before opening a PR. Each new entry must:

1. Have a distinct motion signature from existing components
2. Pass the audit framework rubric (creativity / authenticity / fluidity)
3. Ship with `prefers-reduced-motion` override
4. Validate via `pnpm registry:validate`

For typo fixes / small bugs, PR directly. For new components or breaking API changes, propose first.

---

## License

MIT for the components and orchestration shell.
CC0 for the demo files in `registry/examples/` so you can paste them freely.

---

## Credits

Built on [shadcn](https://ui.shadcn.com)'s registry CLI pattern.
Tailwind v4's `@theme` token system makes the per-component CSS variable orchestration possible.
The `@property` rule and modern `mask-composite` semantics make the sub-character techniques (Shatter, Pixelate, Mosaic) feasible without a JS animation runtime.

— Built by [@akaieuan](https://github.com/akaieuan)
