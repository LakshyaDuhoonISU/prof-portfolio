import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertTriangle, Lightbulb, Code2, Target, Wrench } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project } from '../data/projects';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!project) return null;

  const severityColors: Record<string, string> = {
    Critical: '#EF4444',
    High: '#F59E0B',
    Medium: '#38BDF8',
    Low: '#00FF88',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-4 z-50 overflow-y-auto rounded-2xl border border-[--color-border] bg-[--color-bg-card]/95 backdrop-blur-xl md:inset-x-[10%] md:inset-y-[5%] lg:inset-x-[15%]"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-[--color-border] bg-[var(--color-bg-card)]">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                    INC-{project.incidentNumber}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: `${severityColors[project.severity]}15`,
                      color: severityColors[project.severity],
                    }}
                  >
                    {project.severity}
                  </span>
                  <span className="rounded-full bg-[--color-accent]/10 px-2.5 py-0.5 text-xs font-medium text-[--color-accent]">
                    {project.status}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
                >
                  <X size={18} />
                </motion.button>
              </div>
              <div className="px-5 pb-4">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-text-primary]">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 p-5 md:p-8">
              {/* Overview */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <Target size={16} className="text-[--color-accent]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[--color-text-primary]">
                    Overview
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[--color-text-muted]">{project.description}</p>
              </section>

              {/* Problem Statement */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-[--color-warning]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[--color-text-primary]">
                    Problem Statement
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[--color-text-muted]">{project.problemStatement}</p>
              </section>

              {/* Solution */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb size={16} className="text-[--color-accent]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[--color-text-primary]">
                    Solution
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[--color-text-muted]">{project.solution}</p>
              </section>

              {/* Tech Stack */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <Code2 size={16} className="text-[--color-accent-secondary]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[--color-text-primary]">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[--color-border] bg-[--color-bg-secondary]/60 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[--color-accent-secondary]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Key Features */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <Wrench size={16} className="text-[--color-accent]" />
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[--color-text-primary]">
                    Key Features
                  </h3>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[--color-text-muted]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[--color-accent]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges, Learnings, Future */}
              <div className="grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-[--color-border] bg-[--color-bg-secondary]/30 p-4">
                  <h4 className="mb-3 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-wider text-[--color-danger]">
                    Challenges
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="text-xs leading-relaxed text-[--color-text-muted]">• {c}</li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-xl border border-[--color-border] bg-[--color-bg-secondary]/30 p-4">
                  <h4 className="mb-3 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-wider text-[--color-accent]">
                    Learnings
                  </h4>
                  <ul className="space-y-1.5">
                    {project.learnings.map((l) => (
                      <li key={l} className="text-xs leading-relaxed text-[--color-text-muted]">• {l}</li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-xl border border-[--color-border] bg-[--color-bg-secondary]/30 p-4">
                  <h4 className="mb-3 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-wider text-[--color-accent-secondary]">
                    Future Improvements
                  </h4>
                  <ul className="space-y-1.5">
                    {project.futureImprovements.map((f) => (
                      <li key={f} className="text-xs leading-relaxed text-[--color-text-muted]">• {f}</li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 border-t border-[--color-border] pt-6">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                    <SiGithub size={16} />
                    View on GitHub
                  </Button>
                )}
                {project.liveDemo && (
                  <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
