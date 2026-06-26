import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/components/ui/gradient-menu';

const stats = [
  ['4,847+', 'Travelers on the guest list'],
  ['12', 'Destinations in active curation'],
  ['Q3 2025', 'First booking window'],
];

type CountdownBannerProps = {
  onPartnerInquiry?: () => void;
};

export function CountdownBanner({ onPartnerInquiry }: CountdownBannerProps) {
  return (
    <section id="partners" className="relative z-10 bg-[#f3e7d0] px-4 py-20 text-[#15120e] md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl overflow-hidden border border-champagne/40 bg-[#fff8e8]/84 p-8 text-center shadow-editorial backdrop-blur-xl md:p-14"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">Founding casino partner window</p>
        <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-[#15120e] md:text-7xl">The demand is already here.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#5f5748] md:text-lg">
          Before we open a single booking window.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="border border-[#15120e]/10 bg-white/62 p-6 text-left backdrop-blur-md">
              <p className="font-serif text-5xl font-semibold leading-none text-[#15120e] md:text-6xl">{value}</p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5f5748]">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.36em] text-champagne">
          Founding casino partner window is now open
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="champagne" onClick={() => scrollToSection('#guest-list')}>Join the Guest List <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline" className="text-[#15120e]" onClick={onPartnerInquiry}>Partner With Us <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </motion.div>
    </section>
  );
}
