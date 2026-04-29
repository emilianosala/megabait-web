"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

type Phase = "showing" | "hiding" | "done";

export default function SplashScreen() {
  // null = not yet determined (SSR + initial hydration)
  const [phase, setPhase] = useState<Phase | null>(null);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem("megabait_splash") === "1") return;

    sessionStorage.setItem("megabait_splash", "1");
    document.body.style.overflow = "hidden";
    setPhase("showing");

    // 0.5s logo fade-in + 1.5s hold = 2s before fade-out starts
    holdTimer.current = setTimeout(() => setPhase("hiding"), 2000);

    return () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    };
  }, []);

  // Once hiding starts, wait for the CSS transition to finish then unmount
  useEffect(() => {
    if (phase !== "hiding") return;

    const t = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 850); // matches 0.8s transition + small buffer

    return () => clearTimeout(t);
  }, [phase]);

  // Click / tap anywhere to skip
  const skip = () => {
    if (!phase || phase === "done") return;
    if (holdTimer.current) clearTimeout(holdTimer.current);
    setPhase("hiding");
  };

  // Render nothing until we know whether to show splash,
  // and nothing again once it's fully finished
  if (!phase || phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "hiding" ? styles.hiding : ""}`}
      onClick={skip}
      role="presentation"
      aria-hidden="true"
    >
      <Image
        src="/images/logo_uso_general.png"
        alt="Megabait"
        width={400}
        height={200}
        className={styles.logo}
        priority
        style={{ width: "min(400px, 80vw)", height: "auto" }}
      />
    </div>
  );
}
