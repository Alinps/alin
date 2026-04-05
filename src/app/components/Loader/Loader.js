"use client";

import {useEffect, useState} from "react";
import styles from "./Loader.module.css";

const lines = [
    "Initializing system...",
    "Loading modules...",
    "Starting services...",
    "Welcome Alin.dev",
];

export default function Loader({onFinish}){
    const [displayedLines, setDisplayedLines] = useState([]);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let i = 0;

        const interval = setInterval(()=>{
            setDisplayedLines((prev) => [...prev, lines[i]]);
            i++;

            if (i === lines.length) {
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);


    useEffect(()=>{
        let value = 0;

        const progressInterval = setInterval(() => {
            value += Math.random() * 15;

            if (value >= 100){
                value = 100;
                clearInterval(progressInterval);

                setTimeout(()=>{
                    onFinish();
                },500)
            }

            setProgress(Math.floor(value));
        }, 200);

        return () => clearInterval(progressInterval);

    }, [])

    return (
        <div className={styles.loader}>
      <div className={styles.terminal}>
       

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={styles.percent}>{progress}%</p>
        {displayedLines.map((line, index) => (
          <p key={index}>
            <span className={styles.symbol}>&gt;</span> {line}
          </p>
        ))}
      </div>
    </div>
    );
}