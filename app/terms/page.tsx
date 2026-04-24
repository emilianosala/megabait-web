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
        <p className={styles.updated}>Última actualización: Abril de 2026</p>

        <p>
          Al acceder o usar Megabait Copiloto Ads (
          <a href="https://ads.megabait.com.ar" target="_blank" rel="noopener noreferrer">
            ads.megabait.com.ar
          </a>
          ) aceptás estos Términos de Servicio en su totalidad. Si no estás de
          acuerdo con alguno de estos términos, no uses el servicio.
        </p>

        <h2>1. Descripción del servicio</h2>
        <p>
          Megabait Copiloto Ads es una plataforma SaaS que provee un asistente
          de inteligencia artificial para analistas de marketing digital. El
          servicio permite conectar cuentas de Google Ads y Meta Ads para
          consultar métricas y obtener análisis y recomendaciones generadas por
          IA.
        </p>
        <p>
          El servicio está actualmente en <strong>beta privada</strong>. Las
          funcionalidades, precios y condiciones pueden cambiar durante este
          período.
        </p>

        <h2>2. Elegibilidad</h2>
        <p>Para usar el servicio debés:</p>
        <ul>
          <li>Tener al menos 18 años de edad.</li>
          <li>
            Tener autorización legal para acceder a las cuentas publicitarias
            que vinculés a la plataforma.
          </li>
          <li>Proveer información veraz al crear tu cuenta.</li>
        </ul>

        <h2>3. Cuenta de usuario</h2>
        <ul>
          <li>
            Sos responsable de mantener la confidencialidad de tus credenciales.
          </li>
          <li>
            Sos responsable de toda la actividad que ocurra bajo tu cuenta.
          </li>
          <li>
            Debés notificarnos de inmediato ante cualquier uso no autorizado de
            tu cuenta.
          </li>
          <li>
            Nos reservamos el derecho de suspender cuentas que violen estos
            términos.
          </li>
        </ul>

        <h2>4. Uso aceptable</h2>
        <p>
          Aceptás usar el servicio únicamente para fines legítimos de análisis y
          gestión de campañas publicitarias. Queda prohibido:
        </p>
        <ul>
          <li>Usar el servicio para actividades ilegales o fraudulentas.</li>
          <li>Intentar acceder a datos de otros usuarios.</li>
          <li>
            Realizar ingeniería inversa, descompilar o intentar extraer el
            código fuente del servicio.
          </li>
          <li>
            Usar el servicio para generar contenido engañoso, discriminatorio o
            que viole las políticas de Meta o Google.
          </li>
          <li>
            Sobrecargar la plataforma con requests automatizados no autorizados.
          </li>
        </ul>

        <h2>5. Integraciones con terceros</h2>
        <p>Al conectar Google Ads o Meta Ads a Megabait:</p>
        <ul>
          <li>
            Autorizás a Megabait a acceder a los datos de esas cuentas en tu
            nombre, exclusivamente para proveer el servicio.
          </li>
          <li>
            Sos responsable de que tenés los permisos necesarios para vincular
            dichas cuentas.
          </li>
          <li>
            Podés revocar el acceso en cualquier momento desde la plataforma o
            directamente desde Google/Meta.
          </li>
          <li>
            Megabait no es responsable por cambios en las APIs de Google o Meta
            que afecten la disponibilidad del servicio.
          </li>
        </ul>

        <h2>6. Contenido generado por IA</h2>
        <ul>
          <li>
            Las respuestas del copiloto son generadas por modelos de lenguaje
            (Anthropic Claude) y tienen carácter informativo y de apoyo al
            análisis.
          </li>
          <li>
            Las recomendaciones generadas por el copiloto no constituyen
            asesoramiento profesional de marketing ni garantizan resultados
            publicitarios.
          </li>
          <li>
            El usuario es responsable de evaluar y decidir si aplica o no las
            sugerencias del copiloto.
          </li>
          <li>
            Megabait no se responsabiliza por decisiones de inversión
            publicitaria tomadas en base a las recomendaciones del sistema.
          </li>
        </ul>

        <h2>7. Disponibilidad del servicio</h2>
        <ul>
          <li>
            Megabait Copiloto Ads se ofrece &quot;tal como está&quot; (as-is) durante el
            período de beta.
          </li>
          <li>
            No garantizamos disponibilidad ininterrumpida del servicio.
          </li>
          <li>
            Podemos realizar mantenimientos programados o de emergencia sin
            previo aviso durante la beta.
          </li>
        </ul>

        <h2>8. Propiedad intelectual</h2>
        <ul>
          <li>
            El código, diseño, marca y contenido de Megabait son propiedad de
            Megabait y están protegidos por las leyes aplicables.
          </li>
          <li>
            Los datos que ingresás a la plataforma (información de clientes,
            conversaciones) son de tu propiedad. Megabait no reclama derechos
            sobre ellos.
          </li>
        </ul>

        <h2>9. Limitación de responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley, Megabait no será responsable
          por:
        </p>
        <ul>
          <li>Pérdidas de datos derivadas de fallas técnicas.</li>
          <li>
            Resultados de campañas publicitarias basados en recomendaciones del
            copiloto.
          </li>
          <li>
            Interrupciones del servicio causadas por terceros (Google, Meta,
            Supabase, Vercel, Anthropic).
          </li>
          <li>
            Daños indirectos, incidentales o consecuentes derivados del uso del
            servicio.
          </li>
        </ul>

        <h2>10. Modificaciones al servicio y los términos</h2>
        <ul>
          <li>
            Nos reservamos el derecho de modificar o discontinuar el servicio
            con o sin previo aviso durante la beta.
          </li>
          <li>
            Podemos actualizar estos Términos de Servicio. Cambios significativos
            serán notificados por email.
          </li>
          <li>
            El uso continuado del servicio después de un cambio implica
            aceptación de los nuevos términos.
          </li>
        </ul>

        <h2>11. Cancelación</h2>
        <ul>
          <li>
            Podés cancelar tu cuenta en cualquier momento contactándonos en{" "}
            <a href="mailto:megabaitrosario@gmail.com">
              megabaitrosario@gmail.com
            </a>
            .
          </li>
          <li>
            Nos reservamos el derecho de terminar o suspender tu acceso al
            servicio por violación de estos términos.
          </li>
        </ul>

        <h2>12. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República Argentina.
          Cualquier disputa será sometida a la jurisdicción de los tribunales
          ordinarios de la ciudad de Rosario, provincia de Santa Fe.
        </p>

        <h2>13. Contacto</h2>
        <p>Para consultas sobre estos términos:</p>
        <p>
          <strong>Megabait</strong>
          <br />
          Email:{" "}
          <a href="mailto:megabaitrosario@gmail.com">
            megabaitrosario@gmail.com
          </a>
          <br />
          Sitio:{" "}
          <a href="https://megabait.com.ar" target="_blank" rel="noopener noreferrer">
            megabait.com.ar
          </a>
        </p>
      </div>
    </main>
  );
}
