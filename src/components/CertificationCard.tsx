import { motion } from 'framer-motion';
import { staggerItem } from '../animations/variants';
import { ExternalLink } from 'lucide-react';
import type { Certification } from '../data/certifications';

const logoColors: Record<string, { bg: string; text: string }> = {
  JPM: { bg: '#003B7E', text: '#FFFFFF' },
  HR: { bg: '#1BA94C', text: '#FFFFFF' },
};

interface CertificationCardProps {
  cert: Certification;
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  const colors = logoColors[cert.logo] || { bg: '#00FF88', text: '#000000' };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 20px rgba(0, 255, 136, 0.12)',
      }}
      className="group relative overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/70 p-5 backdrop-blur-sm transition-colors hover:border-[--color-accent]/20"
    >
      {/* Logo */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg font-[family-name:var(--font-heading)] text-sm font-bold"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {cert.logo}
        </div>
        <div className="flex-1">
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[--color-text-primary]">
            {cert.name}
          </h3>
          <p className="text-xs text-[--color-text-muted]">{cert.issuer}</p>
        </div>
      </div>

      {/* Date */}
      <p className="mb-3 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
        Issued: {cert.issueDate}
      </p>

      {/* Credential Link */}
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-[--color-accent] transition-colors hover:text-[--color-accent-secondary]"
        >
          <ExternalLink size={12} />
          View Credential
        </a>
      )}
    </motion.div>
  );
}
