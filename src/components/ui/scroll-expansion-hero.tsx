import { ReactNode, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title: string;
  eyebrow?: string;
  children?: ReactNode;
}

export default function ScrollExpandMedia({ mediaSrc, bgImageSrc, title, eyebrow, children }: ScrollExpandMediaProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 72, damping: 22 });
  const width = useTransform(smooth, [0, 0.45, 1], ['72%', '100%', '92%']);
  const height = useTransform(smooth, [0, 0.45, 1], ['360px', '560px', '460px']);
  const textY = useTransform(smooth, [0, 0.45], ['40px', '-20px']);

  return (
    <section ref={ref} className="relative z-10 overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div style={{ y: textY }} className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne">{eyebrow}</p> : null}
          <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">{title}</h2>
        </motion.div>

        <motion.div
          style={{ width, height }}
          className="mx-auto overflow-hidden border border-ink/10 bg-white/40 p-3 shadow-editorial backdrop-blur-xl"
        >
          <div className="relative h-full overflow-hidden">
            <motion.img
              src={bgImageSrc || mediaSrc}
              alt=""
              className="h-full w-full object-cover"
              style={{ scale: useTransform(smooth, [0, 1], [1.08, 1]) }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-white/10" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <p className="max-w-4xl text-sm font-semibold uppercase leading-7 tracking-[0.28em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.75)] md:text-xl md:leading-9 md:tracking-[0.36em]">
                The only platform built to send players to your floor, not just your hotel.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
