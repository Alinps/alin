"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
  const { clientX, clientY } = e;

  cursorRef.current.style.left = `${clientX}px`;
  cursorRef.current.style.top = `${clientY}px`;
};

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
}