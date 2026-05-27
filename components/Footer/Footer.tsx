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

          <nav className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacidad
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Términos
            </Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Megabait. Todos los derechos reservados.
          </p>
          <p className={styles.tagline}>IA aplicada. Resultados reales.</p>
        </div>
      </div>
    </footer>
  );
}
