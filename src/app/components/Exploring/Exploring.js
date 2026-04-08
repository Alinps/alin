"use client";

import { motion } from "framer-motion";
import styles from "./Exploring.module.css";

const items = [
  "Distributed Systems & Scalability",
  "Observability (Prometheus, Metrics, Tracing)",
  "Asynchronous Processing (Celery, Redis Queues)",
  "System Design & Backend Architecture",
  "AI + Embedded Systems Integration",
  "Real-time Data Processing",
];

export default function Exploring() {
  return (
    <section className={styles.exploring} id="exploring">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Currently Exploring
      </motion.h2>

      <div className={styles.list}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}