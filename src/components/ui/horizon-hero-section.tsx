import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealText } from '@/components/ui/reveal-text';

function createGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(236, 205, 139, 0.9)');
  gradient.addColorStop(0.35, 'rgba(236, 205, 139, 0.28)');
  gradient.addColorStop(1, 'rgba(236, 205, 139, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

type HorizonHeroSectionProps = {
  onPartnerInquiry?: () => void;
};

export function HorizonHeroSection({ onPartnerInquiry }: HorizonHeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

const titleLines = ['Luxury Casino Travel', 'Reimagined'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
    filter: 'blur(16px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf7f2e8, 0.045);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.set(0, 0.6, 7.4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const objects: THREE.Object3D[] = [];

    const particleCount = 1700;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 4.2;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 4;

      const warm = 0.72 + Math.random() * 0.25;
      colors[i * 3] = warm;
      colors[i * 3 + 1] = 0.62 + Math.random() * 0.22;
      colors[i * 3 + 2] = 0.38 + Math.random() * 0.16;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    objects.push(particles);

    const glowTexture = createGlowTexture();

    if (glowTexture) {
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTexture,
          transparent: true,
          opacity: 0.85,
          depthWrite: false,
        })
      );

      glow.scale.set(5.5, 5.5, 1);
      glow.position.set(2.1, 1.2, -5.2);
      scene.add(glow);
      objects.push(glow);
    }

    const lineObjects: THREE.Line[] = [];

    for (let layer = 0; layer < 5; layer++) {
      const points: THREE.Vector3[] = [];

      for (let i = 0; i < 140; i++) {
        const x = -8 + (i / 139) * 16;
        const y =
          -1.2 -
          layer * 0.18 +
          Math.sin(i * 0.12 + layer) * 0.035 +
          Math.cos(i * 0.04 + layer) * 0.055;
        const z = -4 - layer * 0.55;

        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: layer < 2 ? 0xeed59a : 0xffffff,
        transparent: true,
        opacity: 0.36 - layer * 0.045,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);
      lineObjects.push(line);
      objects.push(line);
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      progressRef.current = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(progressRef.current);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    let frame = 0;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const progress = progressRef.current;
      const pointer = pointerRef.current;

      particles.rotation.y = time * 0.035 + progress * 0.8;
      particles.rotation.x = pointer.y * 0.045;

      camera.position.x += (pointer.x * 0.35 - camera.position.x) * 0.035;
      camera.position.y += (0.6 - pointer.y * 0.18 - camera.position.y) * 0.035;
      camera.position.z += (7.4 - progress * 2.1 - camera.position.z) * 0.035;

      camera.lookAt(0, -0.15, -4.8);

      lineObjects.forEach((line, index) => {
        line.position.x = Math.sin(time * 0.3 + index) * 0.16;
        line.position.y = Math.cos(time * 0.22 + index) * 0.05;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);

      objects.forEach((object) => {
        if ('geometry' in object) {
          const geometry = object.geometry as THREE.BufferGeometry;
          geometry.dispose();
        }

        if ('material' in object) {
          const material = object.material as THREE.Material | THREE.Material[];

          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });

      glowTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
  id="home"
  className="relative isolate min-h-screen overflow-hidden bg-[#030302] px-5 pb-16 pt-32 sm:px-8 lg:px-12"
>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
      />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_26%,rgba(235,205,145,0.20),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.54),rgba(0,0,0,0.16)_52%,rgba(0,0,0,0.62))]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col items-center justify-center text-center">
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="max-w-5xl"
>
  <motion.p
    variants={fadeUpVariants}
    className="mb-7 text-[10px] uppercase tracking-[0.48em] text-[#b89244]"
  >
    Guest List Now Open
  </motion.p>

<motion.h1
  variants={containerVariants}
  className="relative mx-auto max-w-6xl text-center"
>
  <div className="leading-[0.92]">
    <RevealText
      text="LuckEscape"
      fontSize="text-[clamp(3.6rem,9vw,9.5rem)]"
      textColor="text-[#fffaf0]"
      overlayColor="text-[#b89244]"
      letterDelay={0.035}
    />
  </div>

  <motion.div
    variants={lineVariants}
    className="mt-3 overflow-hidden font-serif text-[clamp(3rem,6.4vw,7.1rem)] italic leading-[0.92] tracking-[-0.045em] text-[#d9bd79]"
  >
    <motion.span
      className="inline-block"
      animate={{ y: [0, 3, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
    Private Access.
    </motion.span>
  </motion.div>

  <motion.span
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{
      delay: 1.2,
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto mt-7 block h-px w-[42%] origin-center bg-gradient-to-r from-transparent via-[#b89244] to-transparent"
  />
</motion.h1>

  <motion.p
    variants={fadeUpVariants}
    className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/74 md:text-lg md:leading-8"
  >
    Luxury casino travel for players who prefer quiet privilege over noise.
    Founding members receive first access to curated resorts, cruises,
    and invitation-only gaming destinations.
  </motion.p>

  <motion.div
    variants={fadeUpVariants}
    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
  >
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -3,
        boxShadow: '0 24px 60px rgba(17,16,13,0.28)',
      }}
      whileTap={{ scale: 0.97 }}
      onClick={() =>
        document
          .getElementById('guest-list')
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#c8a96a] px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#11100d] shadow-[0_18px_45px_rgba(200,169,106,0.26)] transition duration-300"
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

      <span className="relative z-10 flex items-center">
        Join the Guest List
        <ArrowRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>

    <motion.button
      whileHover={{
        scale: 1.04,
        y: -3,
        backgroundColor: 'rgba(255,255,255,0.86)',
      }}
      whileTap={{ scale: 0.97 }}
      onClick={onPartnerInquiry}
      className="inline-flex h-14 items-center justify-center border border-[#c8a96a]/65 bg-black/28 px-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f7f2e8] shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300"
    >
      Partner With Us
    </motion.button>
  </motion.div>

  <motion.div
    variants={fadeUpVariants}
    className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b89244]"
  >
    <span>4,847 travelers on the guest list</span>
    <span className="hidden h-px w-8 bg-[#b89244]/50 sm:block" />
    <span>12 destinations in curation</span>
    <span className="hidden h-px w-8 bg-[#b89244]/50 sm:block" />
    <span>Founding partner window open</span>
  </motion.div>
</motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden w-[240px] -translate-x-1/2 items-center gap-4 md:flex">
        <span className="text-[10px] uppercase tracking-[0.28em] text-white/62">
          Scroll
        </span>
        <div className="h-px flex-1 overflow-hidden bg-white/20">
          <div
            className="h-full bg-[#b89244] transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export const Component = HorizonHeroSection;
export default HorizonHeroSection;
