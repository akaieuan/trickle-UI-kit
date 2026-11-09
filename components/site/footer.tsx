const GH = 'https://github.com/akaieuan/trickle-UI-kit';

type FooterLink = { label: string; href: string; external?: boolean };

/** Every destination here already exists — in-page anchors on the home page,
 *  or files that are actually in the repository. Nothing is invented. */
const GROUPS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Kit',
    links: [
      { label: 'Catalog', href: '/#catalog' },
      { label: 'Install', href: '/#install' },
      { label: 'Readme', href: `${GH}#readme`, external: true }
    ]
  },
  {
    heading: 'Contribute',
    links: [
      { label: 'Report issue', href: `${GH}/issues`, external: true },
      { label: 'Contributing', href: `${GH}/blob/main/CONTRIBUTING.md`, external: true },
      { label: 'Code of conduct', href: `${GH}/blob/main/CODE_OF_CONDUCT.md`, external: true }
    ]
  },
  {
    heading: 'Legal',
    links: [
      { label: 'License', href: `${GH}/blob/main/LICENSE`, external: true },
      { label: 'Demo license', href: `${GH}/blob/main/LICENSE-DEMOS`, external: true },
      { label: 'Security', href: `${GH}/blob/main/SECURITY.md`, external: true }
    ]
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'GitHub', href: GH, external: true },
      { label: 'akabuild.dev', href: 'https://akabuild.dev', external: true }
    ]
  }
];

const LINK =
  'text-13 font-light text-ink-quiet transition-colors duration-[var(--dur-hover)] hover:text-foreground';

export function SiteFooter() {
  return (
    <footer className='border-t border-rule'>
      <div className='site-inset mx-auto max-w-site py-12 sm:py-14'>
        <div className='grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4'>
          {GROUPS.map((group) => (
            <div key={group.heading} className='min-w-0'>
              <h2 className='font-mono text-10 font-medium uppercase tracking-[0.18em] text-ink-quiet'>
                {group.heading}
              </h2>
              <ul className='mt-4 flex flex-col gap-2.5'>
                {group.links.map((link) => (
                  <li key={link.label} className='min-w-0'>
                    <a
                      href={link.href}
                      className={LINK}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-2.5 border-t border-rule-soft pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
          <p className='max-w-2xl text-12 font-light text-ink-faint'>
            MIT licensed. Components ship as copy-paste source &mdash; you own the code.
          </p>
          <p className='font-mono text-10 uppercase tracking-[0.14em] text-ink-faint'>
            built by{' '}
            <a
              href='https://akabuild.dev'
              className='normal-case tracking-normal text-ink-quiet underline-offset-4 transition-colors duration-[var(--dur-hover)] hover:text-foreground hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              akaieuan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
