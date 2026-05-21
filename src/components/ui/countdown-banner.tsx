import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/components/ui/gradient-menu';

const TARGET_OFFSET_DAYS = 3;

function getTimeLeft() {
  const target = new Date();
  target.setDate(target.getDate() + TARGET_OFFSET_DAYS);
  target.setHours(0, 0, 0, 0);
  const diff = Math.max(0, target.getTime() - Date.now());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid min-w-[82px] place-items-center rounded-2xl border border-ink/10 bg-white/55 px-4 py-4 shadow-sm backdrop-blur-xl md:min-w-[104px] md:px-6 md:py-5">
        <motion.span key={value} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-mono text-4xl tracking-[-0.08em] text-ink md:text-6xl">
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-smoke">{label}</span>
    </div>
  );
}

export function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2.8rem] border border-white/70 bg-white/44 p-8 text-center shadow-editorial backdrop-blur-xl md:p-14"
      >
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-smoke">
          <Sparkles className="h-3.5 w-3.5 text-champagne" /> Early Access Opening Soon
        </div>
        <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Launching Soon</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-smoke md:text-lg">
          Reserve your place before the first invitation window opens.
        </p>
        <div className="mt-9 flex items-center justify-center gap-2 md:gap-4">
          <TimeUnit value={time.hours} label="Hours" />
          <span className="pb-7 text-3xl text-smoke/40">:</span>
          <TimeUnit value={time.minutes} label="Minutes" />
          <span className="pb-7 text-3xl text-smoke/40">:</span>
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={() => scrollToSection('#guest-list')}>Get Notified <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="outline" onClick={() => scrollToSection('#card')}><Clock className="h-4 w-4" /> View Access Card</Button>
        </div>
      </motion.div>
    </section>
  );
}
