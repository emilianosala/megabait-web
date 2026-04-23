import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidad — Megabait",
  description: "Política de privacidad de Megabait.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.updated}>Última actualización: abril 2026</p>

        {/* El contenido será agregado a continuación */}
      </div>
    </main>
  );
}
