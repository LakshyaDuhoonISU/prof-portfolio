import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { fadeUp } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import TerminalWindow from '../components/TerminalWindow';
import { LINKS, SITE_CONFIG } from '../constants/links';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: LINKS.email,
    href: `mailto:${LINKS.email}`,
    color: '#00FF88',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'lakshyad723',
    href: LINKS.linkedin,
    color: '#38BDF8',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'LakshyaDuhoonISU',
    href: LINKS.github,
    color: '#F9FAFB',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.location,
    color: '#F59E0B',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="COMMUNICATIONS"
          title="Contact"
          subtitle="Secure communication channels"
        />

        <TerminalWindow title="lakshya@soc ~ $ connect">
          <div className="space-y-5">
            {/* Command */}
            <div>
              <span className="text-[--color-accent]">{'>'}</span>{' '}
              <span className="text-[--color-text-primary]">connect --list-channels</span>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 pl-4">
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon size={14} style={{ color: item.color }} />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                      <span className="w-20 flex-shrink-0 text-xs text-[--color-text-muted]">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label !== 'Email' ? '_blank' : undefined}
                          rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-sm text-[--color-accent] transition-colors hover:text-[--color-accent-secondary]"
                        >
                          {item.value}
                          <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span className="text-sm text-[--color-text-primary]">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Status */}
            <div className="border-t border-[--color-border] pt-4">
              <span className="text-[--color-accent]">{'>'}</span>{' '}
              <span className="text-[--color-text-muted]">
                Status: <span className="text-[--color-accent]">All channels operational</span>
              </span>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
