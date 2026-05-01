import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface CompressProps {
  text: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
  className?: string;
}

export function Compress({ text, delay = 0, stagger = 50, as: Component = 'span', className }: CompressProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-compress [transform-origin:50%_100%]'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
