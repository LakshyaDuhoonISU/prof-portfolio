import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Shield } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { NAV_ITEMS, LINKS } from '../../constants/links';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[--color-border] bg-[--color-bg-primary]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-accent]/10">
              <Shield size={18} className="text-[--color-accent]" />
            </div>
            <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-[--color-text-primary]">
              Lakshya<span className="text-[--color-accent]">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3 py-2 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
              >
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <div className="mx-2 h-5 w-px bg-[--color-border]" />

            {/* Social Icons */}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
              aria-label="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Resume Button */}
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[--color-accent]/10 px-3 py-2 font-[family-name:var(--font-mono)] text-xs text-[--color-accent] transition-colors hover:bg-[--color-accent]/20"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[--color-bg-primary]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 p-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-[family-name:var(--font-heading)] text-xl text-[--color-text-muted] transition-colors hover:text-[--color-accent]"
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="mt-4 h-px w-16 bg-[--color-border]" />

              <div className="flex gap-4">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-[--color-text-muted] hover:text-[--color-accent]" aria-label="GitHub">
                  <SiGithub size={22} />
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[--color-text-muted] hover:text-[--color-accent]" aria-label="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
              </div>

              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[--color-accent]/10 px-6 py-3 font-[family-name:var(--font-mono)] text-sm text-[--color-accent] transition-colors hover:bg-[--color-accent]/20"
              >
                <FileText size={16} />
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
