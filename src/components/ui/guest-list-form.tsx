import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GuestListForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={submit} className="rounded-[2.2rem] border border-ink/10 bg-white/60 p-3 shadow-editorial backdrop-blur-xl">
        <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <label className="relative block">
            <User className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-champagne" />
            <input
              required
              className="luxury-input h-14 w-full rounded-full border border-ink/10 bg-porcelain/90 pl-12 pr-5 text-sm text-ink outline-none transition focus:border-champagne"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <label className="relative block">
            <Mail className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-champagne" />
            <input
              required
              type="email"
              className="luxury-input h-14 w-full rounded-full border border-ink/10 bg-porcelain/90 pl-12 pr-5 text-sm text-ink outline-none transition focus:border-champagne"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <Button type="submit" size="lg" className="mt-3 w-full">
          Join LuckEscape <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="mt-4 pb-2 text-center text-xs text-smoke">No spam. Invitation updates only.</p>
      </form>
      <motion.div
        initial={false}
        animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 10, height: submitted ? 'auto' : 0 }}
        className="mx-auto mt-5 overflow-hidden rounded-full border border-champagne/30 bg-white/60 px-5 py-3 text-center text-sm text-ink backdrop-blur-xl"
      >
        Guest-list request captured in the front-end demo. Connect this to your email tool when ready.
      </motion.div>
    </div>
  );
}
