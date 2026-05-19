import Link from "next/link";
import styles from "./Footer.module.css";
import LogoGlow from "../LogoGlow/LogoGlow";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#inicio" className={styles.logoWrap}>
            <LogoGlow variant="footer" />
          </a>

          <nav className={styles.links}>
            <a href="#productos" className={styles.link}>
              Productos
            </a>
            <a href="#contacto" className={styles.link}>
              Contacto
            </a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Megabait. Todos los derechos reservados.
          </p>
          <nav className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacidad
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Términos
            </Link>
          </nav>
          <p className={styles.tagline}>Tu tiempo vale demasiado. Dejanos que te devolvamos un poco.</p>
        </div>
      </div>
    </footer>
  );
}
