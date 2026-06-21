/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { ShroomMessage } from '../types';
import { Play, Square, Volume2, VolumeX, Flame, Smile, Star, Send, Trash2, Heart, Music, Layers } from 'lucide-react';

const STATIC_AVATARS = [
  "🍄", "🌟", "👾", "🌀", "🌲", "💜", "🌝", "🌞"
];

const PRE_MESSAGES: ShroomMessage[] = [
  {
    id: "pre-1",
    author: "Shroomanónimo das Dunas",
    content: "O pôr do sol no Shroomkend com o dj booth no centro da floresta foi absolutamente transcendente! Senti a energia do micélio coletivo conectar todos nós. 🙌🌌",
    avatarIndex: 0,
    timestamp: "Há 2 horas",
    likes: 24
  },
  {
    id: "pre-2",
    author: "Esporo Galáctico",
    content: "A tolice suspendeu toda a minha rigidez social de trabalho de escritório esta semana. Rir de nós próprios é o melhor remédio cósmico! 🌀🤪",
    avatarIndex: 1,
    timestamp: "Há 4 horas",
    likes: 18
  },
  {
    id: "pre-3",
    author: "Shroomanónimo Silvestre",
    content: "Danço no Shroomfloor soltando os julgamentos físicos. É um ritual de pura liberdade! Menos consumismo, mais presença vegetal! 🌲🔊💃",
    avatarIndex: 4,
    timestamp: "Há 1 dia",
    likes: 31
  }
];

export default function ShroomlandPortal() {
  // Synthesis States
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [activeNodes, setActiveNodes] = useState<{ [key: string]: any }>({});
  const [isPlaying, setIsPlaying] = useState<string | null>(null); // Track names that are playing
  const [muted, setMuted] = useState(false);
  const [synthFeedback, setSynthFeedback] = useState("Clique num pad para gerar som cósmico!");

  // Particles canvas for Synthesizer
  const synthCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<any[]>([]);

  // Messages States
  const [messages, setMessages] = useState<ShroomMessage[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [messageContent, setMessageContent] = useState("");

  // Initialize Messages from localStorage or pre-seed
  useEffect(() => {
    const saved = localStorage.getItem('shroom_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(PRE_MESSAGES);
      }
    } else {
      setMessages(PRE_MESSAGES);
    }
  }, []);

  const saveMessages = (newMsgs: ShroomMessage[]) => {
    setMessages(newMsgs);
    localStorage.setItem('shroom_messages', JSON.stringify(newMsgs));
  };

  // Particles animation for Synth Web Audio Activity
  useEffect(() => {
    const canvas = synthCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const render = () => {
      ctx.clearRect(0,0, canvas.width, canvas.height);
      
      // Update & draw particles
      particles.current.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;
        p.size *= 0.98;

        ctx.beginPath();
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0 || p.size < 0.5) {
          particles.current.splice(idx, 1);
        }
      });

      animId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  const emitParticles = (color: string) => {
    const canvas = synthCanvasRef.current;
    if (!canvas) return;
    for (let i = 0; i < 8; i++) {
      particles.current.push({
        x: canvas.width / 2 + (Math.random() * 60 - 30),
        y: canvas.height / 2 + (Math.random() * 40 - 20),
        vx: Math.random() * 4 - 2,
        vy: Math.random() * -3 - 1,
        size: Math.random() * 6 + 3,
        alpha: 1,
        color: color
      });
    }
  };

  // Safe Web Audio Context initializer
  const initAudio = () => {
    if (!audioCtx) {
      const ContextClass = (window.AudioContext || (window as any).webkitAudioContext);
      if (ContextClass) {
        const ctx = new ContextClass();
        setAudioCtx(ctx);
        return ctx;
      }
    }
    return audioCtx;
  };

  // Synth Key Play Trigger
  const toggleSynthPad = (padType: string, noteFreq: number, color: string) => {
    const ctx = initAudio() || audioCtx;
    if (!ctx) {
      setSynthFeedback("Audio API não é suportada neste navegador.");
      return;
    }

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // If already playing, stop it!
    if (activeNodes[padType]) {
      try {
        activeNodes[padType].osc.stop();
        activeNodes[padType].gain.disconnect();
      } catch (e) {}

      const nextActive = { ...activeNodes };
      delete nextActive[padType];
      setActiveNodes(nextActive);
      setIsPlaying(null);
      setSynthFeedback(`Pulsador ${padType} suspenso.`);
      return;
    }

    // Otherwise, create a neat synthesizer path:
    // Oscillator -> Filter (LFO swept) -> Delay (Echo) -> Gain -> Output

    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const delay = ctx.createDelay(1.0);
    const feedback = ctx.createGain();
    const gainNode = ctx.createGain();

    // Configure Sound Vibe based on pad Type
    if (padType === "TRANCE BASS") {
      osc.type = "sawtooth";
      osc.frequency.value = 55; // A1 bass
      filter.type = "lowpass";
      filter.frequency.value = 180;
      gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
      setSynthFeedback("A vibrar Bassline a 55Hz (A1) do compasso subterrâneo...");
    } 
    else if (padType === "SINAL SINE") {
      osc.type = "sine";
      osc.frequency.value = noteFreq;
      filter.type = "bandpass";
      filter.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.35, ctx.currentTime);
      setSynthFeedback(`A oscilar freq harmónica a ${noteFreq}Hz (Som Puro)...`);
    }
    else if (padType === "ECO CÓSMICO") {
      osc.type = "triangle";
      osc.frequency.value = noteFreq;
      filter.type = "peaking";
      filter.frequency.value = 1200;
      gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
      setSynthFeedback(`A irradiar eco flutuante em ${noteFreq}Hz.`);
    }
    else if (padType === "SWEEP LFO") {
      osc.type = "sawtooth";
      osc.frequency.value = 110; // low sweep
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      // Sweep filter frequency up and down
      filter.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 1.5);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 3.0);
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      setSynthFeedback("Varredor de esporos LFO ativado!");
    }
    else {
      osc.type = "sine";
      osc.frequency.value = noteFreq;
      filter.type = "highpass";
      filter.frequency.value = 1500;
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      setSynthFeedback("Micélio de alta ressonância vibracional!");
    }

    // Set delay settings
    delay.delayTime.value = 0.35; // Beat delay
    feedback.gain.value = 0.4;     // Feedback loop volume

    // Wire up: osc -> filter -> gain
    // Delay loop: filter -> delay -> feedback -> delay & filter -> output
    osc.connect(filter);
    filter.connect(gainNode);

    // Wire delay loop
    filter.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay); // feedback loop
    delay.connect(gainNode); // connect delay signal to main volume

    gainNode.connect(ctx.destination);

    // Prevent popping
    gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(muted ? 0.01 : 0.3, ctx.currentTime + 0.1);

    osc.start();

    // Auto-stop single short-burst notes if triggered as single shots
    if (padType === "ECO CÓSMICO" || padType === "RESONADOR") {
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
      setTimeout(() => {
        try {
          osc.stop();
          osc.disconnect();
          gainNode.disconnect();
        } catch (e) {}
        const nextActive = { ...activeNodes };
        delete nextActive[padType];
        setActiveNodes(nextActive);
      }, 1900);
    }

    setActiveNodes(prev => ({
      ...prev,
      [padType]: { osc, filter, delay, feedback, gain: gainNode }
    }));
    
    setIsPlaying(padType);
    emitParticles(color);
  };

  const handleStopAll = () => {
    Object.keys(activeNodes).forEach((key) => {
      try {
        activeNodes[key].osc.stop();
        activeNodes[key].gain.disconnect();
      } catch (e) {}
    });
    setActiveNodes({});
    setIsPlaying(null);
    setSynthFeedback("Sons cósmicos suspensos. Silêncio zen.");
  };

  const handleToggleMute = () => {
    if (!audioCtx) return;
    const newMuted = !muted;
    setMuted(newMuted);
    
    Object.keys(activeNodes).forEach((key) => {
      const node = activeNodes[key];
      if (node && node.gain) {
        node.gain.gain.setValueAtTime(newMuted ? 0 : 0.25, audioCtx.currentTime);
      }
    });

    setSynthFeedback(newMuted ? "Volume silenciado." : "Sinal sonoro restabelecido.");
  };

  // Cleanup synthesizer on unmount
  useEffect(() => {
    return () => {
      Object.keys(activeNodes).forEach((key) => {
        try {
          activeNodes[key].osc.stop();
        } catch (e) {}
      });
    };
  }, [activeNodes]);

  // Message board actions
  const handlePostMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!messageContent.trim()) return;

    const nickname = authorName.trim() || `Shroomanónimo #${Math.floor(Math.random() * 9000 + 1000)}`;

    const newMsg: ShroomMessage = {
      id: "user-" + Date.now().toString(),
      author: nickname,
      content: messageContent,
      avatarIndex: selectedAvatar,
      timestamp: "Agora",
      likes: 0
    };

    saveMessages([newMsg, ...messages]);
    setMessageContent("");
    setAuthorName("");
  };

  const handleLike = (id: string) => {
    const updated = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, likes: msg.likes + 1 };
      }
      return msg;
    });
    saveMessages(updated);
  };

  const handleClearWall = () => {
    saveMessages(PRE_MESSAGES);
  };

  return (
    <div id="shroomland-portal-root" className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      
      {/* LEFT: Generative Psychedelic Synthesizer Console: 6/12 cols */}
      <div id="psy-synth-console" className="xl:col-span-6 p-6 rounded-2xl bg-shroom-deep border border-shroom-purple/20 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-shroom-purple/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <Music className="w-5 h-5 text-shroom-purple animate-pulse" />
            <h4 className="text-lg font-bold font-display tracking-wider text-shroom-cream">
              Trance Sintetizador de Ritmos
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="mute-synth-btn"
              onClick={handleToggleMute}
              className={`p-2 rounded-lg transition-all ${
                muted ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              id="stop-synth-btn"
              onClick={handleStopAll}
              className="p-2 bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white rounded-lg transition-all"
              title="Parar Todos os Canais"
            >
              <Square className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Oscilloscope Mini-Canvas */}
        <div className="relative w-full h-16 rounded-xl bg-shroom-dark overflow-hidden border border-white/5 flex items-center justify-center mb-6">
          <canvas ref={synthCanvasRef} width={400} height={60} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />
          <div className="absolute top-2 left-3 flex items-center gap-1.5 pointer-events-none">
            <Layers className="w-3.5 h-3.5 text-shroom-lightgreen" />
            <span className="text-2xs font-mono uppercase tracking-widest text-slate-400">Canal de Onda Áudio</span>
          </div>
          {Object.keys(activeNodes).length > 0 ? (
            <div className="text-2xs font-mono text-shroom-lightgreen animate-pulse relative z-10 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-shroom-lightgreen inline-block" />
              SÍNTESE ATIVA ({Object.keys(activeNodes).length})
            </div>
          ) : (
            <span className="text-2xs font-mono text-slate-600 relative z-10">Console em Silêncio Zen</span>
          )}
        </div>

        {/* PADS Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4.5 mb-6">
          
          <button
            id="synth-pad-bass"
            onClick={() => toggleSynthPad("TRANCE BASS", 55, "#e07a23")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center relative ${
              activeNodes["TRANCE BASS"]
                ? 'bg-shroom-amber/20 text-shroom-gold border-shroom-amber glow-amber scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-amber/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Flame className="w-6 h-6 text-shroom-amber" />
            <span className="text-xs font-mono tracking-widest uppercase">Base Trance</span>
            <span className="text-[10px] text-slate-500 font-mono">55Hz Sawtooth</span>
          </button>

          <button
            id="synth-pad-sine"
            onClick={() => toggleSynthPad("SINAL SINE", 220, "#7452a6")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center ${
              activeNodes["SINAL SINE"]
                ? 'bg-shroom-purple/20 text-indigo-200 border-shroom-purple glow-purple scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-purple/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Smile className="w-6 h-6 text-shroom-purple" />
            <span className="text-xs font-mono tracking-widest uppercase">Pure Sine</span>
            <span className="text-[10px] text-slate-500 font-mono">220Hz Sine</span>
          </button>

          <button
            id="synth-pad-osc"
            onClick={() => toggleSynthPad("SINAL SINE 2", 330, "#f5a623")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center ${
              activeNodes["SINAL SINE 2"]
                ? 'bg-yellow-500/10 text-yellow-300 border-shroom-gold scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-gold/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Star className="w-6 h-6 text-shroom-gold" />
            <span className="text-xs font-mono tracking-widest uppercase">Harmónicos</span>
            <span className="text-[10px] text-slate-500 font-mono">330Hz Pure</span>
          </button>

          <button
            id="synth-pad-echo"
            onClick={() => toggleSynthPad("ECO CÓSMICO", 440, "#c8b195")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center ${
              activeNodes["ECO CÓSMICO"]
                ? 'bg-shroom-beige/20 text-shroom-beige border-shroom-beige scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-beige/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Music className="w-6 h-6 text-shroom-sand" />
            <span className="text-xs font-mono tracking-widest uppercase">Eco Cósmico</span>
            <span className="text-[10px] text-slate-500 font-mono">Burst 440Hz</span>
          </button>

          <button
            id="synth-pad-lfo"
            onClick={() => toggleSynthPad("SWEEP LFO", 110, "#8ea675")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center ${
              activeNodes["SWEEP LFO"]
                ? 'bg-green-500/10 text-shroom-lightgreen border-shroom-lightgreen scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-lightgreen/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Layers className="w-6 h-6 text-shroom-lightgreen" />
            <span className="text-xs font-mono tracking-widest uppercase">LFO Sweep</span>
            <span className="text-[10px] text-slate-500 font-mono">Swept Filter</span>
          </button>

          <button
            id="synth-pad-micelio"
            onClick={() => toggleSynthPad("RESONADOR", 587, "#e07a23")}
            className={`h-24 rounded-2xl flex flex-col justify-center items-center gap-1.5 transition-all outline-none border text-center ${
              activeNodes["RESONADOR"]
                ? 'bg-shroom-amber/15 text-orange-200 border-shroom-amber scale-102 font-bold'
                : 'bg-shroom-dark/60 text-slate-400 border-white/5 hover:border-shroom-amber/30 hover:bg-shroom-dark/90'
            }`}
          >
            <Volume2 className="w-6 h-6 text-shroom-amber" />
            <span className="text-xs font-mono tracking-widest uppercase">Ressonador</span>
            <span className="text-[10px] text-slate-500 font-mono">Spore Wave D5</span>
          </button>

        </div>

        {/* Feedback Monitor */}
        <div className="bg-shroom-dark/80 px-4 py-3 leading-relaxed rounded-xl border border-white/5 text-center">
          <span className="text-2xs font-mono uppercase tracking-wider text-shroom-sand block mb-0.5">ESTADO DA TELEMETRIA DE SOM</span>
          <p className="text-2xs text-shroom-cream/90 font-mono italic">
            "{synthFeedback}"
          </p>
        </div>

      </div>

      {/* RIGHT: Wall of Shroomanónimos Message board: 6/12 cols */}
      <div id="shroomanónimos-mural-board" className="xl:col-span-6 p-6 rounded-2xl bg-shroom-deep border border-shroom-green/20 flex flex-col justify-between h-[480px]">
        
        {/* Header Board */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🕊️</span>
            <div>
              <h4 className="text-sm font-bold tracking-wide text-shroom-cream font-display">Mural de Shroomanónimos</h4>
              <span className="text-2xs text-slate-400">Mensagens e esporos da tribo</span>
            </div>
          </div>
          
          <button
            id="clear-wall-btn"
            onClick={handleClearWall}
            className="text-2xs text-slate-500 hover:text-red-400 flex items-center gap-1 font-mono transition-colors"
            title="Repor mensagens iniciais"
          >
            <Trash2 className="w-3 h-3" />
            Repor
          </button>
        </div>

        {/* Messages Feed (Scrollable) */}
        <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-1 scrollbar-thin">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-slate-500 font-sans italic">
              <span className="text-2xl mb-2">🍃</span>
              Nenhum esporo no ar. Seja o primeiro a espalhar a sua energia!
            </div>
          ) : (
            messages.map((msg) => (
              <div id={`msg-${msg.id}`} key={msg.id} className="p-3 bg-shroom-dark/50 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-sm shadow-inner"
                      role="img"
                      aria-label="avatar"
                    >
                      {STATIC_AVATARS[msg.avatarIndex % STATIC_AVATARS.length]}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-shroom-beige font-display">{msg.author}</span>
                      <span className="text-[9px] text-slate-500 font-mono ml-2">{msg.timestamp}</span>
                    </div>
                  </div>

                  <button
                    id={`like-btn-${msg.id}`}
                    onClick={() => handleLike(msg.id)}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded-full hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-3 h-3 fill-current opacity-80" />
                    <span className="text-2xs font-mono">{msg.likes}</span>
                  </button>
                </div>

                <p className="text-xs text-shroom-cream/90 leading-relaxed font-sans font-light pl-9">
                  {msg.content}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Post Form */}
        <form id="shroom-post-form" onSubmit={handlePostMessage} className="border-t border-white/5 pt-3 flex flex-col gap-2">
          
          <div className="flex items-center gap-2">
            <input
              id="author-name-input"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Alcunha (ex: Esporo Galáctico)"
              maxLength={25}
              className="bg-shroom-dark px-3 py-1.5 rounded-lg border border-white/5 text-xs text-[#f4eee1] focus:outline-none focus:border-shroom-purple/50 flex-1 placeholder:text-slate-500"
            />

            {/* Avatar Selector */}
            <div className="flex items-center gap-1 bg-shroom-dark rounded-lg px-2 py-1.5 border border-white/5 overflow-x-auto max-w-[150px]">
              <span className="text-[10px] text-slate-400 mr-1 font-mono">Signo:</span>
              {STATIC_AVATARS.slice(0, 4).map((av, idx) => (
                <button
                  id={`btn-avatar-${idx}`}
                  key={idx}
                  type="button"
                  onClick={() => setSelectedAvatar(idx)}
                  className={`w-5 h-5 flex items-center justify-center text-xs rounded transition-all ${
                    selectedAvatar === idx ? 'bg-shroom-purple/30 border border-shroom-purple/70 scale-105' : 'opacity-65 hover:opacity-100'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="msg-content-input"
              type="text"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Espalha a tua transmissão cósmica..."
              maxLength={140}
              required
              className="bg-shroom-dark px-3 py-2 rounded-lg border border-white/5 text-xs text-[#f4eee1] focus:outline-none focus:border-shroom-amber/50 flex-1 placeholder:text-slate-500"
            />
            
            <button
              id="btn-send-msg"
              type="submit"
              className="px-3 py-2 bg-shroom-green hover:bg-shroom-lightgreen text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
