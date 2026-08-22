import { motion, useSpring, useMotionValue } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Download, ChevronDown, Zap } from 'lucide-react';
import { useRef } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    rotateX.set(-dy * 15);
    rotateY.set(dx * 15);
  };

  const handleImageMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left Side ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="badge shimmer-effect">
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan inline-block"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for Software Engineer Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display font-bold leading-none tracking-tight">
                <motion.span
                  className="block text-[clamp(56px,8vw,96px)] text-text"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  Shridhar
                </motion.span>
                <motion.span
                  className="block text-[clamp(32px,5vw,64px)] gradient-text"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
                >
                  Java Backend Developer
                </motion.span>
              </h1>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Spring Boot', 'REST APIs', 'JWT', 'MySQL'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest glass border border-purple/20 text-purple/90"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-secondary text-lg leading-relaxed max-w-xl"
            >
              Passionate backend developer specializing in{' '}
              <span className="text-text font-medium">Java</span>,{' '}
              <span className="text-text font-medium">Spring Boot</span>, REST APIs, JWT
              authentication, and MySQL. I build{' '}
              <span className="gradient-text font-semibold">secure, scalable, and high-performance</span>{' '}
              applications with clean architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#projects"
                data-magnetic
                className="magnetic-btn group relative px-7 py-3.5 rounded-full font-semibold text-sm overflow-hidden"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap size={16} />
                  Explore Projects
                </span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #22D3EE, #8B5CF6)' }}
                />
              </motion.a>

              <motion.a
                href="https://drive.google.com/uc?export=download&id=1Z0tVpyarNt_YNU_S368AmPHezcDhSRze"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="magnetic-btn group px-7 py-3.5 rounded-full font-semibold text-sm glass neon-border-purple text-text hover:neon-border-cyan transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download size={16} className="text-purple group-hover:text-cyan transition-colors" />
                Download Resume
              </motion.a>

              <motion.a
                href="https://github.com/shridharsinghh"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="magnetic-btn px-5 py-3.5 rounded-full glass border border-white/10 text-secondary hover:text-text hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/shridhar-singh-/"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="magnetic-btn px-5 py-3.5 rounded-full glass border border-white/10 text-secondary hover:text-text hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Side: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div
              ref={imageRef}
              className="relative"
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
            >
              {/* Background gradient blobs behind image */}
              <div
                className="absolute -inset-20 rounded-full blur-[80px] opacity-30 animate-orb-1"
                style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
              />
              <div
                className="absolute -inset-16 rounded-full blur-[60px] opacity-20 animate-orb-2"
                style={{ background: 'radial-gradient(circle, #22D3EE, transparent 70%)' }}
              />

              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-dashed border-purple/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute inset-[-8px] rounded-full border border-cyan/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ borderStyle: 'dashed' }}
              />

              {/* Neon glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full animate-neon-pulse"
                style={{
                  boxShadow: '0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(34,211,238,0.2)',
                }}
              />

              {/* Glass frame + Profile image */}
              <motion.div
                className="relative z-10"
                style={{
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden glass-strong gradient-border"
                  style={{
                    boxShadow: '0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(34,211,238,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Shridhar - Java Backend Developer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 border border-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{ transformStyle: 'preserve-3d', translateZ: 30 }}
                >
                  <p className="text-xs text-secondary uppercase tracking-wider">Available</p>
                  <p className="text-sm font-bold gradient-text font-display">Spring Boot Dev</p>
                </motion.div>

                {/* CGPA badge */}
                <motion.div
                  className="absolute -top-2 -left-6 glass rounded-2xl px-4 py-2.5 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  style={{ transformStyle: 'preserve-3d', translateZ: 20 }}
                >
                  <p className="text-xs text-secondary uppercase tracking-wider">CGPA</p>
                  <p className="text-sm font-bold text-cyan font-display">8.64 / 10</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-secondary uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-gradient-to-b from-purple to-cyan"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} className="text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
