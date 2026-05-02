import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HiddenCorner.module.css';

const hobbies = [
  // { emoji: '📷', title: 'Photography', desc: 'Street and nature photography on weekends.' },
  { emoji: '🎧', title: 'Music', desc: 'Heavy into light melody music' },
  { emoji: '📚', title: 'Reading', desc: 'Mostly tech blogs, some fiction to decompress.' },
  { emoji: '🧶', title: 'Crochet', desc: 'Creating handmade pieces with yarn — relaxing and rewarding.' },
  { emoji: '🎨', title: 'Art', desc: 'Painting, sketching, and exploring creativity through colors and ideas.' },
  // { emoji: '♟️', title: 'Chess', desc: 'Casual player, always looking for a match.' },
  // { emoji: '🎮', title: 'Gaming', desc: 'Strategy and narrative-driven games mostly.' },
];

export default function HiddenCorner() {
  const [open, setOpen] = useState(false);

  return (
    <section className={`${styles.section}`}>
      <div className="container">
        <button className={styles.trigger} onClick={() => setOpen(o => !o)}>
          <div className={styles.triggerLeft}>
            <span className={styles.triggerIcon}>✦</span>
            <div>
              <p className={styles.triggerTitle}>There's more to me</p>
              <p className={styles.triggerSub}>
                Beyond code — interests I don't usually put on a resume
              </p>
            </div>
          </div>
          <motion.span
            className={styles.arrow}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className={styles.panel}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className={styles.panelInner}>
                <div className={styles.hobbiesGrid}>
                  {hobbies.map((h, i) => (
                    <motion.div
                      key={h.title}
                      className={styles.hobbyCard}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <span className={styles.hobbyEmoji}>{h.emoji}</span>
                      <div>
                        <p className={styles.hobbyTitle}>{h.title}</p>
                        <p className={styles.hobbyDesc}>{h.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
