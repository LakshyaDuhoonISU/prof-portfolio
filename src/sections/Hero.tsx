import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../constants/links';
import TypingText from '../components/TypingText';



const asciiArt = `
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗ ██████╗  ██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗██║   ██║██║     
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗╚════██║██║   ██║██║     
╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║╚██████╔╝╚██████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝
`.trim();

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(t1);
  }, []);

  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* ASCII Art */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 0.15 : 0 }}
          transition={{ duration: 1.5 }}
          className="mx-auto mb-6 hidden overflow-hidden font-[family-name:var(--font-mono)] text-[6px] leading-tight text-[--color-accent] sm:block sm:text-[8px] lg:text-[10px]"
          aria-hidden="true"
        >
          {asciiArt}
        </motion.pre>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-[--color-text-primary] sm:text-5xl lg:text-6xl"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          {SITE_CONFIG.roles.map((role, i) => (
            <span key={role}>
              <span className="font-[family-name:var(--font-mono)] text-sm text-[--color-accent-secondary] sm:text-base">
                {role}
              </span>
              {i < SITE_CONFIG.roles.length - 1 && (
                <span className="ml-3 text-[--color-border]">•</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Recruiter Brief Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mb-8 max-w-md overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-sm text-left"
        >
          <div className="border-b border-[--color-border] bg-[--color-bg-secondary]/50 px-4 py-2">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-[--color-accent]" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                Recruiter Brief
              </span>
            </div>
          </div>
          <div className="space-y-4 p-5 text-sm leading-relaxed text-[--color-text-primary]">
            <p>
              B.Tech CSE student specializing in Cybersecurity, building AI-powered applications and secure full-stack systems.
            </p>
            <div>
              <p className="mb-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[--color-text-muted]">Previous Experience</p>
              <p>AI & Data Analysis Intern @ Colt Technology Services</p>
            </div>
            <div>
              <p className="mb-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[--color-text-muted]">Focus</p>
              <p className="font-medium text-[--color-accent-secondary]">AI • Software Engineering • Cybersecurity</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToDashboard}
            className="inline-flex items-center gap-2 rounded-xl border border-[--color-accent]/30 bg-[--color-accent]/10 px-8 py-3 font-[family-name:var(--font-heading)] text-sm font-medium text-[--color-accent] transition-all hover:bg-[--color-accent]/20"
          >
            Enter Dashboard
            <ChevronDown size={16} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
