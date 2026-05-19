import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ParticleMesh from '@/components/ParticleMesh/ParticleMesh';
import ContactoAds from './ContactoAds';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Megabait Ads — Tu copiloto de campañas publicitarias',
  description:
    'Analizá Meta, Google y Analytics en lenguaje natural. Conexión oficial, contexto persistente, visión cross-platform.',
};

const problemCards = [
  {
    icon: '⚠',
    title: '¿Usás Claude Code para tus campañas?',
    text: 'Conectar tu cuenta de Meta o Google a herramientas no oficiales viola los términos de servicio. Las cuentas se cierran sin previo aviso. Ya le pasó a agencias en LATAM.',
  },
  {
    icon: '⊙',
    title: 'Cada sesión empieza de cero.',
    text: 'Claude Code no recuerda tus campañas, tus clientes ni tus decisiones anteriores. Cada vez que abrís una conversación nueva, perdés todo el contexto.',
  },
  {
    icon: '⊕',
    title: 'Un agente por plataforma.',
    text: 'Los agentes nativos de Meta y Google solo ven su propia plataforma. Nadie te da una visión unificada de toda tu inversión publicitaria.',
  },
];

const solutionCards = [
  {
    title: 'Conexión oficial. Cero riesgo.',
    text: 'Megabait Ads se conecta a Meta, Google Ads y Google Analytics a través de sus APIs oficiales. Tu cuenta siempre protegida, siempre dentro de los términos de servicio.',
  },
  {
    title: 'Tu agente te conoce.',
    text: 'Recordamos tus cuentas, tus clientes, tu historial de campañas y tus decisiones anteriores. Cada conversación arranca donde la dejaste.',
  },
  {
    title: 'Tres plataformas. Una conversación.',
    text: 'Preguntá cómo rinde tu inversión total, compará canales, detectá oportunidades. Meta, Google Ads y Analytics juntos por primera vez.',
  },
];

const compareRows: {
  feature: string;
  claude: { icon: string; label: string; type: 'no' | 'yes' | 'soon' };
  megabait: { icon: string; label: string; type: 'no' | 'yes' | 'soon' };
}[] = [
  {
    feature: 'Conexión oficial con Meta y Google',
    claude:   { icon: '✗', label: 'Riesgo de ban',           type: 'no'   },
    megabait: { icon: '✓', label: 'APIs oficiales',           type: 'yes'  },
  },
  {
    feature: 'Contexto persistente de tus cuentas',
    claude:   { icon: '✗', label: 'Sin memoria',              type: 'no'   },
    megabait: { icon: '✓', label: 'Historial completo',       type: 'yes'  },
  },
  {
    feature: 'Visión cross-platform',
    claude:   { icon: '✗', label: 'Manual',                   type: 'no'   },
    megabait: { icon: '✓', label: 'Meta + Google + Analytics',type: 'yes'  },
  },
  {
    feature: 'Reporting integrado',
    claude:   { icon: '✗', label: 'Copy-paste',               type: 'no'   },
    megabait: { icon: '✓', label: 'Automático',               type: 'yes'  },
  },
  {
    feature: 'Alertas personalizadas',
    claude:   { icon: '✗', label: 'No disponible',            type: 'no'   },
    megabait: { icon: '✓', label: 'Incluido',                 type: 'yes'  },
  },
  {
    feature: 'Ejecución de cambios con tu autorización',
    claude:   { icon: '✗', label: 'No disponible',            type: 'no'   },
    megabait: { icon: '⏳', label: 'Próximamente',            type: 'soon' },
  },
  {
    feature: 'Generación de imágenes para ads',
    claude:   { icon: '✗', label: 'No disponible',            type: 'no'   },
    megabait: { icon: '⏳', label: 'Próximamente',            type: 'soon' },
  },
];

const featureCards = [
  {
    title: 'Análisis en lenguaje natural',
    text: "Preguntá '¿cuál fue mi campaña con mejor ROAS en los últimos 30 días?' y obtenés la respuesta al instante.",
  },
  {
    title: 'Detección de oportunidades',
    text: 'El agente identifica campañas con bajo rendimiento, audiencias saturadas y presupuestos mal distribuidos.',
  },
  {
    title: 'Reporting automático',
    text: 'Generá reportes de performance en segundos, listos para compartir con clientes.',
  },
  {
    title: 'Alertas personalizadas',
    text: 'Configurá alertas por ROAS, CPA, frecuencia o cualquier métrica que te importe.',
  },
];

const featureCardsSoon = [
  {
    title: 'Ejecución con tu autorización',
    text: 'Pausar campañas, ajustar presupuestos, modificar audiencias — el agente propone, vos aprobás.',
  },
  {
    title: 'Creación de imágenes para ads',
    text: 'Generá creatividades directamente desde el chat, listas para publicar.',
  },
  {
    title: 'Integración con tus ventas reales',
    text: 'Conectá tus datos de ventas — Shopify, WooCommerce, Tiendanube o cualquier fuente — y el agente va a poder calcular tu ROAS real, no el que reportan Meta o Google con sus propias reglas de atribución.',
  },
];

const analystBullets = [
  'No pausar campañas sin significancia estadística — poco gasto + ROAS bajo puede ser simplemente falta de datos, no una campaña mala.',
  'Escalar presupuesto no escala resultados linealmente — el ROI tiende a bajar al duplicar el spend.',
  'El creativo importa más que la puja — el 75% del éxito está en el hook y la propuesta de valor, no en las reglas de automatización.',
  'Las ventanas de atribución de Meta y Google no cuentan toda la historia — un cliente puede convertir 20 días después del primer contacto.',
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    adSpend: 'hasta $5.000/mes',
    features: [
      'Análisis en lenguaje natural',
      '1 cuenta Meta + 1 cuenta Google',
      'Contexto persistente',
      'Reportes básicos',
    ],
    featured: false,
    badge: null as string | null,
  },
  {
    name: 'Pro',
    price: '$59',
    adSpend: 'hasta $20.000/mes',
    features: [
      'Todo lo de Starter',
      'Múltiples cuentas',
      'Alertas personalizadas',
      'Reportes avanzados',
      'Soporte prioritario',
    ],
    featured: true,
    badge: '★ Más elegido' as string | null,
  },
  {
    name: 'Agency',
    price: '$99',
    adSpend: 'hasta $50.000/mes',
    features: [
      'Todo lo de Pro',
      'Clientes ilimitados',
      'Acceso para todo el equipo',
      'Onboarding personalizado',
    ],
    featured: false,
    badge: null as string | null,
  },
];

export default function AgenteAdsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section id="inicio" className={styles.hero}>
          <ParticleMesh />
          <div className={styles.heroInner}>
            <div className={styles.badge} data-animate>
              <span className={styles.badgeDot} aria-hidden="true" />
              Agente de Ads — acceso anticipado
            </div>
            <h1 className={styles.heroTitle} data-animate data-animate-delay="1">
              Tu copiloto de campañas publicitarias.
            </h1>
            <p className={styles.heroSubtitle} data-animate data-animate-delay="2">
              Analizá Meta, Google y Analytics en lenguaje natural.
              Con contexto de tus cuentas, historial de decisiones
              y conexión oficial — sin arriesgar nada.
            </p>
            <div className={styles.ctas} data-animate data-animate-delay="3">
              <a href="#pricing" className={styles.btnPrimary}>[ VER PLANES ]</a>
              <a href="#contacto" className={styles.btnSecondary}>[ QUIERO UNA DEMO ]</a>
            </div>
          </div>
          <div className={styles.heroGradientBottom} aria-hidden="true" />
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.inner}>
            <div className={styles.problemGrid}>
              {problemCards.map((card, i) => (
                <div
                  key={card.title}
                  className={styles.problemCard}
                  data-animate
                  data-animate-delay={String(i + 1)}
                >
                  <span className={styles.problemIcon} aria-hidden="true">{card.icon}</span>
                  <h3 className={styles.problemCardTitle}>{card.title}</h3>
                  <p className={styles.problemCardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUCIÓN ──────────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.prefix} data-animate>// MEGABAIT_ADS</p>
            <h2 className={styles.sectionTitle} data-animate data-animate-delay="1">
              [ LA DIFERENCIA ]
            </h2>
            <div className={styles.solutionGrid}>
              {solutionCards.map((card, i) => (
                <div
                  key={card.title}
                  className={styles.solutionCard}
                  data-animate
                  data-animate-delay={String(i + 1)}
                >
                  <span className={styles.solutionCheck} aria-hidden="true">✓</span>
                  <h3 className={styles.solutionCardTitle}>{card.title}</h3>
                  <p className={styles.solutionCardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TAGLINE ───────────────────────────────────────────────── */}
        <div className={styles.taglineBlock} data-animate>
          <p className={styles.taglineText}>
            "Las herramientas de Google optimizan para Google.
            Las de Meta optimizan para Meta.{' '}
            <span className={styles.taglineAccent}>Megabait optimiza para vos.</span>"
          </p>
        </div>

        {/* ── COMPARATIVA ───────────────────────────────────────────── */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.inner}>
            <p className={styles.prefix} data-animate>// COMPARATIVA</p>
            <h2 className={styles.sectionTitle} data-animate data-animate-delay="1">
              Megabait Ads vs Claude Code para ads
            </h2>
            <div className={styles.tableWrap} data-animate data-animate-delay="2">
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.thFeature}>Feature</th>
                    <th className={styles.thClaude}>Claude Code</th>
                    <th className={styles.thMegabait}>Megabait Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.feature} className={styles.tableRow}>
                      <td className={styles.tdFeature}>{row.feature}</td>
                      <td className={`${styles.tdClaude} ${styles[`cell_${row.claude.type}`]}`}>
                        <span className={styles.cellIcon}>{row.claude.icon}</span>
                        <span className={styles.cellLabel}>{row.claude.label}</span>
                      </td>
                      <td className={`${styles.tdMegabait} ${styles[`cell_${row.megabait.type}`]}`}>
                        <span className={styles.cellIcon}>{row.megabait.icon}</span>
                        <span className={styles.cellLabel}>{row.megabait.label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.tableNote}>⏳ = en desarrollo</p>
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.prefix} data-animate>// FEATURES</p>
            <h2 className={styles.sectionTitle} data-animate data-animate-delay="1">
              [ LO QUE PODÉS HACER HOY ]
            </h2>
            <div className={styles.featuresGrid}>
              {featureCards.map((card, i) => (
                <div
                  key={card.title}
                  className={styles.featureCard}
                  data-animate
                  data-animate-delay={String((i % 2) + 1)}
                >
                  <h3 className={styles.featureCardTitle}>{card.title}</h3>
                  <p className={styles.featureCardText}>{card.text}</p>
                </div>
              ))}
              <div className={styles.featureCardWide} data-animate>
                <h3 className={styles.featureCardTitle}>Tu agente conoce a cada cliente</h3>
                <p className={styles.featureCardText}>
                  Cargás una vez el perfil de cada cliente — industria, objetivos, presupuesto
                  mensual, KPIs prioritarios y restricciones — y el agente lo recuerda siempre.
                  No tenés que explicar el contexto cada vez que abrís una conversación. Cada
                  chat arranca donde lo dejaste, con toda la historia y el perfil del cliente
                  disponibles. Una de las diferencias más importantes vs Claude Code o cualquier
                  chat genérico.
                </p>
              </div>
            </div>

            <div className={styles.analystCard} data-animate>
              <p className={styles.prefix}>// CRITERIO ANALÍTICO</p>
              <h3 className={styles.analystTitle}>
                Criterio de analista senior, no solo respuestas
              </h3>
              <p className={styles.analystText}>
                El agente tiene directrices que lo convierten en un analista semi-senior de
                performance marketing. No te va a decir "pausá esa campaña" sin antes verificar
                que tiene datos suficientes para evaluarla.
              </p>
              <ul className={styles.analystBullets}>
                {analystBullets.map((bullet) => (
                  <li key={bullet} className={styles.analystBulletItem}>
                    <span className={styles.analystBulletIcon} aria-hidden="true">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.comingSoonLabel} data-animate>[ PRÓXIMAMENTE ]</p>

            <div className={styles.featuresGridMuted}>
              {featureCardsSoon.map((card, i) => (
                <div
                  key={card.title}
                  className={styles.featureCardMuted}
                  data-animate
                  data-animate-delay={String(i + 1)}
                >
                  <h3 className={styles.featureCardTitle}>{card.title}</h3>
                  <p className={styles.featureCardText}>{card.text}</p>
                  <a href="#contacto" className={styles.featureCardMutedCta}>
                    [ HABLAR CON EL EQUIPO ]
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────────────── */}
        <section id="pricing" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.inner}>
            <p className={styles.prefix} data-animate>// PRICING</p>
            <h2 className={styles.sectionTitle} data-animate data-animate-delay="1">
              [ PLANES ]
            </h2>
            <p className={styles.pricingNote} data-animate data-animate-delay="2">
              El precio varía según el nivel de inversión mensual en ads de las cuentas conectadas.
            </p>
            <div className={styles.pricingGrid}>
              {pricingPlans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`${styles.pricingCard} ${plan.featured ? styles.pricingCardFeatured : ''}`}
                  data-animate
                  data-animate-delay={String(i + 1)}
                >
                  {plan.badge && (
                    <span className={styles.pricingBadge}>{plan.badge}</span>
                  )}
                  <h3 className={styles.pricingPlanName}>{plan.name}</h3>
                  <div className={styles.pricingPrice}>
                    {plan.price}
                    <span className={styles.pricingPer}>/mo · USD</span>
                  </div>
                  <p className={styles.pricingAdSpend}>{plan.adSpend}</p>
                  <ul className={styles.pricingFeatures}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.pricingFeatureItem}>
                        <span className={styles.pricingCheck} aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className={plan.featured ? styles.btnPrimary : styles.btnSecondary}
                  >
                    [ EMPEZAR ]
                  </a>
                </div>
              ))}
            </div>
            <p className={styles.pricingFootNote} data-animate>
              ¿Más de $50.000/mes en ads?{' '}
              <a href="#contacto" className={styles.pricingFootLink}>[ HABLEMOS ]</a>
            </p>
          </div>
        </section>

        {/* ── SOCIAL PROOF ──────────────────────────────────────────── */}
        {/* SOCIAL PROOF — Activar cuando lleguen los reviews de beta testers
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.inner}>
            <p className={styles.prefix}>// EARLY ADOPTERS</p>
            <h2 className={styles.sectionTitle} data-animate>
              Lo que dicen los que ya lo usan
            </h2>
            <div className={styles.socialProofGrid}>
              <div className={styles.testimonialCard} data-animate>
                <p className={styles.testimonialText}>
                  "Texto del review — reemplazar con el review real del beta tester."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} aria-hidden="true">AB</div>
                  <div>
                    <p className={styles.testimonialName}>Nombre Apellido</p>
                    <p className={styles.testimonialRole}>Cargo — Agencia X</p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard} data-animate>
                <p className={styles.testimonialText}>
                  "Texto del review — reemplazar con el review real del beta tester."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} aria-hidden="true">CD</div>
                  <div>
                    <p className={styles.testimonialName}>Nombre Apellido</p>
                    <p className={styles.testimonialRole}>Cargo — Empresa Y</p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard} data-animate>
                <p className={styles.testimonialText}>
                  "Texto del review — reemplazar con el review real del beta tester."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} aria-hidden="true">EF</div>
                  <div>
                    <p className={styles.testimonialName}>Nombre Apellido</p>
                    <p className={styles.testimonialRole}>Cargo — Agencia Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* ── CONTACTO ──────────────────────────────────────────────── */}
        <ContactoAds />

      </main>
      <Footer />
    </>
  );
}
