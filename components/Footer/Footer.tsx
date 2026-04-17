import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#inicio" className={styles.logoWrap}>
            <Image
              src="/images/logo_navbar.png"
              alt="Megabait"
              height={28}
              width={112}
              style={{ height: "28px", width: "auto" }}
            />
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
          <p className={styles.tagline}>Hecho con IA. Pensado para humanos.</p>
        </div>
      </div>
    </footer>
  );
}
