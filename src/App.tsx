import { motion } from 'framer-motion';
import {
  ArrowRight,
  Crown,
  Diamond,
  Mail,
  ShieldCheck,
  Waves,
  X,
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
  casinoPoolNight: 'https://source.unsplash.com/1800x1200/?casino,resort,pool,night',
  poolTower: 'https://source.unsplash.com/1800x1200/?las-vegas,resort,pool,tower,night',
  casinoLounge: 'https://source.unsplash.com/1800x1200/?casino,lounge,night',
  skylineSuite: 'https://source.unsplash.com/1800x1200/?las-vegas,hotel,suite,night',
  casinoEntrance: 'https://source.unsplash.com/1800x1200/?casino,hotel,entrance,night',
  vipDoor: 'https://source.unsplash.com/1800x1200/?casino,vip,door,host',
  oceanLiner: 'https://source.unsplash.com/1800x1200/?ocean,liner,sea,golden-hour',
  vegasWarm: 'https://source.unsplash.com/1800x1200/?las-vegas-strip,aerial,gold,night',
};

const worldMapGraphic = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#050403"/>
  <path d="M162 322c70-50 144-68 223-52 64 13 116 1 166-36 79-58 170-66 272-23 91 38 174 28 249-31" fill="none" stroke="#302715" stroke-width="2"/>
  <path d="M121 468c98-45 189-54 273-29 88 26 170 16 246-31 95-59 190-58 285 3 53 34 103 47 150 40" fill="none" stroke="#302715" stroke-width="2"/>
  ${[
    ['Las Vegas', 214, 348],
    ['The Bahamas', 370, 430],
    ['Monte Carlo', 612, 332],
    ['Macau', 910, 410],
    ['Singapore', 895, 505],
    ['Caribbean', 438, 488],
  ].map(([label, x, y]) => `
    <circle cx="${x}" cy="${y}" r="8" fill="#c8a96a"/>
    <circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#c8a96a" opacity=".28"/>
    <text x="${Number(x) + 18}" y="${Number(y) + 5}" fill="#f7f2e8" font-family="Inter, Arial" font-size="24" letter-spacing="3">${label}</text>
  `).join('')}
  <text x="70" y="92" fill="#c8a96a" font-family="Inter, Arial" font-size="16" letter-spacing="8">FOUNDING DESTINATION MAP</text>
</svg>
`)}`;

const experienceCards = [
  {
    title: 'Curated Destinations',
    copy: 'Casino resorts, cruise lines, and private gaming destinations. Every property vetted.',
    image: img.resort,
  },
  {
    title: 'Exclusive Access',
    copy: 'Member-only rates, gaming credits, and VIP floor access. Not available to the public.',
    image: img.casinoLounge,
  },
  {
    title: 'Elevated Travel',
    copy: 'Private arrival coordination, suite upgrades, and discreet guest services.',
    image: img.skylineSuite,
  },
];

const circularItems = [
  {
    name: 'Seamless Arrival',
    designation: 'The LuckEscape Experience',
    quote: 'The experience is designed around polished coordination: arrival, stay, curated access, and subtle communication without clutter or casino noise. Every founding member arrival is personally coordinated. We handle the details so the casino floor is the first thing on their mind.',
    src: img.casinoEntrance,
  },
  {
    name: 'Private Access',
    designation: 'Founding member priority',
    quote: 'Early members receive first access to limited launch offers, priority booking windows, private destination privileges, and future VIP perks. 4,847 founding members and growing.',
    src: img.vipDoor,
  },
  {
    name: "Where We're Launching",
    designation: 'Founding Destination Partners',
    quote: 'Our first wave of destinations spans casino cruise lines, Caribbean resorts, and European gaming destinations. Founding casino partners are confirmed before public launch. Partnership inquiries are currently open.',
    src: worldMapGraphic,
  },
];

const destinationCards = [
  {
    title: 'Casino Cruise Escape',
    dateRange: 'Founding member preview',
    hostType: 'Cruise access',
    rating: 4.9,
    tags: ['Cruise', 'Private'],
    description: 'A refined ocean itinerary with curated gaming lounge access and discreet member coordination.',
    pricePerNight: 0,
    images: [img.oceanLiner, img.yacht, img.coast],
  },
  {
    title: 'Casino Resort Retreat',
    dateRange: 'Invitation only',
    hostType: 'Resort access',
    rating: 4.8,
    tags: ['Resort', 'Luxury'],
    description: 'Curated resort stays with gaming floor access, suite priority, and member-only credit packages.',
    pricePerNight: 0,
    images: [img.casinoPoolNight, img.suite, img.dining],
  },
  {
    title: 'Private Arrival Experience',
    dateRange: 'Launch Destination',
    hostType: 'VIP path',
    rating: 4.9,
    tags: ['VIP', 'Travel'],
    description: 'From tarmac to table. Arrival coordination, VIP check-in, and first-night gaming access arranged in advance.',
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
  bgImageSrc={img.poolTower}
  title="The platform casino players have been waiting for."
  imageOverlayText="The only platform built to send players to your floor, not just your hotel."
>
      <div id="concept" className="grid gap-10 border border-ink/10 bg-white/64 p-8 shadow-editorial backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-12">
        <div>
          <Badge>How it works</Badge>
          <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.04em] text-ink md:text-6xl">Casino travel without the casino noise.</h3>
        </div>
        <div className="space-y-5 text-lg leading-8 text-white/90">
          <p>
            LuckEscape is a private membership platform built exclusively for casino travelers. We curate luxury gaming experiences - casino resorts, ocean cruises, and iconic destinations - and deliver them to a growing community of high-intent players who are ready to book.
          </p>
          <p className="border-l-2 border-champagne pl-5 text-white/90">
            We don't sell noise. We sell access.
          </p>
          <p>
            Our guest list is growing daily. Casino launch partners receive guaranteed first-mover positioning before we open bookings to the public.
          </p>
          <p className="font-serif text-xl italic text-champagne/90">
            Our casino partners make the experience possible. You just have to know where to look.
          </p>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}

function DestinationMarqueeStrip() {
  return (
    <div className="relative z-10 border-y border-champagne/20 bg-black/42 px-4 py-5 backdrop-blur-md">
      <p className="mx-auto max-w-7xl text-center text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">
        Las Vegas - Monte Carlo - The Bahamas - Macau - Singapore - Caribbean
      </p>
    </div>
  );
}

function InvitationDossier() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 border border-white/14 bg-black/46 p-5 shadow-card backdrop-blur-xl md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <Reveal className="relative min-h-[420px] overflow-hidden">
          <img src={img.casinoPoolNight} alt="Casino resort pool at night" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.84)),linear-gradient(90deg,rgba(0,0,0,0.62),transparent)]" />
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Platform in motion</p>
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
              {item.label === 'Partner window' ? (
                <p className="mt-3 text-xs italic text-champagne/82">Applications reviewed within 48 hours.</p>
              ) : null}
            </div>
          ))}
          <div className="border-t border-champagne/45 pt-5 sm:col-span-2">
            <p className="text-center font-serif text-xl italic leading-8 text-champagne/90">
              The first booking window opens to founding members only. Casino partners confirmed before public access.
            </p>
          </div>
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
          {experienceCards.map(({ title, copy, image }, index) => (
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
        <p className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-champagne">
          Each destination represents a founding partner slot. Limited properties per region.
        </p>
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
            We are opening a limited number of early invitations ahead of our first booking window. 4,847+ travelers have already joined. Founding members receive access before the public.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 border border-ink/10 bg-white/58 px-4 py-3 backdrop-blur-xl">
                <Diamond className="h-4 w-4 text-champagne" />
                <span className="text-sm text-ink">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-smoke">No payment required. Membership by invitation.</p>
          <Button className="mt-10" size="lg" variant="champagne" onClick={() => scrollToSection('#guest-list')}>
            Claim Your Spot <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
        <Reveal>
          <MembershipCard />
          <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-champagne">
            LE - 0001 - PRIVATE - Founding member status is permanent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PaymentCardPageSection({ onPartnerInquiry }: { onPartnerInquiry: () => void }) {
  return (
    <section id="card" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden border border-ink/10 bg-white/58 p-5 shadow-editorial backdrop-blur-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Your journey in</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] text-ink md:text-7xl">What a LuckEscape booking looks like.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
              Actual offers are revealed to members first. This preview shows how the platform turns private access into something bookable.
            </p>
            <p className="mt-7 text-sm italic leading-7 text-smoke">
              Casino partners: your integration is handled separately. <button className="font-semibold text-champagne underline-offset-4 hover:underline" onClick={onPartnerInquiry}>Partner Inquiry</button>
            </p>
          </Reveal>

          <Reveal>
            <div className="border border-champagne/28 bg-[#080705] p-5 text-pearl shadow-card">
              <div className="border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(200,169,106,0.08))] p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">Founding member preview</p>
                    <h3 className="mt-5 font-serif text-5xl leading-none">Casino Cruise Escape</h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/56">MSC Divina - 7 Nights - Caribbean</p>
                  </div>
                  <ShieldCheck className="h-6 w-6 shrink-0 text-champagne" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['Gaming floor access', '$300 casino credit', 'VIP embarkation', 'Member rate from $899'].map((item) => (
                    <div key={item} className="border border-white/12 bg-black/24 px-4 py-3 text-sm text-white/78">{item}</div>
                  ))}
                </div>
                <Button className="mt-7 w-full" onClick={() => scrollToSection('#guest-list')}>Request Access <ArrowRight className="h-4 w-4" /></Button>
                <p className="mt-5 text-center text-sm italic text-white/56">
                  Actual offers revealed to members at launch. This is a founding member preview.
                </p>
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
    <section id="guest-list" className="relative z-10 overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <img src={img.vegasWarm} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.58),rgba(0,0,0,0.70)),linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.28),rgba(0,0,0,0.74))]" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Join 4,847 travelers already on the list.</p>
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
            <a href="mailto:partners@luckescape.com" className="inline-flex items-center gap-2 hover:text-ink">
              <Mail className="h-4 w-4" /> Casino & Resort Partnerships: partners@luckescape.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PartnerInquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-black/78 px-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Partner inquiry">
      <div className="relative w-full max-w-2xl border border-champagne/30 bg-[#080705] p-6 shadow-card md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition hover:border-champagne hover:text-champagne"
          aria-label="Close partner inquiry"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Partner inquiry</p>
        <h2 className="mt-4 max-w-xl font-serif text-5xl leading-none tracking-[-0.05em] text-pearl">Request a partner conversation.</h2>
        <form
          className="mt-8 grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <input required className="luxury-input h-14 border border-white/14 bg-white/8 px-5 text-sm text-pearl outline-none transition focus:border-champagne" placeholder="Property Name (e.g. MGM Grand Las Vegas)" />
          <input required className="luxury-input h-14 border border-white/14 bg-white/8 px-5 text-sm text-pearl outline-none transition focus:border-champagne" placeholder="Your Role (e.g. Director of Casino Marketing)" />
          <input required type="email" className="luxury-input h-14 border border-white/14 bg-white/8 px-5 text-sm text-pearl outline-none transition focus:border-champagne" placeholder="Email Address" />
          <textarea className="luxury-input min-h-32 border border-white/14 bg-white/8 px-5 py-4 text-sm text-pearl outline-none transition focus:border-champagne" placeholder="Tell us about your property and what you're looking for" />
          <Button type="submit" size="lg" className="mt-2 w-full">
            Request Partner Conversation <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-smoke">We respond within 24 hours.</p>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [showPartnerBar, setShowPartnerBar] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updatePartnerBar = () => setShowPartnerBar(window.scrollY > window.innerHeight * 0.85);
    updatePartnerBar();
    window.addEventListener('scroll', updatePartnerBar, { passive: true });
    return () => window.removeEventListener('scroll', updatePartnerBar);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030302] text-pearl">
      <LogoScrollIntro />

      <div id="site-start" className="dark-theme relative">
        <GlobalMovingImage />
        <HeaderBrand />
        <GradientMenu />
        <HorizonHeroSection onPartnerInquiry={() => setPartnerModalOpen(true)} />
        <Marquee />
        <InvitationDossier />
        <ConceptSection />
        <DestinationMarqueeStrip />
        <ExperienceSection />
        <DestinationPreview />
        <FoundingMembersSection />
        <PaymentCardPageSection onPartnerInquiry={() => setPartnerModalOpen(true)} />
        <CountdownBanner onPartnerInquiry={() => setPartnerModalOpen(true)} />
        <GuestListSection />
        <Footer />
        <PartnerInquiryModal open={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />

        <button
          onClick={() => scrollToSection('#guest-list')}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-pearl shadow-glow transition hover:-translate-y-0.5 md:hidden"
        >
          Join <Waves className="h-4 w-4" />
        </button>

        <button
          onClick={() => setPartnerModalOpen(true)}
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
