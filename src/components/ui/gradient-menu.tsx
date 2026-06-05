import { cn } from '@/lib/utils';

const items = [
  { title: 'Concept', href: '#concept' },
  { title: 'Destinations', href: '#destinations' },
  { title: 'Partners', href: '#partners' },
];

export function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function GradientMenu({ className }: { className?: string }) {
  return (
    <nav className={cn('fixed right-4 top-4 z-50 md:right-8 md:top-6', className)} aria-label="Primary navigation">
      <ul className="flex items-center gap-1 border border-white/15 bg-black/35 px-3 py-2 shadow-sm backdrop-blur-xl md:gap-3">
        {items.map(({ title, href }) => (
          <li key={href}>
            <button
              type="button"
              onClick={() => scrollToSection(href)}
              className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72 transition hover:bg-white/12 hover:text-pearl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label={`Go to ${title}`}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
