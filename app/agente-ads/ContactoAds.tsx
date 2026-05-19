'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactoAds() {
  const [fields, setFields] = useState({
    nombre: '',
    email: '',
    telefono: '',
    inversion: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!fields.nombre.trim() || !fields.email.trim()) return;
    setSubmitted(true);
    setFields({ nombre: '', email: '', telefono: '', inversion: '', mensaje: '' });
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>// CONTACTO</p>
        <h2 className={styles.sectionTitle} data-animate data-animate-delay="1">
          ¿Hablamos?
        </h2>
        <p className={styles.contactoIntro} data-animate data-animate-delay="2">
          Contanos sobre tu agencia o negocio y te mostramos cómo Megabait Ads
          puede transformar tu flujo de trabajo.
        </p>

        <div className={styles.formWrap} data-animate data-animate-delay="3">
          {submitted ? (
            <p className={styles.successMsg}>¡Mensaje recibido! Te respondemos pronto. 🚀</p>
          ) : (
            <div className={styles.fields}>
              <div className={styles.row3}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="ads-nombre">Nombre</label>
                  <input
                    id="ads-nombre"
                    name="nombre"
                    type="text"
                    className={styles.input}
                    placeholder="Tu nombre"
                    value={fields.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="ads-email">Email</label>
                  <input
                    id="ads-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="tu@email.com"
                    value={fields.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="ads-telefono">
                    Teléfono <span className={styles.optional}>(opcional)</span>
                  </label>
                  <input
                    id="ads-telefono"
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
                <label className={styles.label} htmlFor="ads-inversion">
                  Inversión mensual en ads
                </label>
                <select
                  id="ads-inversion"
                  name="inversion"
                  className={styles.select}
                  value={fields.inversion}
                  onChange={handleChange}
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="lt1k">Menos de $1.000</option>
                  <option value="1k-5k">$1.000 - $5.000</option>
                  <option value="5k-20k">$5.000 - $20.000</option>
                  <option value="20k-50k">$20.000 - $50.000</option>
                  <option value="gt50k">Más de $50.000</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="ads-mensaje">
                  Mensaje <span className={styles.optional}>(opcional)</span>
                </label>
                <textarea
                  id="ads-mensaje"
                  name="mensaje"
                  className={styles.textarea}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  value={fields.mensaje}
                  onChange={handleChange}
                />
              </div>

              <button type="button" className={styles.btnPrimary} onClick={handleSubmit}>
                [ ENVIAR ]
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
