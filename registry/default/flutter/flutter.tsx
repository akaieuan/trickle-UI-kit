import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface FlutterProps {
  text: string;
  /** Cycle duration in ms. */
  duration?: number;
  /** Phase offset between adjacent characters, in ms. */
  stagger?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

const PRIMES = [73, 19, 41, 53, 89];

function det(seed: number, range: number, offset = 0): number {
  return ((Math.abs((seed + 1) * (PRIMES[seed % PRIMES.length] ?? 73)) % range) + offset);
}

export function Flutter({
  text,
  duration = 2400,
  stagger = 70,
  as: Component = 'span',
  className
}: FlutterProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => {
        const xRange = det(i * 5, 6, -3);
        const yRange = det(i * 7, 8, -4);
        return (
          <span
            key={i}
            aria-hidden='true'
            className='inline-block whitespace-pre animate-trickle-flutter'
            style={
              {
                animationDelay: `${i * stagger}ms`,
                animationDuration: `${duration}ms`,
                ['--trickle-flutter-x' as string]: `${xRange}px`,
                ['--trickle-flutter-y' as string]: `${yRange}px`
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
