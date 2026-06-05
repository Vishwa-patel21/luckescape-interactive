import { motion, AnimatePresence } from 'framer-motion';
import { Diamond } from 'lucide-react';

type LuckEscapeLoaderProps = {
  show: boolean;
};

export function LuckEscapeLoader({ show }: LuckEscapeLoaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: 'blur(18px)',
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030302]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,102,0.22),transparent_36%),linear-gradient(135deg,#030302,#11100d,#030302)]" />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 18 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ rotate: -18, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#d6b466]/45 bg-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <Diamond className="h-9 w-9 text-[#b89244]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.28em', y: 18 }}
              animate={{ opacity: 1, letterSpacing: '0.42em', y: 0 }}
              transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl uppercase text-[#fffaf0] sm:text-6xl"
            >
              LuckEscape
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-5 text-[10px] uppercase tracking-[0.46em] text-[#d9bd79]/78"
            >
              Private Luxury Travel
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.95, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px w-64 origin-left bg-gradient-to-r from-transparent via-[#b89244] to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
