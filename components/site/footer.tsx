export function SiteFooter() {
  return (
    <footer className='border-t border-border'>
      <div className='mx-auto flex max-w-5xl flex-col gap-4 px-8 py-10 text-sm font-light text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16'>
        <p>MIT licensed. Components ship as copy-paste source &mdash; you own the code.</p>
        <div className='flex flex-wrap items-center gap-6'>
          <a
            href='https://github.com/akaieuan/trickle-UI-kit'
            className='transition-colors hover:text-foreground'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://github.com/akaieuan/trickle-UI-kit/issues'
            className='transition-colors hover:text-foreground'
            target='_blank'
            rel='noopener noreferrer'
          >
            Report issue
          </a>
          <a
            href='https://github.com/akaieuan/trickle-UI-kit/blob/main/CONTRIBUTING.md'
            className='transition-colors hover:text-foreground'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contribute
          </a>
          <span className='text-muted-foreground/40'>·</span>
          <span className='font-mono text-xs text-muted-foreground/60'>
            built by{' '}
            <a
              href='https://akabuild.dev'
              className='text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              akaieuan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
