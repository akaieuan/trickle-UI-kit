import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface StaticTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
}

export function StaticText({ children, delay = 0, duration = 1400, as: Component = 'span', className }: StaticTextProps) {
  return (
    <Component
      className={cn('trickle-static-text relative inline-block animate-trickle-static-text', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      } as CSSProperties}
    >
      {children}
    </Component>
  );
}
