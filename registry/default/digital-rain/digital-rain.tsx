import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface DigitalRainProps {
  text: string;
  /** Delay before the first character starts falling, in ms. */
  delay?: number;
  /** Per-character stagger, in ms. */
  stagger?: number;
  /** How long each character's rain takes to settle, in ms. */
  duration?: number;
  /** Number of random characters that flash through before the target lands. */
  trailLength?: number;
  /** Character pool used for the rain trail. Defaults to katakana + digits + capitals. */
  charset?: string;
  /** Color for the falling rain trail. Defaults to a brand-aligned blue. */
  rainColor?: string;
  /** Element tag. Defaults to `span`. */
  as?: ElementType;
  className?: string;
}

const DEFAULT_CHARSET =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ0123456789ABCDEFGHJKLMNPQRSTVWXYZ';

const SEED = 1779;
function deterministicChar(charset: string, seed: number): string {
  const idx = Math.abs((seed * SEED) | 0) % charset.length;
  return charset[idx] ?? '?';
}

export function DigitalRain({
  text,
  delay = 0,
  stagger = 90,
  duration = 700,
  trailLength = 4,
  charset = DEFAULT_CHARSET,
  rainColor,
  as: Component = 'span',
  className
}: DigitalRainProps) {
  const trailLen = Math.max(1, trailLength);
  const wrapperStyle = rainColor
    ? ({ ['--trickle-rain-color' as string]: rainColor } as CSSProperties)
    : undefined;

  return (
    <Component
      className={cn('inline-block', className)}
      aria-label={text}
      style={wrapperStyle}
    >
      {text.split('').map((target, i) => {
        if (target === ' ') {
          return (
            <span key={i} aria-hidden='true'>
              {' '}
            </span>
          );
        }
        const charDelay = delay + i * stagger;
        const trail = Array.from({ length: trailLen }, (_, j) =>
          deterministicChar(charset, i * 17 + j * 7 + 11)
        );
        const columnStyle: CSSProperties = {
          animationDelay: `${charDelay}ms`,
          animationDuration: `${duration}ms`,
          ['--trickle-rain-distance' as string]: `-${trailLen + 1}em`
        } as CSSProperties;
        return (
          <span
            key={i}
            aria-hidden='true'
            className='relative inline-block whitespace-pre overflow-hidden align-baseline leading-none'
          >
            <span className='invisible'>{target}</span>
            <span
              className='absolute inset-x-0 top-0 flex flex-col items-center leading-none animate-trickle-rain-fall'
              style={columnStyle}
            >
              <span className='block leading-none'>{target}</span>
              {trail.map((tc, j) => (
                <span
                  key={j}
                  className='trickle-rain-trail block leading-none'
                  style={{ opacity: Math.max(0.35, 1 - j * 0.18) }}
                >
                  {tc}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
