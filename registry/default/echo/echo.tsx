import { type ElementType, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface EchoProps {
  children: React.ReactNode;
  /** Number of ghost copies that ripple outward. Default 5. */
  ghostCount?: number;
  /** Pixel distance the outermost ghost travels. */
  ghostDistance?: number;
  /** Element tag. */
  as?: ElementType;
  className?: string;
}

export function Echo({
  children,
  ghostCount = 5,
  ghostDistance = 32,
  as: Component = 'span',
  className
}: EchoProps) {
  return (
    <Component className={cn('relative inline-block', className)}>
      {Array.from({ length: ghostCount }).map((_, i) => {
        const layer = i + 1;
        const distance = (layer / ghostCount) * ghostDistance;
        const scale = 1 + (layer / ghostCount) * 0.18;
        return (
          <span
            key={`ghost-${i}`}
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 inline-block animate-trickle-echo'
            style={{
              animationDelay: `${i * 180}ms`,
              animationDuration: `${1600 + i * 150}ms`,
              ['--trickle-echo-opacity' as string]: `${0.55 - i * 0.05}`,
              ['--trickle-echo-x' as string]: `${distance}px`,
              ['--trickle-echo-scale' as string]: `${scale}`
            } as CSSProperties}
          >
            {children}
          </span>
        );
      })}
      <span className='relative inline-block'>{children}</span>
    </Component>
  );
}
