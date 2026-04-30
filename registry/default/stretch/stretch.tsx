import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface StretchProps {
  children: React.ReactNode;
  /** Delay before the stretch begins, in ms. */
  delay?: number;
  /** Duration of the stretch, in ms. */
  duration?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Stretch({
  children,
  delay = 0,
  duration = 900,
  as: Component = 'span',
  className
}: StretchProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-stretch [transform-origin:50%_50%]', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
