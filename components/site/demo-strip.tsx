'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { ComponentCard } from '@/components/site/component-card';
import { ComponentDetail } from '@/components/site/component-detail';
import type { ControlSpec } from '@/components/site/control-panel';

/* DemoStrip is an adapter, not a layout. Every catalog entry in
   controlled-strips.tsx calls it with the same props it always did; it
   resolves the demo content and hands it to whichever layout is asking.

   On the home page that is the card, which shows the animation and
   little else. On /c/[slug] a DetailMode wrapper flips this switch and
   the same props render in full — code, spec and controls included.
   Neither layout asks a strip to change. */

const DetailContext = createContext(false);

/** Renders the strips inside it as full component pages, not cards. */
export function DetailMode({ children }: { children: ReactNode }) {
  return <DetailContext.Provider value={true}>{children}</DetailContext.Provider>;
}

export interface DemoStripProps {
  index: number;
  name: string;
  description: string;
  installCommand?: string;
  /** Source code. Rendered on the detail page. */
  code?: string;
  /** Metadata for the spec line. Rendered on the detail page. */
  spec?: { label: string; value: string | number; tone?: 'default' | 'good' | 'warn' }[];
  /** If set, the demo remounts every `replay` ms while the card is in view. */
  replay?: number;
  /** Legacy strip layout hint. Neither layout has sides. */
  side?: 'left' | 'right';
  /** Tweakable controls. Live on the detail page. */
  controls?: ControlSpec[];
  /** Values `render` is called with on the card. */
  defaultValues?: Record<string, number>;
  /** Render function. Receives `defaultValues` on the card. */
  render?: (values: Record<string, number>) => ReactNode;
  /** One-word group name. Defaults to the enclosing CardGrid's. */
  tag?: string;
  className?: string;
  /** Static demo content. Used when `render` is not provided. */
  children?: ReactNode;
}

export function DemoStrip({
  index,
  name,
  description,
  installCommand,
  code,
  spec,
  replay,
  controls,
  defaultValues,
  render,
  tag,
  className,
  children
}: DemoStripProps) {
  const detail = useContext(DetailContext);

  if (detail) {
    return (
      <ComponentDetail
        name={name}
        description={description}
        installCommand={installCommand}
        code={code}
        spec={spec}
        controls={controls}
        defaultValues={defaultValues}
        replay={replay}
        render={render}
      >
        {children}
      </ComponentDetail>
    );
  }

  const values = defaultValues ?? Object.fromEntries((controls ?? []).map((c) => [c.key, c.min]));

  return (
    <ComponentCard
      index={index}
      name={name}
      // The card links to the component's own page. The slug is the one
      // in the install command — /r/<slug>.json — so a card can only
      // ever point at the component it is showing.
      href={installCommand ? slugFrom(installCommand) : undefined}
      tag={tag}
      installCommand={installCommand}
      replay={replay}
      className={className}
    >
      {render ? render(values) : children}
    </ComponentCard>
  );
}

function slugFrom(installCommand: string): string | undefined {
  const match = /\/r\/([a-z0-9-]+)\.json/.exec(installCommand);
  return match ? `/c/${match[1]}` : undefined;
}
