import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const socials = [
  { icon: GithubIcon, href: 'https://github.com/shridharsinghh', label: 'GitHub', color: '#8B5CF6' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shridhar-singh-/', label: 'LinkedIn', color: '#22D3EE' },
  { icon: Mail, href: 'mailto:singhshridhar916@gmail.com', label: 'Email', color: '#3B82F6' },
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-4">
      {/* Gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #22D3EE, transparent)' }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <a href="#" className="font-display font-bold text-2xl gradient-text">Shridhar</a>
            <p className="text-secondary text-sm mt-1">Java Backend Developer</p>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary text-sm hover:text-text transition-colors duration-200 hover:gradient-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-magnetic
                className="magnetic-btn w-10 h-10 glass rounded-full flex items-center justify-center text-secondary hover:text-white transition-all duration-300 border border-white/10"
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 20px ${s.color}40`,
                  borderColor: `${s.color}50`,
                  color: s.color,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-secondary text-xs">
            <span>© 2026 Shridhar. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
