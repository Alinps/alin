"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Shortly — URL Shortner",
    description:
      "A high-performance production grade URL shortener with Redis caching, async analytics using Celery, and real-time click tracking.",
    tech: ["Django", "MySQL", "Redis", "Celery","Prometheus"],
  },
  {
    title: "Master Chef — Recipe Sharing Platform",
    description:
      "A cloud-based Django backend for sharing recipes with Cloudinary media storage, Neon PostgreSQL, and scalable APIs.",
    tech: ["React", "Django", "PostgreSQL"],
  },
  {
    title: "Care Plus — Doctor Appointment Booking Platform",
    description:
      "A backend system for booking and managing hospital appointments with secure scheduling and cloud-based deployment.",
    tech: ["Django", "React", "PostgreSQL"],
  },
  {
    title: "To-Do App",
    description:
      "A task management app with CRUD operations, filtering, and real-time notifications for task updates.",
    tech: ["Django", "React", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>

      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.container} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}