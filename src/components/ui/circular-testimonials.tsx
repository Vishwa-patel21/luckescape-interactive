import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

function calculateGap(width: number) {
  const minWidth = 800;
  const maxWidth = 1360;
  const minGap = 46;
  const maxGap = 82;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({ testimonials, autoplay = true }: { testimonials: Testimonial[]; autoplay?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const active = testimonials[activeIndex];
  const total = testimonials.length;

  useEffect(() => {
    const update = () => setContainerWidth(imageContainerRef.current?.offsetWidth ?? 1200);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => setActiveIndex((prev) => (prev + 1) % total), 4600);
    return () => window.clearInterval(id);
  }, [autoplay, total]);

  const gap = useMemo(() => calculateGap(containerWidth), [containerWidth]);

  function getStyle(index: number): React.CSSProperties {
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + total) % total === index;
    const isRight = (activeIndex + 1) % total === index;
    if (isActive) return { opacity: 1, zIndex: 4, transform: 'translateX(0) translateY(0) scale(1)' };
    if (isLeft) return { opacity: 1, zIndex: 3, transform: `translateX(-${gap}px) translateY(-${gap * 0.68}px) scale(0.84) rotate(-4deg)` };
    if (isRight) return { opacity: 1, zIndex: 3, transform: `translateX(${gap}px) translateY(-${gap * 0.68}px) scale(0.84) rotate(4deg)` };
    return { opacity: 0, zIndex: 0, transform: 'translateY(20px) scale(0.72)', pointerEvents: 'none' };
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div ref={imageContainerRef} className="relative mx-auto h-[400px] w-full max-w-md perspective-1200">
        {testimonials.map((item, index) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.name}
            className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-card transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={getStyle(index)}
          />
        ))}
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
