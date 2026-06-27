import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { fadeUp } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { LINKS, SITE_CONFIG } from '../constants/links';

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="DOCUMENTATION"
          title="Resume"
          subtitle="Professional documentation and credentials"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-sm"
        >
          {/* Accent line */}
          <div className="h-[2px] bg-gradient-to-r from-[--color-accent] via-[--color-accent-secondary] to-transparent" />

          <div className="p-8 text-center sm:p-10">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[--color-accent]/10">
              <FileText size={28} className="text-[--color-accent]" />
            </div>

            <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[--color-text-primary]">
              {SITE_CONFIG.name}
            </h3>
            <p className="mb-1 text-sm text-[--color-accent-secondary]">
              {SITE_CONFIG.roles.join(' • ')}
            </p>
            <p className="mb-8 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
              Resume — Updated 2026
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <Eye size={16} />
                View Resume
              </Button>
              <Button
                href={LINKS.resume}
                download
                size="lg"
              >
                <Download size={16} />
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
