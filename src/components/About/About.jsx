import { motion } from 'framer-motion';
import styles from './About.module.css';

const highlights = [
  { label: 'Internships', value: '2+' },
  { label: 'Projects Built', value: '2' },
  { label: 'Incubation', value: '1 Program' },
];

const currentlyLearning = ['Docker', 'Exploring new AI stuffs', 'System Design', 'AWS'];

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
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Developer by choice,<br />problem-solver by nature.
            </h2>
            <p className={styles.para}>
              I'm a fresher full-stack developer who's been anything but idle. Through
              internships and an incubation program, I've had the opportunity to work on
              real products, collaborate with teams, and ship code that actually gets used.
            </p>
            <p className={styles.para}>
              My approach to development is simple: understand the problem deeply, build
              cleanly, and always keep the end user in mind. I'm comfortable across the
              stack but have a particular love for building interfaces that feel intuitive.
            </p>
            <p className={styles.para}>
              I'm currently open to full-time roles and freelance collaborations. If you
              think we'd work well together, let's talk.
            </p>

            <motion.div
              className={styles.learningPill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className={styles.learningIcon}>🔥</span>
              <span className={styles.learningText}>Currently exploring:</span>
              {currentlyLearning.map(item => (
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
              <div className={styles.avatar}>S K</div>
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
