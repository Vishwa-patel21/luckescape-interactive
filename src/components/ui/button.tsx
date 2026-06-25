import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-champagne text-ink hover:-translate-y-0.5 hover:shadow-glow',
        champagne: 'bg-champagne text-ink hover:-translate-y-0.5 hover:shadow-glow',
        outline: 'border border-champagne/45 bg-black/28 text-pearl backdrop-blur-md hover:border-champagne hover:bg-black/45',
        ghost: 'text-ink hover:bg-ink/5',
        glass: 'border border-white/45 bg-white/25 text-pearl backdrop-blur-xl hover:bg-white/35',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-4 text-xs',
        lg: 'h-14 px-8',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
