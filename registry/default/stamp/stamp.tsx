import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface StampProps {
  children: React.ReactNode;
  /** Delay before the stamp lands, in ms. */
  delay?: number;
  /** Rotation angle for the stamp (any CSS angle). */
  rotation?: string;
  /** Stamp accent color (any CSS color). Defaults to `currentColor`. */
  color?: string;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Stamp({
  children,
  delay = 0,
  rotation = '-6deg',
  color = 'currentColor',
  as: Component = 'span',
  className
}: StampProps) {
  return (
    <Component
      className={cn(
        'inline-block animate-trickle-stamp border-2 px-3 py-1 font-bold uppercase tracking-wider',
        className
      )}
      style={{
        color,
        borderColor: color,
        animationDelay: `${delay}ms`,
        ['--trickle-stamp-rotation' as string]: rotation
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
