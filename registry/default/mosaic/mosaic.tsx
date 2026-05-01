import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface MosaicProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  /** Tile size in px. Default 8. */
  tileSize?: number;
  as?: ElementType;
  className?: string;
}

export function Mosaic({ children, delay = 0, duration = 1500, tileSize = 8, as: Component = 'span', className }: MosaicProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-mosaic', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ['--trickle-mosaic-size' as string]: `${tileSize}px`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
