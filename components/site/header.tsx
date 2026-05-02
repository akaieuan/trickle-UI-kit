import Link from 'next/link';
import { ThemeToggle } from '@/components/site/theme-toggle';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-border bg-background'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-8 py-5 sm:px-12 lg:px-16'>
        <Link
          href='/'
          className='font-mono text-sm font-normal tracking-tight text-foreground'
        >
          trickle<span className='text-muted-foreground/50'>kit</span>
        </Link>
        <nav className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <Link
            href='/#catalog'
            className='hidden transition-colors hover:text-foreground sm:inline'
          >
            Components
          </Link>
          <Link
            href='/#install'
            className='hidden transition-colors hover:text-foreground sm:inline'
          >
            Install
          </Link>
          <Link
            href='https://github.com/akaieuan/trickle-UI-kit'
            className='transition-colors hover:text-foreground'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
