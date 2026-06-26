import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function svgImage(markup: string) {
  return `data:image/svg+xml,${encodeURIComponent(markup)}`;
}

export const LUXURY_HERO_IMAGE = svgImage(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1600">
  <defs>
    <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#06070d"/>
      <stop offset=".48" stop-color="#111018"/>
      <stop offset="1" stop-color="#050302"/>
    </linearGradient>
    <radialGradient id="glow" cx=".52" cy=".48" r=".58">
      <stop offset="0" stop-color="#f0c565" stop-opacity=".55"/>
      <stop offset=".42" stop-color="#b87928" stop-opacity=".2"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="2400" height="1600" fill="url(#sky)"/>
  <rect width="2400" height="1600" fill="url(#glow)"/>
  <g opacity=".88">
    <path d="M-120 1020 C360 850 780 805 1190 735 C1610 665 1940 520 2520 250" fill="none" stroke="#f7d282" stroke-width="58" stroke-opacity=".34"/>
    <path d="M-120 1095 C390 910 815 870 1220 805 C1640 735 1985 600 2520 330" fill="none" stroke="#fff0bd" stroke-width="18" stroke-opacity=".76"/>
    <path d="M80 725 C430 625 760 630 1095 560 C1425 492 1760 360 2240 160" fill="none" stroke="#c8832f" stroke-width="34" stroke-opacity=".38"/>
  </g>
  <g transform="translate(120 320) skewX(-18)">
    <path d="M-120 860 C440 650 870 560 1380 490 C1720 444 2060 340 2540 130" fill="none" stroke="#f1ca77" stroke-width="95" stroke-opacity=".24"/>
    <path d="M-120 930 C450 720 890 625 1390 560 C1738 515 2095 405 2540 190" fill="none" stroke="#f6dca2" stroke-width="14" stroke-opacity=".66"/>
    <path d="M-120 760 C420 590 870 500 1340 430 C1700 376 2020 285 2540 55" fill="none" stroke="#c37b2d" stroke-width="20" stroke-opacity=".42"/>
  </g>
  <g fill="#0f1117" stroke="#30240f" stroke-width="3">
    <rect x="240" y="480" width="150" height="360"/>
    <rect x="430" y="390" width="190" height="470"/>
    <rect x="680" y="440" width="135" height="390"/>
    <rect x="880" y="300" width="240" height="590"/>
    <rect x="1190" y="410" width="165" height="420"/>
    <rect x="1430" y="260" width="280" height="650"/>
    <rect x="1790" y="420" width="180" height="420"/>
  </g>
  <g fill="#f4c767">
    <circle cx="300" cy="540" r="6"/><circle cx="355" cy="625" r="5"/><circle cx="480" cy="455" r="5"/><circle cx="555" cy="570" r="6"/>
    <circle cx="720" cy="520" r="5"/><circle cx="785" cy="650" r="6"/><circle cx="950" cy="380" r="6"/><circle cx="1030" cy="525" r="5"/>
    <circle cx="1260" cy="505" r="6"/><circle cx="1510" cy="340" r="5"/><circle cx="1605" cy="510" r="7"/><circle cx="1860" cy="510" r="6"/>
  </g>
  <g fill="#fff1be" opacity=".72">
    <rect x="260" y="590" width="22" height="8"/><rect x="318" y="682" width="26" height="8"/><rect x="465" y="508" width="28" height="9"/>
    <rect x="515" y="650" width="25" height="8"/><rect x="905" y="430" width="34" height="10"/><rect x="990" y="610" width="30" height="8"/>
    <rect x="1475" y="370" width="38" height="10"/><rect x="1570" y="580" width="32" height="9"/><rect x="1830" y="560" width="36" height="9"/>
  </g>
  <g fill="#ffd77b" opacity=".95">
    <circle cx="250" cy="980" r="8"/><circle cx="330" cy="945" r="6"/><circle cx="420" cy="910" r="9"/><circle cx="535" cy="890" r="7"/>
    <circle cx="660" cy="855" r="8"/><circle cx="760" cy="830" r="6"/><circle cx="895" cy="805" r="9"/><circle cx="1035" cy="770" r="7"/>
    <circle cx="1170" cy="735" r="9"/><circle cx="1320" cy="700" r="7"/><circle cx="1465" cy="660" r="8"/><circle cx="1625" cy="610" r="9"/>
    <circle cx="1785" cy="555" r="7"/><circle cx="1945" cy="500" r="8"/><circle cx="2105" cy="420" r="9"/>
  </g>
  <text x="120" y="1465" fill="#c8a96a" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="700" letter-spacing="10">LAS VEGAS STRIP AERIAL · NIGHT</text>
</svg>`);

export const CLOSING_HERO_IMAGE = svgImage(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1600">
  <defs>
    <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#090705"/>
      <stop offset=".5" stop-color="#221308"/>
      <stop offset="1" stop-color="#030302"/>
    </linearGradient>
  </defs>
  <rect width="2400" height="1600" fill="url(#sky)"/>
  <path d="M-40 1060 C420 845 820 760 1240 680 C1660 600 1960 460 2440 190" fill="none" stroke="#dca64c" stroke-width="120" stroke-opacity=".28"/>
  <path d="M-40 1165 C420 940 820 860 1240 780 C1660 704 1990 552 2440 310" fill="none" stroke="#ffe0a0" stroke-width="18" stroke-opacity=".72"/>
  <g fill="#11100d">
    <rect x="120" y="590" width="260" height="410"/><rect x="460" y="490" width="310" height="535"/><rect x="850" y="610" width="230" height="390"/>
    <rect x="1180" y="430" width="330" height="610"/><rect x="1610" y="530" width="260" height="470"/><rect x="1970" y="650" width="220" height="340"/>
  </g>
  <g fill="#f7c86f" opacity=".88">
    <circle cx="210" cy="720" r="7"/><circle cx="330" cy="820" r="6"/><circle cx="545" cy="620" r="7"/><circle cx="710" cy="760" r="6"/>
    <circle cx="945" cy="730" r="7"/><circle cx="1280" cy="560" r="8"/><circle cx="1450" cy="720" r="6"/><circle cx="1720" cy="680" r="7"/>
    <circle cx="2070" cy="760" r="7"/><circle cx="2195" cy="840" r="6"/>
  </g>
  <text x="120" y="1465" fill="#e0b765" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="700" letter-spacing="10">THE STRIP IS WAITING</text>
</svg>`);

function usePointerRatio() {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return position;
}

export function GlobalMovingImage() {
  const pointer = usePointerRatio();
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 18,
    mass: 0.9,
  });

  const y = useTransform(smooth, [0, 1], ['-10%', '12%']);
  const x = useTransform(smooth, [0, 1], ['-3%', '3%']);
  const scale = useTransform(smooth, [0, 1], [1.1, 1.32]);
  const rotate = useTransform(smooth, [0, 1], [-1.2, 1.4]);
  const imageOpacity = useTransform(smooth, [0, 0.25, 0.65, 1], [1, 0.96, 0.9, 0.94]);

  const pointerTransform = useMemo(() => {
    const moveX = (pointer.x - 0.5) * -56;
    const moveY = (pointer.y - 0.5) * -38;
    return `translate3d(${moveX}px, ${moveY}px, 0)`;
  }, [pointer.x, pointer.y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030302]">
      <motion.div
        style={{ x, y, scale, rotate, opacity: imageOpacity }}
        className="absolute inset-[-18%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${LUXURY_HERO_IMAGE})`,
            transform: pointerTransform,
          }}
        />
        <div className="absolute inset-0 bg-[rgba(3,3,2,0.70)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(200,169,106,0.14),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.64))]" />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
