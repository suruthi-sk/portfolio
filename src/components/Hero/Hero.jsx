import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <motion.p className={styles.greeting} {...fadeUp(0.1)}>
            Hi, I'm
          </motion.p>
          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            Suruthi S K
          </motion.h1>
          <motion.p className={styles.role} {...fadeUp(0.3)}>
            Full Stack Developer
          </motion.p>
          <motion.p className={styles.bio} {...fadeUp(0.4)}>
            Fresher developer with hands-on experience through internships and incubation programs.
            I build clean, purposeful web applications with a focus on user experience and solid code.
          </motion.p>
          <motion.div className={styles.actions} {...fadeUp(0.5)}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <ResumeCard />
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
