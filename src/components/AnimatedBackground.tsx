import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 20, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 30 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const colors = ['rgba(139,92,246,0.6)', 'rgba(34,211,238,0.5)', 'rgba(59,130,246,0.4)', 'rgba(255,255,255,0.3)'];
    const particles: Particle[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.7 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgba(', 'rgba(');
        // Simpler approach:
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.y -= p.speed;
        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
      });
      rafId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Animated grid */}
      <div className="absolute inset-0 animated-grid opacity-40" />

      {/* Gradient mesh orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B5CF6, transparent 70%)',
          top: '-100px',
          left: '-100px',
          x: useSpring(useMotionValue(0), { stiffness: 10, damping: 20 }),
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #22D3EE, transparent 70%)',
          bottom: '-50px',
          right: '-50px',
        }}
        animate={{ x: [0, -50, 70, 0], y: [0, 60, -30, 0], scale: [1, 1.15, 0.85, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-12"
        style={{
          background: 'radial-gradient(circle, #3B82F6, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ x: [0, 40, 50, 0], y: [0, 50, -50, 0], scale: [1, 1.1, 1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional smaller orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #8B5CF6, transparent 70%)',
          top: '30%',
          right: '20%',
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Parallax layer that follows mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)',
            top: '20%',
            left: '30%',
          }}
        />
      </motion.div>
    </div>
  );
}
