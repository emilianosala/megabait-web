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
        <p className={styles.updated}>Última actualización: Abril de 2026</p>

        <p>
          En Megabait (&quot;nosotros&quot;, &quot;nuestro&quot;) nos tomamos en serio la
          privacidad de los usuarios de nuestros productos. Esta Política de
          Privacidad describe qué datos recopilamos, cómo los usamos y cómo los
          protegemos cuando utilizás Megabait Copiloto Ads (disponible en{" "}
          <a href="https://ads.megabait.com.ar" target="_blank" rel="noopener noreferrer">
            ads.megabait.com.ar
          </a>
          ) y el sitio institucional{" "}
          <a href="https://megabait.com.ar" target="_blank" rel="noopener noreferrer">
            megabait.com.ar
          </a>
          .
        </p>

        <h2>1. Datos que recopilamos</h2>

        <h3>Datos de cuenta</h3>
        <ul>
          <li>Dirección de correo electrónico</li>
          <li>
            Contraseña (almacenada de forma encriptada mediante Supabase Auth)
          </li>
        </ul>

        <h3>Datos de clientes publicitarios</h3>
        <ul>
          <li>
            Nombre, industria, descripción, objetivos, presupuesto, KPIs y
            restricciones de cada cliente que el usuario crea dentro de la
            plataforma.
          </li>
          <li>
            ID de cuenta de Google Ads y/o Meta Ads vinculadas.
          </li>
        </ul>

        <h3>Tokens de acceso a plataformas publicitarias</h3>
        <ul>
          <li>
            Refresh tokens de Google OAuth para acceder a la API de Google Ads.
          </li>
          <li>
            Tokens de acceso de Meta para acceder a la Marketing API de Meta.
          </li>
          <li>
            Estos tokens se almacenan de forma segura en nuestra base de datos
            (Supabase/PostgreSQL) y se usan exclusivamente para consultar
            métricas de las cuentas publicitarias del usuario.
          </li>
        </ul>

        <h3>Historial de conversaciones</h3>
        <ul>
          <li>
            Los mensajes intercambiados con el copiloto de IA se almacenan en
            nuestra base de datos para mantener el historial por cliente.
          </li>
          <li>
            El contenido de las conversaciones es procesado por la API de
            Anthropic (Claude) para generar respuestas. Anthropic no usa estos
            datos para entrenar sus modelos según su política de privacidad para
            clientes de API.
          </li>
        </ul>

        <h3>Datos de uso</h3>
        <ul>
          <li>
            Logs básicos de uso de la plataforma para diagnóstico y mejora del
            servicio.
          </li>
        </ul>

        <h2>2. Cómo usamos los datos</h2>
        <p>Usamos los datos recopilados exclusivamente para:</p>
        <ul>
          <li>Proveer el servicio de Megabait Copiloto Ads.</li>
          <li>
            Autenticar usuarios y proteger el acceso a sus cuentas.
          </li>
          <li>
            Consultar métricas de campañas publicitarias en Google Ads y Meta
            Ads en nombre del usuario.
          </li>
          <li>
            Generar respuestas del copiloto de IA con contexto relevante del
            cliente seleccionado.
          </li>
          <li>
            Mantener el historial de conversaciones para continuidad del
            análisis.
          </li>
          <li>
            Enviar comunicaciones relacionadas al servicio (actualizaciones,
            alertas de seguridad).
          </li>
        </ul>
        <p>
          <strong>
            No vendemos, alquilamos ni compartimos datos personales con terceros
            con fines comerciales.
          </strong>
        </p>

        <h2>3. Servicios de terceros</h2>
        <p>
          Para operar el servicio utilizamos los siguientes proveedores:
        </p>
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Uso</th>
              <th>Política de privacidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supabase</td>
              <td>Base de datos y autenticación</td>
              <td>
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                  supabase.com/privacy
                </a>
              </td>
            </tr>
            <tr>
              <td>Anthropic</td>
              <td>Modelo de lenguaje (Claude)</td>
              <td>
                <a href="https://anthropic.com/privacy" target="_blank" rel="noopener noreferrer">
                  anthropic.com/privacy
                </a>
              </td>
            </tr>
            <tr>
              <td>Google</td>
              <td>API de Google Ads, OAuth</td>
              <td>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>Marketing API de Meta, OAuth</td>
              <td>
                <a href="https://facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
                  facebook.com/privacy/policy
                </a>
              </td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Hosting e infraestructura</td>
              <td>
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  vercel.com/legal/privacy-policy
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Cada proveedor opera bajo sus propios términos y políticas de
          privacidad.
        </p>

        <h2>4. Almacenamiento y seguridad</h2>
        <ul>
          <li>
            Los datos se almacenan en servidores de Supabase con Row Level
            Security (RLS) habilitado, lo que garantiza que cada usuario solo
            puede acceder a sus propios datos.
          </li>
          <li>Las conexiones están protegidas por HTTPS/TLS.</li>
          <li>
            Los tokens de acceso a plataformas publicitarias se almacenan
            encriptados.
          </li>
          <li>No almacenamos contraseñas en texto plano.</li>
        </ul>

        <h2>5. Retención de datos</h2>
        <ul>
          <li>
            Los datos de cuenta y clientes se conservan mientras la cuenta esté
            activa.
          </li>
          <li>
            El historial de conversaciones se conserva para permitir continuidad
            del análisis.
          </li>
          <li>
            Al solicitar la eliminación de la cuenta, eliminamos todos los datos
            personales asociados dentro de los 30 días hábiles.
          </li>
        </ul>

        <h2>6. Derechos del usuario</h2>
        <p>Tenés derecho a:</p>
        <ul>
          <li>Acceder a los datos que almacenamos sobre vos.</li>
          <li>Corregir datos incorrectos.</li>
          <li>Eliminar tu cuenta y todos los datos asociados.</li>
          <li>
            Desconectar las integraciones con Google Ads y Meta Ads en cualquier
            momento desde la plataforma.
          </li>
          <li>Portabilidad de tus datos bajo solicitud.</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, contactanos en:{" "}
          <a href="mailto:megabaitrosario@gmail.com">
            megabaitrosario@gmail.com
          </a>
        </p>

        <h2>7. Cookies</h2>
        <p>
          El sitio institucional (megabait.com.ar) no utiliza cookies de
          seguimiento ni publicidad. La plataforma (ads.megabait.com.ar) utiliza
          cookies de sesión estrictamente necesarias para la autenticación.
        </p>

        <h2>8. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política periódicamente. Notificaremos cambios
          significativos por email o mediante un aviso en la plataforma. La
          fecha de última actualización siempre estará visible al inicio del
          documento.
        </p>

        <h2>9. Contacto</h2>
        <p>Si tenés preguntas sobre esta política:</p>
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
