import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const LUXURY_HERO_IMAGE =
  'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2400&auto=format&fit=crop';

function usePointerRatio() {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return position;
}

export function GlobalMovingImage() {
  const pointer = usePointerRatio();
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 18,
    mass: 0.9,
  });

  const y = useTransform(smooth, [0, 1], ['-10%', '14%']);
  const x = useTransform(smooth, [0, 1], ['-4%', '4%']);
  const scale = useTransform(smooth, [0, 1], [1.12, 1.36]);
  const rotate = useTransform(smooth, [0, 1], [-1.8, 2.2]);
  const opacity = useTransform(smooth, [0, 0.25, 0.65, 1], [0.82, 0.55, 0.42, 0.62]);

  const pointerTransform = useMemo(() => {
    const moveX = (pointer.x - 0.5) * -70;
    const moveY = (pointer.y - 0.5) * -52;
    return `translate3d(${moveX}px, ${moveY}px, 0)`;
  }, [pointer.x, pointer.y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-pearl">
      <motion.div
        style={{ x, y, scale, rotate, opacity }}
        className="absolute inset-[-18%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${LUXURY_HERO_IMAGE})`,
            transform: pointerTransform,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(255,255,255,0.08),rgba(247,242,232,0.36)_44%,rgba(247,242,232,0.86)_90%)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,232,0.80),rgba(247,242,232,0.38)_45%,rgba(247,242,232,0.84))]" />
      <div className="absolute inset-0 noise" />
      <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-champagne/16 blur-3xl" />
      <div className="absolute bottom-[12%] right-[9%] h-72 w-72 rounded-full bg-white/30 blur-3xl" />
    </div>
  );
}