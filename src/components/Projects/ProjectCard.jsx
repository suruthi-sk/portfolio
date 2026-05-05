import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

export default function ProjectCard({ project, isOpen, onToggle }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const intervalRef = useRef(null);
  const images = project.images || [];

  useEffect(() => {
    if (isOpen && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isOpen, images.length]);

  const openLightbox = (src) => {
    setLightboxImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg('');
  };

  return (
    <motion.div
      className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
      layout
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <button className={styles.cardTop} onClick={onToggle}>
        <div className={styles.cardMeta}>
          <span className={styles.cardNumber}>0{project.id}</span>
          <div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardShort}>{project.shortDesc}</p>
          </div>
        </div>
        <motion.span
          className={styles.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.cardExpand}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className={styles.expandInner}>
              {images.length > 0 && (
                <div className={styles.carouselWrapper}>
                  <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className={styles.carouselImg}
                        onClick={() => openLightbox(img)}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  {images.length > 1 && (
                    <div className={styles.carouselDots}>
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ''}`}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <p className={styles.fullDesc}>{project.fullDesc}</p>

              <div className={styles.expandMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>{project.role}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>{project.duration}</span>
                </div>
              </div>

              <div className={styles.techTags}>
                {project.tech.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                {/* <a
                  href={project.liveLink}
                  className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  View Live
                  <span className={styles.placeholder}>(placeholder)</span>
                </a> */}
                <a
                  href={project.githubLink}
                  className={styles.linkBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightboxImg} alt="Full view" className={styles.lightboxImg} />
        </div>
      )}
    </motion.div>
  );
}
