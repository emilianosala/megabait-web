import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.pixelGrid} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.tagline} data-animate data-animate-delay="1">
          Los profesionales que usan IA de forma adecuada trabajan menos y
          deciden mejor. Los que no, ya están quedando atrás.
          <span className={styles.taglineAccent}>
            ¿De qué lado querés estar?
          </span>
        </h1>

        <p className={styles.subtitle} data-animate data-animate-delay="2">
          Tu tiempo vale demasiado para gastarlo en tareas que la IA puede hacer
          mejor. Nosotros te ayudamos a dar ese salto.
        </p>

        <div className={styles.ctas} data-animate data-animate-delay="3">
          <a href="#productos" className={styles.btnPrimary}>
            Ver productos
          </a>
          <a href="#waitlist" className={styles.btnSecondary}>
            Quiero acceso anticipado
          </a>
        </div>
      </div>
    </section>
  );
}
