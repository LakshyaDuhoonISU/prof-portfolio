import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ExternalLink, ChevronRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { staggerContainer, staggerItem } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import ProjectModal from '../components/ProjectModal';
import { projects, type Project } from '../data/projects';

const severityColors: Record<string, string> = {
  Critical: '#EF4444',
  High: '#F59E0B',
  Medium: '#38BDF8',
  Low: '#00FF88',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="INCIDENT LOG"
          title="Projects"
          subtitle="Active operations and deployed systems"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 20px ${severityColors[project.severity]}15`,
              }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-sm transition-colors hover:border-[--color-accent]/20"
            >
              {/* Severity Line */}
              <div
                className="h-[2px]"
                style={{
                  background: `linear-gradient(90deg, ${severityColors[project.severity]}, transparent)`,
                }}
              />

              <div className="p-5">
                {/* Header */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
                    Incident #{project.incidentNumber}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        backgroundColor: `${severityColors[project.severity]}15`,
                        color: severityColors[project.severity],
                      }}
                    >
                      <AlertTriangle size={10} />
                      {project.severity}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-base font-semibold text-[--color-text-primary]">
                  {project.title}
                </h3>

                {/* Status */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-[--color-accent]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[--color-accent]" />
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[--color-text-muted]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[--color-border] bg-[--color-bg-secondary]/50 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[--color-text-muted]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-md border border-[--color-border] bg-[--color-bg-secondary]/50 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[--color-text-muted]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-[--color-border] pt-3">
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
                        aria-label="GitHub"
                      >
                        <SiGithub size={14} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-[--color-text-muted] transition-colors hover:bg-[--color-bg-secondary] hover:text-[--color-text-primary]"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[--color-accent] opacity-0 transition-opacity group-hover:opacity-100">
                    View Details
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
