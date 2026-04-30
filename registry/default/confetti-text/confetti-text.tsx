import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface ConfettiTextProps {
  text: string;
  /** Confetti pieces emitted per character. */
  piecesPerChar?: number;
  /** Delay before the burst, in ms. */
  delay?: number;
  /** Burst duration, in ms. */
  duration?: number;
  /** Confetti colors, cycled deterministically. */
  colors?: string[];
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

const DEFAULT_COLORS = [
  'oklch(72% 0.2 30)',
  'oklch(72% 0.18 80)',
  'oklch(72% 0.2 130)',
  'oklch(72% 0.18 220)',
  'oklch(72% 0.22 290)'
];

const PRIMES = [73, 19, 41, 53, 89];

function det(seed: number, mod: number, offset = 0): number {
  return (Math.abs((seed + 1) * (PRIMES[seed % PRIMES.length] ?? 73)) + offset) % mod;
}

interface Piece {
  charIdx: number;
  pieceIdx: number;
  x: number;
  y: number;
  r: number;
  color: string;
}

function generatePieces(text: string, piecesPerChar: number, colors: string[]): Piece[] {
  const out: Piece[] = [];
  for (let c = 0; c < text.length; c++) {
    if (text[c] === ' ') continue;
    for (let p = 0; p < piecesPerChar; p++) {
      const seed = c * piecesPerChar + p;
      out.push({
        charIdx: c,
        pieceIdx: p,
        x: det(seed, 120, -60),
        y: -1 * (40 + det(seed + 1, 80)),
        r: det(seed + 2, 720) - 360,
        color: colors[det(seed, colors.length)] ?? colors[0] ?? '#000'
      });
    }
  }
  return out;
}

export function ConfettiText({
  text,
  piecesPerChar = 4,
  delay = 0,
  duration = 1000,
  colors = DEFAULT_COLORS,
  as: Component = 'span',
  className
}: ConfettiTextProps) {
  const pieces = generatePieces(text, piecesPerChar, colors);
  const charCount = Math.max(text.length, 1);

  return (
    <Component
      className={cn('relative inline-block', className)}
      aria-label={text}
    >
      <span aria-hidden='true' className='relative inline-block'>
        {text}
      </span>
      <span aria-hidden='true' className='pointer-events-none absolute inset-0 inline-block'>
        {pieces.map(({ charIdx, pieceIdx, x, y, r, color }) => (
          <span
            key={`${charIdx}-${pieceIdx}`}
            className='absolute h-1.5 w-1.5 animate-trickle-confetti rounded-[1px]'
            style={{
              left: `${(charIdx + 0.5) * (100 / charCount)}%`,
              top: '50%',
              backgroundColor: color,
              animationDuration: `${duration}ms`,
              animationDelay: `${delay + pieceIdx * 30}ms`,
              ['--trickle-confetti-x' as string]: `${x}px`,
              ['--trickle-confetti-y' as string]: `${y}px`,
              ['--trickle-confetti-r' as string]: `${r}deg`
            } as CSSProperties}
          />
        ))}
      </span>
    </Component>
  );
}
