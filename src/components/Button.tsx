import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-[family-name:var(--font-heading)] text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-accent]/50 focus:ring-offset-2 focus:ring-offset-[--color-bg-primary]';

  const variants = {
    primary: 'bg-[--color-accent] text-[--color-bg-primary] hover:bg-[--color-accent]/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]',
    secondary: 'border border-[--color-accent]/30 bg-[--color-accent]/10 text-[--color-accent] hover:bg-[--color-accent]/20 hover:border-[--color-accent]/50',
    ghost: 'text-[--color-text-muted] hover:text-[--color-text-primary] hover:bg-[--color-bg-secondary]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
