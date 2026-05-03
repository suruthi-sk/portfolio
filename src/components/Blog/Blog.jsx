import { motion } from 'framer-motion';
import { blogs } from '../../data/blogs';
import styles from './Blog.module.css';

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

const PLATFORM_ICONS = {
  Medium: <MediumIcon />,
};

export default function Blog() {
  const isEmpty = blogs.length === 0;

  return (
    <section id="blog" className={`section ${styles.blog}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Things I write about
        </motion.h2>

        {isEmpty ? (
          <motion.div
            className={styles.empty}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className={styles.emptyIcon}>✍️</span>
            <p className={styles.emptyText}>Posts coming soon — check back later!</p>
            <a
              href="https://medium.com/@suruthisk7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.emptyLink}
            >
              Follow on Medium <ExternalIcon />
            </a>
          </motion.div>
        ) : (
          <div className={styles.list}>
            {blogs.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <div className={styles.cardLeft}>
                  <span className={styles.cardNumber}>0{post.id}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <span className={styles.externalIcon}><ExternalIcon /></span>
                  </div>

                  {post.description && (
                    <p className={styles.cardDesc}>{post.description}</p>
                  )}

                  <div className={styles.cardMeta}>
                    <span className={styles.platform}>
                      {PLATFORM_ICONS[post.platform] ?? null}
                      {post.platform}
                    </span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.date}>{post.date}</span>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span className={styles.dot}>·</span>
                        <div className={styles.tags}>
                          {post.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
