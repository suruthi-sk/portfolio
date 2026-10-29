import { motion } from 'framer-motion';
import { experience, profile } from '../../data/profile';
import styles from './Experience.module.css';

export default function Experience() {
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
          Professional Experience
        </motion.h2>

        <p className={styles.introSubtitle}>
          Quality assurance across enterprise ecosystems paired with practical backend engineering and API testing.
        </p>

        <div className={styles.timeline}>
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.item} ${item.isCurrent ? styles.currentItem : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className={styles.itemHeader}>
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

              {item.summary && (
                <p className={styles.summaryText}>{item.summary}</p>
              )}

              {/* Platform Badges if present (especially for JOOLA) */}
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

              {/* Responsibilities */}
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

              {/* Tools & Tech used */}
              {item.tools && item.tools.length > 0 && (
                <div className={styles.toolsRow}>
                  {item.tools.map((tool) => (
                    <span key={tool} className={styles.toolTag}>
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          {/* Education entry */}
          <motion.div
            className={`${styles.item} ${styles.educationCard}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.36 }}
          >
            <div className={styles.itemHeader}>
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
            <p className={styles.summaryText}>
              Formal foundation in Information Technology, algorithms, database management, software engineering, and object-oriented architectures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
