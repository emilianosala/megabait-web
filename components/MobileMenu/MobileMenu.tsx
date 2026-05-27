"use client";

import { useEffect } from "react";
import { X, Mail } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import styles from "./MobileMenu.module.css";
import LogoGlow from "../LogoGlow/LogoGlow";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { num: "01", label: "Servicios", href: "#servicios" },
  { num: "02", label: "Productos", href: "#productos" },
  { num: "03", label: "Contacto", href: "#contacto" },
];

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <div
      className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
    >
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.edgeGlow} aria-hidden="true" />

      {/* Top bar */}
      <div className={styles.topBar}>
        <LogoGlow variant="navbar" />
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <X size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Badge */}
      <div className={styles.badgeWrap}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span className={styles.badgeText}>HECHO EN ROSARIO · LATAM</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.num}
            href={item.href}
            className={styles.navItem}
            onClick={onClose}
          >
            <span className={styles.navNum}>{item.num}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className={styles.footerBlock}>
        <div className={styles.socialRow}>
          <a
            href="#"
            className={styles.socialBtn}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="#"
            className={styles.socialBtn}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin />
          </a>
          <a href="#" className={styles.socialBtn} aria-label="Email">
            <Mail size={16} strokeWidth={1.8} />
          </a>
        </div>
        <p className={styles.footerTagline}>IA aplicada. Resultados reales.</p>
      </div>
    </div>
  );
}
