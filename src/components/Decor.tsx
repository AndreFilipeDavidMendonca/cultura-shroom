/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Decor.tsx — Elementos decorativos orgânicos da Cultura Shroom.
 * Cogumelos discretos, esporos flutuantes, divisores de onda e fios
 * de micélio. Todos puramente estéticos (aria-hidden / pointer-events-none)
 * e construídos com a paleta do logótipo.
 */

import { CSSProperties, ReactNode } from 'react';

/* ----------------------------------------------------------------
   Cogumelo elegante (SVG inline) — chapéu vermelho com pintas,
   pé creme. Discreto, para espalhar pelo site.
----------------------------------------------------------------- */
export function Mushroom({
  className = '',
  style,
  capColor = 'var(--color-shroom-red)',
}: {
  className?: string;
  style?: CSSProperties;
  capColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      style={style}
      aria-hidden="true"
      fill="none"
    >
      {/* pé */}
      <path
        d="M24 44c0 0-2 22-1 28 0.5 3 14 3 14.5 0 1-6-1-28-1-28z"
        fill="var(--color-shroom-beige)"
        opacity="0.85"
      />
      <path d="M26 52c4 2 8 2 12 0" stroke="var(--color-shroom-sand)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      {/* chapéu */}
      <path
        d="M6 44c0-16 11-28 26-28s26 12 26 28c0 3-3 4-6 4H12c-3 0-6-1-6-4z"
        fill={capColor}
      />
      <path
        d="M6 44c0-16 11-28 26-28s26 12 26 28"
        fill="url(#capGlow)"
        opacity="0.5"
      />
      {/* pintas */}
      <circle cx="24" cy="30" r="3.4" fill="var(--color-shroom-cream)" opacity="0.92" />
      <circle cx="40" cy="27" r="2.6" fill="var(--color-shroom-cream)" opacity="0.92" />
      <circle cx="32" cy="38" r="2.2" fill="var(--color-shroom-cream)" opacity="0.92" />
      <circle cx="15" cy="40" r="2" fill="var(--color-shroom-cream)" opacity="0.85" />
      <circle cx="48" cy="38" r="2.4" fill="var(--color-shroom-cream)" opacity="0.85" />
      <defs>
        <linearGradient id="capGlow" x1="0" y1="16" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-shroom-amber)" />
          <stop offset="1" stopColor={capColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Esporos — pequenas partículas que flutuam suavemente.
----------------------------------------------------------------- */
export function Spores({ className = '', count = 14 }: { className?: string; count?: number }) {
  const colors = [
    'var(--color-shroom-gold)',
    'var(--color-shroom-green)',
    'var(--color-shroom-magenta)',
    'var(--color-shroom-teal)',
    'var(--color-shroom-cream)',
  ];
  const dots = Array.from({ length: count }).map((_, i) => {
    const seed = (i * 97) % 100;
    return {
      left: `${(seed * 1.3) % 100}%`,
      top: `${(seed * 2.7) % 100}%`,
      size: 2 + (seed % 4),
      color: colors[i % colors.length],
      delay: (seed % 9),
      dur: 7 + (seed % 6),
    };
  });
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-drift"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 ${d.size * 3}px ${d.color}`,
            opacity: 0.6,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------
   Divisor de onda orgânica entre secções.
   `flip` inverte verticalmente; `color` é a cor de preenchimento
   (normalmente a cor da secção seguinte).
----------------------------------------------------------------- */
export function WaveDivider({
  className = '',
  flip = false,
  color = 'var(--color-shroom-deep)',
}: {
  className?: string;
  flip?: boolean;
  color?: string;
}) {
  return (
    <div
      className={`relative w-full leading-[0] pointer-events-none ${className}`}
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px] block"
      >
        <path
          d="M0,40 C240,90 480,0 720,32 C960,64 1200,96 1440,44 L1440,90 L0,90 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------------
   Fio de micélio — linha curva orgânica decorativa.
----------------------------------------------------------------- */
export function MyceliumThread({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M10 100 C 80 40, 120 160, 200 100 S 320 40, 390 100"
        stroke="url(#myc)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M60 70 C 100 110, 60 150, 110 160"
        stroke="var(--color-shroom-gold)"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M300 130 C 260 90, 320 70, 340 50"
        stroke="var(--color-shroom-purple)"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="200" cy="100" r="2.5" fill="var(--color-shroom-gold)" />
      <circle cx="110" cy="160" r="2" fill="var(--color-shroom-green)" />
      <circle cx="340" cy="50" r="2" fill="var(--color-shroom-magenta)" />
      <defs>
        <linearGradient id="myc" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-shroom-purple)" />
          <stop offset="0.5" stopColor="var(--color-shroom-gold)" />
          <stop offset="1" stopColor="var(--color-shroom-green)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Selo / cabeçalho de secção — chip orgânico reutilizável.
----------------------------------------------------------------- */
export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] text-shroom-gold bg-shroom-gold/10 border border-shroom-gold/25 backdrop-blur-sm">
      {children}
    </div>
  );
}
