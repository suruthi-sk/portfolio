import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, profile } from '../../data/profile';
import styles from './Experience.module.css';

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState(new Set(['joola']));

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Career History
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Career &amp; Education
        </motion.h2>

        <div className={styles.timeline}>
          {experience.map((item, index) => {
            const isExpanded = expandedIds.has(item.id);

            return (
              <motion.div
                key={item.id}
                className={`${styles.item} ${item.isCurrent ? styles.currentItem : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <button
                  type="button"
                  className={styles.itemHeaderBtn}
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.itemHeaderLeft}>
                    <div className={styles.badgeRow}>
                      {item.isCurrent && (
                        <span className={styles.currentBadge}>
                          <span className={styles.pulsingDot} />
                          Current Role
                        </span>
                      )}
                      <span className={styles.periodBadge}>{item.period}</span>
                    </div>

                    <div className={styles.roleInfo}>
                      <h3 className={styles.roleTitle}>{item.role}</h3>
                      <div className={styles.companyMeta}>
                        <span className={styles.companyName}>{item.company}</span>
                        {item.location && (
                          <>
                            <span className={styles.metaDot}>·</span>
                            <span className={styles.location}>{item.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <motion.span
                    className={styles.chevron}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`body-${item.id}`}
                      className={styles.expandBody}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className={styles.expandBodyInner}>
                        {item.summary && (
                          <p className={styles.summaryText}>{item.summary}</p>
                        )}

                        {item.platforms && item.platforms.length > 0 && (
                          <div className={styles.platformsBox}>
                            <span className={styles.platformsLabel}>Platforms:</span>
                            <div className={styles.platformPills}>
                              {item.platforms.map((p) => (
                                <span
                                  key={p.name}
                                  className={`${styles.platformPill} ${
                                    p.name.includes('Salesforce') ? styles.primaryPill : ''
                                  }`}
                                >
                                  <strong>{p.name}</strong>
                                  {p.tag && <span className={styles.pillTag}>({p.tag})</span>}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <ul className={styles.descList}>
                          {item.description.map((point, i) => (
                            <li key={i} className={styles.descItem}>
                              <span className={styles.checkIcon}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {item.tools && item.tools.length > 0 && (
                          <div className={styles.toolsRow}>
                            {item.tools.map((tool) => (
                              <span key={tool} className={styles.toolTag}>
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Education entry */}
          {(() => {
            const isEduExpanded = expandedIds.has('education');
            return (
              <motion.div
                className={`${styles.item} ${styles.educationCard}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.36 }}
              >
                <button
                  type="button"
                  className={styles.itemHeaderBtn}
                  onClick={() => toggleExpand('education')}
                  aria-expanded={isEduExpanded}
                >
                  <div className={styles.itemHeaderLeft}>
                    <div className={styles.badgeRow}>
                      <span className={styles.eduBadge}>Education</span>
                      <span className={styles.periodBadge}>{profile.education.period}</span>
                    </div>
                    <div className={styles.roleInfo}>
                      <h3 className={styles.roleTitle}>{profile.education.degree}</h3>
                      <div className={styles.companyMeta}>
                        <span className={styles.companyName}>{profile.education.institution}</span>
                        <span className={styles.metaDot}>·</span>
                        <span className={styles.cgpaBadge}>CGPA: {profile.education.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  <motion.span
                    className={styles.chevron}
                    animate={{ rotate: isEduExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isEduExpanded && (
                    <motion.div
                      key="body-education"
                      className={styles.expandBody}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className={styles.expandBodyInner}>
                        <p className={styles.summaryText}>
                          Formal foundation in Information Technology, algorithms, database management, software engineering, and object-oriented architectures.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
