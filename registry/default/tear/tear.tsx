import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface TearProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
}

export function Tear({ children, delay = 0, duration = 1200, as: Component = 'span', className }: TearProps) {
  return (
    <Component
      className={cn('trickle-tear relative inline-block', className)}
      style={{
        ['--trickle-tear-delay' as string]: `${delay}ms`,
        ['--trickle-tear-duration' as string]: `${duration}ms`
      } as CSSProperties}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span aria-hidden='true' className='trickle-tear-top inline-block animate-trickle-tear-top'>{children}</span>
      <span aria-hidden='true' className='trickle-tear-bottom absolute inset-0 inline-block animate-trickle-tear-bottom'>{children}</span>
    </Component>
  );
}
