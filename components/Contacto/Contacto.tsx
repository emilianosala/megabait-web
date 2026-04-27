"use client";

import { useState } from "react";
import styles from "./Contacto.module.css";
import { Send } from "@/components/Icons";

export default function Contacto() {
  const [fields, setFields] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
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
    setFields({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className={styles.section}>
      {/* Top gradient transition from Waitlist */}
      <div className={styles.gradientTop} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>
          // CONTACTO
        </p>
        <h2 className={styles.title} data-animate data-animate-delay="1">
          ¿Hablamos?
        </h2>

        <div className={styles.formWrap} data-animate data-animate-delay="2">
          {submitted ? (
            <p className={styles.successMsg}>
              ¡Mensaje recibido! Te respondemos pronto.
            </p>
          ) : (
            <div className={styles.fields}>
              {/* 3-column row: nombre / email / telefono */}
              <div className={styles.row3}>
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
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="telefono">
                    Teléfono <span className={styles.optional}>(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    className={styles.input}
                    placeholder="+54 9 341..."
                    value={fields.telefono}
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
                <Send size={16} className={styles.btnIcon} />
                [ ENVIAR ]
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient transition into Footer */}
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
