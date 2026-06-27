import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scaleUp } from '../animations/variants';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = 'terminal', children, className = '' }: TerminalWindowProps) {
  return (
    <motion.div
      className={`overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-sm ${className}`}
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 border-b border-[--color-border] bg-[--color-bg-secondary]/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
          <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
          <div className="h-3 w-3 rounded-full bg-[#00FF88]" />
        </div>
        <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="p-5 font-[family-name:var(--font-mono)] text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
