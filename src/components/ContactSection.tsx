import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'singhshridhar916@gmail.com',
    href: 'mailto:singhshridhar916@gmail.com',
    color: '#8B5CF6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8825103827',
    href: 'tel:+918825103827',
    color: '#22D3EE',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/shridharsinghh',
    href: 'https://github.com/shridharsinghh',
    color: '#3B82F6',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shridhar-singh-',
    href: 'https://www.linkedin.com/in/shridhar-singh-/',
    color: '#22D3EE',
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-purple mb-3">Get In Touch</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,52px)]">
          Let's <span className="gradient-text">Connect</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* ── Left: Heading + Contact Cards ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-8"
        >
          <div>
            <h3 className="font-display font-bold text-4xl lg:text-5xl text-text leading-tight">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing.</span>
            </h3>
            <p className="text-secondary text-lg mt-4 leading-relaxed">
              I'm actively looking for backend engineering roles. Whether you have a project in
              mind, want to collaborate, or just want to chat — my inbox is always open.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === 'GitHub' || c.label === 'LinkedIn' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-4 group hover:scale-105 transition-all duration-300 card-highlight relative overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(circle at 0% 100%, ${c.color}12, transparent 60%)`,
                  }}
                />
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}
                >
                  <c.icon size={17} style={{ color: c.color }} />
                </div>
                <p className="text-xs uppercase tracking-widest text-secondary mb-1">{c.label}</p>
                <p
                  className="text-sm font-medium text-text group-hover:text-white transition-colors truncate"
                  style={{ fontFamily: 'monospace' }}
                >
                  {c.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
            {/* Top gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6, #22D3EE, transparent)' }}
            />

            <h4 className="font-display font-semibold text-xl text-text mb-6">Send me a message</h4>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-secondary" htmlFor="name">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full glass rounded-xl px-4 py-3 text-text text-sm placeholder-secondary/40 border border-white/10 focus:border-purple/50 focus:outline-none transition-all duration-300 bg-transparent"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-secondary" htmlFor="email">
                  Email Address
                </label>
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full glass rounded-xl px-4 py-3 text-text text-sm placeholder-secondary/40 border border-white/10 focus:border-purple/50 focus:outline-none transition-all duration-300 bg-transparent"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-secondary" htmlFor="message">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full glass rounded-xl px-4 py-3 text-text text-sm placeholder-secondary/40 border border-white/10 focus:border-purple/50 focus:outline-none transition-all duration-300 bg-transparent resize-none"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                data-magnetic
                className="magnetic-btn w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70"
                style={{
                  background:
                    status === 'sent'
                      ? 'linear-gradient(135deg, #22D3EE, #3B82F6)'
                      : 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer on button */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'idle' && (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle size={15} />
                      Message Sent!
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
