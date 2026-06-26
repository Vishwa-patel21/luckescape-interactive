import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const LUXURY_HERO_IMAGE = '/images/luckescape/1.jpg';
export const CLOSING_HERO_IMAGE = '/images/luckescape/1.jpg';

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

  const y = useTransform(smooth, [0, 1], ['-10%', '12%']);
  const x = useTransform(smooth, [0, 1], ['-3%', '3%']);
  const scale = useTransform(smooth, [0, 1], [1.1, 1.32]);
  const rotate = useTransform(smooth, [0, 1], [-1.2, 1.4]);
  const imageOpacity = useTransform(smooth, [0, 0.25, 0.65, 1], [1, 0.96, 0.9, 0.94]);

  const pointerTransform = useMemo(() => {
    const moveX = (pointer.x - 0.5) * -56;
    const moveY = (pointer.y - 0.5) * -38;
    return `translate3d(${moveX}px, ${moveY}px, 0)`;
  }, [pointer.x, pointer.y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030302]">
      <motion.div
        style={{ x, y, scale, rotate, opacity: imageOpacity }}
        className="absolute inset-[-18%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${LUXURY_HERO_IMAGE})`,
            transform: pointerTransform,
          }}
        />
        <div className="absolute inset-0 bg-[rgba(3,3,2,0.70)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(200,169,106,0.14),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.64))]" />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
