import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const LUXURY_HERO_IMAGE =
  'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2400&auto=format&fit=crop';

export function GlobalMovingImage() {
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 18,
    mass: 0.9,
  });

  const opacity = useTransform(smooth, [0, 0.2, 1], [0.68, 0.38, 0.52]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#faf8f5]">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(180deg,#faf8f5_0%,#f7f2e8_52%,#fbfaf7_100%)]"
      />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
