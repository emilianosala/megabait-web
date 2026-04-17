"use client";

import { useState } from "react";
import styles from "./Waitlist.module.css";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="waitlist" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-animate>
          Sé parte del acceso anticipado
        </h2>
        <p className={styles.subtitle} data-animate data-animate-delay="1">
          Estamos en beta privada. Dejá tu mail y te avisamos cuando haya lugar.
        </p>

        <div className={styles.formWrap} data-animate data-animate-delay="2">
          {submitted ? (
            <p className={styles.successMsg}>
              ¡Listo! Te avisamos pronto. 🚀
            </p>
          ) : (
            <div className={styles.inputRow}>
              <input
                type="email"
                className={styles.input}
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                aria-label="Tu email"
              />
              <button
                type="button"
                className={styles.btn}
                onClick={handleSubmit}
              >
                Quiero acceso
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
