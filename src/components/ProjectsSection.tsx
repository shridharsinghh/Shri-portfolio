import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { GithubIcon } from './Icons';

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  longDesc: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  gradient: string;
  accent: string;
  mockupType: 'browser' | 'extension';
}

const projects: Project[] = [
  {
    id: 1,
    name: 'FitTrack Pro',
    tagline: 'Enterprise Fitness Management API',
    description:
      'A production-grade REST API for workout tracking with enterprise-level security, role-based access control, and full Docker deployment.',
    longDesc:
      'FitTrack Pro is a comprehensive backend system that handles user management, workout logging, progress analytics, and secure multi-role access control — all served through a clean, documented API.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate', 'JPA', 'MySQL', 'Swagger', 'Docker'],
    features: [
      'Workout Tracking APIs',
      'User Management System',
      'JWT Authentication',
      'RBAC Authorization',
      'BCrypt Encryption',
      'Docker Deployment',
      'Swagger Documentation',
      'RESTful Architecture',
    ],
    github: 'https://github.com/shridharsinghh/FitTrack-Pro',
    live: '#',
    gradient: 'from-purple/20 via-transparent to-cyan/10',
    accent: '#8B5CF6',
    mockupType: 'browser',
  },
  {
    id: 2,
    name: 'AI Browser Assistant',
    tagline: 'Gemini-Powered AI Extension Backend',
    description:
      'A lightweight yet powerful AI browser assistant powered by Google Gemini API, with a Spring Boot backend and an interactive JavaScript frontend.',
    longDesc:
      'An intelligent browser extension that harnesses the power of Google Gemini API to provide real-time AI responses directly in your browser, backed by a robust Spring Boot service layer.',
    tech: ['Java', 'Spring Boot', 'Gemini API', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'AI-powered browser assistant',
      'Spring Boot backend',
      'Gemini API integration',
      'Real-time AI responses',
      'Lightweight JavaScript UI',
      'Contextual AI analysis',
    ],
    github: 'https://github.com/shridharsinghh',
    live: '#',
    gradient: 'from-cyan/20 via-transparent to-blue/10',
    accent: '#22D3EE',
    mockupType: 'extension',
  },
];

const techColors: Record<string, string> = {
  Java: '#22D3EE',
  'Spring Boot': '#8B5CF6',
  'Spring Security': '#3B82F6',
  JWT: '#8B5CF6',
  Hibernate: '#22D3EE',
  JPA: '#3B82F6',
  MySQL: '#22D3EE',
  Swagger: '#8B5CF6',
  Docker: '#3B82F6',
  'Gemini API': '#22D3EE',
  JavaScript: '#8B5CF6',
  HTML: '#3B82F6',
  CSS: '#22D3EE',
};

function BrowserMockup({ accent }: { accent: string }) {
  return (
    <div
      className="glass-strong rounded-2xl overflow-hidden border border-white/10"
      style={{ boxShadow: `0 20px 60px ${accent}20` }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.03]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-4">
          <div
            className="h-6 rounded-md px-3 text-xs flex items-center text-secondary/60 glass"
            style={{ fontSize: '10px' }}
          >
            localhost:8080/api/v1/fittrack
          </div>
        </div>
      </div>
      {/* Screen content */}
      <div className="p-5 space-y-3 min-h-[160px]">
        {/* API response mockup */}
        <div className="text-xs font-mono space-y-1.5">
          <p className="text-green-400/70">{'{'}</p>
          <p className="ml-4 text-cyan/80">"status": <span className="text-green-300/80">"200 OK"</span></p>
          <p className="ml-4 text-cyan/80">"user": <span className="text-yellow-300/80">"Shridhar"</span></p>
          <p className="ml-4 text-cyan/80">"role": <span className="text-purple/80">"ADMIN"</span></p>
          <p className="ml-4 text-cyan/80">"token": <span className="text-secondary/60">"eyJhbGci..."</span></p>
          <p className="text-green-400/70">{'}'}</p>
        </div>
        {/* Status bar */}
        <div className="pt-2 flex gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/20 text-green-400 border border-green-500/20">
            200 OK
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] text-secondary/60 bg-white/5">
            124ms
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] text-secondary/60 bg-white/5">
            JWT ✓
          </span>
        </div>
      </div>
    </div>
  );
}

function ExtensionMockup({ accent }: { accent: string }) {
  return (
    <div
      className="glass-strong rounded-2xl overflow-hidden border border-white/10 max-w-xs mx-auto"
      style={{ boxShadow: `0 20px 60px ${accent}20` }}
    >
      {/* Extension header */}
      <div
        className="px-4 py-3 border-b border-white/[0.06]"
        style={{ background: `linear-gradient(135deg, ${accent}15, transparent)` }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}
          >
            🤖
          </div>
          <div>
            <p className="text-xs font-bold text-text">AI Assistant</p>
            <p className="text-[10px] text-secondary/60">Powered by Gemini</p>
          </div>
          <div className="ml-auto">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: accent }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
      {/* Chat area */}
      <div className="p-4 space-y-3 min-h-[140px]">
        <div className="bg-white/5 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-secondary max-w-[80%]">
          Explain this code snippet to me
        </div>
        <div
          className="rounded-xl rounded-tr-sm px-3 py-2 text-xs text-text ml-auto max-w-[85%]"
          style={{ background: `${accent}20`, border: `1px solid ${accent}20` }}
        >
          This is a Spring Boot REST controller that handles JWT authentication...
        </div>
        <div className="flex items-center gap-2 mt-3 glass rounded-xl px-3 py-2">
          <span className="text-[10px] text-secondary/50 flex-1">Ask anything...</span>
          <motion.div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${accent}, #8B5CF6)` }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight size={10} className="text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: index * 0.15 }}
      className="relative"
    >
      <div
        className={`glass-strong rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0 project-glow relative`}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
        />
        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
        />

        {/* ── Mockup Side ── */}
        <div
          className={`relative p-8 flex items-center justify-center min-h-[280px] ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accent}08, transparent 70%)`,
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 animated-grid opacity-30" />

          {/* Floating orb behind mockup */}
          <motion.div
            className="absolute w-48 h-48 rounded-full blur-[60px] opacity-20"
            style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10 w-full">
            {project.mockupType === 'browser' ? (
              <BrowserMockup accent={project.accent} />
            ) : (
              <ExtensionMockup accent={project.accent} />
            )}
          </div>
        </div>

        {/* ── Content Side ── */}
        <div
          className={`relative z-10 p-8 lg:p-10 flex flex-col justify-between ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="space-y-5">
            {/* Number */}
            <p
              className="text-xs font-mono font-bold uppercase tracking-[0.2em]"
              style={{ color: `${project.accent}90` }}
            >
              Project {String(project.id).padStart(2, '0')}
            </p>

            {/* Title */}
            <div>
              <h3 className="font-display font-bold text-3xl text-text leading-tight">
                {project.name}
              </h3>
              <p className="text-sm font-medium mt-1" style={{ color: project.accent }}>
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-secondary text-base leading-relaxed">{project.description}</p>

            {/* Features */}
            <AnimatePresence>
              <div className="grid grid-cols-2 gap-2">
                {(expanded ? project.features : project.features.slice(0, 4)).map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 text-xs text-secondary"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.accent }}
                    />
                    {feat}
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {project.features.length > 4 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs text-secondary hover:text-text transition-colors"
                style={{ color: `${project.accent}90` }}
              >
                {expanded ? 'Show less ↑' : `+${project.features.length - 4} more features`}
              </button>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map(t => (
                <TiltCard key={t} intensity={5} glare={false}>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold glass"
                    style={{
                      borderColor: `${techColors[t] || project.accent}30`,
                      color: techColors[t] || project.accent,
                      border: `1px solid ${techColors[t] || project.accent}30`,
                    }}
                  >
                    {t}
                  </span>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-6">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="magnetic-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold glass border border-white/10 text-secondary hover:text-text hover:border-white/20 transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <GithubIcon size={15} />
              GitHub
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="magnetic-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, #8B5CF6)`,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-cyan mb-3">What I've Built</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)]">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-secondary mt-4 max-w-lg mx-auto">
          Real-world applications demonstrating my backend engineering skills and architectural thinking.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
