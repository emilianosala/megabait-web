"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TypingText.module.css";

interface Props {
  text: string;
  speed?: number;
  startDelay?: number;
}

export default function TypingText({ text, speed = 55, startDelay = 600 }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return (
    <span className={styles.wrap}>
      {displayed}
      <span
        className={done ? styles.cursorBlink : styles.cursor}
        aria-hidden="true"
      >
        ▋
      </span>
    </span>
  );
}
