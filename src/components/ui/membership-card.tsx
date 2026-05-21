import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { CreditCard, Diamond, Sparkles } from 'lucide-react';

export function MembershipCard() {
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(x * 18);
    rotateXRaw.set(y * -14);
  }

  function reset() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }

  return (
    <div className="perspective-1200">
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ transform }}
        className="card-3d relative mx-auto min-h-[390px] max-w-[560px] overflow-hidden rounded-[2.4rem] border border-white/25 bg-[linear-gradient(135deg,#18130d,#2c2419_43%,#c8a96a)] p-8 text-pearl shadow-card"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(255,255,255,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="absolute -left-24 top-0 h-full w-28 bg-white/18 blur-lg animate-cardSheen" />
        <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-champagne">Founding Member</p>
              <h3 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em]">LuckEscape</h3>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
              <Diamond className="h-6 w-6 text-champagne" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <div className="mb-6 flex gap-2">
                <span className="h-9 w-12 rounded-lg bg-champagne/90" />
                <span className="h-9 w-12 rounded-lg border border-white/25 bg-white/10" />
              </div>
              <p className="font-mono text-lg tracking-[0.24em] text-white/92">LE • 0001 • PRIVATE</p>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/64">Priority launch access</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <CreditCard className="mb-3 h-5 w-5 text-champagne" />
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/62">Status</p>
              <p className="mt-1 font-serif text-3xl">Invited</p>
            </div>
          </div>
        </div>
        <Sparkles className="absolute bottom-8 right-8 h-5 w-5 text-champagne/70" />
      </motion.div>
    </div>
  );
}
