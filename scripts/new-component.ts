import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();

function toKebab(s: string) {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/\s+/g, '-');
}
function toPascal(s: string) {
  return s.replace(/(?:^|[-_\s])(.)/g, (_, c) => c.toUpperCase());
}

const name = process.argv[2];
if (!name) {
  console.error('Usage: pnpm new <component-name>');
  console.error('  Example: pnpm new word-flicker');
  process.exit(1);
}

const kebab = toKebab(name);
const pascal = toPascal(kebab);

const componentDir = join(ROOT, 'registry', 'default', kebab);
const componentFile = join(componentDir, `${kebab}.tsx`);
const exampleDir = join(ROOT, 'registry', 'examples');
const exampleFile = join(exampleDir, `${kebab}-demo.tsx`);
const docsFile = join(ROOT, 'content', 'docs', 'components', `${kebab}.mdx`);

if (existsSync(componentFile)) {
  console.error(`✗ Component already exists at ${componentFile}`);
  process.exit(1);
}

const componentTemplate = `'use client';

import { type ElementType } from 'react';
import { cn } from '@/lib/cn';
import { useTextRoot } from '@/registry/default/text-root/text-root';

export interface ${pascal}Props {
  children: React.ReactNode;
  /** Delay before the animation begins, in ms. */
  delay?: number;
  /** Element tag. Defaults to \`span\`. */
  as?: ElementType;
  className?: string;
  trigger?: 'mount' | 'view';
}

export function ${pascal}({
  children,
  delay = 0,
  as: Component = 'span',
  className,
  trigger = 'mount'
}: ${pascal}Props) {
  const { ready, setRef } = useTextRoot({ trigger, delay });

  return (
    <Component
      ref={setRef}
      className={cn(
        'inline-block',
        ready && 'animate-trickle-${kebab}',
        className
      )}
    >
      {children}
    </Component>
  );
}
`;

const exampleTemplate = `// CC0-licensed demo. Copy freely.
import { ${pascal} } from '@/registry/default/${kebab}/${kebab}';

export default function ${pascal}Demo() {
  return (
    <${pascal}>
      Hello, ${pascal}.
    </${pascal}>
  );
}
`;

const docsTemplate = `---
title: ${pascal}
description: TODO — one-sentence description of what this component does.
---

import { ${pascal} } from '@/registry/default/${kebab}/${kebab}';

<ComponentPreview name="${kebab}" />

## Installation

\`\`\`bash
npx shadcn add https://trickle.dev/r/${kebab}.json
\`\`\`

## Usage

\`\`\`tsx
import { ${pascal} } from '@/components/trickle/${kebab}';

<${pascal}>Hello</${pascal}>
\`\`\`

## Props

TODO
`;

await mkdir(componentDir, { recursive: true });
await writeFile(componentFile, componentTemplate);
console.log(`✓ ${componentFile}`);

await mkdir(exampleDir, { recursive: true });
await writeFile(exampleFile, exampleTemplate);
console.log(`✓ ${exampleFile}`);

await mkdir(join(ROOT, 'content', 'docs', 'components'), { recursive: true });
await writeFile(docsFile, docsTemplate);
console.log(`✓ ${docsFile}`);

const registryPath = join(ROOT, 'registry.json');
const registry = JSON.parse(await readFile(registryPath, 'utf-8')) as {
  items: { name: string }[];
};
if (!registry.items.find((i) => i.name === kebab)) {
  registry.items.push({
    name: kebab,
    // @ts-expect-error — partial entry; user fills in
    type: 'registry:ui',
    title: pascal.replace(/([a-z])([A-Z])/g, '$1 $2'),
    description: 'TODO — one-sentence description.',
    registryDependencies: ['text-root'],
    files: [
      {
        path: `registry/default/${kebab}/${kebab}.tsx`,
        type: 'registry:ui',
        target: `components/trickle/${kebab}.tsx`
      }
    ]
  });
  await writeFile(registryPath, JSON.stringify(registry, null, 2) + '\n');
  console.log(`✓ Added to registry.json`);
}

console.log(`\nNext steps:`);
console.log(`  1. Implement the animation in ${componentFile.replace(ROOT + '/', '')}`);
console.log(`  2. Add the keyframe to app/globals.css and the registry.json css block`);
console.log(`  3. Run: pnpm registry:build && pnpm typecheck`);
