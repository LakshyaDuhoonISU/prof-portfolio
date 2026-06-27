import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '../animations/variants';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlowCard({ children, className = '', glowColor = '#00FF88', onClick }: GlowCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        scale: 1.01,
        boxShadow: `0 0 15px ${glowColor}15, 0 0 30px ${glowColor}08`,
      }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-sm transition-all duration-300 hover:border-[--color-accent]/20 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
