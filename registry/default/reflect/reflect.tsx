import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface ReflectProps {
  children: React.ReactNode;
  /** Reflection opacity 0-1. Default 0.3. */
  opacity?: number;
  /** Gap between text and reflection in em. Default 0. */
  gap?: number;
  as?: ElementType;
  className?: string;
}

export function Reflect({ children, opacity = 0.3, gap = 0, as: Component = 'span', className }: ReflectProps) {
  return (
    <Component className={cn('trickle-reflect relative inline-block', className)}>
      <span className='relative inline-block'>{children}</span>
      <span
        aria-hidden='true'
        className='trickle-reflect-mirror animate-trickle-reflect absolute left-0 right-0 inline-block select-none'
        style={{
          top: `calc(100% + ${gap}em)`,
          ['--trickle-reflect-opacity' as string]: `${opacity}`
        } as CSSProperties}
      >
        {children}
      </span>
    </Component>
  );
}
