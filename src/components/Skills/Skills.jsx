import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const ALL_CATEGORIES = [...new Set(skills.map(s => s.category))];

const CATEGORY_COLORS = {
  Programming: '#a78bfa',
  Frontend:    '#60a5fa',
  Backend:     '#34d399',
  Database:    '#fb923c',
  Tools:       '#fbbf24',
  'AI/ML':     '#f472b6',
};

const CENTER = { x: 50, y: 50 };
const CAT_RADIUS = 30;

const categoryNodes = ALL_CATEGORIES.map((cat, i) => {
  const angle = (i / ALL_CATEGORIES.length) * 2 * Math.PI - Math.PI / 2;
  return {
    name: cat,
    x: CENTER.x + CAT_RADIUS * Math.cos(angle),
    y: CENTER.y + CAT_RADIUS * Math.sin(angle),
    color: CATEGORY_COLORS[cat] || '#64748b',
  };
});

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const activeNode = useMemo(
    () => categoryNodes.find(n => n.name === activeCategory) ?? null,
    [activeCategory]
  );

  const activeSkills = useMemo(
    () => (activeCategory ? skills.filter(s => s.category === activeCategory) : []),
    [activeCategory]
  );

  const toggle = (name) =>
    setActiveCategory(prev => (prev === name ? null : name));

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

        <div className={styles.layout}>
          <div className={styles.networkWrapper}>
            <svg
              className={styles.networkSvg}
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <polygon
                points={categoryNodes.map(n => `${n.x},${n.y}`).join(' ')}
                fill="none"
                stroke="var(--border)"
                strokeWidth="0.3"
                strokeOpacity="0.4"
              />
              {categoryNodes.map(node => (
                <line
                  key={`spoke-${node.name}`}
                  x1={CENTER.x} y1={CENTER.y}
                  x2={node.x}   y2={node.y}
                  stroke={activeCategory === node.name ? node.color : 'var(--border)'}
                  strokeWidth="0.3"
                  strokeOpacity={activeCategory === node.name ? 0.8 : 0.35}
                  style={{ transition: 'stroke 0.35s, stroke-opacity 0.35s' }}
                />
              ))}
            </svg>

            <div className={styles.hub} style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}>
              <span>SK</span>
            </div>

            {categoryNodes.map((node, i) => (
              <motion.button
                key={node.name}
                className={`${styles.catNode} ${activeCategory === node.name ? styles.catNodeActive : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, '--c': node.color, x: '-50%', y: '-19px' }}
                onClick={() => toggle(node.name)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
              >
                <span className={styles.catDot} />
                <span className={styles.catLabel}>{node.name}</span>
              </motion.button>
            ))}
          </div>

          <div className={styles.panel}>
            <AnimatePresence mode="wait">
              {activeCategory ? (
                <motion.div
                  key={activeCategory}
                  className={styles.panelContent}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.panelHeader} style={{ '--c': activeNode?.color }}>
                    <span className={styles.panelDot} />
                    <span className={styles.panelTitle}>{activeCategory}</span>
                    <span className={styles.panelCount}>{activeSkills.length} skills</span>
                  </div>
                  <ul className={styles.skillList}>
                    {activeSkills.map((skill, i) => (
                      <motion.li
                        key={skill.name}
                        className={styles.skillItem}
                        style={{ '--c': activeNode?.color }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.04 }}
                      >
                        <span className={styles.skillBullet} />
                        {skill.name}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className={styles.placeholder}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
                  </svg>
                  <p>Click a node to<br/>explore skills</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
