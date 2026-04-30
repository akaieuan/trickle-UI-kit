'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface ControlSpec {
  key: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export interface ControlPanelProps {
  specs: ControlSpec[];
  values: Record<string, number>;
  onChange: (values: Record<string, number>) => void;
  className?: string;
  trailingActions?: ReactNode;
}

export function ControlPanel({ specs, values, onChange, className, trailingActions }: ControlPanelProps) {
  return (
    <div className={cn('flex w-full flex-col gap-3 rounded-md border border-border bg-foreground/[0.015] p-3 dark:bg-foreground/[0.025]', className)}>
      {specs.map((spec) => (
        <label key={spec.key} className='flex items-center gap-3'>
          <span className='w-16 shrink-0 font-mono text-[11px] text-muted-foreground/70'>{spec.label}</span>
          <input
            type='range'
            min={spec.min}
            max={spec.max}
            step={spec.step ?? 1}
            value={values[spec.key] ?? spec.min}
            onChange={(e) => onChange({ ...values, [spec.key]: Number(e.target.value) })}
            className='range-clean flex-1 cursor-pointer'
          />
          <span className='w-14 shrink-0 text-right font-mono text-[11px] tabular-nums text-foreground/80'>
            {values[spec.key] ?? spec.min}
            {spec.unit && <span className='ml-0.5 text-muted-foreground/50'>{spec.unit}</span>}
          </span>
        </label>
      ))}
      {trailingActions && <div className='mt-1 flex items-center gap-2 border-t border-border pt-3'>{trailingActions}</div>}
    </div>
  );
}
