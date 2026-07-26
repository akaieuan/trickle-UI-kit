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
    <div className={cn('group/code relative w-full min-w-0', className)}>
      <pre className='h-full overflow-auto rounded-md border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[12px] leading-relaxed text-foreground/90 dark:bg-foreground/[0.04]'>
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

const TOKEN_COLORS = {
  comment: 'oklch(60% 0.02 250)',
  string: 'oklch(70% 0.16 130)',
  tag: 'oklch(72% 0.18 320)',
  keyword: 'oklch(70% 0.18 280)',
  number: 'oklch(72% 0.18 60)',
  attr: 'oklch(72% 0.16 200)'
} as const;

/** Ordered alternation — the first matching group wins, so a number inside a
 *  string is consumed as part of the string and never re-examined. */
const TOKEN = new RegExp(
  [
    /(\/\/[^\n]*)/, // 1 comment
    /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/, // 2 string
    /(<\/?[A-Z][A-Za-z0-9]*)/, // 3 component tag
    /\b(import|from|export|const|let|var|return|function|if|else|true|false|null|undefined)\b/, // 4 keyword
    /\b(\d+(?:\.\d+)?)\b/, // 5 number
    /([A-Za-z_][A-Za-z0-9_]*)(?==)/ // 6 attribute name
  ]
    .map((r) => r.source)
    .join('|'),
  'g'
);

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Single-pass tokenizer. The previous implementation chained `.replace()` calls
 * over its own output, so later rules matched the markup earlier rules had just
 * injected (` style=` was highlighted as an attribute, numbers inside
 * `oklch(...)` were re-coloured) and the rendered code came out corrupted.
 * Scanning once and emitting escaped text per token makes that impossible.
 */
function highlight(code: string): string {
  let out = '';
  let last = 0;
  TOKEN.lastIndex = 0;

  for (let m = TOKEN.exec(code); m !== null; m = TOKEN.exec(code)) {
    out += escapeHtml(code.slice(last, m.index));

    const [text, comment, string, tag, keyword, number, attr] = m;
    const color = comment
      ? TOKEN_COLORS.comment
      : string
        ? TOKEN_COLORS.string
        : tag
          ? TOKEN_COLORS.tag
          : keyword
            ? TOKEN_COLORS.keyword
            : number
              ? TOKEN_COLORS.number
              : attr
                ? TOKEN_COLORS.attr
                : null;

    out += color ? `<span style="color:${color}">${escapeHtml(text)}</span>` : escapeHtml(text);
    last = m.index + text.length;
  }

  return out + escapeHtml(code.slice(last));
}
