import { motion } from 'framer-motion';
import {
  ArrowRight,
  Crown,
  Diamond,
  ExternalLink,
  Mail,
  ShieldCheck,
  X,
  Waves,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CircularTestimonials from '@/components/ui/circular-testimonials';
import { CountdownBanner } from '@/components/ui/countdown-banner';
import GradientMenu, { scrollToSection } from '@/components/ui/gradient-menu';
import { CLOSING_HERO_IMAGE, GlobalMovingImage } from '@/components/ui/global-moving-image';
import HorizonHeroSection from '@/components/ui/horizon-hero-section';
import { GuestListForm } from '@/components/ui/guest-list-form';
import { MembershipCard } from '@/components/ui/membership-card';
import PlaceCard from '@/components/ui/card-22';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { useEffect, useState } from 'react';
import { LogoScrollIntro } from '@/components/ui/logo-scroll-intro';

function visualAsset(title: string, variant: string, accent = '#c8a96a') {
  const markup = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1300">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#050505"/>
      <stop offset=".45" stop-color="#16110b"/>
      <stop offset="1" stop-color="#030302"/>
    </linearGradient>
    <radialGradient id="glow" cx=".62" cy=".32" r=".58">
      <stop offset="0" stop-color="${accent}" stop-opacity=".48"/>
      <stop offset=".48" stop-color="${accent}" stop-opacity=".12"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1800" height="1300" fill="url(#bg)"/>
  <rect width="1800" height="1300" fill="url(#glow)"/>
  ${
    variant === 'pool'
      ? '<rect x="150" y="720" width="1500" height="360" fill="#061b24"/><path d="M170 790 C420 735 620 855 900 785 C1180 715 1380 842 1630 780" fill="none" stroke="#6dd7ff" stroke-width="18" opacity=".48"/><path d="M170 900 C480 845 630 960 930 900 C1185 848 1360 950 1630 885" fill="none" stroke="#e7b955" stroke-width="10" opacity=".65"/><g fill="#17110a"><rect x="250" y="245" width="210" height="430"/><rect x="520" y="320" width="180" height="350"/><rect x="1120" y="260" width="260" height="410"/></g>'
      : variant === 'tower'
        ? '<rect x="130" y="750" width="1540" height="280" fill="#08222a"/><path d="M180 845 C490 765 725 915 980 845 C1190 788 1380 890 1620 820" fill="none" stroke="#8fdfff" stroke-width="16" opacity=".42"/><g fill="#15120e"><rect x="620" y="145" width="430" height="600"/><rect x="1080" y="280" width="260" height="470"/><rect x="380" y="365" width="210" height="380"/></g><g fill="#f2c56a"><rect x="680" y="230" width="42" height="12"/><rect x="790" y="320" width="42" height="12"/><rect x="910" y="410" width="42" height="12"/><rect x="1160" y="360" width="46" height="12"/></g>'
        : variant === 'lounge'
          ? '<rect x="140" y="260" width="1520" height="720" fill="#120b07"/><path d="M210 800 H1590" stroke="#8a1d1d" stroke-width="130" opacity=".55"/><ellipse cx="900" cy="780" rx="420" ry="135" fill="#173322"/><ellipse cx="900" cy="780" rx="390" ry="110" fill="none" stroke="#c8a96a" stroke-width="10"/><g fill="#f1c16a"><circle cx="450" cy="350" r="28"/><circle cx="900" cy="300" r="34"/><circle cx="1350" cy="350" r="28"/></g>'
          : variant === 'suite'
            ? '<rect x="120" y="210" width="1560" height="820" fill="#15120e"/><rect x="220" y="300" width="520" height="470" fill="#0b0e16"/><rect x="795" y="300" width="785" height="470" fill="#0b0e16"/><g fill="#f1c36c"><rect x="865" y="470" width="32" height="95"/><rect x="925" y="410" width="42" height="155"/><rect x="1015" y="455" width="38" height="110"/><rect x="1120" y="385" width="55" height="180"/><rect x="1235" y="440" width="42" height="125"/></g><rect x="260" y="835" width="560" height="150" fill="#3a2716"/><rect x="920" y="825" width="300" height="90" fill="#22160d"/>'
            : variant === 'entrance'
              ? '<rect x="150" y="210" width="1500" height="770" fill="#11100d"/><path d="M300 400 H1500 V540 H300 Z" fill="#2b1608"/><path d="M380 470 H1420" stroke="#f1c36c" stroke-width="22"/><g fill="#0b0b0c"><rect x="440" y="580" width="170" height="340"/><rect x="815" y="560" width="170" height="360"/><rect x="1190" y="580" width="170" height="340"/></g><path d="M220 1000 C620 900 1100 900 1580 1015" fill="none" stroke="#f0bf68" stroke-width="16" opacity=".62"/>'
              : variant === 'door'
                ? '<rect width="1800" height="1300" fill="#080604"/><rect x="470" y="210" width="640" height="860" fill="#2a190d"/><rect x="680" y="280" width="600" height="760" fill="#f2c56a" opacity=".42"/><path d="M1110 240 L1360 330 V1035 L1110 1080 Z" fill="#120d09"/><circle cx="1175" cy="660" r="18" fill="#c8a96a"/><path d="M365 955 C520 800 535 535 460 385" stroke="#0f0f10" stroke-width="88" fill="none"/><circle cx="420" cy="345" r="58" fill="#1b1714"/>'
                : variant === 'liner'
                  ? '<rect y="650" width="1800" height="650" fill="#081926"/><path d="M170 800 C520 720 850 900 1220 800 C1440 740 1600 770 1740 820" fill="none" stroke="#ffe1a0" stroke-width="20" opacity=".6"/><path d="M350 650 H1320 L1510 790 H460 Z" fill="#f7f0df"/><rect x="560" y="470" width="500" height="185" fill="#f7f0df"/><rect x="1080" y="545" width="170" height="110" fill="#d83b2c"/><g fill="#0d2230"><rect x="610" y="525" width="55" height="24"/><rect x="710" y="525" width="55" height="24"/><rect x="810" y="525" width="55" height="24"/><rect x="910" y="525" width="55" height="24"/></g>'
                  : variant === 'map'
                    ? '<g fill="none" stroke="#c8a96a" stroke-opacity=".24" stroke-width="3"><path d="M190 445 C370 310 580 340 730 420 C910 518 1040 410 1195 335 C1335 270 1485 300 1620 425"/><path d="M210 735 C410 650 610 680 780 755 C960 835 1140 742 1300 675 C1435 620 1550 635 1660 735"/></g><g fill="#c8a96a" font-family="Inter,Arial,sans-serif" font-size="42" font-weight="700" letter-spacing="5"><circle cx="410" cy="570" r="14"/><text x="440" y="583">LAS VEGAS</text><circle cx="750" cy="475" r="14"/><text x="780" y="488">MONTE CARLO</text><circle cx="660" cy="725" r="14"/><text x="690" y="738">THE BAHAMAS</text><circle cx="1225" cy="625" r="14"/><text x="1255" y="638">MACAU</text><circle cx="1270" cy="795" r="14"/><text x="1300" y="808">SINGAPORE</text><circle cx="515" cy="835" r="14"/><text x="545" y="848">CARIBBEAN</text></g>'
                    : variant === 'trip'
                      ? '<rect x="330" y="180" width="1140" height="900" rx="34" fill="#100d09" stroke="#c8a96a" stroke-width="5"/><rect x="390" y="260" width="1020" height="300" fill="#1d140b"/><path d="M430 485 C650 430 815 525 1000 470 C1160 425 1280 455 1370 505" fill="none" stroke="#c8a96a" stroke-width="14"/><g fill="#fffaf0" font-family="Inter,Arial,sans-serif"><text x="430" y="670" font-size="34" letter-spacing="7">CASINO CRUISE ESCAPE</text><text x="430" y="742" font-size="54" font-weight="700">MSC Divina · 7 Nights · Caribbean</text><text x="430" y="830" font-size="36">Gaming floor access · $300 casino credit · VIP embarkation</text><text x="430" y="910" font-size="44" fill="#c8a96a" font-weight="700">Member rate from $899 · Invitation required</text></g>'
                      : '<g fill="#16110b"><rect x="260" y="420" width="220" height="390"/><rect x="560" y="300" width="260" height="510"/><rect x="920" y="380" width="210" height="430"/><rect x="1240" y="245" width="290" height="565"/></g><path d="M110 965 C500 790 930 760 1690 520" fill="none" stroke="#f5ca78" stroke-width="70" opacity=".25"/><path d="M110 1025 C530 865 950 835 1690 610" fill="none" stroke="#f8dfa3" stroke-width="14" opacity=".72"/>'
  }
  <rect x="0" y="0" width="1800" height="1300" fill="none" stroke="${accent}" stroke-opacity=".16" stroke-width="24"/>
  <text x="92" y="1185" fill="${accent}" font-family="Inter,Arial,sans-serif" font-size="42" font-weight="800" letter-spacing="9">${title}</text>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(markup)}`;
}

const img = {
  cruise: '/images/luckescape/10.jpg',
  resort: '/images/luckescape/3.jpg',
  casinoPool: '/images/luckescape/casino-pool.jpeg',
  poolTower: '/images/luckescape/pool-tower.jpg',
  lounge: '/images/luckescape/5.jpg',
  aviation: '/images/luckescape/1.jpg',
  entrance: '/images/luckescape/7.jpg',
  vipDoor: '/images/luckescape/8.jpg',
  suite: '/images/luckescape/6.jpg',
  dining: '/images/luckescape/5.jpg',
  coast: '/images/luckescape/4.jpg',
  poolNightAlt: '/images/luckescape/pool-alt.jpg',
  worldMap: '/images/luckescape/9.jpg',
  tripCard: visualAsset('LUCKESCAPE TRIP CARD', 'trip'),
};

const experienceCards = [
  {
    title: 'Curated Destinations',
    copy: 'Casino resorts, cruise lines, and private gaming destinations. Every property vetted.',
    image: img.resort,
  },
  {
    title: 'Exclusive Access',
    copy: 'Member-only rates, gaming credits, and VIP floor access. Not available to the public.',
    image: img.lounge,
  },
  {
    title: 'Elevated Travel',
    copy: 'Private arrival coordination, suite upgrades, and discreet guest services.',
    image: img.suite,
  },
];

const circularItems = [
  {
    name: 'Seamless Arrival',
    designation: 'The LuckEscape Experience',
    quote: 'The experience is designed around polished coordination: arrival, stay, curated access, and subtle communication without clutter or casino noise. Every founding member arrival is personally coordinated. We handle the details so the casino floor is the first thing on their mind.',
    src: img.entrance,
  },
  {
    name: "Where We're Launching",
    designation: 'Founding Destination Partners',
    quote: 'Our first wave of destinations spans casino cruise lines, Caribbean resorts, and European gaming destinations. Founding casino partners are confirmed before public launch. Partnership inquiries are currently open.',
    src: img.worldMap,
  },
  {
    name: 'Private Access',
    designation: 'Founding member priority',
    quote: 'Early members receive first access to limited launch offers, priority booking windows, private destination privileges, and future VIP perks. 4,847 founding members and growing.',
    src: img.vipDoor,
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
    images: [img.cruise, img.coast, img.aviation],
  },
  {
    title: 'Casino Resort Retreat',
    dateRange: 'Invitation only',
    hostType: 'Resort access',
    rating: 4.8,
    tags: ['Resort', 'Luxury'],
    description: 'A premium resort-style launch concept built for aspirational travel and invitation-only energy.',
    pricePerNight: 0,
    images: [img.poolNightAlt, img.dining, img.suite],
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
    note: 'Applications reviewed within 48 hours.',
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
          <img src={img.casinoPool} alt="Casino resort pool at night with neon reflections" className="absolute inset-0 h-full w-full object-cover" />
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

        <Reveal className="flex flex-col gap-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {dossierItems.map((item) => (
              <div key={item.label} className="border border-white/12 bg-white/8 p-6 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/48">{item.label}</p>
                <p className="mt-5 font-serif text-5xl leading-none text-champagne">{item.value}</p>
                <p className="mt-5 text-sm leading-7 text-white/68">{item.copy}</p>
                {'note' in item && item.note ? (
                  <p className="mt-3 text-sm font-medium leading-7 text-champagne/86">{item.note}</p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="border-t border-champagne/50 pt-5">
            <p className="font-serif text-xl italic leading-7 text-white/76">
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
                <Diamond className="h-4 w-4 text-champagne" />
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
                <img src={img.tripCard} alt="LuckEscape trip card preview" className="absolute inset-0 h-full w-full object-cover opacity-70" />
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

function PartnerInquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="partner-inquiry-title">
      <button className="absolute inset-0 bg-black/74 backdrop-blur-md" onClick={onClose} aria-label="Close partner inquiry modal" />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl border border-champagne/35 bg-[#11100d] p-5 text-pearl shadow-card md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/15 bg-white/5 text-white/72 transition hover:border-champagne/60 hover:text-champagne"
          aria-label="Close partner inquiry modal"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-champagne">Casino & resort partners</p>
        <h2 id="partner-inquiry-title" className="mt-4 max-w-md font-serif text-4xl leading-none tracking-[-0.04em] text-pearl md:text-5xl">
          Request a partner conversation.
        </h2>

        <form onSubmit={submit} className="mt-7 grid gap-4">
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Property Name
            <input
              required
              name="propertyName"
              placeholder="e.g. MGM Grand Las Vegas"
              className="h-12 border border-white/14 bg-white/8 px-4 text-base font-medium normal-case tracking-normal text-pearl outline-none transition placeholder:text-white/38 focus:border-champagne/70"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Your Role
            <input
              required
              name="role"
              placeholder="e.g. Director of Casino Marketing"
              className="h-12 border border-white/14 bg-white/8 px-4 text-base font-medium normal-case tracking-normal text-pearl outline-none transition placeholder:text-white/38 focus:border-champagne/70"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Email Address
            <input
              required
              type="email"
              name="email"
              placeholder="name@property.com"
              className="h-12 border border-white/14 bg-white/8 px-4 text-base font-medium normal-case tracking-normal text-pearl outline-none transition placeholder:text-white/38 focus:border-champagne/70"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
            Message <span className="normal-case tracking-normal text-white/38">(optional)</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your property and what you're looking for"
              className="resize-none border border-white/14 bg-white/8 px-4 py-3 text-base font-medium normal-case tracking-normal text-pearl outline-none transition placeholder:text-white/38 focus:border-champagne/70"
            />
          </label>

          <Button type="submit" variant="champagne" size="lg" className="mt-2 w-full">
            REQUEST PARTNER CONVERSATION →
          </Button>
          <p className="text-center text-sm text-white/58">We respond within 24 hours.</p>
          {submitted && (
            <p className="border border-champagne/30 bg-champagne/10 px-4 py-3 text-center text-sm font-medium text-champagne">
              Thank you. Your partner inquiry has been received.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030302] text-pearl">
      <div id="site-start" className="dark-theme relative">
        <GlobalMovingImage />
        <LogoScrollIntro />
        <HeaderBrand />
        <GradientMenu />
        <HorizonHeroSection onPartnerInquiry={() => setPartnerModalOpen(true)} />
        <Marquee />
        <InvitationDossier />
        <ConceptSection />
        <ExperienceSection />
        <DestinationPreview />
        <FoundingMembersSection />
        <PaymentCardPageSection />
        <CountdownBanner onPartnerInquiry={() => setPartnerModalOpen(true)} />
        <div
          className="relative z-10 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(3,3,2,0.60), rgba(3,3,2,0.60)), url(${CLOSING_HERO_IMAGE})` }}
        >
          <GuestListSection />
          <Footer />
        </div>

        <button
          onClick={() => scrollToSection('#guest-list')}
          className="fixed bottom-16 right-5 z-50 inline-flex items-center gap-2 bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-glow transition hover:-translate-y-0.5 md:hidden"
        >
          Join <Waves className="h-4 w-4" />
        </button>

        <button
          onClick={() => setPartnerModalOpen(true)}
          className="fixed inset-x-0 bottom-0 z-50 flex min-h-11 items-center justify-center border-t border-champagne/25 bg-ink/94 px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-pearl shadow-card backdrop-blur-xl transition duration-300 hover:bg-ink md:h-10 md:py-0 md:tracking-[0.28em]"
        >
          Casino or Resort? <span className="mx-4 h-px w-8 bg-champagne/60" /> Partnership inquiries open
        </button>

        <PartnerInquiryModal open={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
      </div>
    </main>
  );
}
