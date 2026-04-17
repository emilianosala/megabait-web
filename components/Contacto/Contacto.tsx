"use client";

import { useState } from "react";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const [fields, setFields] = useState({ nombre: "", email: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!fields.nombre.trim() || !fields.email.trim() || !fields.mensaje.trim())
      return;
    setSubmitted(true);
    setFields({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title} data-animate>
          ¿Hablamos?
        </h2>

        <div className={styles.formWrap} data-animate data-animate-delay="1">
          {submitted ? (
            <p className={styles.successMsg}>
              ¡Mensaje recibido! Te respondemos pronto.
            </p>
          ) : (
            <div className={styles.fields}>
              <div className={styles.row}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className={styles.input}
                    placeholder="Tu nombre"
                    value={fields.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="tu@email.com"
                    value={fields.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className={styles.textarea}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  value={fields.mensaje}
                  onChange={handleChange}
                />
              </div>

              <button
                type="button"
                className={styles.btn}
                onClick={handleSubmit}
              >
                Enviar mensaje
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
