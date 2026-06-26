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

function letterFill(label: string, accent: string) {
  return `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
  <rect width="900" height="600" fill="#050403"/>
  <path d="M-40 430 C170 315 350 305 520 245 C650 200 760 135 940 40" fill="none" stroke="${accent}" stroke-width="90" stroke-opacity=".32"/>
  <path d="M-40 500 C190 370 390 365 570 300 C705 252 815 185 940 120" fill="none" stroke="#fff0bd" stroke-width="14" stroke-opacity=".65"/>
  <g fill="${accent}" opacity=".88">
    <circle cx="170" cy="250" r="9"/><circle cx="290" cy="330" r="7"/><circle cx="460" cy="230" r="8"/><circle cx="640" cy="310" r="9"/><circle cx="770" cy="210" r="7"/>
  </g>
  <text x="54" y="535" fill="${accent}" font-family="Inter,Arial,sans-serif" font-size="38" font-weight="800" letter-spacing="8">${label}</text>
</svg>`)}`
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
    letterFill('VEGAS', '#c8a96a'),
    letterFill('CASINO', '#f0bf68'),
    letterFill('ACCESS', '#d9bd79'),
    letterFill('NIGHT', '#b89244'),
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
