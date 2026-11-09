import { InstallSnippet } from '@/components/site/install-snippet';
import { HeroHeadline } from '@/components/site/hero-headline';
import { CardGrid } from '@/components/site/component-card';
import { SECTIONS } from '@/lib/catalog';

/* The site measure: 1180px, with the shared gutter. Every section uses
   this pair, so nothing on the page sets its own edge. */
const PAGE_WIDTH = 'mx-auto max-w-site';
const PAGE_INSET = 'site-inset';

/* The sticky nav spans the full measure, so it cancels the gutter with
   matching negative margins. These mirror .site-inset exactly. */
const INSET_BLEED = '-mx-5 px-5 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Catalog />
    </>
  );
}

function Hero() {
  const stats: { value: string; label: string }[] = [
    { value: '47', label: 'components' },
    { value: '42', label: 'pure server' },
    { value: '<1kb', label: 'median gzip' },
    { value: '0', label: 'anim deps' }
  ];

  return (
    <section className={`${PAGE_WIDTH} ${PAGE_INSET} pt-12 pb-12 sm:pt-16`}>
      <HeroHeadline />

      <div
        id='install'
        className='mt-9 flex min-w-0 max-w-2xl scroll-mt-[calc(var(--header-h)+1.5rem)] flex-col gap-2.5'
      >
        <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>
          Every component installs the same way
        </p>
        <InstallSnippet command='npx shadcn add https://tricklekit.dev/r/typewriter.json' />
        <p className='font-mono text-11 leading-relaxed text-ink-faint'>
          → writes <span className='text-ink-body'>components/trickle/typewriter.tsx</span>, merges
          the keyframes into <span className='text-ink-body'>globals.css</span>. No package, no
          provider — you own the file.
        </p>
      </div>

      <ul className='mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>
        {stats.map((it, i) => (
          <li key={it.label} className='flex items-baseline gap-1.5'>
            {i > 0 && (
              <span aria-hidden='true' className='mr-3.5 text-ink-faint/50'>
                ·
              </span>
            )}
            <span className='tabular-nums text-ink-body'>{it.value}</span>
            <span>{it.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Catalog() {
  let n = 0;
  return (
    <section
      id='catalog'
      className={`${PAGE_WIDTH} ${PAGE_INSET} scroll-mt-[var(--header-h)] pt-6 pb-20`}
    >
      <header className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
        <h2 className='text-20 font-light tracking-tight'>
          Catalog
          <span className='ml-2.5 font-mono text-11 text-ink-faint'>47 components · 7 groups</span>
        </h2>
        <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>
          <span className='text-ink-body'>click</span> a card for its page ·{' '}
          <span className='text-ink-body'>hover</span> to replay or copy
        </p>
      </header>

      {/* Pins flush to the header's bottom edge. Both offsets come from
          --header-h so the nav can never slide underneath it. */}
      <nav
        aria-label='Catalog sections'
        className={`sticky top-[var(--header-h)] z-30 mb-2 border-b border-rule bg-background ${INSET_BLEED}`}
      >
        <ul className='flex h-[var(--catalog-nav-h)] flex-nowrap items-center gap-x-5 overflow-x-auto font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible'>
          <li className='shrink-0'>
            <a
              href='#catalog'
              className='transition-colors duration-[var(--dur-hover)] hover:text-foreground'
            >
              All
            </a>
          </li>
          {SECTIONS.map((sec) => (
            <li key={sec.id} className='flex shrink-0 items-baseline gap-1.5'>
              <a
                href={`#catalog-${sec.id}`}
                className='transition-colors duration-[var(--dur-hover)] hover:text-foreground'
              >
                {sec.name}
              </a>
              <span className='tabular-nums text-ink-faint/60'>{sec.items.length}</span>
            </li>
          ))}
        </ul>
      </nav>

      {SECTIONS.map((sec) => (
        <div
          key={sec.id}
          id={`catalog-${sec.id}`}
          // --sticky-h is --header-h plus the nav that pins under it; an
          // anchor that cleared only the header would land behind the nav.
          className='scroll-mt-[calc(var(--sticky-h)+1.25rem)]'
        >
          {/* Generous space above the label, tight space below it, so the
              label reads as belonging to the group it introduces. */}
          <header className='mt-14 mb-5 flex items-baseline gap-3 border-t border-rule pt-6'>
            <span className='font-mono text-11 uppercase tracking-[0.14em] text-ink-body'>
              {sec.name}
            </span>
            <span className='font-mono text-11 tabular-nums text-ink-faint'>
              {sec.items.length}
            </span>
          </header>

          <CardGrid tag={sec.name} tint={sec.tint}>
            {sec.items.map((item) => {
              n += 1;
              return <item.Component key={item.slug} index={n} />;
            })}
          </CardGrid>
        </div>
      ))}
    </section>
  );
}

function Philosophy() {
  const items: { tag: string; title: string; body: string }[] = [
    {
      tag: 'Why',
      title: 'Pure CSS, zero runtime.',
      body:
        'Every keyframe runs natively in the browser. No motion library, no animation engine, no extra bundle weight. 42 of 47 components are pure server components — they ship zero client JS.'
    },
    {
      tag: 'How',
      title: 'SSR-safe by construction.',
      body:
        'The server renders the final HTML with animation classes applied. The browser starts the animation immediately on first paint — no flash, no hydration mismatch, no JS required.'
    },
    {
      tag: 'Distribution',
      title: 'You own the source.',
      body:
        'Shadcn-style. Run one CLI command and the component file lives in your repo. No version lock-in, no upgrade churn, customize freely.'
    }
  ];
  return (
    <section className={`${PAGE_WIDTH} ${PAGE_INSET} border-t border-rule py-12`}>
      <div className='grid gap-8 sm:grid-cols-3 sm:gap-10'>
        {items.map((it) => (
          <div key={it.tag}>
            <p className='font-mono text-11 uppercase tracking-[0.14em] text-ink-quiet'>{it.tag}</p>
            <h3 className='mt-2.5 text-17 font-normal tracking-tight'>{it.title}</h3>
            <p className='mt-2 text-14 font-light text-ink-body'>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
