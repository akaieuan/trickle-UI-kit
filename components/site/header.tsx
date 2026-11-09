import Link from 'next/link';
import { ThemeToggle } from '@/components/site/theme-toggle';

const NAV_LINK =
  'px-2.5 text-13 font-light text-ink-quiet transition-colors duration-[var(--dur-hover)] hover:text-foreground';

const ICON_BUTTON =
  'relative inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-quiet transition-colors duration-[var(--dur-hover)] hover:text-foreground after:absolute after:left-1/2 after:top-1/2 after:h-11 after:w-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]';

/** 5-bar equaliser glyph, drawn in currentColor on a surface-3 tile. */
function Mark() {
  return (
    <span
      className='inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-surface-3 text-foreground'
      aria-hidden='true'
    >
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='currentColor'>
          <rect x='0.5' y='5.5' width='1.5' height='3' rx='0.75' />
          <rect x='3.25' y='3.5' width='1.5' height='7' rx='0.75' />
          <rect x='6' y='1.5' width='1.5' height='11' rx='0.75' />
          <rect x='8.75' y='4' width='1.5' height='6' rx='0.75' />
          <rect x='11.5' y='6' width='1.5' height='2' rx='0.75' />
        </g>
      </svg>
    </span>
  );
}

/** lucide-react v1 ships no brand icons, so the GitHub mark is authored here. */
function GithubMark() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.07-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.15 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A7.995 7.995 0 0 0 16 8c0-4.42-3.58-8-8-8Z' />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className='site-inset pointer-events-none sticky top-0 z-40 h-[var(--header-h)] w-full pt-3 before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-[calc(var(--header-h)+0.5rem)] before:bg-gradient-to-b before:from-background before:via-background/85 before:to-transparent before:content-[""]'>
      <div className='glass pointer-events-auto mx-auto flex h-12 w-full max-w-[640px] items-center rounded-full pl-2 pr-1.5'>
        <Link
          href='/'
          className='flex items-center gap-2 font-mono text-[15px] font-medium tracking-tight'
        >
          <Mark />
          <span className='text-foreground'>
            trickle<span className='text-ink-faint'>kit</span>
          </span>
        </Link>

        <nav className='ml-auto flex items-center gap-0.5'>
          <Link href='/#catalog' className={`hidden sm:inline ${NAV_LINK}`}>
            Components
          </Link>
          <Link href='/#install' className={`hidden sm:inline ${NAV_LINK}`}>
            Install
          </Link>
          <a
            href='https://github.com/akaieuan/trickle-UI-kit'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='trickle on GitHub'
            className={ICON_BUTTON}
          >
            <GithubMark />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
