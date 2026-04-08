"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { FaGithub} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Modal from "../Modal/Modal";
import { useState } from "react";

const projects = [
  {
    title: "Shortly — URL Shortner",
    description:
      "A high-performance production grade URL shortener with Redis caching, async analytics using Celery, and real-time click tracking.",
    tech: [
      "Django",
      "Redis",
      "Celery",
      "MySQL",
      "Prometheus",],
    gitHub:"https://github.com/Alinps",
    live:"",
     problem:
      "Handling high traffic URL redirects with real-time analytics requires scalability.",
       approach:
      "Built URL shortener with async analytics pipeline.",
       challenges: [
      "High-frequency redirects",
      "Avoiding data loss in async pipeline",
      "Concurrency handling",],
       optimization: [
      "Redis caching",
      "Batch analytics processing",
      "Distributed locking",
    ],
  },
  {
    title: "Master Chef — Recipe Sharing Platform",
    description:
      "A cloud-based Django backend for sharing recipes with Cloudinary media storage, Neon PostgreSQL, and scalable APIs.",
    tech: ["Django","DRF","Neon PostgreSQL","Cloudinary","Render",],
    gitHub:"https://github.com/Alinps",
    live:"https://recipe-sharing-frontend-beryl.vercel.app/",

     problem:
      "Users need a platform to share and discover recipes with media support and scalable storage.",
    approach:
      "Built a RESTful backend enabling recipe CRUD operations, search/filtering, and user interactions.",
       challenges: [
      "Efficient image handling without overloading backend",
      "Designing relational schema for recipes, users, and interactions",
      "Maintaining API performance with filters/search",
    ],
     optimization: [
      "Offloaded media to Cloudinary CDN",
      "Optimized queries using Django ORM",
      "Implemented pagination for large datasets",
    ],
  },
  {
    title: "Care Plus — Doctor Appointment Booking Platform",
    description:
      "A backend system for booking and managing hospital appointments with secure scheduling and cloud-based deployment.",
    tech: [ "Django",
      "DRF",
      "Neon PostgreSQL",
      "Cloudinary",
      "Render",],
    gitHub:"https://github.com/Alinps",
    live:"https://hospitalappointmentboookingplatform.vercel.app/",
     problem:
      "Manual appointment booking leads to scheduling conflicts and inefficiencies.",
        approach:
      "Developed a system with time-slot-based scheduling, role-based access, and lifecycle management.",
      challenges: [
      "Preventing double booking (race conditions)",
      "Designing flexible doctor availability system",
      "Handling role-based permissions",
    ],
    optimization: [
      "Validation logic for slot conflicts",
      "Efficient indexing for schedule queries",
      "Optimized API responses with pagination",
    ],
  },
  {
    title: "To-Do App",
    description:
      "A task management app with CRUD operations, filtering, and real-time notifications for task updates.",
    tech: ["Django", "React", "PostgreSQL"],
    gitHub:"https://github.com/Alinps",
    live:"",
    problem:
      "Users need a simple way to manage tasks with feedback on actions.",
       approach:
      "Built a task system with CRUD, filtering, and notifications.",
      challenges: [
      "Managing UI state synchronization",
      "Providing instant feedback",
      "Efficient filtering",
    ],
    optimization: [
      "Efficient state updates",
      "Toast notifications",
      "Reduced unnecessary API calls",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
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
            <div className={styles.card} onClick={() => setSelectedProject(project)}>
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
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
    
  );
}