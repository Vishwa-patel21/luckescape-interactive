import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlaceCardProps {
  images: string[];
  tags: string[];
  rating: number;
  title: string;
  dateRange: string;
  hostType: string;
  isTopRated?: boolean;
  description: string;
  pricePerNight: number;
  className?: string;
}

export function PlaceCard({
  images,
  tags,
  rating,
  title,
  dateRange,
  hostType,
  isTopRated = false,
  description,
  pricePerNight,
  className,
}: PlaceCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function changeImage(newDirection: number) {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.55 }}
      className={cn('overflow-hidden rounded-[2rem] border border-white/70 bg-white/48 p-3 shadow-editorial backdrop-blur-xl', className)}
    >
      <div className="group relative h-72 overflow-hidden rounded-[1.5rem]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="border-white/50 bg-white/70 text-ink">{tag}</Badge>
          ))}
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-md">
          <Star className="mr-1 inline h-3 w-3 fill-champagne text-champagne" /> {rating.toFixed(1)}
        </div>
        <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-ink/45 text-white backdrop-blur" onClick={() => changeImage(-1)} aria-label="Previous image">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-ink/45 text-white backdrop-blur" onClick={() => changeImage(1)} aria-label="Next image">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-ink">{title}</h3>
          {isTopRated ? <Badge>Top Rated</Badge> : null}
        </div>
        <p className="mt-3 text-sm text-smoke">{dateRange} • {hostType}</p>
        <p className="mt-5 text-sm leading-7 text-smoke">{description}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-ink">From ${pricePerNight}<span className="font-normal text-smoke"> / access preview</span></p>
          <Button size="sm" variant="champagne">Request <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </motion.div>
  );
}

export default PlaceCard;
