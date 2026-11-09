import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DetailMode } from '@/components/site/demo-strip';
import { ENTRIES, findEntry } from '@/lib/catalog';

/* The measure and gutter the rest of the site uses. */
const PAGE = 'mx-auto max-w-site site-inset';

export function generateStaticParams() {
  return ENTRIES.map((entry) => ({ slug: entry.slug }));
}

/* The catalog is the whole set of pages, so anything outside it is a
   404 rather than a render. */
export const dynamicParams = false;

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findEntry(slug);
  if (!found) return {};
  const { entry } = found;
  return {
    // The root layout appends "· trickle", so the name alone is the title.
    title: entry.name,
    description: `${entry.name}: a pure-CSS ${entry.section.name.toLowerCase()} text animation for React. Install it with one command and own the source.`
  };
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findEntry(slug);
  if (!found) notFound();

  const { entry, previous, next } = found;
  const { Component, section } = entry;

  return (
    <section className={`${PAGE} pt-10 pb-20`}>
      {/* The group, and the way back to it. A reader arrives here from one
          card in one section and should be able to return to that spot. */}
      <nav className='mb-7 flex items-center gap-2.5 font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>
        <Link
          href='/#catalog'
          className='inline-flex items-center gap-1.5 transition-colors duration-[var(--dur-hover)] hover:text-foreground'
        >
          <ArrowLeft className='h-3 w-3' aria-hidden='true' />
          Catalog
        </Link>
        <span aria-hidden='true' className='text-ink-faint/50'>
          ·
        </span>
        <Link
          href={`/#catalog-${section.id}`}
          className='transition-colors duration-[var(--dur-hover)] hover:text-foreground'
        >
          {section.name}
        </Link>
      </nav>

      {/* The group's hue, same as on the card this page was opened from, so
          the stage is recognisably the plate that was just clicked. */}
      <div style={{ '--plate-tint': section.tint } as CSSProperties}>
        <DetailMode>
          <Component index={0} />
        </DetailMode>
      </div>

      <nav className='mt-14 grid gap-3 border-t border-rule pt-6 sm:grid-cols-2'>
        {previous ? (
          <Link
            href={`/c/${previous.slug}`}
            className='group flex flex-col gap-1 rounded-[12px] border border-rule bg-surface-1 px-4 py-3 transition-colors duration-[var(--dur-hover)] hover:border-rule-strong'
          >
            <span className='inline-flex items-center gap-1.5 font-mono text-10 uppercase tracking-[0.18em] text-ink-faint'>
              <ArrowLeft className='h-3 w-3' aria-hidden='true' />
              Previous
            </span>
            <span className='text-14 font-light text-ink-body transition-colors duration-[var(--dur-hover)] group-hover:text-foreground'>
              {previous.name}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={`/c/${next.slug}`}
            className='group flex flex-col items-end gap-1 rounded-[12px] border border-rule bg-surface-1 px-4 py-3 text-right transition-colors duration-[var(--dur-hover)] hover:border-rule-strong'
          >
            <span className='inline-flex items-center gap-1.5 font-mono text-10 uppercase tracking-[0.18em] text-ink-faint'>
              Next
              <ArrowRight className='h-3 w-3' aria-hidden='true' />
            </span>
            <span className='text-14 font-light text-ink-body transition-colors duration-[var(--dur-hover)] group-hover:text-foreground'>
              {next.name}
            </span>
          </Link>
        )}
      </nav>
    </section>
  );
}
