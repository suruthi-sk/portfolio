import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import styles from './About.module.css';

const highlights = [
  { label: 'Current Role', value: 'JOOLA' },
  { label: 'Primary Platform', value: 'Salesforce' },
  { label: 'Automation & APIs', value: 'Playwright · Postman' },
  { label: 'Education', value: 'B.Tech IT (8.82)' },
];

const continuousFocus = [
  'Salesforce Workflows',
  'Playwright Test Automation',
  'Celigo & NetSuite Integrations',
  'API Architecture',
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.p>
        <div className={styles.grid}>
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Engineering precision meets<br />enterprise quality assurance.
            </h2>
            <p className={styles.para}>
              I work as a QA Engineer at <strong>{profile.company}</strong> in Bangalore, focusing on
              Salesforce-centered business systems and connected integration workflows across NetSuite
              and Celigo (with additional exposure to Shopify).
            </p>
            <p className={styles.para}>
              Having a strong background in software engineering, Core Java, Spring Boot, and database systems
              fundamentally shapes how I approach quality. Instead of treating software as a black box,
              I inspect API payloads in Postman, design automated Playwright regression tests, trace error
              logs, and partner with developers to pinpoint defect root causes quickly.
            </p>
            <p className={styles.para}>
              Whether I am validating mission-critical sync flows between enterprise ERPs or writing clean
              backend code, my objective is simple: ensure systems are reliable, scalable, and resilient.
            </p>

            <motion.div
              className={styles.learningPill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className={styles.learningIcon}>✦</span>
              <span className={styles.learningText}>Current Focus:</span>
              {continuousFocus.map(item => (
                <span key={item} className={styles.learningTag}>{item}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.avatarBox}>
              <div className={styles.avatar}>{profile.initials}</div>
              <div className={styles.avatarGlow} />
            </div>

            <div className={styles.highlights}>
              {highlights.map(h => (
                <div key={h.label} className={styles.highlightCard}>
                  <span className={styles.highlightValue}>{h.value}</span>
                  <span className={styles.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
