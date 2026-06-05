import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/components/ui/gradient-menu';

const stats = [
  ['4,847+', 'Travelers on the guest list'],
  ['12', 'Destinations in active curation'],
  ['Q3 2025', 'First booking window'],
];

export function CountdownBanner() {
  return (
    <section id="partners" className="relative z-10 px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl overflow-hidden border border-champagne/22 bg-black/58 p-8 text-center shadow-editorial backdrop-blur-xl md:p-14"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">Founding casino partner window</p>
        <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">The demand is already here.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-smoke md:text-lg">
          Before we open a single booking window.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="border border-white/12 bg-white/8 p-6 text-left backdrop-blur-md">
              <p className="font-serif text-5xl leading-none text-ink md:text-6xl">{value}</p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-smoke">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">
          Founding casino partner window is now open
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={() => scrollToSection('#guest-list')}>Join the Guest List <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline" onClick={() => window.location.href = 'mailto:partners@luckescape.com'}>Partner With Us <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </motion.div>
    </section>
  );
}
