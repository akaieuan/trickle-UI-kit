import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/* The type scale is numeric — text-11, text-14, text-20 — and tailwind-merge
   has no way to tell those from a colour like text-ink-quiet. Left to guess
   it files them in the same group, so `cn('text-11', 'text-ink-quiet')`
   silently dropped the size and the text fell back to 16px. Naming the scale
   here is what keeps a size and a colour from cancelling each other out. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['10', '11', '12', '13', '14', '15', '17', '20', '26', 'display'] }
      ]
    }
  }
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
