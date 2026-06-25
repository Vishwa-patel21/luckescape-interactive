import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Diamond } from 'lucide-react';
import { LUXURY_HERO_IMAGE } from '@/components/ui/global-moving-image';

export function LogoScrollIntro() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = window.setTimeout(() => {
      setAnimationKey((prev) => prev + 1);
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });

  const logoOpacity = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 1.05, 0.72]);
  const logoY = useTransform(scrollYProgress, [0, 0.45, 0.78], ['0%', '-8%', '-62%']);
  const logoBlur = useTransform(scrollYProgress, [0, 0.45, 0.72], ['0px', '0px', '18px']);

  const bgOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const discoverOpacity = useTransform(scrollYProgress, [0, 0.38, 0.62], [1, 1, 0]);

  const letters = 'LUCKESCAPE'.split('');

  const scrollToSite = () => {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      ref={introRef}
      className="relative z-[80] h-screen overflow-hidden bg-[#030302]"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <motion.div
          style={{
            backgroundImage: `url(${LUXURY_HERO_IMAGE})`,
            scale: bgScale,
          }}
          className="absolute inset-[-10%] bg-cover bg-center opacity-100"
        />

        <div className="absolute inset-0 bg-[rgba(3,3,2,0.50)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(200,169,106,0.12),rgba(3,3,2,0.24)_44%,rgba(3,3,2,0.70)_86%)]" />
      </motion.div>

      <div className="sticky top-0 z-10 flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.div
          key={animationKey}
          style={{
            opacity: logoOpacity,
            scale: logoScale,
            y: logoY,
            filter: logoBlur,
          }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
            <motion.div
              initial={{ rotate: -22, scale: 0.55, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid h-20 w-20 place-items-center md:h-24 md:w-24"
            >
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Diamond className="h-16 w-16 stroke-[1.4] text-[#d9bd79] md:h-20 md:w-20" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden h-20 w-px origin-center bg-[#d9bd79]/42 md:block"
            />

            <div className="flex items-center justify-center">
              {letters.map((letter, index) => (
                <motion.span
                  key={`${animationKey}-${letter}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 26,
                    scale: 0.4,
                    filter: 'blur(14px)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [0.4, 1.45, 1],
                    filter: ['blur(14px)', 'blur(0px)', 'blur(0px)'],
                  }}
                  transition={{
                    delay: 0.55 + index * 0.13,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-4xl font-light uppercase tracking-[0.32em] text-[#fffaf0] sm:text-6xl md:text-7xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.05,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 text-[10px] uppercase tracking-[0.42em] text-[#d9bd79]/78"
          >
            Private luxury travel. Quiet access. Guest list now open.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              delay: 2.25,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 h-px w-72 origin-center bg-gradient-to-r from-transparent via-[#d9bd79] to-transparent"
          />
        </motion.div>

        <motion.button
          style={{ opacity: discoverOpacity }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.8 }}
          onClick={scrollToSite}
          className="absolute bottom-12 left-[14%] inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[#d9bd79]"
        >
          Scroll Down To Discover
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.button>

        <motion.div
          style={{ opacity: discoverOpacity }}
          className="absolute bottom-12 right-[14%] h-px w-12 bg-[#d9bd79]"
        />
      </div>
    </section>
  );
}
