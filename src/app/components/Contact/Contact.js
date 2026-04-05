"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Connect</h2>

        <p>
          I'm always open to discussing new projects, ideas, or opportunities.
        </p>

        <div className={styles.links}>
          <a href="mailto:alinps8406@gmail.com" target="__blank">
            <FaEnvelope /> 
          </a>
          <a href="https://github.com/Alinps"  target="__blank">
            <FaGithub /> 
          </a>
          <a href="https://www.linkedin.com/in/alin-p-s-81a42a201/"  target="__blank">
            <FaLinkedin />
            </a>
        </div>
      </motion.div>
    </section>
  );
}