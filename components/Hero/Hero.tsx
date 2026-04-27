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

      <div className={styles.inner}>
        {/* Corner bracket decorations */}
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

        {/* Badge */}
        <div className={styles.badge} data-animate>
          <span className={styles.badgeDot} aria-hidden="true" />
          Plazas limitadas — acceso por invitación
        </div>

        {/* Main tagline */}
        <h1 className={styles.tagline} data-animate data-animate-delay="1">
          Los profesionales que usan IA de forma adecuada trabajan menos y
          deciden mejor. Los que no, ya están quedando atrás.
          <span className={styles.taglineAccent}>
            <TypingText text="¿De qué lado querés estar?" speed={55} startDelay={800} />
          </span>
        </h1>

        <p className={styles.subtitle} data-animate data-animate-delay="2">
          Tu tiempo vale demasiado para gastarlo en tareas que la IA puede hacer
          mejor. Nosotros te ayudamos a dar ese salto.
        </p>

        <div className={styles.ctas} data-animate data-animate-delay="3">
          <a href="#productos" className={styles.btnPrimary}>
            [ VER PRODUCTOS ]
          </a>
          <a href="#waitlist" className={styles.btnSecondary}>
            [ ACCESO ANTICIPADO ]
          </a>
        </div>
      </div>

      {/* Bottom gradient transition into Productos */}
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
