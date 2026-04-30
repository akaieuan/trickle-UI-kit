import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface CurtainRevealProps {
  children: React.ReactNode;
  /** Delay before the curtain wipes, in ms. */
  delay?: number;
  /** Direction of the wipe. */
  direction?: 'right' | 'left' | 'down' | 'up';
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function CurtainReveal({
  children,
  delay = 0,
  direction = 'right',
  as: Component = 'span',
  className
}: CurtainRevealProps) {
  return (
    <Component
      className={cn('inline-block animate-trickle-curtain-reveal', className)}
      data-trickle-curtain-direction={direction}
      style={{ animationDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
