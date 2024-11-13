"use client";

import styles from "./content.module.css";

export default function Content({ letter }) {
  return (
    <div className={styles.letterContainer}>
      <div className={styles.letter}>
        <p className={styles.date}>{letter.date}</p>
        <p className={styles.greeting}>{letter.greetings}</p>
        <p className={styles.content}>{letter.content}</p>
      </div>
    </div>
  );
}
