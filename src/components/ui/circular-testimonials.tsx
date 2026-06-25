import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export function CircularTestimonials({ testimonials, autoplay = true }: { testimonials: Testimonial[]; autoplay?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const total = testimonials.length;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => setActiveIndex((prev) => (prev + 1) % total), 4600);
    return () => window.clearInterval(id);
  }, [autoplay, total]);

  return (
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="relative mx-auto h-[420px] w-full max-w-lg overflow-hidden border border-white/12 shadow-card">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.src}
            src={active.src}
            alt={active.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/16" />
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne">{active.designation}</p>
            <h3 className="mt-3 font-serif text-5xl leading-none tracking-[-0.05em] text-ink">{active.name}</h3>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">{active.quote}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-9 flex gap-3">
          <Button variant="outline" size="icon" onClick={() => setActiveIndex((activeIndex - 1 + total) % total)} aria-label="Previous experience">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setActiveIndex((activeIndex + 1) % total)} aria-label="Next experience">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CircularTestimonials;
