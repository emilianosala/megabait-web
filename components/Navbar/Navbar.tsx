"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import LogoGlow from "../LogoGlow/LogoGlow";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <LogoGlow variant="navbar" />
        </a>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="#productos" className={styles.navLink} onClick={closeMenu}>
            Productos
          </a>
          <a href="/agente-ads" className={styles.navLink} onClick={closeMenu}>
            Agente de Ads
          </a>
          <a href="#contacto" className={styles.navLink} onClick={closeMenu}>
            Contacto
          </a>
          <a href="#contacto" className={styles.ctaBtn} onClick={closeMenu}>
            [ CONTACTO ]
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
  );
}
