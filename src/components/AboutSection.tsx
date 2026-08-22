import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import TiltCard from './TiltCard';

function useCountUp(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(2)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const stats = [
  { icon: GraduationCap, label: 'CGPA', value: 8.64, suffix: '/10', color: 'cyan', decimals: 2 },
  { icon: Briefcase, label: 'Experience', value: 1, suffix: ' Intern', color: 'purple', decimals: 0 },
  { icon: Code2, label: 'Major Projects', value: 2, suffix: '+', color: 'blue', decimals: 0 },
  { icon: Award, label: 'Core Stack', value: 1, suffix: ' Java + Spring', color: 'cyan', decimals: 0, display: 'Java' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
};

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  const displayVal = stat.display ?? (stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.floor(count));

  return (
    <TiltCard intensity={8} glare>
      <motion.div
        className="glass-strong rounded-2xl p-5 card-highlight group hover:scale-105 transition-all duration-300 cursor-default"
        whileHover={{ y: -4 }}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
            stat.color === 'cyan'
              ? 'bg-cyan/10 text-cyan'
              : stat.color === 'purple'
              ? 'bg-purple/10 text-purple'
              : 'bg-blue/10 text-blue'
          }`}
        >
          <stat.icon size={20} />
        </div>
        <p className="text-secondary text-xs uppercase tracking-widest mb-1">{stat.label}</p>
        <p
          className={`font-display font-bold text-2xl ${
            stat.color === 'cyan'
              ? 'text-cyan'
              : stat.color === 'purple'
              ? 'text-purple'
              : 'text-blue'
          }`}
        >
          {active ? displayVal : '—'}
          <span className="text-sm font-normal text-secondary ml-1">{stat.suffix}</span>
        </p>
      </motion.div>
    </TiltCard>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative section-padding" ref={ref}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-purple mb-3">Who I Am</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)] text-text">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* ── Left: Glass Profile Card ── */}
        <TiltCard intensity={10} glare>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="glass-strong rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Top gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)' }}
            />
            {/* Glow behind avatar */}
            <div
              className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[60px] opacity-20"
              style={{ background: 'radial-gradient(circle, #8B5CF6, #22D3EE)' }}
            />

            {/* Avatar */}
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <motion.div
                className="w-28 h-28 rounded-full overflow-hidden border-2 border-purple/40"
                style={{ boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Shridhar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="font-display font-bold text-2xl text-text">Shridhar</h3>
                <p className="text-purple text-sm font-medium mt-1">Java Backend Developer</p>
                <p className="text-secondary text-xs mt-0.5">Spring Boot Specialist</p>
              </div>

              {/* Info rows */}
              <div className="w-full space-y-3 mt-4">
                {[
                  { label: 'Institution', value: 'CGC Landran' },
                  { label: 'Degree', value: 'B.Tech Information Technology' },
                  { label: 'Batch', value: '2022 – 2026' },
                  { label: 'CGPA', value: '8.64 / 10' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-secondary text-xs uppercase tracking-wider">{label}</span>
                    <span className="text-text text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Status badge */}
              <div className="mt-4 w-full flex items-center justify-center gap-2 glass rounded-xl py-2.5 px-4 border border-cyan/20">
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-cyan text-xs font-semibold uppercase tracking-widest">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </TiltCard>

        {/* ── Right: Description + Stats ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-display font-semibold text-2xl text-text">
              Crafting scalable backends with{' '}
              <span className="gradient-text">precision & passion</span>
            </h3>
            <p className="text-secondary text-lg leading-relaxed">
              I'm a final-year B.Tech student at{' '}
              <span className="text-text font-medium">Chandigarh Group of Colleges, Landran</span>, with a
              strong foundation in backend engineering. My expertise lies in building production-ready APIs
              with Spring Boot, implementing JWT-based authentication, and designing efficient MySQL schemas.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              I'm passionate about writing clean, maintainable code that follows{' '}
              <span className="gradient-text font-semibold">SOLID principles</span> and modern software
              engineering practices. From containerizing applications with Docker to securing them with
              Spring Security — I love the full lifecycle of backend development.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <StatCard key={stat.label} stat={stat} active={inView} />
            ))}
          </motion.div>

          {/* Skill tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate', 'JPA', 'MySQL', 'Docker', 'REST APIs'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/10 text-secondary hover:text-text hover:border-purple/30 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
