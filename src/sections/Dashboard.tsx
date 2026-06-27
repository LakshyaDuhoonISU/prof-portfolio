import { motion } from 'framer-motion';
import { ShieldCheck, FolderKanban, Rocket, Layers, GitBranch, Briefcase } from 'lucide-react';
import { staggerContainer } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import StatusCard from '../components/StatusCard';
import AnimatedCounter from '../components/AnimatedCounter';

const dashboardCards = [
  {
    icon: ShieldCheck,
    label: 'Threat Level',
    value: <span className="text-[--color-accent]">Normal</span>,
    color: '#00FF88',
  },
  {
    icon: FolderKanban,
    label: 'Projects',
    value: <AnimatedCounter end={11} />,
    color: '#38BDF8',
  },
  {
    icon: Rocket,
    label: 'Deployments',
    value: <AnimatedCounter end={12} />,
    color: '#A78BFA',
  },
  {
    icon: Layers,
    label: 'Tech Stack',
    value: <AnimatedCounter end={25} suffix="+" />,
    color: '#F59E0B',
  },
  {
    icon: GitBranch,
    label: 'GitHub Repos',
    value: <AnimatedCounter end={99} suffix="+"/>,
    color: '#EF4444',
  },
  {
    icon: Briefcase,
    label: 'Availability',
    value: <span className="text-sm text-[--color-accent]">Open To Work</span>,
    color: '#00FF88',
  },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="MONITORING"
          title="Dashboard"
          subtitle="Real-time overview of portfolio metrics and system status"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {dashboardCards.map((card) => (
            <StatusCard
              key={card.label}
              icon={card.icon}
              label={card.label}
              value={card.value}
              color={card.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
