import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function SectionTitle({ title, subtitle, tag }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full border border-[--color-border] bg-[--color-bg-secondary] px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[--color-accent]">
          {tag}
        </span>
      )}
      <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[--color-text-primary] md:text-4xl">
        <span className="text-[--color-accent]">{'// '}</span>
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-[--color-text-muted]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
