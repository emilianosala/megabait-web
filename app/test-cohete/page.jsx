'use client';

import { useEffect, useRef } from 'react';

function drawScene(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const img = new window.Image();
  img.src = '/images/cohete.png';

  img.onload = () => {
    const rocketW = W * 0.13;
    const rocketH = rocketW * (img.naturalHeight / img.naturalWidth);
    const cx = W / 2;
    const cy = H / 2;

    // Propulsor: esquina inferior-izquierda del PNG
    // (~20% desde borde izq, ~68% desde borde top)
    const tailX = cx - rocketW / 2 + rocketW * 0.20;
    const tailY = cy - rocketH / 2 + rocketH * 0.62;

    // Bezier cuadrática:
    //   el cohete vuela hacia arriba-derecha → la estela sale hacia abajo-izquierda
    //   ángulo suave (~16° bajo la horizontal), con curvatura explícita hacia abajo
    //
    //   inicio  → (tailX,      tailY)        propulsor
    //   control → (tailX - 95, tailY + 50)   desplaza la curva hacia abajo
    //   final   → (tailX - 190, tailY + 55)  extremo de la estela
    const x0 = tailX,        y0 = tailY;
    const xc = tailX - 95,   yc = tailY + 50;
    const x1 = tailX - 190,  y1 = tailY + 55;

    function bezier(t) {
      const mt = 1 - t;
      return {
        x: mt * mt * x0 + 2 * mt * t * xc + t * t * x1,
        y: mt * mt * y0 + 2 * mt * t * yc + t * t * y1,
      };
    }

    function bezierTangent(t) {
      const tx = 2 * (1 - t) * (xc - x0) + 2 * t * (x1 - xc);
      const ty = 2 * (1 - t) * (yc - y0) + 2 * t * (y1 - yc);
      const len = Math.sqrt(tx * tx + ty * ty);
      return { ux: tx / len, uy: ty / len };
    }

    // ── Debug: punto rojo en el propulsor ────────────────────────────────────
    ctx.beginPath();
    ctx.arc(tailX, tailY, 8, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();

    // ── 1. Glow radial en el propulsor (reducido a 45px) ─────────────────────
    const radGrad = ctx.createRadialGradient(tailX, tailY, 0, tailX, tailY, 45);
    radGrad.addColorStop(0,   'rgba(255, 255, 180, 0.95)');
    radGrad.addColorStop(0.2, 'rgba(180, 255, 100, 0.80)');
    radGrad.addColorStop(0.5, 'rgba(57,  255,  20, 0.50)');
    radGrad.addColorStop(1.0, 'rgba(0,    80,   0, 0)');
    ctx.beginPath();
    ctx.arc(tailX, tailY, 45, 0, Math.PI * 2);
    ctx.fillStyle = radGrad;
    ctx.fill();

    // ── 2. 20 elipses a lo largo de la Bezier ────────────────────────────────
    const ELLIPSE_COUNT = 20;
    for (let i = 0; i < ELLIPSE_COUNT; i++) {
      const t     = i / (ELLIPSE_COUNT - 1);
      const pos   = bezier(t);
      const tang  = bezierTangent(t);
      const angle = Math.atan2(tang.uy, tang.ux);
      const rx    = 28 * (1 - t) + 3 * t;       // 28px → 3px
      const ry    = 16 * (1 - t) + 2 * t;       // 16px → 2px
      const alpha = 0.45 * (1 - t) + 0.03 * t;  // 0.45 → 0.03

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
      ctx.fill();
      ctx.restore();
    }

    // ── Cohete encima de todo ─────────────────────────────────────────────────
    ctx.drawImage(img, cx - rocketW / 2, cy - rocketH / 2, rocketW, rocketH);
  };
}

export default function TestCohete() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene(canvas);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#080f08' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
        aria-hidden="true"
      />
    </div>
  );
}
