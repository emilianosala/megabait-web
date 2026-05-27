"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import LogoGlow from "../LogoGlow/LogoGlow";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#inicio" className={styles.logo}>
            <LogoGlow variant="navbar" />
          </a>

          <div className={styles.navLinks}>
            <a href="#servicios" className={styles.navLink}>
              Servicios
            </a>
            <a href="#productos" className={styles.navLink}>
              Productos
            </a>
            <a href="#contacto" className={styles.navLink}>
              Contacto
            </a>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
