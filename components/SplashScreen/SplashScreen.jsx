'use client';

import { useEffect, useRef, useState } from 'react';
import LogoGlow from '../LogoGlow/LogoGlow';
import styles from './SplashScreen.module.css';

// ── Canvas de referencia ──────────────────────────────────────────────────────
const REF_W = 1366;

// ── Posiciones clave en referencia 1366×768 ───────────────────────────────────
const ROCKET_START_REF = { x: 100, y: 650 };
const ROCKET_FINAL_REF = { x: 750, y: 380 };
const LOGO_CY_REF      = 200;
const LOGO_H_PX        = 40;

// ── Timeline ──────────────────────────────────────────────────────────────────
const P1_END          = 1800;
const P2_END          = 2600;
const P3_END          = 3200;
const DONE_AT         = 3800;
const LOGO_FADE_START = 1200;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function SplashScreen({ onDone }) {
  const canvasRef = useRef(null);
  const [logoIn,  setLogoIn]  = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [logoTop, setLogoTop] = useState(`${LOGO_CY_REF - LOGO_H_PX / 2}px`);

  // ── Timers de estado ─────────────────────────────────────────────────────
  useEffect(() => {
    sessionStorage.setItem('splashShown', '1');
    const t0 = setTimeout(() => setLogoIn(true),  LOGO_FADE_START);
    const t1 = setTimeout(() => setFadeOut(true),  P3_END);
    const t2 = setTimeout(onDone,                  DONE_AT);
    return () => [t0, t1, t2].forEach(clearTimeout);
  }, [onDone]);

  // ── Canvas ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const W      = canvas.width;
    const H      = canvas.height;   // eslint-disable-line no-unused-vars
    const factor = W / REF_W;

    setLogoTop(`${LOGO_CY_REF * factor - LOGO_H_PX / 2}px`);

    const sc = (rx, ry) => ({ x: rx * factor, y: ry * factor });

    const rStart = sc(ROCKET_START_REF.x, ROCKET_START_REF.y);
    const rFinal = sc(ROCKET_FINAL_REF.x, ROCKET_FINAL_REF.y);

    // Ángulo del viaje y vector perpendicular
    const tdx         = rFinal.x - rStart.x;
    const tdy         = rFinal.y - rStart.y;
    const travelAngle = Math.atan2(tdy, tdx);
    const perpX       = -Math.sin(travelAngle);   // perpendicular unitario
    const perpY       =  Math.cos(travelAngle);

    // Cohete: 13% del ancho, sin rotación adicional (PNG ya orientado)
    const rocketW   = W * 0.13;
    const rocketImg = new window.Image();
    rocketImg.src   = '/images/cohete.png';

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 1 — ESTELA DEL COHETE
    // ════════════════════════════════════════════════════════════════════════

    const trailNodes = [];   // { x, y, life, maxLife, size }
    const MAX_TRAIL  = 120;
    const TRAIL_LINK = 85;

    /**
     * Añade 5 nodos en la cola del cohete cada frame:
     * 1 central exacto + 4 con dispersión perpendicular y longitudinal.
     */
    function spawnTrailNodes(rx, ry, rH) {
      // Cola = posición opuesta a la nariz en el eje de viaje
      const tailX = rx - Math.cos(travelAngle) * rocketW * 0.45;
      const tailY = ry - Math.sin(travelAngle) * rH        * 0.45;

      // 1 nodo central
      trailNodes.push({
        x: tailX, y: tailY,
        life: 1.0, maxLife: 1.0,
        size: 1.5 + Math.random() * 2,
      });

      // 4 nodos con dispersión lateral ±40 px + retroceso 0-30 px
      for (let k = 0; k < 4; k++) {
        const lat  = (Math.random() - 0.5) * 80;
        const back = Math.random() * 30;
        trailNodes.push({
          x: tailX + perpX * lat - Math.cos(travelAngle) * back,
          y: tailY + perpY * lat - Math.sin(travelAngle) * back,
          life: 1.0, maxLife: 1.0,
          size: 1.5 + Math.random() * 2,
        });
      }
    }

    /**
     * Dibuja red triangulada de la estela.
     * globalFade: multiplicador global (para desvanecer en Fase 2).
     */
    function drawTrail(globalFade = 1) {
      if (!trailNodes.length || globalFade <= 0) return;

      for (let i = 0; i < trailNodes.length; i++) {
        const ni = trailNodes[i];
        if (ni.life <= 0) continue;
        const alphaI = ni.life * globalFade;

        // Líneas hacia nodos cercanos
        for (let j = i + 1; j < trailNodes.length; j++) {
          const nj = trailNodes[j];
          if (nj.life <= 0) continue;

          const dx   = ni.x - nj.x;
          const dy   = ni.y - nj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= TRAIL_LINK) continue;

          const alpha = (1 - dist / TRAIL_LINK) * Math.min(alphaI, nj.life * globalFade) * 0.8;
          ctx.beginPath();
          ctx.moveTo(ni.x, ni.y);
          ctx.lineTo(nj.x, nj.y);
          ctx.strokeStyle = `rgba(57, 255, 20, ${alpha})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }

        // Punto del nodo
        ctx.beginPath();
        ctx.arc(ni.x, ni.y, ni.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${alphaI * 0.9})`;
        ctx.fill();
      }
    }

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 2 — NODOS EN POSE FINAL
    // ════════════════════════════════════════════════════════════════════════

    const FINAL_NODE_COUNT = 60;
    const FINAL_LINK       = 100;

    // Posición del logo en espacio canvas
    const logoCX = W / 2;
    const logoCY = LOGO_CY_REF * factor;

    // Centro de referencia entre logo y cohete (punto medio)
    const centroX = (logoCX + rFinal.x) / 2;
    const centroY = ((logoCY + 20) + rFinal.y) / 2;

    // Generar 60 nodos con posiciones y delay de aparición
    const finalNodesData = [];
    for (let i = 0; i < FINAL_NODE_COUNT; i++) {
      let x, y;
      const isAI = i < 18;

      if (isAI) {
        // Zona letras "AI" / "AIT": a la derecha del centro del logo
        x = logoCX + 40 + Math.random() * 120;
        y = logoCY + (Math.random() - 0.5) * 40;
      } else {
        // Distribución elíptica alrededor del centro, con densidad no uniforme
        const angle_i = Math.random() * Math.PI * 2;
        const r       = 30 + Math.pow(Math.random(), 0.6) * 180;
        x = centroX + Math.cos(angle_i) * r * 1.1;
        y = centroY + Math.sin(angle_i) * r * 0.65;
      }

      finalNodesData.push({
        x,
        y,
        spawnDelay: i * 25,   // ms tras P1_END; todos aparecen en 1500 ms
        isAI,
      });
    }

    /**
     * Dibuja los nodos finales con fade-in escalonado.
     * phase2Elapsed: ms transcurridos desde el inicio de Fase 2 (P1_END).
     */
    function drawFinalNodes(phase2Elapsed) {
      if (phase2Elapsed <= 0) return;

      // Vida de cada nodo en este frame (calculada sin mutation)
      const lives = new Float32Array(FINAL_NODE_COUNT);
      for (let i = 0; i < FINAL_NODE_COUNT; i++) {
        const ndElapsed = phase2Elapsed - finalNodesData[i].spawnDelay;
        lives[i] = ndElapsed < 0 ? 0 : Math.min(ndElapsed / 300, 1.0);
      }

      // Líneas entre nodos próximos
      for (let i = 0; i < FINAL_NODE_COUNT; i++) {
        if (lives[i] <= 0) continue;

        for (let j = i + 1; j < FINAL_NODE_COUNT; j++) {
          if (lives[j] <= 0) continue;

          const dx   = finalNodesData[i].x - finalNodesData[j].x;
          const dy   = finalNodesData[i].y - finalNodesData[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= FINAL_LINK) continue;

          const lineA  = (1 - dist / FINAL_LINK) * 0.5 * Math.min(lives[i], lives[j]);
          const nearAI = finalNodesData[i].isAI || finalNodesData[j].isAI;

          ctx.beginPath();
          ctx.moveTo(finalNodesData[i].x, finalNodesData[i].y);
          ctx.lineTo(finalNodesData[j].x, finalNodesData[j].y);
          ctx.strokeStyle = `rgba(57, 255, 20, ${lineA})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();

          if (nearAI) {
            // Tinte dorado superpuesto en el área de las letras AI
            ctx.strokeStyle = `rgba(255, 200, 50, ${lineA * 0.4})`;
            ctx.stroke();
          }
        }

        // Punto del nodo
        ctx.beginPath();
        ctx.arc(finalNodesData[i].x, finalNodesData[i].y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${0.82 * lives[i]})`;
        ctx.fill();
      }
    }

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 3 — COHETE CON GLOW DE PROPULSIÓN
    // ════════════════════════════════════════════════════════════════════════

    function drawRocket(x, y, alpha) {
      if (!rocketImg.complete || !rocketImg.naturalWidth) return;
      const rH = rocketW * (rocketImg.naturalHeight / rocketImg.naturalWidth);

      // Cola del cohete (extremo opuesto a la nariz)
      const tailX = x - Math.cos(travelAngle) * rocketW * 0.45;
      const tailY = y - Math.sin(travelAngle) * rH        * 0.45;

      ctx.save();
      ctx.globalAlpha = Math.min(alpha, 1);

      // Halo exterior del propulsor (radio 20 px)
      ctx.beginPath();
      ctx.arc(tailX, tailY, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(57, 255, 20, 0.15)';
      ctx.fill();

      // Halo interior del propulsor (radio 10 px)
      ctx.beginPath();
      ctx.arc(tailX, tailY, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180, 255, 100, 0.3)';
      ctx.fill();

      ctx.restore();

      // Cohete: sin ctx.rotate — PNG ya orientado correctamente
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.min(alpha, 1);
      ctx.drawImage(rocketImg, -rocketW / 2, -rH / 2, rocketW, rH);
      ctx.restore();
    }

    // ── Loop principal ───────────────────────────────────────────────────
    let rocketX = rStart.x;
    let rocketY = rStart.y;
    let prevNow = null;

    const startTime = performance.now();
    let animId;

    const draw = (now) => {
      const deltaTime = prevNow === null ? 16 : now - prevNow;
      prevNow = now;
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, W, H);

      // ──────────────────────────────────────────────────────────────────
      // FASE 1 (0 → 1800 ms): cohete viaja, estela crece cada frame
      // ──────────────────────────────────────────────────────────────────
      if (elapsed <= P1_END) {
        const t1    = elapsed / P1_END;
        const eased = easeOutCubic(t1);
        rocketX = rStart.x + (rFinal.x - rStart.x) * eased;
        rocketY = rStart.y + (rFinal.y - rStart.y) * eased;

        // rH disponible si la imagen ya cargó; fallback 1:1
        const rH = (rocketImg.complete && rocketImg.naturalWidth)
          ? rocketW * (rocketImg.naturalHeight / rocketImg.naturalWidth)
          : rocketW;

        // Spawn 5 nodos de estela en este frame
        spawnTrailNodes(rocketX, rocketY, rH);

        // Decrementar vida y eliminar nodos muertos
        for (let i = trailNodes.length - 1; i >= 0; i--) {
          trailNodes[i].life -= deltaTime / 1200;
          if (trailNodes[i].life <= 0) trailNodes.splice(i, 1);
        }
        // Respetar cap de 120 (eliminar los más viejos)
        while (trailNodes.length > MAX_TRAIL) trailNodes.shift();

        drawTrail(1);
        drawRocket(rocketX, rocketY, Math.min(t1 * 3, 1));
      }

      // ──────────────────────────────────────────────────────────────────
      // FASE 2 (1800 → 2600 ms): nodos finales aparecen, estela se apaga
      // ──────────────────────────────────────────────────────────────────
      else if (elapsed <= P2_END) {
        const t2 = (elapsed - P1_END) / (P2_END - P1_END);

        // Continúa el decaimiento natural de la estela
        for (let i = trailNodes.length - 1; i >= 0; i--) {
          trailNodes[i].life -= deltaTime / 1200;
          if (trailNodes[i].life <= 0) trailNodes.splice(i, 1);
        }
        drawTrail(Math.max(0, 1 - t2));

        drawFinalNodes(elapsed - P1_END);
        drawRocket(rFinal.x, rFinal.y, 1);
      }

      // ──────────────────────────────────────────────────────────────────
      // FASE 3 (2600 → 3200 ms): pose estática
      // Nodos rezagados (i > 32) siguen apareciendo hasta ~3275 ms
      // ──────────────────────────────────────────────────────────────────
      else {
        drawFinalNodes(elapsed - P1_END);
        drawRocket(rFinal.x, rFinal.y, 1);
      }

      if (elapsed < P3_END + 60) {
        animId = requestAnimationFrame(draw);
      }
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}
      aria-hidden="true"
    >
      <div
        className={`${styles.logo} ${logoIn ? styles.logoIn : ''}`}
        style={{ top: logoTop }}
      >
        <LogoGlow variant="splash" />
      </div>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
