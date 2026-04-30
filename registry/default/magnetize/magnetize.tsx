import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface MagnetizeProps {
  text: string;
  /** Delay before letters start snapping in, in ms. */
  delay?: number;
  /** Delay between successive letters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

const PRIMES = [73, 19, 41, 53, 89, 61, 47, 31, 79];

function det(seed: number, range: number, offset = 0): number {
  return ((Math.abs((seed + 1) * (PRIMES[seed % PRIMES.length] ?? 73)) % range) + offset);
}

export function Magnetize({
  text,
  delay = 0,
  stagger = 60,
  as: Component = 'span',
  className
}: MagnetizeProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => {
        const x = det(i * 7, 200, -100);
        const y = det(i * 11, 100, -50);
        const r = det(i * 13, 240, -120);
        return (
          <span
            key={i}
            aria-hidden='true'
            className='inline-block whitespace-pre animate-trickle-magnetize'
            style={
              {
                animationDelay: `${delay + i * stagger}ms`,
                ['--trickle-magnetize-x' as string]: `${x}px`,
                ['--trickle-magnetize-y' as string]: `${y}px`,
                ['--trickle-magnetize-r' as string]: `${r}deg`
              } as CSSProperties
            }
          >
            {char}
          </span>
        );
      })}
    </Component>
  );
}
