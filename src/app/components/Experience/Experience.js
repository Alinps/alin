"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";


const experience = [
  {
    title: "MashupStack Pvt Ltd",
    description:
      "Worked on designing and developing full-stack applications using React and Django, focusing on building REST APIs and optimizing database interactions for performance and scalability. Delivered 20+ technical sessions on full-stack development and mentored 50+ learners in debugging, problem-solving, and system design across Django, Spring Boot, and React applications."
  }
];

export default function Experience() {
  return (
    <section className={styles.projects} id="experience">
      <h2>Experience</h2>

      <div className={styles.timeline}>
        {experience.map((project, index) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}