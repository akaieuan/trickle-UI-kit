# Contributing to trickle

Thanks for considering a contribution. trickle is a small, opinionated library — every component is intended to be excellent at one thing, not a kitchen sink.

## Setup

```bash
pnpm install
pnpm dev
```

The docs site runs at `http://localhost:3000`.

## Adding a new component

```bash
pnpm new <component-name>
```

This scaffolds:

- `registry/default/<name>/<name>.tsx` — the component source
- `registry/examples/<name>-demo.tsx` — a CC0-licensed demo file
- `content/docs/components/<name>.mdx` — the docs page
- An entry in `registry.json`

After scaffolding:

1. Implement the animation. Use [`useTextRoot`](./registry/default/text-root/text-root.tsx) for orchestration.
2. Add the keyframe(s) to your component's `registry.json` entry under `cssVars.theme` and `css.@keyframes`.
3. Add the same keyframe(s) to `app/globals.css` so the docs site can preview.
4. Verify with `pnpm registry:build && pnpm typecheck`.

## Component checklist

Before opening a PR, verify:

- [ ] Animation works in Chrome, Firefox, Safari (latest).
- [ ] `prefers-reduced-motion: reduce` skips the animation to its final state.
- [ ] Server-rendered output matches the first client render (no hydration warnings).
- [ ] Component accepts `className` and forwards to the root element.
- [ ] `aria-label` or `aria-hidden` is set appropriately so screen readers read the text correctly.
- [ ] No hardcoded colors — uses `currentColor` or accepts color via prop / CSS variable.
- [ ] Bundle size: gzipped TSX <1KB (run `gzip -c registry/default/<name>/<name>.tsx | wc -c`).
- [ ] A changeset is added: `pnpm changeset`.

## Code style

- TypeScript everywhere. Strict mode on. No `any` without a comment justifying it.
- Single quotes, semicolons, 2-space indent. Match the existing style.
- Components are named exports (no default exports).
- Props interfaces are exported as `<Component>Props`.
- No unnecessary comments. Code should explain itself; comments explain *why*.

## Reporting bugs

Use the [bug report template](./.github/ISSUE_TEMPLATE/bug.yml). Include:

- The component name and version (commit SHA you installed from).
- A minimal repro — ideally a CodeSandbox or StackBlitz.
- Browser + OS.

## Proposing new components

Use the [new component proposal template](./.github/ISSUE_TEMPLATE/new-component-proposal.yml). The bar is:

- It's achievable in pure CSS keyframes (or with minimal JS state, like a setInterval).
- It's distinct from existing components (not just a variant).
- It has a clear use case (hero text, dashboard, marketing page).

## Code of conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md). Be excellent to each other.
