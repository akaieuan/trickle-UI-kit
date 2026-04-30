# trickle

> Text animations that trickle into your React app. Pure CSS keyframes. Zero animation runtime. SSR-safe.

[**Browse components**](https://trickle.dev/#catalog) · [**Install reference**](https://trickle.dev/#install) · [**GitHub**](https://github.com/akaieuan/trickle-UI-kit)

**Status:** v0.1 · 34 components installable via shadcn CLI. 29 of 34 are pure React server components — they ship zero client JavaScript. Median gzip per component: <1kb. Animation engine dependencies: zero.

---

## Why this exists

**Every popular React text-animation library makes you pay a tax to animate one word.**

Install `framer-motion` to fade in a heading, you've added 30kb of runtime JavaScript to your bundle and forced every parent component into a `'use client'` boundary. Install `motion`, same story. Install `react-spring`, same story. The animation engine wants to live in your application's runtime, with refs into the live DOM, observing layout shifts, owning the render loop. For a library whose primary use case is *text appears nicely on a marketing page*, this is profoundly the wrong tool for the job.

**trickle is the argument that text animation should be CSS, and the components that prove it.**

The CSS Animations spec is twelve years old, GPU-accelerated, server-renderable, declaratively complete for 80% of what marketing pages, dashboards, and hero sections actually need. The browser has been able to animate text natively since 2012. The only reason we reach for animation libraries is because writing keyframes by hand is tedious — not because the platform is missing capability.

trickle ships 34 hand-tuned keyframe animations as React components, distributed via the shadcn CLI. You install one with a single command. The component file lives in your repo. You own the source.

### Three coordinated artifacts, one project

#### 1. A component library

34 React text-animation primitives. Each one is a single .tsx file (most under 100 lines) plus its keyframe block. **29 of 34 are pure React Server Components** — they don't need `'use client'` because the animation runs in CSS, not JavaScript. The 5 stateful exceptions (`Typewriter`, `TypoCorrect`, `DecryptScramble`, `WordRotate`, `MorphSwap`) only need JS for orchestration logic that genuinely cannot be expressed as a single keyframe.

#### 2. A shadcn-compatible registry

Every component installs with one CLI command:

```bash
npx shadcn@latest add https://trickle.dev/r/typewriter.json
```

No fork, no vendor lock-in, no wrapper SDK. The CLI:

1. Fetches the registry JSON for the component
2. Resolves transitive dependencies (e.g. `Typewriter` depends on `text-root`)
3. Writes the `.tsx` files into `components/trickle/` (or wherever your `components.json` points)
4. Rewrites import paths to match your alias setup
5. Merges `@theme` tokens and `@keyframes` rules into your `globals.css`

Same model as shadcn/ui itself. Copy, paste, own.

#### 3. A pure-CSS architecture

The non-obvious thing trickle proves: the entire animation layer can be CSS keyframes orchestrated by minimal React state. No animation library. No runtime measurement. No layout observation. The result:

- **<1kb gzip per component** (median across the catalog)
- **Zero runtime animation dependencies** in your bundle
- **SSR-safe by construction** — the server renders the final HTML with animation classes applied, the browser starts the animation on first paint, no flash, no hydration mismatch
- **Pure React Server Component for 29/34 components** — they ship zero JS to the client

Together: the components are the proof, the registry is the distribution, the architecture is the wedge.

---

## Quick install

### Prerequisites

A Tailwind v4 project. If you don't have shadcn initialized:

```bash
npx shadcn@latest init
```

> Tailwind v3 projects can also install components — the shadcn CLI translates v4 `@theme` syntax to v3 config automatically. v4 is recommended.

### Add the trickle registry to your `components.json`

To use the namespaced shorthand (`@trickle/<name>`), register the registry endpoint:

```json
{
  "registries": {
    "@trickle": "https://trickle.dev/r/{name}.json"
  }
}
```

Or skip this and use full URLs in install commands.

### Install a component

```bash
npx shadcn@latest add @trickle/typewriter
```

Or by URL:

```bash
npx shadcn@latest add https://trickle.dev/r/typewriter.json
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

## Architecture

### How a component becomes installable

```
   ┌─────────────────────────────────────────────────────────────┐
   │  registry/default/typewriter/typewriter.tsx                 │
   │  ─ source of truth, ~80 lines                                │
   └────────────────────┬────────────────────────────────────────┘
                        │  pnpm registry:build  (= shadcn build)
                        ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  public/r/typewriter.json                                    │
   │  ─ self-contained: file content + cssVars + @keyframes       │
   └────────────────────┬────────────────────────────────────────┘
                        │  npx shadcn add @trickle/typewriter
                        ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  consumer's repo:                                            │
   │   components/trickle/typewriter.tsx  (CLI rewrites imports)  │
   │   app/globals.css  (CLI merges @theme + @keyframes)          │
   └─────────────────────────────────────────────────────────────┘
```

The registry JSON encodes everything needed to install the component into an arbitrary project: the file content, the `--animate-*` design tokens, the `@keyframes` rules, and the `@media (prefers-reduced-motion: reduce)` override. The CLI handles import-path rewriting (`@/registry/default/text-root/text-root` → `@/components/trickle/text-root`) automatically based on the consumer's `components.json` aliases.

### Why most components don't need `'use client'`

The traditional pattern in motion libraries: `useEffect` fires on hydration, the library reads `getBoundingClientRect()`, attaches an animation observer, drives a `requestAnimationFrame` loop. This requires JavaScript. So the component is forced to be a Client Component.

trickle inverts this. The animation is entirely declarative CSS:

```css
@keyframes trickle-fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-trickle-fade-up {
  animation: trickle-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

The component renders the markup with the animation class:

```tsx
// No 'use client'
export function TextReveal({ children, mode = 'fade-up', delay = 0 }: Props) {
  return (
    <span
      className={cn('inline-block', MODE_TO_ANIMATION[mode])}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}
```

The browser handles the rest. The animation starts when the element is parsed. `animation-fill-mode: both` keeps the element in the "from" state during the delay window, so there's no flash of un-styled content. With nothing to hydrate, the component is a pure RSC.

### The 5 components that genuinely need state

| Component | Why it needs JS |
|---|---|
| `Typewriter` | Char-by-char typing requires a state machine that ticks one character at a time, with optional multi-string cycling and a backspace phase. |
| `TypoCorrect` | Four-phase animation (hidden → flying → misspelled → correcting) with per-phase setTimeouts. |
| `DecryptScramble` | Random characters re-roll every ~30ms; resolved character count increases over time. |
| `WordRotate` | Cycles through a list of words on a setInterval, with crossfade between active and inactive entries. |
| `MorphSwap` | Cycles through words with a paired morph-out → morph-in transition between each. |

These five share a lightweight `useTextRoot` hook for `prefers-reduced-motion` detection and trigger orchestration. Every other component is a pure RSC.

---

## The 34 components

### Tier 1 — Foundation (1)

| Component | Description |
|---|---|
| `text-root` | Hydration-safe orchestration shell + `useTextRoot` hook. Required dependency for the 5 stateful components. |

### Tier 2 — Reveals (8)

| Component | Description |
|---|---|
| `text-reveal` | Fade-up, blur, slide, or scale reveal — per char, per word, or as a single block. |
| `word-cascade` | Words slide in from below, staggered. |
| `char-stagger` | Per-character fade or slide with tighter rhythm. |
| `paper-fold` | Letters fold open via 3D `rotateX` with parent perspective. |
| `ink-bleed` | Reveals via clip-path circle from origin point + blur unmask. |
| `curtain-reveal` | Clip-path wipe in any direction (`left` / `right` / `up` / `down`). |
| `vertical-slide` | Letters slide in from above with stagger. Counterpart to `word-cascade`. |
| `scale-slam` | Letters slam in from huge to normal with overshoot bounce. |

### Tier 3 — Highlights & decorations (5)

| Component | Description |
|---|---|
| `highlighter-sweep` | Sequential word-highlight reveal driven by `background-size` keyframe. |
| `underline-draw` | Animated underline draws left-to-right under the text. |
| `gradient-shift` | Animated gradient bg-clip-text via `@property` for smooth angle rotation. |
| `aurora-text` | Animated multi-stop aurora gradient (green/sky/violet/amber). |
| `shiny-shimmer` | Light glare panning across text. Always-on or hover-only. |

### Tier 4 — Stateful (5)

| Component | Description |
|---|---|
| `typewriter` | Character-by-character typing with caret. Multi-string cycle. |
| `typo-correct` | Letters fly in misspelled, then correct themselves character-by-character. |
| `decrypt-scramble` | Random characters scramble into the target. Configurable charset (`alphanum` / `binary` / `hex` / `katakana` / `symbols`). |
| `word-rotate` | Vertical wheel cycling through a word list. Crossfade between entries. |
| `morph-swap` | Cycles through words with letter-staggered morph between each. |

### Tier 5 — Loops & ambient (8)

| Component | Description |
|---|---|
| `wave` | Letters undulate vertically in a sine-wave pattern. |
| `float` | Letters bob gently up and down with phase-offset stagger. |
| `pulse-text` | Rhythmic scale + opacity pulse — like a heartbeat. |
| `flutter` | Subtle random tremor per character — like nervous text. |
| `wobble-3d` | Letters rotate around the Y-axis with parent perspective. |
| `echo` | Multi-layer ghost ripple — translates, scales, and blurs outward. |
| `marquee-ribbon` | Horizontally scrolling ribbon with edge-fade gradient masks. |
| `rainbow-roll` | Hue rotates through the spectrum, staggered per character. |

### Tier 6 — Effects (7)

| Component | Description |
|---|---|
| `neon-flicker` | Neon glow with irregular flicker pattern. |
| `glitch-split` | RGB-channel-split glitch via twin pseudo-elements with clip-path slicing. |
| `spotlight` | Bright spot moves across text via radial-gradient bg-clip. |
| `magnetize` | Letters scattered, then snap into place with overshoot. |
| `drip` | Letters drop down from above with overshoot bounce. |
| `stretch` | Horizontal stretching via scaleX + letter-spacing animation. |
| `confetti-text` | One-shot burst of small colored squares from each character on mount. |
| `stamp` | Lands like a rubber stamp with a bouncy scale settle. |

(The catalog totals 34 components plus the foundation `text-root`, for 34 visible animations + 1 hook.)

---

## What's in this repo

```
.
├── app/
│   ├── globals.css                The Tailwind v4 entry + theme tokens + all 34 keyframes
│   ├── layout.tsx                 Root layout with theme-init script (light/dark, no FOUC)
│   └── page.tsx                   Landing — hero / stats / catalog / philosophy
├── components/
│   ├── site/
│   │   ├── header.tsx             Sticky header with theme toggle + live indicator
│   │   ├── footer.tsx             Footer with MIT note and links
│   │   ├── demo-strip.tsx         Per-component strip — preview / code tab + optional controls
│   │   ├── controlled-strips.tsx  Client wrappers for strips with parameter sliders
│   │   ├── code-block.tsx         Mono code preview with copy-to-clipboard + light syntax highlight
│   │   ├── control-panel.tsx      Range-slider control panel for tweaking demo props live
│   │   ├── spec-line.tsx          Mono key:value metadata line (gzip / client / since)
│   │   ├── install-snippet.tsx    The install command box at the top of the page
│   │   └── theme-toggle.tsx       Light/dark toggle persisted to localStorage
│   └── ui/                        shadcn primitives the docs site uses (Tabs, Button, etc.)
├── content/
│   └── docs/                      MDX docs pages (one per component)
├── registry/
│   └── default/
│       ├── text-root/             Foundation hook + render-prop wrapper
│       └── <name>/                One folder per component (34 of them)
├── public/r/                      Generated registry JSON — one per component
├── lib/
│   └── cn.ts                      Standard tailwind-merge cn() helper
├── scripts/
│   ├── new-component.ts           pnpm new <name> — scaffolds component + docs + registry entry
│   └── validate-registry.ts       Zod-validates each public/r/*.json against the schema
├── registry.json                  Root manifest fed to `shadcn build`
├── components.json                Shadcn config for the docs site
├── next.config.ts                 CORS + cache headers on /r/*
├── eslint.config.mjs              Flat ESLint config (Next + TypeScript)
├── LICENSE                        MIT
├── LICENSE-DEMOS                  CC0 (for files in registry/examples/)
├── CONTRIBUTING.md                How to add a new component
├── CODE_OF_CONDUCT.md             Contributor Covenant 2.1
└── SECURITY.md                    How to report vulnerabilities
```

---

## Develop locally

```bash
git clone https://github.com/akaieuan/trickle-UI-kit.git
cd trickle-UI-kit
pnpm install
pnpm dev
```

Then:

- `pnpm dev` — Next.js dev server (Turbopack)
- `pnpm registry:build` — runs `shadcn build`, regenerates `public/r/*.json` from `registry.json`
- `pnpm registry:validate` — Zod-checks every JSON in `public/r/`
- `pnpm typecheck` — `tsc --noEmit` strict
- `pnpm build` — registry build + production Next build (static prerender)
- `pnpm lint` — ESLint flat config

### Add a new component

```bash
pnpm new my-component
```

Scaffolds:

- `registry/default/my-component/my-component.tsx` (skeleton)
- `registry/examples/my-component-demo.tsx` (CC0 demo file)
- `content/docs/components/my-component.mdx` (docs page)
- A new entry in `registry.json`

Then implement the animation, add the keyframe to `app/globals.css` and to the new entry's `css` block, and run `pnpm registry:build && pnpm typecheck`.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full checklist (a11y, browser support, bundle size targets, changeset workflow).

---

## Accessibility

Every keyframe ships with a `@media (prefers-reduced-motion: reduce)` override that skips the animation to its final state. Stateful components (`Typewriter`, `DecryptScramble`, etc.) also branch on `usePrefersReducedMotion` to skip their JS work entirely — reduced-motion users see the final string immediately without any tick-by-tick rendering.

Per-character animations wrap the visible text in `aria-hidden="true"` and expose the full string via `aria-label` on the parent, so screen readers read the text once instead of letter-by-letter.

---

## License

MIT for the components and source code. CC0 for files in `registry/examples/` so you can paste demo source into your project freely. See [LICENSE](./LICENSE) and [LICENSE-DEMOS](./LICENSE-DEMOS).

---

## Status

v0.1 is the initial public release. 34 components, registry-installable, production build clean. No npm package yet — distribution is shadcn-CLI only at this stage.

The roadmap (v0.2):
- npm package for users who prefer install over copy-paste
- More components (target: 50)
- Per-component MDX docs pages with `<Live />` editors
- Storybook for visual regression testing
- Comparison page vs framer-motion / motion / react-spring (bundle, runtime, SSR safety, customization)

Built by [@akaieuan](https://github.com/akaieuan). Issues and PRs welcome.
