import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import TiltCard from './TiltCard';

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface Category {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    name: 'Languages',
    icon: '⟨/⟩',
    color: 'cyan',
    skills: [
      { name: 'Java', icon: '☕', level: 92, color: '#22D3EE' },
      { name: 'C++', icon: '⚙️', level: 72, color: '#8B5CF6' },
      { name: 'HTML', icon: '🌐', level: 85, color: '#22D3EE' },
      { name: 'CSS', icon: '🎨', level: 80, color: '#3B82F6' },
      { name: 'JavaScript', icon: '⚡', level: 75, color: '#8B5CF6' },
    ],
  },
  {
    name: 'Backend',
    icon: '🔧',
    color: 'purple',
    skills: [
      { name: 'Spring Boot', icon: '🍃', level: 90, color: '#8B5CF6' },
      { name: 'Spring Security', icon: '🔐', level: 85, color: '#22D3EE' },
      { name: 'JWT', icon: '🎫', level: 88, color: '#8B5CF6' },
      { name: 'Hibernate', icon: '🗄️', level: 80, color: '#3B82F6' },
      { name: 'JPA', icon: '📦', level: 82, color: '#22D3EE' },
    ],
  },
  {
    name: 'Database',
    icon: '🗃️',
    color: 'blue',
    skills: [
      { name: 'MySQL', icon: '🐬', level: 88, color: '#22D3EE' },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    color: 'cyan',
    skills: [
      { name: 'Git', icon: '📌', level: 88, color: '#8B5CF6' },
      { name: 'GitHub', icon: '🐙', level: 90, color: '#22D3EE' },
      { name: 'Docker', icon: '🐳', level: 75, color: '#3B82F6' },
      { name: 'Swagger', icon: '📋', level: 80, color: '#8B5CF6' },
      { name: 'Postman', icon: '📬', level: 85, color: '#22D3EE' },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: '#22D3EE',
  purple: '#8B5CF6',
  blue: '#3B82F6',
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <TiltCard intensity={14} glare>
      <motion.div
        variants={cardVariants}
        className="glass rounded-2xl p-4 group cursor-default relative overflow-hidden card-highlight"
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${skill.color}18, transparent 70%)`,
            boxShadow: `inset 0 0 30px ${skill.color}10`,
          }}
        />
        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ borderColor: `${skill.color}40` }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="text-2xl mb-3">{skill.icon}</div>
          {/* Name */}
          <p className="font-display font-semibold text-sm text-text mb-3 group-hover:text-white transition-colors">
            {skill.name}
          </p>
          {/* Progress bar */}
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          <p className="text-xs text-secondary mt-1.5 text-right font-mono">{skill.level}%</p>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative section-padding" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-7xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-cyan mb-3">What I Work With</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)]">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-secondary mt-4 max-w-xl mx-auto">
          A curated set of technologies I've honed through real projects and hands-on learning.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIdx * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm glass"
                style={{ border: `1px solid ${colorMap[cat.color]}30` }}
              >
                {cat.icon}
              </div>
              <h3
                className="font-display font-semibold text-lg"
                style={{ color: colorMap[cat.color] }}
              >
                {cat.name}
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, ${colorMap[cat.color]}40, transparent)`,
                }}
              />
            </div>

            {/* Skills grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {cat.skills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
