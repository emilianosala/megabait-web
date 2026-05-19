import styles from "./Hero.module.css";
import ParticleMesh from "@/components/ParticleMesh/ParticleMesh";
import TypingText from "@/components/TypingText/TypingText";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Animated particle mesh */}
      <ParticleMesh />

      {/* Dot grid + scanlines overlays */}
      <div className={styles.pixelGrid} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />

      {/* Corner bracket decorations — on the section so they reach the viewport edges */}
      <span
        className={`${styles.bracket} ${styles.bracketTL}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.bracket} ${styles.bracketTR}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.bracket} ${styles.bracketBL}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.bracket} ${styles.bracketBR}`}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        {/* Badge */}
        <div className={styles.badge} data-animate>
          <span className={styles.badgeDot} aria-hidden="true" />
          Hecho en Rosario. Pensado para LATAM.
        </div>

        {/* Main tagline */}
        <h1 className={styles.tagline} data-animate data-animate-delay="1">
          La IA no reemplaza profesionales. Reemplaza el trabajo que no querías hacer.
          <span className={styles.taglineAccent}>
            <TypingText text="Recuperá tu tiempo para lo que importa." speed={55} startDelay={800} />
          </span>
        </h1>

        <div className={styles.ctas} data-animate data-animate-delay="2">
          <a href="#productos" className={styles.btnPrimary}>
            [ VER PRODUCTOS ]
          </a>
          <a href="#contacto" className={styles.btnSecondary}>
            [ HABLAR CON EL EQUIPO ]
          </a>
        </div>
      </div>

      {/* Bottom gradient transition into Productos */}
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
