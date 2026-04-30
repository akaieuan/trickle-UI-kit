import Link from 'next/link';
import { ThemeToggle } from '@/components/site/theme-toggle';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-8 py-5 sm:px-12 lg:px-16'>
        <Link
          href='/'
          className='font-mono text-sm font-normal tracking-tight text-foreground'
        >
          trickle<span className='text-muted-foreground/50'>.dev</span>
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
            href='https://github.com/trickle-ui/trickle'
            className='transition-colors hover:text-foreground'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
          <span className='hidden items-center gap-1.5 font-mono text-[11px] text-muted-foreground/50 sm:inline-flex'>
            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_oklch(70%_0.18_145_/_0.6)]' aria-hidden='true' />
            v0.1
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
