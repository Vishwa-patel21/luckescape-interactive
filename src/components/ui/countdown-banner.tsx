import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/components/ui/gradient-menu';

const stats = [
  ['4,847+', 'Travelers on the guest list'],
  ['12', 'Destinations in active curation'],
  ['First', 'Booking window'],
];

export function CountdownBanner({ onPartnerInquiry }: { onPartnerInquiry?: () => void }) {
  return (
    <section id="partners" className="relative z-10 bg-[#f2ead7] px-4 py-20 text-[#15120e] md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl overflow-hidden border border-champagne/35 bg-white/24 p-8 text-center shadow-editorial md:p-14"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">Founding casino partner window</p>
        <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-[#15120e] md:text-7xl">The demand is already here.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#5e5649] md:text-lg">
          Before we open a single booking window.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="border border-[#15120e]/12 bg-white/42 p-6 text-left">
              <p className="font-serif text-6xl font-semibold leading-none text-[#15120e]">{value}</p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6c6253]">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">
          Founding casino partner window is now open
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5e5649]">
          Our members tell us what they want to play. Our partners know exactly who they're getting.
        </p>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne/90">
          Fewer than 8 founding partner slots remaining.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={() => scrollToSection('#guest-list')}>Join the Guest List <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline" onClick={onPartnerInquiry}>Partner With Us <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </motion.div>
    </section>
  );
}
