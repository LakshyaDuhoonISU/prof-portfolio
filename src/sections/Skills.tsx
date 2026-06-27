import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="ARSENAL"
          title="Skills"
          subtitle="Technologies and tools in the security operations toolkit"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={staggerItem}
                className="group rounded-xl border border-[--color-border] bg-[--color-bg-card]/60 p-5 backdrop-blur-sm transition-colors hover:border-[--color-accent]/20"
              >
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon size={18} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[--color-text-primary]">
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
