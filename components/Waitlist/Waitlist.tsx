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
      {/* Top gradient transition from Productos */}
      <div className={styles.gradientTop} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>
          // ACCESO_ANTICIPADO
        </p>
        <h2 className={styles.title} data-animate data-animate-delay="1">
          Sé parte del acceso anticipado
        </h2>
        <p className={styles.subtitle} data-animate data-animate-delay="2">
          Las plazas son limitadas y se asignan por invitación. Dejá tu mail y
          te avisamos cuando haya lugar.
        </p>

        <div className={styles.formWrap} data-animate data-animate-delay="3">
          {submitted ? (
            <p className={styles.successMsg}>¡Listo! Te avisamos pronto. 🚀</p>
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
                [ ACCESO ANTICIPADO ]
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient transition into Contacto */}
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
