import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface BounceProps {
  text: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
  className?: string;
}

export function Bounce({ text, delay = 0, stagger = 60, as: Component = 'span', className }: BounceProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          aria-hidden='true'
          className='inline-block whitespace-pre animate-trickle-bounce'
          style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
