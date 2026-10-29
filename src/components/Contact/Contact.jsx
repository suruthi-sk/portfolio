import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../../data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    const subject = "Portfolio Inquiry from " + form.name;
    const body =
      "Name: " + form.name + "\nEmail: " + form.email + "\n\nMessage:\n" + form.message;
    window.location.href =
      "mailto:" + profile.email + "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className={"section " + styles.contact}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Connect
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
              Interested in discussing quality assurance, enterprise integrations (Salesforce, NetSuite, Celigo),
              or back-end architecture? Feel free to reach out directly.
            </p>
            <div className={styles.contactItems}>
              <a href={`mailto:${profile.email}`} className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>in</span>
                linkedin.com/in/suruthi-s-k
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                {profile.phone}
              </a>
              <a
                href="/resume.pdf"
                download="Suruthi_SK_Resume.pdf"
                className={styles.contactItem}
                style={{ borderColor: 'var(--accent)' }}
              >
                <span className={styles.contactIcon} style={{ background: 'var(--accent)', color: '#fff' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </span>
                Download Latest Resume (PDF)
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
              {status === "sent" ? (
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
                  Your email client should have opened. If not, email directly at {profile.email}
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
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
                      placeholder="What is on your mind?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Opening..." : "Send Message"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            QA Engineer at <strong>{profile.company}</strong> · {profile.name}
          </p>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
