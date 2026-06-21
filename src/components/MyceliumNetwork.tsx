/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, MouseEvent, TouchEvent } from 'react';
import { Network, Sparkles, Activity } from 'lucide-react';

interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  description: string;
}

export default function MyceliumNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

  // Pre-seed some beautiful network nodes representing the micelio concepts
  const nodes = useRef<Node[]>([
    { id: 1, label: "TOLICE", x: 100, y: 150, vx: 0.2, vy: -0.1, radius: 8, color: "#e07a23", glowColor: "rgba(224, 122, 35, 0.4)", description: "A suspensão voluntária da rigidez mental. Rir de si mesmo e brincar com seriedade." },
    { id: 2, label: "DANÇA", x: 250, y: 80, vx: -0.15, vy: 0.2, radius: 10, color: "#f5a623", glowColor: "rgba(245, 166, 35, 0.4)", description: "O ritual coletivo de libertação onde o corpo vibra em harmonia." },
    { id: 3, label: "MÚSICA", x: 400, y: 130, vx: 0.1, vy: -0.15, radius: 11, color: "#7452a6", glowColor: "rgba(116, 82, 166, 0.4)", description: "Trance music como a batida primordial que sincroniza as mentes." },
    { id: 4, label: "HUMOR", x: 180, y: 220, vx: -0.2, vy: 0.1, radius: 9, color: "#7452a6", glowColor: "rgba(116, 82, 166, 0.4)", description: "A frequência curativa que desconstrói barreiras e cura o cansaço." },
    { id: 5, label: "CUIDADO", x: 320, y: 280, vx: 0.15, vy: 0.1, radius: 9, color: "#e07a23", glowColor: "rgba(224, 122, 35, 0.4)", description: "A ética de amparo mútuo e a preservação do espaço comunitário." },
    { id: 6, label: "RESPEITO", x: 480, y: 240, vx: -0.1, vy: -0.12, radius: 8, color: "#8ea675", glowColor: "rgba(142, 166, 117, 0.4)", description: "A condição indispensável para a coexistência saudável e democrática." },
    { id: 7, label: "NATUREZA", x: 130, y: 320, vx: 0.12, vy: -0.18, radius: 10, color: "#8ea675", glowColor: "rgba(142, 166, 117, 0.4)", description: "O solo vivo, a floresta noturna e a ligação sagrada orgânica." },
    { id: 8, label: "SIMPLICIDADE", x: 430, y: 340, vx: -0.12, vy: 0.15, radius: 8, color: "#c8b195", glowColor: "rgba(200, 177, 149, 0.4)", description: "A recusa poética da competição fútil e da acumulação material." },
  ]);

  // Adjust canvas size to fit container
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const updateDimensions = () => {
      const { clientWidth } = containerRef.current!;
      const targetHeight = window.innerWidth < 768 ? 320 : 420;
      setDimensions({
        width: clientWidth,
        height: targetHeight
      });
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(() => updateDimensions());
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Set randomized start positions based on width/height
  useEffect(() => {
    nodes.current.forEach((node) => {
      node.x = Math.random() * (dimensions.width - 100) + 50;
      node.y = Math.random() * (dimensions.height - 100) + 50;
    });
  }, [dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let tick = 0;
    let pulseOpacity = 0;
    let pulseDirection = 1;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Animate background glow
      pulseOpacity += 0.008 * pulseDirection;
      if (pulseOpacity > 1 || pulseOpacity < 0) {
        pulseDirection *= -1;
      }

      // 1. Draw connections (the mycelium threads)
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const n1 = nodes.current[i];
          const n2 = nodes.current[j];
          const distance = Math.hypot(n1.x - n2.x, n1.y - n2.y);

          // Connect nodes that are reasonably close
          if (distance < 180) {
            const alpha = (1 - distance / 180) * 0.15;
            
            // Draw a chemical/nature aesthetic organic root
            ctx.beginPath();
            ctx.strokeStyle = `rgba(142, 166, 117, ${alpha})`;
            ctx.moveTo(n1.x, n1.y);
            // Curved roots for organic feeling
            const midX = (n1.x + n2.x) / 2 + Math.sin(tick * 0.02 + i) * 6;
            const midY = (n1.y + n2.y) / 2 + Math.cos(tick * 0.02 + j) * 6;
            ctx.quadraticCurveTo(midX, midY, n2.x, n2.y);
            ctx.stroke();

            // Draw a traveling energy "spore" particle along the thread
            if (tick % 200 < 50) {
              const progress = (tick % 50) / 50;
              const spX = n1.x + (n2.x - n1.x) * progress;
              const spY = n1.y + (n2.y - n1.y) * progress;
              ctx.beginPath();
              ctx.fillStyle = `rgba(245, 166, 35, ${(1 - progress) * 0.4})`;
              ctx.arc(spX, spY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 2. Draw nodes & move them
      nodes.current.forEach((node) => {
        // Normal bounds-bounce movement
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 20 || node.x >= dimensions.width - 20) node.vx *= -1;
        if (node.y <= 20 || node.y >= dimensions.height - 20) node.vy *= -1;

        const isHovered = activeNode?.id === node.id;

        // Node surrounding aura
        ctx.beginPath();
        const glowRadius = node.radius * (isHovered ? 2.5 : 1.8 + Math.sin(tick * 0.1) * 0.2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, glowRadius);
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.fillStyle = isHovered ? "#ffffff" : node.color;
        ctx.arc(node.x, node.y, isHovered ? node.radius + 1 : node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node labels
        ctx.font = isHovered ? "bold 11px 'Space Grotesk'" : "500 10px 'Space Grotesk'";
        ctx.fillStyle = isHovered ? "#ffffff" : "rgba(244, 238, 225, 0.7)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y - node.radius - 8);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions, activeNode]);

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Find if hovering over any node
    let foundNode: Node | null = null;
    for (const node of nodes.current) {
      const distance = Math.hypot(node.x - mouseX, node.y - mouseY);
      if (distance < node.radius + 15) {
        foundNode = node;
        break;
      }
    }
    setActiveNode(foundNode);
  };

  const handleTouchStart = (e: TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || e.touches.length === 0) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.touches[0].clientX - rect.left;
    const mouseY = e.touches[0].clientY - rect.top;

    let foundNode: Node | null = null;
    for (const node of nodes.current) {
      const distance = Math.hypot(node.x - mouseX, node.y - mouseY);
      if (distance < node.radius + 20) {
        foundNode = node;
        break;
      }
    }
    setActiveNode(foundNode);
  };

  return (
    <div id="mycelium-root" ref={containerRef} className="relative w-full rounded-[1.75rem] overflow-hidden shadow-2xl bg-shroom-deep border border-shroom-gold/20">
      
      {/* Decorative Forest Gradients */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-shroom-dark/90" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-shroom-pine/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-shroom-purple/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-shroom-dark/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-shroom-green/30">
        <Network className="w-4 h-4 text-shroom-lightgreen animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest text-shroom-sand font-bold">REDE DE MICÉLIO COLETIVO</span>
      </div>

      {/* Interaction prompt */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 pointer-events-none bg-shroom-dark/55 px-2.5 py-1 rounded-md text-slate-400">
        <Activity className="w-3.5 h-3.5 text-shroom-amber" />
        <span className="text-2xs font-mono">Passe o cursor sobre as raízes</span>
      </div>

      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onMouseLeave={() => setActiveNode(null)}
        className="w-full h-full cursor-crosshair block relative z-0"
      />

      {/* Dynamic Concept Dialogue Box */}
      {activeNode && (
        <div 
          id="mycelium-popup"
          className="absolute bottom-4 right-4 max-w-sm glass-morphic p-4 rounded-xl shadow-2xl z-20 border-l-4 border-l-shroom-gold animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none md:pointer-events-auto"
          style={{ borderColor: activeNode.color }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4" style={{ color: activeNode.color }} />
            <h4 className="text-sm font-semibold tracking-wider font-display" style={{ color: activeNode.color }}>
              {activeNode.label}
            </h4>
          </div>
          <p className="text-xs text-shroom-cream/95 leading-relaxed">
            {activeNode.description}
          </p>
        </div>
      )}
    </div>
  );
}
