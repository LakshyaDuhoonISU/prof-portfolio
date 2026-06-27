import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../constants/links';
import TypingText from '../components/TypingText';

const statusItems = [
  '✓ Portfolio Loaded',
  '✓ Projects Indexed',
  '✓ Resume Ready',
  '✓ Contact Channel Active',
];

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
  const [showStatus, setShowStatus] = useState(false);
  const [visibleStatus, setVisibleStatus] = useState<number[]>([]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 300);
    const t2 = setTimeout(() => setShowStatus(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!showStatus) return;
    statusItems.forEach((_, i) => {
      setTimeout(() => {
        setVisibleStatus((prev) => [...prev, i]);
      }, i * 300);
    });
  }, [showStatus]);

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

        {/* System Status Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mb-8 max-w-md overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-sm"
        >
          <div className="border-b border-[--color-border] bg-[--color-bg-secondary]/50 px-4 py-2">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-[--color-accent]" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                System Status
              </span>
            </div>
          </div>
          <div className="space-y-2 p-4">
            {statusItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: visibleStatus.includes(i) ? 1 : 0,
                  x: visibleStatus.includes(i) ? 0 : -10,
                }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={14} className="text-[--color-accent]" />
                <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                  {item.replace('✓ ', '')}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typing Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 2 }}
          className="mb-8 font-[family-name:var(--font-mono)] text-sm text-[--color-text-muted]"
        >
          <span className="text-[--color-accent]">{'>'}</span>{' '}
          <TypingText
            text="Initializing Dashboard..."
            speed={60}
            startDelay={200}
            shouldStart={showContent}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 3.5 }}
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[--color-border] p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[--color-accent]"
          />
        </div>
      </motion.div>
    </section>
  );
}
