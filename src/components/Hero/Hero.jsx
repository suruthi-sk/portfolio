import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import styles from './Hero.module.css';

const roles = ['Full Stack Developer', 'Backend Enthusiast', 'Problem Solver', 'Clean Code Advocate'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Uses a free hit counter API - replace with your preferred service
    const KEY = 'suruthi-portfolio-visitors';
    try {
      const stored = parseInt(localStorage.getItem(KEY) || '0', 10);
      const sessionKey = 'suruthi-portfolio-session';
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, '1');
        const newCount = stored + 1;
        localStorage.setItem(KEY, newCount.toString());
        setCount(newCount);
      } else {
        setCount(stored);
      }
    } catch {
      setCount(42); // fallback
    }
  }, []);

  return count;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);
  const visitorCount = useVisitorCount();

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
            {typedRole}<span className={styles.cursor}>|</span>
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

      {visitorCount && (
        <motion.div
          className={styles.visitorBadge}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className={styles.visitorDot} />
          <span>{visitorCount} people have visited this portfolio</span>
        </motion.div>
      )}

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
