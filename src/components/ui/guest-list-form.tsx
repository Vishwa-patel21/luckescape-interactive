import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GuestListForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [game, setGame] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName.trim() || !email.trim() || !game) return;
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={submit} className="border border-ink/10 bg-white/60 p-3 shadow-editorial backdrop-blur-xl">
        <div className="grid gap-3 md:grid-cols-3">
          <label className="block">
            <input
              required
              className="luxury-input h-14 w-full rounded-none border border-ink/10 bg-porcelain/90 px-5 text-sm text-ink outline-none transition focus:border-champagne"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <label className="block">
            <input
              required
              type="email"
              className="luxury-input h-14 w-full rounded-none border border-ink/10 bg-porcelain/90 px-5 text-sm text-ink outline-none transition focus:border-champagne"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="block">
            <select
              required
              className="luxury-input h-14 w-full rounded-none border border-ink/10 bg-porcelain/90 px-5 text-sm text-ink outline-none transition focus:border-champagne"
              value={game}
              onChange={(event) => setGame(event.target.value)}
            >
              <option value="">What's your game?</option>
              <option value="Slots">Slots</option>
              <option value="Blackjack">Blackjack</option>
              <option value="Poker">Poker</option>
              <option value="Roulette">Roulette</option>
              <option value="All of the above">All of the above</option>
            </select>
          </label>
        </div>
        <Button type="submit" size="lg" className="mt-3 w-full">
          Claim Your Invitation <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="mt-4 text-center text-xs text-smoke">No spam. Invitation updates only.</p>
        <p className="mt-2 pb-2 text-center text-xs text-smoke">We'll reach out personally when your invitation window opens.</p>
      </form>
      <motion.div
        initial={false}
        animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 10, height: submitted ? 'auto' : 0 }}
        className="mx-auto mt-5 overflow-hidden border border-champagne/30 bg-white/60 px-5 py-3 text-center text-sm text-ink backdrop-blur-xl"
      >
        Guest-list request captured in the front-end demo. Connect this to your email tool when ready.
      </motion.div>
    </div>
  );
}
