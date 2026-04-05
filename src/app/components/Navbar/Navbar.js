"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const sections = ["about", "tech", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={active === section ? styles.active : ""}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}