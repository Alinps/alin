"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Modal.module.css";

export default function Modal({ project, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!project) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    // Disable background scroll only while modal is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Title */}
        <h2 className={styles.title}>{project.title}</h2>

        {/* Sections */}
        <Section title=" Problem" content={project.problem} />
        <Section title=" Approach" content={project.approach} />
        <SectionList title=" Tech Decisions" items={project.tech} />
        <SectionList title=" Challenges" items={project.challenges} />
        <SectionList title=" Optimization" items={project.optimization} />

        {/* Links (optional) */}
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>

        {/* Close button */}
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
}

/* ---------- Sub Components ---------- */

function Section({ title, content }) {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function SectionList({ title, items }) {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}> {item}</li>
        ))}
      </ul>
    </div>
  );
}
