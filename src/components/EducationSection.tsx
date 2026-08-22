import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';

const educationData = [
  {
    icon: GraduationCap,
    degree: 'B.Tech Information Technology',
    institution: 'Chandigarh Group of Colleges, Landran',
    period: '2022 – 2026',
    score: '8.64 CGPA',
    scoreLabel: 'CGPA',
    color: '#8B5CF6',
    description: 'Focus on software engineering, algorithms, databases, and object-oriented programming.',
    highlights: ['Data Structures', 'DBMS', 'OOP', 'OS', 'Computer Networks'],
  },
  {
    icon: BookOpen,
    degree: 'Intermediate (12th)',
    institution: 'Secondary School Board',
    period: '2021 – 2022',
    score: '65%',
    scoreLabel: 'Percentage',
    color: '#22D3EE',
    description: 'Science stream with Physics, Chemistry, and Mathematics.',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    icon: Award,
    degree: 'Matriculation (10th)',
    institution: 'Secondary School Board',
    period: '2019 – 2020',
    score: '86.4%',
    scoreLabel: 'Percentage',
    color: '#3B82F6',
    description: 'Strong academic foundation with excellent performance across all subjects.',
    highlights: ['Mathematics', 'Science', 'English'],
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-blue mb-3">Academic Journey</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)]">
          My <span className="gradient-text-blue">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Connecting SVG lines for desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 pointer-events-none z-0">
          <svg width="100%" height="4" className="overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <motion.line
              x1="16.67%"
              y1="2"
              x2="83.33%"
              y2="2"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Glow circles at connection points */}
            {['16.67%', '50%', '83.33%'].map((cx, i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy="2"
                r="4"
                fill={['#8B5CF6', '#22D3EE', '#3B82F6'][i]}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.2 }}
              />
            ))}
          </svg>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {educationData.map((edu, i) => (
            <TiltCard key={edu.degree} intensity={12} glare>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="glass-strong rounded-2xl p-6 h-full flex flex-col gap-4 card-highlight relative overflow-hidden group"
                whileHover={{ y: -6 }}
              >
                {/* Top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}50)` }}
                />

                {/* Background glow */}
                <motion.div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: edu.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                >
                  <edu.icon size={22} style={{ color: edu.color }} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-base text-text leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-secondary text-xs mt-1">{edu.institution}</p>
                </div>

                {/* Score */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                >
                  <span className="text-lg font-bold font-display" style={{ color: edu.color }}>
                    {edu.score}
                  </span>
                  <span className="text-xs text-secondary">{edu.scoreLabel}</span>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-mono glass border border-white/10 text-secondary"
                  >
                    {edu.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-secondary text-xs leading-relaxed flex-1">{edu.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map(h => (
                    <span
                      key={h}
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: `${edu.color}10`,
                        border: `1px solid ${edu.color}20`,
                        color: `${edu.color}CC`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
