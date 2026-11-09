'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        'group flex max-w-full min-w-0 items-center gap-3 rounded-[12px] border border-rule bg-surface-1 px-4 py-3 font-mono text-13',
        className
      )}
    >
      <span className='shrink-0 select-none text-ink-faint' aria-hidden='true'>
        $
      </span>
      <code className='min-w-0 flex-1 text-ink-body [overflow-wrap:anywhere]'>{command}</code>
      <button
        type='button'
        onClick={copy}
        aria-label='Copy install command'
        className='-mr-1 ml-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-faint transition-colors duration-[var(--dur-hover)] hover:text-foreground'
      >
        {copied ? (
          <Check className='h-3.5 w-3.5 text-select' aria-hidden='true' />
        ) : (
          <Copy className='h-3.5 w-3.5' aria-hidden='true' />
        )}
      </button>
    </div>
  );
}
