import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Suruthi showed exceptional problem-solving skills and delivered quality code consistently during her internship. She's a quick learner who adapts well to new technologies.",
    name: "Internship Mentor",
    role: "Senior Developer",
    company: "Tech Company",
  },
  {
    quote: "Her ability to understand requirements and translate them into clean, functional code is impressive for a fresher. She collaborated seamlessly with our team.",
    name: "Team Lead",
    role: "Project Manager",
    company: "Incubation Program",
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What people say
        </motion.h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.quoteIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M11 7H7a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H6a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 0 0 0-2zm10 0h-4a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a1 1 0 0 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 0 0 0-2z"/>
                </svg>
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
