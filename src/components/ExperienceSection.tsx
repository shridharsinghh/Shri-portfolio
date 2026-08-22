import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

const responsibilities = [
  'Developed and maintained RESTful APIs using Java and Spring Boot for internal applications.',
  'Implemented JWT-based authentication and authorization using Spring Security.',
  'Designed and optimized MySQL database schemas for efficient data retrieval.',
  'Integrated Swagger for API documentation and Postman for API testing.',
  'Collaborated in Agile sprints to deliver features on schedule with clean code.',
  'Containerized services using Docker, enabling consistent deployment across environments.',
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative section-padding" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-purple mb-3">Work History</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)]">
          Professional <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="glass-strong rounded-3xl overflow-hidden relative"
        >
          {/* Top gradient border */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE, #3B82F6)' }}
          />

          {/* Header */}
          <div className="p-8 pb-6 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center border border-purple/20">
                    <Briefcase size={18} className="text-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-text">Software Intern</h3>
                    <p className="text-purple text-sm font-semibold">Future Finder</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span className="badge">
                  <Calendar size={11} />
                  Jan 2026 – May 2026
                </span>
                <span className="flex items-center gap-1.5 text-secondary text-xs">
                  <MapPin size={11} className="text-cyan" />
                  India · Internship
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Responsibilities */}
          <div className="p-8">
            <p className="text-secondary text-xs uppercase tracking-widest mb-6">Key Responsibilities</p>
            <div className="relative">
              {/* Glowing vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px overflow-hidden">
                <motion.div
                  className="timeline-line w-full"
                  initial={{ height: '0%' }}
                  animate={inView ? { height: '100%' } : { height: '0%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
              </div>

              <div className="space-y-5">
                {responsibilities.map((resp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="flex gap-5 group"
                  >
                    {/* Timeline node */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-8 h-8 rounded-full glass flex items-center justify-center border border-purple/30 group-hover:border-cyan/50 transition-all duration-300"
                        whileHover={{ scale: 1.2 }}
                        style={{ boxShadow: '0 0 10px rgba(139,92,246,0.2)' }}
                      >
                        <CheckCircle2 size={14} className="text-purple group-hover:text-cyan transition-colors" />
                      </motion.div>
                    </div>
                    {/* Content */}
                    <div className="glass rounded-xl px-4 py-3 flex-1 group-hover:border-purple/20 transition-all duration-300 border border-transparent">
                      <p className="text-secondary text-sm leading-relaxed group-hover:text-text transition-colors duration-300">
                        {resp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'JWT', 'MySQL', 'Docker', 'Swagger', 'REST APIs', 'Spring Security'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-purple/10 border border-purple/20 text-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
