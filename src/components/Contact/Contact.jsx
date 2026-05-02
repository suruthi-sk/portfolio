import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's work together
        </motion.h2>

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.tagline}>
              I'm currently open to full-time roles and freelance projects.
              Have something in mind? Drop me a message.
            </p>
            <div className={styles.contactItems}>
              <a href="mailto:suruthisk7@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                suruthisk7@gmail.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>in</span>
                linkedin.com/in/suruthi-s-k
              </a>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={e => e.preventDefault()}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.textarea} rows={5} placeholder="What's on your mind?" />
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </motion.form>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Designed & built by <span>Suruthi S K</span> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
