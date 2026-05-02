import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:suruthisk7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

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
              <a href="https://linkedin.com/in/suruthi-s-k" target="_blank" rel="noreferrer" className={styles.contactItem}>
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
            onSubmit={handleSubmit}
          >
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  className={styles.successMsg}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Your email client should have opened. If not, email me directly at suruthisk7@gmail.com
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => setStatus('idle')}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" className={styles.formFields}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>Name</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email</label>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Message</label>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="What's on your mind?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Opening...' : 'Send Message'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
