import { Anchor, CreditCard, Crown, Home, Mail, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { title: 'Home', href: '#home', icon: Home, from: '#15120e', to: '#c8a96a' },
  { title: 'Concept', href: '#concept', icon: Crown, from: '#756f63', to: '#c8a96a' },
  { title: 'Experiences', href: '#experiences', icon: Plane, from: '#15120e', to: '#9f8450' },
  { title: 'Access', href: '#access', icon: Anchor, from: '#756f63', to: '#15120e' },
  { title: 'Card', href: '#card', icon: CreditCard, from: '#c8a96a', to: '#15120e' },
  { title: 'Join', href: '#guest-list', icon: Mail, from: '#15120e', to: '#c8a96a' },
];

export function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function GradientMenu({ className }: { className?: string }) {
  return (
    <nav className={cn('fixed right-4 top-4 z-50 md:right-8 md:top-6', className)} aria-label="Animated section menu">
      <ul className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-3">
        {items.map(({ title, href, icon: Icon, from, to }) => (
          <li key={href}>
            <button
              type="button"
              onClick={() => scrollToSection(href)}
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-white/60 shadow-sm backdrop-blur-xl transition-all duration-500 hover:w-40 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              style={{ ['--from' as string]: from, ['--to' as string]: to }}
              aria-label={`Go to ${title}`}
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--from),var(--to))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-2 bottom-[-18px] h-10 rounded-full bg-[linear-gradient(135deg,var(--from),var(--to))] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-45" />
              <Icon className="relative z-10 h-5 w-5 text-ink transition-all duration-300 group-hover:scale-0 group-hover:text-white" />
              <span className="absolute z-10 scale-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-transform delay-100 duration-300 group-hover:scale-100">
                {title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
