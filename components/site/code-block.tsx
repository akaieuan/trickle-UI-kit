'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      {/* Hoisted and de-duplicated by React on `href`, so N code blocks on a
          page still emit exactly one copy of the token palette. */}
      <style href='trickle-code-tokens' precedence='default'>
        {TOKEN_CSS}
      </style>
      <pre className='h-full overflow-auto rounded-[12px] border border-rule bg-surface-1 px-4 py-3.5 font-mono text-13 leading-relaxed text-ink-body'>
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
      <button
        type='button'
        onClick={copy}
        aria-label='Copy code'
        className='absolute right-2.5 top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-md text-ink-faint opacity-0 transition-[color,opacity] duration-[var(--dur-hover)] hover:text-foreground focus-visible:opacity-100 group-hover/code:opacity-100'
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

/** Token classes rather than inline colours, so each hue can be stated twice:
 *  dark (the default theme) and light. The light ground is paper, and the dark
 *  theme's 70%-lightness hues wash out on it entirely. The `:where(.dark)`
 *  prefix mirrors the `dark` custom variant declared in globals.css. */
const TOKEN_CLASS = {
  comment: 'tk-c',
  string: 'tk-s',
  tag: 'tk-t',
  keyword: 'tk-k',
  number: 'tk-n',
  attr: 'tk-a'
} as const;

const TOKEN_CSS = `
.tk-c { color: oklch(52% 0.02 250); }
.tk-s { color: oklch(45% 0.13 145); }
.tk-t { color: oklch(46% 0.17 320); }
.tk-k { color: oklch(44% 0.17 285); }
.tk-n { color: oklch(46% 0.13 55); }
.tk-a { color: oklch(44% 0.11 225); }
:where(.dark) .tk-c { color: oklch(60% 0.02 250); }
:where(.dark) .tk-s { color: oklch(76% 0.14 145); }
:where(.dark) .tk-t { color: oklch(78% 0.15 320); }
:where(.dark) .tk-k { color: oklch(77% 0.14 285); }
:where(.dark) .tk-n { color: oklch(80% 0.13 70); }
:where(.dark) .tk-a { color: oklch(78% 0.11 215); }
`;

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
    const klass = comment
      ? TOKEN_CLASS.comment
      : string
        ? TOKEN_CLASS.string
        : tag
          ? TOKEN_CLASS.tag
          : keyword
            ? TOKEN_CLASS.keyword
            : number
              ? TOKEN_CLASS.number
              : attr
                ? TOKEN_CLASS.attr
                : null;

    out += klass ? `<span class="${klass}">${escapeHtml(text)}</span>` : escapeHtml(text);
    last = m.index + text.length;
  }

  return out + escapeHtml(code.slice(last));
}
