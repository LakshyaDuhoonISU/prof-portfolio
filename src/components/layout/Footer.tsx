import { Mail, Shield, Activity } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { LINKS, SITE_CONFIG } from '../../constants/links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[--color-border] bg-[--color-bg-secondary]/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-accent]/10">
                <Shield size={18} className="text-[--color-accent]" />
              </div>
              <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-[--color-text-primary]">
                Lakshya<span className="text-[--color-accent]">.dev</span>
              </span>
            </div>
            <p className="text-sm text-[--color-text-muted]">
              Building secure, intelligent, and production-ready software systems.
            </p>
          </div>

          {/* Status */}
          <div className="flex flex-col items-start gap-3 md:items-center">
            <div className="flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/50 px-4 py-2">
              <Activity size={12} className="text-[--color-accent]" />
              <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                System Status: <span className="text-[--color-accent]">Operational</span>
              </span>
            </div>
            <div className="flex items-center gap-4 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
              <span>Portfolio {SITE_CONFIG.version}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[--color-border] text-[--color-text-muted] transition-colors hover:border-[--color-accent]/30 hover:text-[--color-accent]"
                aria-label="GitHub"
              >
                <SiGithub size={16} />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[--color-border] text-[--color-text-muted] transition-colors hover:border-[--color-accent]/30 hover:text-[--color-accent]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[--color-border] text-[--color-text-muted] transition-colors hover:border-[--color-accent]/30 hover:text-[--color-accent]"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[--color-border] pt-6 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
