import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RevealTextProps {
  text: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  springDuration?: number;
  letterImages?: string[];
  className?: string;
}

export function RevealText({
  text,
  textColor = 'text-[#11100d]',
  overlayColor = 'text-[#b89244]',
  fontSize = 'text-[clamp(3rem,6.4vw,7.2rem)]',
  letterDelay = 0.045,
  overlayDelay = 0.025,
  overlayDuration = 0.35,
  springDuration = 700,
  className = '',
  letterImages = [
    'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop',
  ],
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const lastLetterDelay = (text.length - 1) * letterDelay;
    const totalDelay = lastLetterDelay * 1000 + springDuration;

    const timer = window.setTimeout(() => {
      setShowOverlay(true);
    }, totalDelay);

    return () => window.clearTimeout(timer);
  }, [text.length, letterDelay, springDuration]);

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {text.split('').map((letter, index) => {
        const isSpace = letter === ' ';

        return (
          <motion.span
            key={`${letter}-${index}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${fontSize} relative inline-block overflow-hidden font-serif font-normal leading-[0.9] tracking-[-0.055em] ${
              isSpace ? 'w-[0.28em]' : 'cursor-default'
            }`}
            initial={{
              scale: 0.88,
              opacity: 0,
              y: 38,
              filter: 'blur(14px)',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              delay: index * letterDelay,
              type: 'spring',
              damping: 12,
              stiffness: 130,
              mass: 0.8,
            }}
          >
            {!isSpace && (
              <>
                <motion.span
                  className={`absolute inset-0 ${textColor}`}
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                  }}
                  transition={{ duration: 0.16 }}
                >
                  {letter}
                </motion.span>

                <motion.span
                  className="text-transparent bg-clip-text bg-cover bg-no-repeat"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    backgroundPosition:
                      hoveredIndex === index ? '80% center' : '0% center',
                  }}
                  transition={{
                    opacity: { duration: 0.16 },
                    backgroundPosition: {
                      duration: 2.8,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    backgroundImage: `url('${
                      letterImages[index % letterImages.length]
                    }')`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {letter}
                </motion.span>

                {showOverlay && (
                  <motion.span
                    className={`absolute inset-0 ${overlayColor} pointer-events-none`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.85, 0.85, 0],
                    }}
                    transition={{
                      delay: index * overlayDelay,
                      duration: overlayDuration,
                      times: [0, 0.15, 0.65, 1],
                      ease: 'easeInOut',
                    }}
                  >
                    {letter}
                  </motion.span>
                )}
              </>
            )}
          </motion.span>
        );
      })}
    </span>
  );
}