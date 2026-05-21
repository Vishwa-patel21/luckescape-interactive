import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-ink/10 bg-white/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-smoke backdrop-blur-md',
        className,
      )}
      {...props}
    />
  );
}
