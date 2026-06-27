import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { staggerItem } from '../animations/variants';

interface StatusCardProps {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  color?: string;
  className?: string;
}

export default function StatusCard({ icon: Icon, label, value, color = '#00FF88', className = '' }: StatusCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px ${color}20, 0 0 40px ${color}10`,
      }}
      className={`group relative overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/70 p-5 backdrop-blur-sm transition-colors hover:border-[${color}]/30 ${className}`}
    >
      {/* Glow accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      <div className="flex items-start justify-between">
        <div>
          <p className="mb-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[--color-text-muted]">
            {label}
          </p>
          <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-text-primary]">
            {value}
          </div>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
      </div>
    </motion.div>
  );
}
