import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarClock,
  Crown,
  Diamond,
  ExternalLink,
  Mail,
  Plane,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Waves,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CircularTestimonials from '@/components/ui/circular-testimonials';
import { CountdownBanner } from '@/components/ui/countdown-banner';
import GradientMenu, { scrollToSection } from '@/components/ui/gradient-menu';
import { GlobalMovingImage } from '@/components/ui/global-moving-image';
import HorizonHeroSection from '@/components/ui/horizon-hero-section';
import { GuestListForm } from '@/components/ui/guest-list-form';
import { MembershipCard } from '@/components/ui/membership-card';
import PlaceCard from '@/components/ui/card-22';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { useEffect, useState } from 'react';
import { LuckEscapeLoader } from '@/components/ui/luckescape-loader';
import { LogoScrollIntro } from '@/components/ui/logo-scroll-intro';

const img = {
  cruise: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1800&auto=format&fit=crop',
  resort: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1800&auto=format&fit=crop',
  lounge: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1800&auto=format&fit=crop',
  aviation: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop',
  yacht: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1800&auto=format&fit=crop',
  coast: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop',
  suite: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1800&auto=format&fit=crop',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop',
};

const experienceCards = [
  {
    title: 'Curated Destinations',
    copy: 'Luxury casino resorts and cruise experiences worldwide.',
    image: img.resort,
    icon: Sailboat,
  },
  {
    title: 'Exclusive Access',
    copy: 'Private offers and member-only gaming destination privileges.',
    image: img.lounge,
    icon: Ticket,
  },
  {
    title: 'Elevated Travel',
    copy: 'A refined approach to casino travel for modern players.',
    image: img.aviation,
    icon: Plane,
  },
];

const circularItems = [
  {
    name: 'Curated Destinations',
    designation: 'Luxury resorts + cruises',
    quote: 'A quiet edit of casino-connected resorts, cruise routes, coastal stays, and iconic destinations with the feel of a private hospitality house.',
    src: img.cruise,
  },
  {
    name: 'Private Access',
    designation: 'Founding member priority',
    quote: 'Early members receive first visibility into limited launch offers, priority booking windows, private destination privileges, and future VIP perks.',
    src: img.suite,
  },
  {
    name: 'Seamless Arrival',
    designation: 'Elevated travel flow',
    quote: 'The experience is designed around polished coordination: arrival, stay, curated access, and subtle communication without clutter or casino noise.',
    src: img.yacht,
  },
];

const destinationCards = [
  {
    title: 'Casino Cruise Escape',
    dateRange: 'Launch Preview',
    hostType: 'Cruise access',
    rating: 4.9,
    tags: ['Cruise', 'Private'],
    description: 'A refined ocean itinerary with curated lounge access and discreet member coordination.',
    pricePerNight: 0,
    images: [img.cruise, img.yacht, img.coast],
  },
  {
    title: 'Resort Weekend',
    dateRange: 'Founding Window',
    hostType: 'Resort access',
    rating: 4.8,
    tags: ['Resort', 'Luxury'],
    description: 'A premium resort-style launch concept built for aspirational travel and invitation-only energy.',
    pricePerNight: 0,
    images: [img.resort, img.suite, img.dining],
  },
  {
    title: 'Aviation Arrival',
    dateRange: 'Future Perk',
    hostType: 'VIP path',
    rating: 4.9,
    tags: ['VIP', 'Travel'],
    description: 'Private-arrival styling with editorial visuals, card-led access, and simple guest-list conversion.',
    pricePerNight: 0,
    images: [img.aviation, img.lounge, img.coast],
  },
];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeaderBrand() {
  return (
    <header className="fixed left-4 top-4 z-50 md:left-8 md:top-6">
      <button
        onClick={() => scrollToSection('#home')}
        className="group flex items-center gap-3 rounded-full border border-ink/10 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-xl transition hover:bg-white/80"
        aria-label="Go to LuckEscape home"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/45 bg-pearl/80 transition-transform group-hover:rotate-12">
          <Diamond className="h-4 w-4 text-champagne" />
        </span>
        <span className="hidden text-sm font-semibold uppercase tracking-[0.32em] text-ink sm:block">LuckEscape</span>
      </button>
    </header>
  );
}

function ConceptSection() {
  return (
   <ScrollExpandMedia
  mediaSrc="/videos/luckescape-hero.mp4"
  bgImageSrc={img.coast}
  title="What is LuckEscape?"
  eyebrow="Short Brand Explanation"
>
      <div id="concept" className="grid gap-10 rounded-[2.4rem] border border-white/70 bg-white/48 p-8 shadow-editorial backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-12">
        <div>
          <Badge>Private platform</Badge>
          <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.04em] text-ink md:text-6xl">Casino travel without the casino noise.</h3>
        </div>
        <div className="space-y-5 text-lg leading-8 text-smoke">
          <p>
            LuckEscape is a private casino travel platform connecting players with curated luxury gaming experiences across cruises, resorts, and iconic destinations worldwide.
          </p>
          <p>
            Members receive early access to exclusive travel offers, gaming privileges, and invitation-only experiences.
          </p>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}

function ExperienceSection() {
  return (
    <section id="experiences" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <Badge>Experience Section</Badge>
          <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-8xl">Three ways the brand feels premium.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {experienceCards.map(({ title, copy, image, icon: Icon }, index) => (
            <Reveal key={title}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="group relative min-h-[520px] overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/40 p-3 shadow-editorial backdrop-blur-xl"
              >
                <img src={image} alt={title} className="h-full min-h-[494px] w-full rounded-[1.8rem] object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-3 rounded-[1.8rem] bg-gradient-to-t from-ink/72 via-ink/16 to-transparent" />
                <div className="absolute left-7 right-7 top-7 flex items-center justify-between">
                  <span className="rounded-full border border-white/35 bg-white/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">0{index + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/14 text-white backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute bottom-8 left-7 right-7 text-pearl">
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.05em]">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/76">{copy}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 rounded-[2.4rem] border border-white/70 bg-white/48 p-6 shadow-editorial backdrop-blur-xl md:p-10">
          <CircularTestimonials testimonials={circularItems} />
        </div>
      </div>
    </section>
  );
}

function DestinationPreview() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge>Interactive Destination Cards</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Large imagery. Minimal copy. Elegant hover motion.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-smoke">Card carousel interactions are included so the site feels like a premium product instead of a static landing page.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {destinationCards.map((card) => <PlaceCard key={card.title} {...card} isTopRated />)}
        </div>
      </div>
    </section>
  );
}

function FoundingMembersSection() {
  const benefits = ['Exclusive launch offers', 'Priority booking windows', 'Private gaming travel experiences', 'Future VIP perks'];
  return (
    <section id="access" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <Badge>Founding Members Section</Badge>
          <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.055em] text-ink md:text-8xl">Become a Founding Member.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
            We are opening a limited number of early invitations ahead of launch.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-full border border-ink/10 bg-white/52 px-4 py-3 backdrop-blur-xl">
                <Star className="h-4 w-4 fill-champagne text-champagne" />
                <span className="text-sm text-ink">{benefit}</span>
              </div>
            ))}
          </div>
          <Button className="mt-10" size="lg" variant="champagne" onClick={() => scrollToSection('#guest-list')}>
            Request Invitation <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
        <Reveal>
          <MembershipCard />
        </Reveal>
      </div>
    </section>
  );
}

function PaymentCardPageSection() {
  return (
    <section id="card" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/70 bg-white/44 p-5 shadow-editorial backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <Badge>Payment Card Page / Access Preview</Badge>
            <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Smooth card-led membership flow.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
              This section gives the site a premium card-page feel. It is a front-end preview for requesting access, not a live payment processor.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Request'],
                ['02', 'Review'],
                ['03', 'Invite'],
              ].map(([num, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-ink/10 bg-pearl/70 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-champagne">{num}</p>
                  <p className="mt-7 font-serif text-3xl text-ink">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[2.2rem] border border-ink/10 bg-ink p-4 text-pearl shadow-card">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,#15120e,#312716)] p-7">
                <img src={img.lounge} alt="Private lounge preview" className="absolute inset-0 h-full w-full object-cover opacity-24" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">Launch Access</p>
                    <ShieldCheck className="h-5 w-5 text-champagne" />
                  </div>
                  <h3 className="mt-8 font-serif text-4xl leading-none">Guest List Card</h3>
                  <div className="mt-8 grid gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Access type</p>
                      <p className="mt-1 text-lg">Founding Member Preview</p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Status</p>
                      <p className="mt-1 text-lg">Invitation request only</p>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" variant="champagne" onClick={() => scrollToSection('#guest-list')}>Continue to Guest List</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GuestListSection() {
  return (
    <section id="guest-list" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Badge>Email Capture Section</Badge>
        <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Get On The Guest List.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-smoke">Private launch access. Limited invitations.</p>
      </Reveal>
      <Reveal className="mt-10">
        <GuestListForm />
      </Reveal>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-ink/10 bg-white/34 py-4 backdrop-blur-md">
      <div className="flex w-max animate-marquee gap-10 text-[10px] font-semibold uppercase tracking-[0.32em] text-smoke">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-10">
            {['Private Access', 'Casino Cruises', 'Luxury Resorts', 'Launching Soon', 'Founding Members', 'Invitation Only'].map((item) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                {item} <span className="h-1 w-1 rounded-full bg-champagne" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-ink/10 bg-pearl/80 p-6 shadow-sm backdrop-blur-xl md:p-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/45 bg-white/60">
                <Crown className="h-4 w-4 text-champagne" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-ink">LuckEscape</p>
            </div>
            <p className="mt-3 text-sm text-smoke">Something exclusive is coming.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-smoke md:items-end">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <ExternalLink className="h-4 w-4" /> Instagram placeholder
            </a>
            <a href="mailto:partnerships@luckescape.com" className="inline-flex items-center gap-2 hover:text-ink">
              <Mail className="h-4 w-4" /> For Partnership Inquiries: partnerships@luckescape.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      setShowLoader(false);

      window.setTimeout(() => {
        window.scrollTo(0, 0);
        setIntroKey(Date.now());
        setShowIntro(true);
      }, 120);
    }, 2600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-pearl text-ink">
      <LuckEscapeLoader show={showLoader} />

      {showIntro && <LogoScrollIntro key={introKey} />}

      <div id="site-start" className="relative">
        <GlobalMovingImage />
        <HeaderBrand />
        <GradientMenu />
        <HorizonHeroSection />
        <Marquee />
        <ConceptSection />
        <ExperienceSection />
        <DestinationPreview />
        <FoundingMembersSection />
        <PaymentCardPageSection />
        <CountdownBanner />
        <GuestListSection />
        <Footer />

        <button
          onClick={() => scrollToSection('#guest-list')}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-pearl shadow-glow transition hover:-translate-y-0.5 md:hidden"
        >
          Join <Waves className="h-4 w-4" />
        </button>
      </div>
    </main>
  );
}