import { useEffect, useRef } from "react";

interface ConfettiBurstProps {
  active: boolean;
  reducedMotion: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vr: number;
  life: number;
}

const COLORS = ["#ff4fa3", "#ff78bb", "#ffd36e", "#b9a2ff", "#fff1d5"];

export function ConfettiBurst({ active, reducedMotion }: ConfettiBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const originX = width / 2;
    const originY = Math.min(height * 0.34, 280);

    const particles: Particle[] = Array.from({ length: 56 }, (_, idx) => {
      const angle = (Math.PI * 2 * idx) / 56 + (Math.random() - 0.5) * 0.3;
      const speed = 3 + Math.random() * 5.8;
      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.6,
        size: 5 + Math.random() * 5,
        color: COLORS[idx % COLORS.length],
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.2,
        life: 1,
      };
    });

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.14;
        p.vx *= 0.985;
        p.rotation += p.vr;
        p.life = Math.max(0, 1 - elapsed / 2500);

        if (p.life > 0.02 && p.y < height + 40) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.life;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.65);
          ctx.restore();
        }
      }

      if (alive && elapsed < 2600) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frameId);
      ctx.clearRect(0, 0, width, height);
    };
  }, [active, reducedMotion]);

  if (!active || reducedMotion) return null;

  return <canvas ref={canvasRef} className="confetti-canvas" aria-hidden="true" />;
}
