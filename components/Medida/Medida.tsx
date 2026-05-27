import styles from "./Medida.module.css";

export default function Medida() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.gradientTop} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>
          // A_MEDIDA
        </p>
        <h2 className={styles.title} data-animate data-animate-delay="1">
          [ LO QUE HACEMOS ]
        </h2>
        <p className={styles.lead} data-animate data-animate-delay="2">
          Analizamos tu operación, identificamos dónde la IA puede hacer el
          trabajo pesado, y lo construimos.
        </p>
        <p className={styles.body} data-animate data-animate-delay="3">
          No vendemos tecnología por la tecnología. Trabajamos sobre procesos
          reales y construimos soluciones que tienen sentido para tu negocio.
        </p>

        <div className={styles.ctaWrap} data-animate data-animate-delay="4">
          <a href="#contacto" className={styles.cta}>
            [ CONTANOS TU CASO ]
          </a>
        </div>
      </div>

      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
