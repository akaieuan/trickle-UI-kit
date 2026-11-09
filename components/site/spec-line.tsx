import { cn } from '@/lib/utils';

export interface SpecLineProps {
  items: { label: string; value: string | number; tone?: 'default' | 'good' | 'warn' }[];
  className?: string;
}

export function SpecLine({ items, className }: SpecLineProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-11 text-ink-quiet',
        className
      )}
    >
      {items.map((item, i) => (
        <span key={i} className='inline-flex items-baseline gap-1.5'>
          <span className='text-ink-faint'>{item.label}:</span>
          <span
            className={cn(
              'tabular-nums',
              item.tone === 'good' && 'text-select',
              item.tone === 'warn' && 'text-status-warn',
              !item.tone && 'text-ink-body'
            )}
          >
            {item.value}
          </span>
        </span>
      ))}
    </div>
  );
}
