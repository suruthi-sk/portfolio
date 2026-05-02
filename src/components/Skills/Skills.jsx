import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, categories } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I work with
        </motion.h2>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} layout>
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className={styles.skillDot} />
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillCat}>{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
