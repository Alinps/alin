"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";


const experience = [
  {
    title: "MashupStack Pvt Ltd",
    description:
      "Worked as a Full Stack Developer Intern, contributing to the development and maintenance of web applications with a focus on both frontend and backend systems.",
  },
  
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