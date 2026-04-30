'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface InstallSnippetProps {
  command: string;
  className?: string;
}

export function InstallSnippet({ command, className }: InstallSnippetProps) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div
      className={cn(
        'group inline-flex items-center gap-3 rounded-lg border border-black/5 bg-black/[0.03] px-4 py-2.5 font-mono text-sm dark:border-white/5 dark:bg-white/[0.04]',
        className
      )}
    >
      <span className='text-muted-foreground'>$</span>
      <code className='text-foreground'>{command}</code>
      <button
        type='button'
        onClick={copy}
        aria-label='Copy install command'
        className='ml-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-all hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10'
      >
        {copied ? (
          <Check className='h-3.5 w-3.5 text-emerald-500' aria-hidden='true' />
        ) : (
          <Copy className='h-3.5 w-3.5' aria-hidden='true' />
        )}
      </button>
    </div>
  );
}
