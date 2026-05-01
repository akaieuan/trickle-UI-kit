import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface DigitalRainProps {
  text: string;
  /** Delay before the first character begins, in ms. */
  delay?: number;
  /** Per-character stagger, in ms. */
  stagger?: number;
  /** Base duration of each character's travel + settle, in ms. */
  duration?: number;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const PRIMES = [73, 19, 41, 53, 89, 61, 47, 31, 79, 23, 67, 13, 37, 59, 71, 43, 11, 17, 29, 83];
function det(seed: number, range: number, offset = 0): number {
  return (Math.abs((seed + 1) * (PRIMES[seed % PRIMES.length] ?? 73)) % range) + offset;
}

export function DigitalRain({
  text,
  delay = 0,
  stagger = 320,
  duration = 1300,
  as: Component = 'span',
  className
}: DigitalRainProps) {
  return (
    <Component className={cn('inline-block', className)} aria-label={text}>
      {text.split('').map((char, i) => {
        if (char === ' ') {
          return (
            <span key={i} aria-hidden='true'>
              {' '}
            </span>
          );
        }
        const tx = det(i * 7, 100, -50) / 10;
        const ty = det(i * 11, 80, -40) / 10;
        const rotation = det(i * 13, 60, -30);
        const startScale = 0.4 + det(i * 17, 30, 0) / 100;
        const charDelay = delay + i * stagger + det(i * 19, 240, -120);
        const durVar = duration + det(i * 23, 500, -200);
        const letterStyle: CSSProperties = {
          ['--trickle-tx' as string]: `${tx}em`,
          ['--trickle-ty' as string]: `${ty}em`,
          ['--trickle-tr' as string]: `${rotation}deg`,
          ['--trickle-ts' as string]: `${startScale}`,
          ['--trickle-rain-delay' as string]: `${charDelay}ms`,
          ['--trickle-rain-duration' as string]: `${durVar}ms`
        } as CSSProperties;
        return (
          <span
            key={i}
            aria-hidden='true'
            className='trickle-rain-letter inline-block whitespace-pre align-baseline'
            style={letterStyle}
          >
            {char}
          </span>
        );
      })}
    </Component>
  );
}
