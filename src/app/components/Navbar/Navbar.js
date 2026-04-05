"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const sections = ["home", "about", "tech", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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