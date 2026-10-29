import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function ResumeCard() {
  return (
    <motion.div
      className={styles.resumeCard}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardDots}>
          <span /><span /><span />
        </div>
        <span className={styles.cardTitle}>Suruthi_SK_Resume.pdf</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.resumeAvatar}>{profile.initials}</div>
        <p className={styles.resumeName}>{profile.name}</p>
        <p className={styles.resumeRole}>{profile.title} · {profile.company}</p>

        <div className={styles.resumeDivider} />

        <div className={styles.resumeRows}>
          <div className={styles.resumeRow}>
            <span className={styles.resumeLabel}>Primary</span>
            <span className={styles.resumeValue}>Salesforce QA</span>
          </div>
          <div className={styles.resumeRow}>
            <span className={styles.resumeLabel}>Platforms</span>
            <span className={styles.resumeValue}>NetSuite · Celigo</span>
          </div>
          <div className={styles.resumeRow}>
            <span className={styles.resumeLabel}>Automation</span>
            <span className={styles.resumeValue}>Playwright · Postman</span>
          </div>
          <div className={styles.resumeRow}>
            <span className={styles.resumeLabel}>Foundation</span>
            <span className={styles.resumeValue}>Core Java · Spring Boot</span>
          </div>
          <div className={styles.resumeRow}>
            <span className={styles.resumeLabel}>Status</span>
            <span className={`${styles.resumeValue} ${styles.available}`}>● Active @ JOOLA</span>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <a
          href="/resume.pdf"
          download="Suruthi_SK_Resume.pdf"
          className={styles.downloadBtn}
          title="Download verified resume PDF"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
}
