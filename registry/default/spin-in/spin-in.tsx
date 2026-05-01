import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface SpinInProps {
  text: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
  className?: string;
}

export function SpinIn({ text, delay = 0, stagger = 60, as: Component = 'span', className }: SpinInProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre origin-center animate-trickle-spin-in'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
