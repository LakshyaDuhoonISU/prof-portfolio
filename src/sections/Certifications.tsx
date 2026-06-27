import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/variants';
import SectionTitle from '../components/SectionTitle';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="CREDENTIALS"
          title="Certifications"
          subtitle="Verified credentials and professional certifications"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
