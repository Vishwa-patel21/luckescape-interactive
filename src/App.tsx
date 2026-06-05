import { motion } from 'framer-motion';
import {
  ArrowRight,
  Crown,
  Diamond,
  ExternalLink,
  Mail,
  Plane,
  Sailboat,
  ShieldCheck,
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
  aviation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop',
  yacht: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1800&auto=format&fit=crop',
  coast: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop',
  suite: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1800&auto=format&fit=crop',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop',
};

const experienceCards = [
  {
    title: 'Curated Destinations',
    copy: 'Casino resorts, cruise lines, and private gaming destinations. Every property vetted.',
    image: img.resort,
    icon: Sailboat,
  },
  {
    title: 'Exclusive Access',
    copy: 'Member-only rates, gaming credits, and VIP floor access. Not available to the public.',
    image: img.lounge,
    icon: Ticket,
  },
  {
    title: 'Elevated Travel',
    copy: 'Private arrival coordination, suite upgrades, and discreet guest services.',
    image: img.aviation,
    icon: Plane,
  },
];

const circularItems = [
  {
    name: 'Seamless Arrival',
    designation: 'The LuckEscape Experience',
    quote: 'The experience is designed around polished coordination: arrival, stay, curated access, and subtle communication without clutter or casino noise. Every founding member arrival is personally coordinated. We handle the details so the casino floor is the first thing on their mind.',
    src: img.yacht,
  },
  {
    name: "Where We're Launching",
    designation: 'Founding Destination Partners',
    quote: 'Our first wave of destinations spans casino cruise lines, Caribbean resorts, and European gaming destinations. Founding casino partners are confirmed before public launch. Partnership inquiries are currently open.',
    src: img.cruise,
  },
  {
    name: 'Private Access',
    designation: 'Founding member priority',
    quote: 'Early members receive first visibility into limited launch offers, priority booking windows, private destination privileges, and future VIP perks. 4,847 founding members and growing.',
    src: img.suite,
  },
];

const destinationCards = [
  {
    title: 'Casino Cruise Escape',
    dateRange: 'Founding member preview',
    hostType: 'Cruise access',
    rating: 4.9,
    tags: ['Cruise', 'Private'],
    description: 'A refined ocean itinerary with curated lounge access and discreet member coordination.',
    pricePerNight: 0,
    images: [img.cruise, img.yacht, img.coast],
  },
  {
    title: 'Casino Resort Retreat',
    dateRange: 'Invitation only',
    hostType: 'Resort access',
    rating: 4.8,
    tags: ['Resort', 'Luxury'],
    description: 'A premium resort-style launch concept built for aspirational travel and invitation-only energy.',
    pricePerNight: 0,
    images: [img.resort, img.suite, img.dining],
  },
  {
    title: 'Private Arrival Experience',
    dateRange: 'Launch Destination',
    hostType: 'VIP path',
    rating: 4.9,
    tags: ['VIP', 'Travel'],
    description: 'Private-arrival styling with editorial visuals, card-led access, and simple guest-list conversion.',
    pricePerNight: 0,
    images: [img.aviation, img.lounge, img.coast],
  },
];

const dossierItems = [
  {
    label: 'Guest list',
    value: '4,847+',
    copy: 'Travelers already waiting for first access.',
  },
  {
    label: 'Member status',
    value: 'Founding',
    copy: 'Early members keep permanent founding recognition.',
  },
  {
    label: 'Destinations',
    value: '12',
    copy: 'Casino resorts, cruises, and private arrivals in curation.',
  },
  {
    label: 'Partner window',
    value: 'Open',
    copy: 'Casino and resort launch partners are being reviewed now.',
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
        className="group flex items-center gap-3 border border-white/15 bg-black/35 px-3 py-2 shadow-sm backdrop-blur-xl transition hover:bg-black/50"
        aria-label="Go to LuckEscape home"
      >
        <span className="grid h-10 w-10 place-items-center border border-champagne/45 bg-black/35 transition-transform group-hover:rotate-12">
          <Diamond className="h-4 w-4 text-champagne" />
        </span>
        <span className="hidden text-sm font-semibold uppercase tracking-[0.32em] text-pearl sm:block">LuckEscape</span>
      </button>
    </header>
  );
}

function ConceptSection() {
  return (
   <ScrollExpandMedia
  mediaSrc="/videos/luckescape-hero.mp4"
  bgImageSrc={img.resort}
  title="The platform casino players have been waiting for."
>
      <div id="concept" className="grid gap-10 border border-ink/10 bg-white/64 p-8 shadow-editorial backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-12">
        <div>
          <Badge>Invitation platform</Badge>
          <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.04em] text-ink md:text-6xl">Casino travel without the casino noise.</h3>
        </div>
        <div className="space-y-5 text-lg leading-8 text-smoke">
          <p>
            LuckEscape is a private membership platform built exclusively for casino travelers. We curate luxury gaming experiences - casino resorts, ocean cruises, and iconic destinations - and deliver them to a growing community of high-intent players who are ready to book.
          </p>
          <p>
            We don't sell noise. We sell access.
          </p>
          <p>
            Our guest list is growing daily. Casino launch partners receive guaranteed first-mover positioning before we open bookings to the public.
          </p>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}

function InvitationDossier() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 border border-white/14 bg-black/46 p-5 shadow-card backdrop-blur-xl md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <Reveal className="relative min-h-[420px] overflow-hidden">
          <img src={img.lounge} alt="Private casino lounge" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.84)),linear-gradient(90deg,rgba(0,0,0,0.62),transparent)]" />
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Private club signal</p>
              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-[-0.05em] text-pearl md:text-7xl">
                An invitation list with momentum.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/72">
              LuckEscape is being shaped for two audiences at once: travelers who want discreet access, and casino operators who want to meet demand before public bookings open.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid gap-3 sm:grid-cols-2">
          {dossierItems.map((item) => (
            <div key={item.label} className="border border-white/12 bg-white/8 p-6 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/48">{item.label}</p>
              <p className="mt-5 font-serif text-5xl leading-none text-champagne">{item.value}</p>
              <p className="mt-5 text-sm leading-7 text-white/68">{item.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experiences" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Member experience</p>
          <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-8xl">Every trip. Curated for players who know the difference.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {experienceCards.map(({ title, copy, image, icon: Icon }, index) => (
            <Reveal key={title}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="group relative min-h-[520px] overflow-hidden border border-ink/10 bg-white/48 p-3 shadow-editorial backdrop-blur-xl"
              >
                <img src={image} alt={title} className="h-full min-h-[494px] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-3 bg-gradient-to-t from-ink/72 via-ink/16 to-transparent" />
                <div className="absolute left-7 right-7 top-7 flex items-center justify-between">
                  <span className="border border-white/35 bg-white/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">0{index + 1}</span>
                  <span className="grid h-11 w-11 place-items-center border border-white/25 bg-white/14 text-white backdrop-blur-md">
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

        <div className="mt-20 border border-ink/10 bg-white/58 p-6 shadow-editorial backdrop-blur-xl md:p-10">
          <CircularTestimonials testimonials={circularItems} />
        </div>
      </div>
    </section>
  );
}

function DestinationPreview() {
  return (
    <section id="destinations" className="relative z-10 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Launch map</p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Where founding members want to go first.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-smoke">A curated first wave across casino cruises, resort retreats, and discreet arrival experiences.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {destinationCards.map((card) => <PlaceCard key={card.title} {...card} isTopRated />)}
        </div>
      </div>
    </section>
  );
}

function FoundingMembersSection() {
  const benefits = ['First access to launch offers', 'Priority booking windows', 'Curated casino travel itineraries', 'Founding member status - permanent'];
  return (
    <section id="access" className="relative z-10 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Permanent founding status</p>
          <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.055em] text-ink md:text-8xl">Become a Founding Member.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
            We are opening a limited number of early invitations ahead of our first booking window. Over 4,800 travelers have already joined. Founding members receive access before the public.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 border border-ink/10 bg-white/58 px-4 py-3 backdrop-blur-xl">
                <Star className="h-4 w-4 fill-champagne text-champagne" />
                <span className="text-sm text-ink">{benefit}</span>
              </div>
            ))}
          </div>
          <Button className="mt-10" size="lg" variant="champagne" onClick={() => scrollToSection('#guest-list')}>
            Claim Your Spot <ArrowRight className="h-4 w-4" />
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
      <div className="mx-auto max-w-7xl overflow-hidden border border-ink/10 bg-white/58 p-5 shadow-editorial backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Access flow</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Your access. On a card.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
              Members request access, receive review, and enter the launch window by invitation.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Request'],
                ['02', 'Review'],
                ['03', 'Invite'],
              ].map(([num, label]) => (
                <div key={label} className="border border-ink/10 bg-pearl/70 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-champagne">{num}</p>
                  <p className="mt-7 font-serif text-3xl text-ink">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm italic leading-7 text-smoke">
              Casino partners: your integration is handled separately. <button className="font-semibold text-champagne underline-offset-4 hover:underline" onClick={() => scrollToSection('#partners')}>Partner Inquiry</button>
            </p>
          </Reveal>

          <Reveal>
            <div className="border border-ink/10 bg-ink p-4 text-pearl shadow-card">
              <div className="relative overflow-hidden bg-[linear-gradient(135deg,#15120e,#312716)] p-7">
                <img src={img.lounge} alt="Private lounge preview" className="absolute inset-0 h-full w-full object-cover opacity-24" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">Launch Access</p>
                    <ShieldCheck className="h-5 w-5 text-champagne" />
                  </div>
                  <h3 className="mt-8 font-serif text-4xl leading-none">Guest List Card</h3>
                  <div className="mt-8 grid gap-3">
                    <div className="border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Access type</p>
                      <p className="mt-1 text-lg">Founding Member Preview</p>
                    </div>
                    <div className="border border-white/15 bg-white/10 p-4 backdrop-blur-md">
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
        <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">Your spot is waiting.</h2>
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
            {['Private Access', 'Casino Cruises', 'Luxury Resorts', 'Guest List Open', 'Founding Members', 'Invitation Only'].map((item) => (
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
      <div className="mx-auto max-w-7xl border border-ink/10 bg-pearl/80 p-6 shadow-sm backdrop-blur-xl md:p-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-champagne/45 bg-white/60">
                <Crown className="h-4 w-4 text-champagne" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-ink">LuckEscape</p>
            </div>
            <p className="mt-3 text-sm text-smoke">Something exclusive is already here.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-smoke md:items-end">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <ExternalLink className="h-4 w-4" /> Instagram placeholder
            </a>
            <a href="mailto:partners@luckescape.com" className="inline-flex items-center gap-2 hover:text-ink">
              <Mail className="h-4 w-4" /> Casino & Resort Partnerships: partners@luckescape.com
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
  const [showPartnerBar, setShowPartnerBar] = useState(false);
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

  useEffect(() => {
    const updatePartnerBar = () => setShowPartnerBar(window.scrollY > window.innerHeight * 0.85);
    updatePartnerBar();
    window.addEventListener('scroll', updatePartnerBar, { passive: true });
    return () => window.removeEventListener('scroll', updatePartnerBar);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030302] text-pearl">
      <LuckEscapeLoader show={showLoader} />

      {showIntro && <LogoScrollIntro key={introKey} />}

      <div id="site-start" className="dark-theme relative">
        <GlobalMovingImage />
        <HeaderBrand />
        <GradientMenu />
        <HorizonHeroSection />
        <Marquee />
        <InvitationDossier />
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
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-pearl shadow-glow transition hover:-translate-y-0.5 md:hidden"
        >
          Join <Waves className="h-4 w-4" />
        </button>

        <button
          onClick={() => scrollToSection('#partners')}
          className={`fixed inset-x-0 bottom-0 z-50 hidden h-10 items-center justify-center border-t border-champagne/25 bg-ink/94 text-[10px] font-semibold uppercase tracking-[0.28em] text-pearl shadow-card backdrop-blur-xl transition duration-300 md:flex ${
            showPartnerBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          Casino or Resort? <span className="mx-4 h-px w-8 bg-champagne/60" /> Partnership inquiries open
        </button>
      </div>
    </main>
  );
}
