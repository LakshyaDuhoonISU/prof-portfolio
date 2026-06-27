import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon?: IconType;
  color?: string;
}

export default function SkillBadge({ name, icon: Icon, color = '#00FF88' }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-2.5 rounded-lg border border-[--color-border] bg-[--color-bg-secondary]/60 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-[--color-accent]/30"
      style={{
        boxShadow: `0 0 0 0 ${color}00`,
      }}
    >
      {Icon && <Icon size={14} style={{ color }} />}
      <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-primary]">
        {name}
      </span>
    </motion.div>
  );
}
