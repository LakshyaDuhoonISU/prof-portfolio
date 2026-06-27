import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { timelineEvents } from '../data/timeline';

export default function Timeline() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="AUDIT LOG"
          title="Experience"
          subtitle="Chronological record of education, internships, and milestones"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-[--color-border] to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
