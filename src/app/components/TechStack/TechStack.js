"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";

import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaPython, 
  FaDocker,
  FaJava 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMysql, 
  SiRedis, 
  SiDjango,
  SiJavascript,
  SiGo,
  SiSpringboot,
  SiVercel,
  SiRender
} from "react-icons/si";
const techStack = [
  { name: "Django", icon: <SiDjango /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },

  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Go", icon: <SiGo /> },



  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },

  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  {name: "Render", icon:<SiRender />},
  {name :"Vercel", icon: <SiVercel />}
];

export default function TechStack() {
  return (
    <section className={styles.tech} id="tech">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h2>

      <div className={styles.grid}>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.icon}>{tech.icon}</div>
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}