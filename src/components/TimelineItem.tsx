import { motion } from 'framer-motion';
import { staggerItem } from '../animations/variants';
import type { TimelineEvent } from '../data/timeline';
import { GraduationCap, Briefcase, Code2, Award, Trophy } from 'lucide-react';

const typeConfig: Record<TimelineEvent['type'], { icon: typeof GraduationCap; color: string; label: string }> = {
  education: { icon: GraduationCap, color: '#38BDF8', label: 'Education' },
  internship: { icon: Briefcase, color: '#00FF88', label: 'Internship' },
  project: { icon: Code2, color: '#A78BFA', label: 'Project' },
  certification: { icon: Award, color: '#F59E0B', label: 'Certification' },
  achievement: { icon: Trophy, color: '#EF4444', label: 'Achievement' },
};

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineItem({ event, index }: TimelineItemProps) {
  const config = typeConfig[event.type];
  const Icon = config.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={staggerItem}
      className={`relative flex w-full items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Content */}
      <div className={`w-full pl-12 md:w-5/12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: `0 0 20px ${config.color}15`,
          }}
          className="rounded-xl border border-[--color-border] bg-[--color-bg-card]/70 p-5 backdrop-blur-sm"
        >
          <span
            className="mb-2 inline-block rounded-full px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider"
            style={{ backgroundColor: `${config.color}15`, color: config.color }}
          >
            {config.label}
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-heading)] text-base font-semibold text-[--color-text-primary]">
            {event.title}
          </h3>
          {event.organization && (
            <p className="mt-1 text-sm text-[--color-accent-secondary]">{event.organization}</p>
          )}
          <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">{event.date}</p>
          <p className="mt-3 text-sm leading-relaxed text-[--color-text-muted]">{event.description}</p>
          {event.tags && (
            <div className={`mt-3 flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[--color-border] bg-[--color-bg-secondary]/50 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[--color-text-muted]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Center node */}
      <div className="absolute left-0 flex h-full items-center md:static md:w-2/12 md:justify-center">
        <motion.div
          whileHover={{
            scale: 1.3,
            boxShadow: `0 0 20px ${config.color}40`,
          }}
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2"
          style={{
            borderColor: config.color,
            backgroundColor: `${config.color}15`,
          }}
        >
          <Icon size={16} style={{ color: config.color }} />
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden w-5/12 md:block" />
    </motion.div>
  );
}
