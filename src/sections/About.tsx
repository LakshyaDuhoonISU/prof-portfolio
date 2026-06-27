import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import TerminalWindow from '../components/TerminalWindow';

const aboutData = [
  { key: 'Name', value: 'Lakshya Duhoon' },
  { key: 'Role', value: 'AI Engineer / Full Stack Developer' },
  { key: 'Mission', value: 'Building secure and intelligent software systems.' },
];

const focusAreas = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Backend Development',
  'Automation',
  'Machine Learning',
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="IDENTIFICATION"
          title="About"
          subtitle="System identity and mission parameters"
        />

        <TerminalWindow title="lakshya@soc ~ $ whoami">
          <div className="space-y-4">
            {/* Command */}
            <div>
              <span className="text-[--color-accent]">{'>'}</span>{' '}
              <span className="text-[--color-text-primary]">whoami</span>
            </div>

            {/* Info Table */}
            <div className="space-y-3 pl-4">
              {aboutData.map((item, i) => (
                <motion.div
                  key={item.key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-0"
                >
                  <span className="w-28 flex-shrink-0 text-[--color-accent-secondary]">{item.key}</span>
                  <span className="text-[--color-text-primary]">{item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Focus Areas */}
            <div className="mt-6 border-t border-[--color-border] pt-4">
              <div className="mb-3">
                <span className="text-[--color-accent]">{'>'}</span>{' '}
                <span className="text-[--color-text-primary]">cat focus_areas.txt</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {focusAreas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="rounded-lg border border-[--color-accent]/20 bg-[--color-accent]/5 px-4 py-2 text-xs text-[--color-accent]"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
