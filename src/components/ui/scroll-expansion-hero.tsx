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
  const width = useTransform(smooth, [0, 0.45, 1], ['58%', '96%', '82%']);
  const height = useTransform(smooth, [0, 0.45, 1], ['360px', '620px', '480px']);
  const radius = useTransform(smooth, [0, 0.45, 1], ['2.8rem', '1.5rem', '2.2rem']);
  const textY = useTransform(smooth, [0, 0.45], ['40px', '-20px']);
  const bgOpacity = useTransform(smooth, [0, 0.5, 1], [0.45, 0.1, 0.22]);

  return (
    <section ref={ref} className="relative z-10 overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 -z-10 bg-cover bg-center" aria-hidden="true" data-bg={bgImageSrc}>
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImageSrc})` }} />
      </motion.div>
      <div className="mx-auto max-w-7xl">
        <motion.div style={{ y: textY }} className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne">{eyebrow}</p> : null}
          <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">{title}</h2>
        </motion.div>

        <motion.div
          style={{ width, height, borderRadius: radius }}
          className="mx-auto overflow-hidden border border-white/60 bg-white/30 p-3 shadow-editorial backdrop-blur-xl"
        >
          <div className="relative h-full overflow-hidden rounded-[inherit]">
            <motion.video
  src={mediaSrc}
  className="h-full w-full object-cover"
  style={{ scale: useTransform(smooth, [0, 1], [1.12, 1]) }}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-white/10" />
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
