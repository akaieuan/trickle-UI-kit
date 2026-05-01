import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface CarouselFlipProps {
  /** The text whose characters wrap around an invisible 3D ring before resolving. */
  text: string;
  /** Total cycle duration in ms (spin + resolve). */
  duration?: number;
  /** Ring radius in `em`. Larger = wider circle. Default scales with text length. */
  radius?: number;
  /** Approximate per-character width in `em`. Tune if the resolved word looks too tight or too loose. */
  charSpacing?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function CarouselFlip({
  text,
  duration = 4500,
  radius,
  charSpacing = 0.55,
  as: Component = 'span',
  className
}: CarouselFlipProps) {
  const N = Math.max(text.length, 1);
  const angleStep = 360 / N;
  const r = radius ?? Math.max(2.4, N * 0.42);
  const center = (N - 1) / 2;
  return (
    <Component
      className={cn('inline-block [perspective:900px]', className)}
      aria-label={text}
    >
      <span className='trickle-carousel-wrap relative inline-block whitespace-pre [transform-style:preserve-3d]'>
        {/* Invisible spacer claims the resolved word's bounding box */}
        <span className='invisible inline-block whitespace-pre'>{text}</span>
        {text.split('').map((char, i) => (
          <span
            key={i}
            aria-hidden='true'
            className='trickle-carousel-char absolute left-1/2 top-0 inline-block whitespace-pre [transform-style:preserve-3d]'
            style={{
              ['--char-angle' as string]: `${i * angleStep}deg`,
              ['--char-radius' as string]: `${r}em`,
              ['--char-x' as string]: `${(i - center) * charSpacing}em`,
              animationDuration: `${duration}ms`
            } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    </Component>
  );
}
