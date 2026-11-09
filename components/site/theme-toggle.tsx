'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * The site defaults to dark; only an explicit stored 'light' opts out.
 * The control is a 12px filled disc, not a sun/moon pair.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial: 'light' | 'dark' = stored === 'light' ? 'light' : 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  }

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-quiet transition-colors duration-[var(--dur-hover)] hover:text-foreground',
        'after:absolute after:left-1/2 after:top-1/2 after:h-11 after:w-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[""]',
        className
      )}
    >
      <span
        className='h-3 w-3 rounded-full bg-current'
        aria-hidden='true'
      />
    </button>
  );
}
