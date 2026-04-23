import type { Metadata } from "next";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Términos de Servicio — Megabait",
  description: "Términos de servicio de Megabait.",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Términos de Servicio</h1>
        <p className={styles.updated}>Última actualización: abril 2026</p>

        {/* El contenido será agregado a continuación */}
      </div>
    </main>
  );
}
