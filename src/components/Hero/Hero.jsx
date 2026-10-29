import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import ResumeCard from './ResumeCard';
import styles from './Hero.module.css';

const roles = [
  'QA Engineer',
  'Salesforce QA',
  'Integration Tester',
  'Backend Developer',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

function useTypingEffect(words, typingSpeed = 90, deletingSpeed = 45, pauseTime = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'deleting'

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Full word typed, pause before backspacing
        const timeout = setTimeout(() => {
          setPhase('deleting');
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Word cleared, small pause, advance to next word, then type
        const timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase('typing');
        }, 320);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <motion.p className={styles.greeting} {...fadeUp(0.1)}>
            Hi, I'm
          </motion.p>
          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            {profile.name}
          </motion.h1>
          <motion.p className={styles.role} {...fadeUp(0.3)}>
            {typedRole}<span className={styles.cursor}>|</span>
          </motion.p>
          <motion.p className={styles.bio} {...fadeUp(0.4)}>
            {profile.title} at <strong>{profile.company}</strong> — validating Salesforce integrations
            and automated regression workflows across NetSuite and Celigo. Supported by a strong
            software engineering foundation in Java, Spring Boot, and REST API development.
          </motion.p>
          <motion.div className={styles.actions} {...fadeUp(0.5)}>
            <a href="#experience" className={styles.btnPrimary}>View Experience</a>
            <a href="#projects" className={styles.btnOutline}>Projects</a>
            <a
              href="/resume.pdf"
              download="Suruthi_SK_Resume.pdf"
              className={styles.btnOutline}
              title="Download latest verified resume"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
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
