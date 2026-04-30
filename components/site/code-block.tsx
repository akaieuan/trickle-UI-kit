'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <div className={cn('group/code relative w-full', className)}>
      <pre className='overflow-x-auto rounded-md border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground/90 dark:bg-foreground/[0.04]'>
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
      <button
        type='button'
        onClick={copy}
        aria-label='Copy code'
        className='absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded text-muted-foreground/50 opacity-0 transition-all hover:bg-accent hover:text-foreground group-hover/code:opacity-100'
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

function highlight(code: string): string {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped
    .replace(/(\/\/[^\n]*)/g, '<span style="color:oklch(60% 0.02 250)">$1</span>')
    .replace(/(['"`])([^'"`]*?)\1/g, '<span style="color:oklch(70% 0.16 130)">$1$2$1</span>')
    .replace(/(\b\d+\b)/g, '<span style="color:oklch(72% 0.18 60)">$1</span>')
    .replace(/(&lt;\/?)([A-Z][A-Za-z0-9]*)/g, '$1<span style="color:oklch(72% 0.18 320)">$2</span>')
    .replace(/(\b(?:import|from|export|const|let|var|return|function|if|else)\b)/g, '<span style="color:oklch(70% 0.18 280)">$1</span>')
    .replace(/(\s)([a-z][a-zA-Z0-9]*)(=)/g, '$1<span style="color:oklch(72% 0.16 200)">$2</span>$3');
}
