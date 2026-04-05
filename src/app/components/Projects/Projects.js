"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { FaGithub} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Shortly — URL Shortner",
    description:
      "A high-performance production grade URL shortener with Redis caching, async analytics using Celery, and real-time click tracking.",
    tech: ["Django", "MySQL", "Redis", "Celery","Prometheus"],
    gitHub:"https://github.com/Alinps",
    live:"",
  },
  {
    title: "Master Chef — Recipe Sharing Platform",
    description:
      "A cloud-based Django backend for sharing recipes with Cloudinary media storage, Neon PostgreSQL, and scalable APIs.",
    tech: ["React", "Django", "PostgreSQL"],
    gitHub:"https://github.com/Alinps",
    live:"https://recipe-sharing-frontend-beryl.vercel.app/",
  },
  {
    title: "Care Plus — Doctor Appointment Booking Platform",
    description:
      "A backend system for booking and managing hospital appointments with secure scheduling and cloud-based deployment.",
    tech: ["Django", "React", "PostgreSQL"],
    gitHub:"https://github.com/Alinps",
    live:"https://hospitalappointmentboookingplatform.vercel.app/",
  },
  {
    title: "To-Do App",
    description:
      "A task management app with CRUD operations, filtering, and real-time notifications for task updates.",
    tech: ["Django", "React", "PostgreSQL"],
    gitHub:"https://github.com/Alinps",
    live:"",
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
              <span><a href={project.gitHub} className={styles.link} target="__blank"><FaGithub /></a></span>
              <span>{project.live.length > 5 ?<a href={project.live} className={styles.link} target="__blank" ><HiOutlineExternalLink /></a>: ""}</span>
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