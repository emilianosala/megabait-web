import styles from "./Medida.module.css";

const puntos = [
  {
    num: "01",
    text: "Cada negocio tiene un problema que ningún producto estándar resuelve del todo.",
  },
  {
    num: "02",
    text: "Analizamos tu flujo de trabajo y construimos exactamente lo que necesitás.",
  },
  {
    num: "03",
    text: "Sin templates, sin soluciones genéricas, sin features que no vas a usar.",
  },
];

export default function Medida() {
  return (
    <section className={styles.section}>
      <div className={styles.gradientTop} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>
          // A_MEDIDA
        </p>
        <h2 className={styles.title} data-animate data-animate-delay="1">
          [ SOLUCIONES A MEDIDA ]
        </h2>
        <p className={styles.subtitle} data-animate data-animate-delay="2">
          Nuestros productos resuelven problemas frecuentes.
          Si el tuyo es específico, también trabajamos así.
        </p>

        <div className={styles.puntos}>
          {puntos.map((p, i) => (
            <div
              key={p.num}
              className={styles.punto}
              data-animate
              data-animate-delay={String(i + 1)}
            >
              <span className={styles.puntoNum}>{p.num}</span>
              <p className={styles.puntoText}>{p.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap} data-animate>
          <a href="#contacto" className={styles.cta}>
            [ CONTANOS TU CASO ]
          </a>
        </div>
      </div>

      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
