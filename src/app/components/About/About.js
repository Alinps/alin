"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.wrapper}>
        
        {/* LEFT SIDE */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>

          <p>
           I’m a Full Stack Developer who enjoys building complete, 
           end-to-end applications — from clean, 
           user-friendly interfaces to scalable backend systems.
          </p>

          <p>
            I usually work with React, Django, and MySQL, and I really like 
            turning ideas into something real that people can actually use. 
            Whether it’s designing APIs, improving performance, or just making 
            the UI feel right, I enjoy the whole process of solving problems through code.
          </p>
          <p>
           Apart from web development, I’m also really interested in Embedded Systems 
           and IoT. I like the idea of connecting 
           software with the real world — building systems that interact with hardware, sensors, 
           and devices. Working with microcontrollers and exploring how software controls 
           physical systems is something I genuinely enjoy.
          </p>
          <p>
            Right now, I’m focused on getting better at system design, distributed 
            systems, and building production-level applications, while continuing to grow my 
            skills in embedded systems as well.
          </p>

          {/* <button className={styles.btn}>Download Resume</button> */}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.card}>
            <h3>3+</h3>
            <p>Projects</p>
          </div>

          <div className={styles.card}>
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className={styles.card}>
            <h3>10 months</h3>
            <p>Experience</p>
          </div>

          <div className={styles.card}>
            <h3>Always</h3>
            <p>Learning</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}