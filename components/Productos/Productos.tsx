import React from "react";
import styles from "./Productos.module.css";
import { Globe, BarChart3, FileText, Mic2 } from "@/components/Icons";

const products: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  description: string;
  badge: string;
  badgeType: string;
  productType: "SaaS" | "A medida";
  featured: boolean;
  cta: { text: string; href: string; variant: 'primary' | 'secondary' } | null;
}[] = [
  {
    Icon: Globe,
    name: "Sitios Web con IA",
    description:
      "Desarrollamos tu sitio web con inteligencia artificial integrada. Desde chatbots que atienden a tus clientes hasta automatizaciones que trabajan mientras dormís.",
    badge: "DISPONIBLE",
    badgeType: "available",
    productType: "A medida",
    featured: false,
    cta: { text: "[ CONSULTAR ]", href: "#contacto", variant: "secondary" },
  },
  {
    Icon: BarChart3,
    name: "Agente de Ads",
    description:
      "Tu copiloto de campañas publicitarias. Analiza performance, detecta oportunidades y ofrece recomendaciones accionables — todo en lenguaje natural. Próximamente podrá ejecutar cambios en tus campañas con tu autorización.",
    badge: "DISPONIBLE",
    badgeType: "available",
    productType: "SaaS",
    featured: false,
    cta: { text: "[ VER MÁS ]", href: "/agente-ads", variant: "primary" },
  },
  {
    Icon: FileText,
    name: "Agente Impositivo",
    description:
      "Monitoreo automático de novedades de AFIP. Detecta cada cambio y te indica exactamente a cuáles de tus clientes aplica — para que nunca te tome por sorpresa.",
    badge: "PRÓXIMAMENTE",
    badgeType: "soon",
    productType: "SaaS",
    featured: false,
    cta: null,
  },
  {
    Icon: Mic2,
    name: "Orquestador de Voz",
    description:
      "Un agente que responde por WhatsApp en tu nombre, respetando el historial y el tono de cada conversación con tus clientes. Disponible como módulo integrado a otros agentes o como producto independiente.",
    badge: "PRÓXIMAMENTE",
    badgeType: "soon",
    productType: "SaaS",
    featured: false,
    cta: null,
  },
];

export default function Productos() {
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.prefix} data-animate>
          // PRODUCTOS
        </p>
        <h2 className={styles.title} data-animate data-animate-delay="1">
          [ NUESTROS PRODUCTOS ]
        </h2>
        <p className={styles.subtitle} data-animate data-animate-delay="2">
          Algunas de las soluciones que ya desarrollamos.
          Cada una nació de un problema concreto.
        </p>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`${styles.card} ${product.featured ? styles.cardFeatured : ""}`}
              data-animate
              data-animate-delay={String(i + 1)}
            >
              {/* Top-left corner bracket accent */}
              <span className={styles.cardBracket} aria-hidden="true" />

              {/* Product type tag */}
              <span
                className={`${styles.typeTag} ${
                  product.productType === "SaaS"
                    ? styles.typeTag_saas
                    : styles.typeTag_medida
                }`}
              >
                {product.productType}
              </span>

              <div className={styles.cardIconWrap} aria-hidden="true">
                <product.Icon size={22} className={styles.cardIconSvg} />
              </div>

              {/* Featured label */}
              {product.featured && (
                <p className={styles.destacadoLabel}>★ Destacado</p>
              )}

              <div
                className={`${styles.badge} ${styles[`badge_${product.badgeType}`]}`}
              >
                {product.badge}
              </div>

              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardDesc}>{product.description}</p>

              {product.cta && (
                <a
                  href={product.cta.href}
                  className={product.cta.variant === "primary" ? styles.cardCta : styles.cardCtaSecondary}
                >
                  {product.cta.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient transition into Waitlist */}
      <div className={styles.gradientBottom} aria-hidden="true" />
    </section>
  );
}
