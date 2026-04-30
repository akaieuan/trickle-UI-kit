import { cn } from '@/lib/cn';

export interface SpecLineProps {
  items: { label: string; value: string | number; tone?: 'default' | 'good' | 'warn' }[];
  className?: string;
}

export function SpecLine({ items, className }: SpecLineProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground/70', className)}>
      {items.map((item, i) => (
        <span key={i} className='inline-flex items-baseline gap-1.5'>
          <span className='text-muted-foreground/50'>{item.label}:</span>
          <span
            className={cn(
              item.tone === 'good' && 'text-emerald-500',
              item.tone === 'warn' && 'text-amber-500',
              !item.tone && 'text-foreground/70'
            )}
          >
            {item.value}
          </span>
        </span>
      ))}
    </div>
  );
}
