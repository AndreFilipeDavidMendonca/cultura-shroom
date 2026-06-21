/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

// Images Import
// @ts-ignore
import shroomLogo from './assets/images/cultura_shroom_logo_1782048729640.jpg';
// @ts-ignore
import festivalHero from './assets/images/cultura_shroom_festival_hero_1782048743292.jpg';

// Content Import
import {
  HERO_CONTENT,
  SOBRE_CONTENT,
  MISSAO_VISAO_CONTENT,
  PILARES_DATA,
  FUNDADORES_DATA,
  SIMBOLO_CONTENT,
  NOTA_EDUCATIVA,
  DECLARACAO_MANIFESTO
} from './data';

// Components Import
import MyceliumNetwork from './components/MyceliumNetwork';
import NomenclaturaSection from './components/NomenclaturaSection';
import ShroomlandPortal from './components/ShroomlandPortal';
import ScrollAnimate from './components/ScrollAnimate';

// Icons Import
import {
  Laugh,
  Leaf,
  Music,
  Activity,
  Globe,
  Smile,
  Heart,
  Menu,
  X,
  ArrowDown,
  Sparkles,
  AlertCircle,
  Compass,
  Landmark,
  Eye,
  Disc,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for header background and custom top progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Helper to map icon names to Lucide Icon components
  const renderPillarIcon = (iconName: string, colorClass: string) => {
    const props = { className: `w-6 h-6 text-shroom-${colorClass}` };
    switch (iconName) {
      case 'Laugh': return <Laugh {...props} />;
      case 'Leaf': return <Leaf {...props} />;
      case 'Music': return <Music {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Heart': return <Heart {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-shroom-dark text-shroom-cream selection:bg-shroom-green selection:text-shroom-dark relative">
      
      {/* Scroll Progress Bar - Glowing Lime Green */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#d4ff00] shadow-[0_0_10px_#d4ff00] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Atmospheric Background Elements - Deep Moss Greens & Acid Radiance */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1a3a1a] rounded-full blur-[120px] opacity-20 pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#d4ff00] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10 animate-pulse-slow font-display shadow-lg" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#102410] rounded-full blur-[160px] opacity-15 pointer-events-none -z-10" />

      {/* Modern High-Contrast Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#050805]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d4ff00] group-hover:border-white transition-colors duration-300 shadow-lg">
              <img 
                src={shroomLogo} 
                alt="Logo Cultura Shroom" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-serif italic tracking-widest uppercase text-shroom-cream group-hover:text-[#d4ff00] transition-colors">
                Cultura Shroom
              </span>
              <span className="hidden sm:block text-[9px] font-sans tracking-[0.25em] text-[#d4ff00] uppercase font-light mt-0.5">
                Conexão • Tolice • Libertação
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] font-sans text-slate-300">
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Manifesto</button>
            <button onClick={() => scrollToSection('pilares')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Pilares</button>
            <button onClick={() => scrollToSection('fundadores')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Raízes</button>
            <button onClick={() => scrollToSection('nomenclatura')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Nomenclaturas</button>
            <button onClick={() => scrollToSection('simbolo')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Símbolo</button>
            <button onClick={() => scrollToSection('educativo')} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Responsabilidade</button>
          </nav>

          {/* Call to action */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('shroomland-portal')}
              className="px-6 py-3 bg-[#d4ff00] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-none font-sans flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Compass className="w-4 h-4 text-black animate-spin-slow" />
              Entrar em Shroomland
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-shroom-cream hover:text-[#d4ff00] p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-out Menu Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-30 bg-[#050805]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 animate-in fade-in duration-300">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center gap-6 text-sm font-light uppercase tracking-widest text-[#e0e0d0] font-sans">
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic">Manifesto</button>
            <button onClick={() => scrollToSection('pilares')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic">Pilares</button>
            <button onClick={() => scrollToSection('fundadores')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic">As Raízes</button>
            <button onClick={() => scrollToSection('nomenclatura')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic font-serif">Nomenclaturas</button>
            <button onClick={() => scrollToSection('simbolo')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic">O Cogumelo</button>
            <button onClick={() => scrollToSection('educativo')} className="hover:text-[#d4ff00] transition-colors text-xl font-serif italic">Responsabilidade</button>
          </nav>
          <button
            onClick={() => scrollToSection('shroomland-portal')}
            className="px-6 py-3 bg-[#d4ff00] text-black font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2 rounded-none font-sans"
          >
            <Compass className="w-4 h-4 text-black" />
            Entrar em Shroomland
          </button>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <ScrollAnimate as="section" id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Image Panel (Festival Canopy with subtle overlays) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={festivalHero} 
            alt="Festival Shroomland Forest Background" 
            className="w-full h-full object-cover scale-102 filter brightness-[0.25] saturate-120 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shroom-dark via-shroom-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-shroom-dark/40 via-transparent to-shroom-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content: 7/12 */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 bg-[#1a3a1a]/30 border border-[#d4ff00]/30 px-3 py-1 bg-shroom-dark/40 rounded-none w-max animate-pulse">
              <Sparkles className="w-4 h-4 text-[#d4ff00]" />
              <span className="text-[10px] font-sans tracking-widest text-[#d4ff00] uppercase font-bold">MOVIMENTO CONTRA-CULTURAL ATIVO</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] glow-text mb-4 italic font-light text-shroom-cream">
              Liberdade,<br/><span className="font-semibold not-italic text-[#d4ff00]">Trance &</span><br/>Humor.
            </h1>

            <p className="text-lg md:text-xl font-serif italic text-slate-300 tracking-wide leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl leading-relaxed">
              UMA COMUNIDADE CULTURAL DE CONSCIÊNCIA COLETIVA. NASCEMOS NA FLORESTA NOTURNA PARA DESCONSTRUIR AS PRESSÕES SOCIAIS ATRAVÉS DA DANÇA, DO RISO E DA CONEXÃO ORGÂNICA.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 pt-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="px-6 py-3 bg-[#d4ff00] text-black font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-none font-sans flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                ENTRAR EM SHROOMLAND
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              
              <button
                onClick={() => scrollToSection('shroomland-portal')}
                className="px-6 py-3 border border-white/20 text-[#e0e0d0] text-xs uppercase tracking-widest hover:bg-white/10 transition-colors rounded-none font-sans flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Compass className="w-4 h-4 text-[#d4ff00]" />
                EXPLORAR PORTAL
              </button>
            </div>
          </div>

          {/* Hero Right Logo Emblem Highlight Case: 5/12 */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 group">
              
              {/* Outer Sacred Geometry Ring Layer */}
              <div className="absolute -inset-4 rounded-full border border-[#d4ff00]/10 group-hover:border-[#d4ff00]/25 animate-spin-slow pointer-events-none transition-all duration-500" />
              <div className="absolute -inset-1.5 rounded-full border border-white/10 group-hover:border-white/25 animate-spin pointer-events-none transition-all duration-500 [animation-duration:15s]" />

              {/* Glowing Background aura */}
              <div className="absolute inset-0 bg-[#d4ff00]/5 rounded-full blur-2xl group-hover:bg-[#d4ff00]/10 transition-all pointer-events-none" />

              {/* Main Circular Image Frame Wrapper */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-102 animate-float glow-amber">
                <img 
                  src={shroomLogo} 
                  alt="Cultura Shroom Logótipo" 
                  className="w-full h-full object-cover filter brightness-[0.9] saturate-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative spotlight cover */}
                <div className="absolute inset-0 bg-[#d4ff00]/5 pointer-events-none mix-blend-color-dodge" />
              </div>

              {/* Floating Decorative Orbs mimicking Spores */}
              <div className="absolute top-10 left-4 w-3.5 h-3.5 bg-[#d4ff00] rounded-full glow-amber animate-pulse" />
              <div className="absolute bottom-16 right-0 w-2.5 h-2.5 bg-[#d4ff00] rounded-full glow-purple animate-pulse [animation-delay:1s]" />
              <div className="absolute top-[80%] left-10 w-2 h-2 bg-white/40 rounded-full opacity-70 animate-pulse [animation-delay:1.5s]" />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={() => scrollToSection('sobre')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-slate-500 hover:text-shroom-amber transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase">CONEXÃO</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </ScrollAnimate>

      {/* 2. SOBRE A CULTURA SHROOM */}
      <ScrollAnimate as="section" id="sobre" className="py-20 md:py-28 relative bg-[#0a0e0a]/70 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text Block: 7/12 */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#d4ff00] animate-spin-slow" />
                <span className="text-2xs font-mono uppercase tracking-widest text-[#d4ff00] font-bold">A ORIGEM</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
                {SOBRE_CONTENT.title}
              </h2>

              <div className="space-y-4.5 text-slate-300 font-light text-sm md:text-base leading-relaxed font-sans">
                {SOBRE_CONTENT.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="p-4 rounded-none glass border-l-4 border-l-[#d4ff00] bg-white/[0.01]">
                <p className="text-xs md:text-sm font-serif text-[#e0e0d0] italic font-light">
                  "Não pretendemos recriar ordens rígidas, mas sim suspender as pressões da validação material, permitindo que as relações humanas aconteçam com espontaneidade, arte e alegria."
                </p>
              </div>

            </div>

            {/* Right Graphic Panel (The Metaphoric Tree & Forest): 5/12 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 md:p-8 rounded-none glass border border-white/10 relative overflow-hidden text-center w-full max-w-sm shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1a3a1a]/20 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-4xl mb-3 block">🌲🍂🌀</span>
                <h4 className="text-base font-bold font-serif italic tracking-wide mb-2 text-[#e0e0d0]">
                  Espírito de Festival
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  Inspirados na energia pacífica das dunas, debaixo das estrelas e em frente ao som, cultivamos um senso alternativo de união.
                </p>
                
                {/* Visual grid decorative representing values */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-left">
                  <div className="bg-[#050805]/90 p-2 rounded-none border border-white/5">
                    <span className="text-[#d4ff00] block font-bold">▲ LIBERDADE</span>
                    Sem amarras sociais.
                  </div>
                  <div className="bg-[#050805]/90 p-2 rounded-none border border-white/5">
                    <span className="text-white block font-bold">★ TRANCE</span>
                    Frequência cósmica.
                  </div>
                  <div className="bg-[#050805]/90 p-2 rounded-none border border-white/5">
                    <span className="text-[#d4ff00] block font-bold">● LIGAÇÃO</span>
                    Micélio integrativo.
                  </div>
                  <div className="bg-[#050805]/90 p-2 rounded-none border border-white/5">
                    <span className="text-white block font-bold">♥ CUIDADO</span>
                    Bom coração.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </ScrollAnimate>

      {/* 3. MISSÃO E VISÃO (Bento-Style frosted-glass cards side-by-side) */}
      <ScrollAnimate as="section" className="py-20 bg-[#050805] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card Missao: Glassmorphic Earth Green */}
            <div id="missao-card" className="p-8 md:p-10 rounded-none glass border border-white/10 hover:border-[#d4ff00]/40 transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#d4ff00]/10 transition-all" />
              
              <div>
                <div className="w-12 h-12 bg-[#1a3a1a]/30 border border-[#d4ff00]/25 rounded-none flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-[#d4ff00] animate-spin-slow" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif italic mb-4 text-white uppercase tracking-wide">
                  {MISSAO_VISAO_CONTENT.missao.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed font-sans">
                  {MISSAO_VISAO_CONTENT.missao.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-2xs font-mono uppercase tracking-widest text-[#d4ff00]">
                <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-none animate-pulse" />
                CONEXÃO E COMUNIDADE
              </div>
            </div>

            {/* Card Visao: Glassmorphic Violet Purple */}
            <div id="visao-card" className="p-8 md:p-10 rounded-none glass border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all" />
              
              <div>
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif italic mb-4 text-white uppercase tracking-wide">
                  {MISSAO_VISAO_CONTENT.visao.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed font-sans">
                  {MISSAO_VISAO_CONTENT.missao.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-2xs font-mono uppercase tracking-widest text-slate-300">
                <span className="w-1.5 h-1.5 bg-white rounded-none animate-pulse" />
                LIBERTAÇÃO E CORES
              </div>
            </div>

          </div>

        </div>
      </ScrollAnimate>

      {/* 4. PILARES DA COMUNIDADE */}
      <ScrollAnimate as="section" id="pilares" className="py-20 md:py-28 bg-[#0a0e0a]/40 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-none text-xs font-mono text-[#d4ff00]">
              <Landmark className="w-3.5 h-3.5" />
              <span>OS PILARES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
              Sustentáculos Cósmicos do Micélio
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-light font-sans">
              Descubra os princípios fundamentais que regem a inteligência coletiva e o calor afetivo da Cultura Shroom.
            </p>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PILARES_DATA.map((pilar) => (
              <div 
                id={`pilar-card-${pilar.id}`}
                key={pilar.id} 
                className="p-6 rounded-none glass border border-white/10 hover:border-[#d4ff00]/40 hover:bg-[#1a3a1a]/15 transition-all duration-300 flex flex-col justify-between h-[280px] shadow-lg group relative overflow-hidden"
              >
                {/* Fixed neon top highlight line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#d4ff00] opacity-80" />

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-none flex items-center justify-center bg-[#050805]/95 border border-white/10 shadow-inner">
                    {renderPillarIcon(pilar.iconName, 'green')}
                  </div>
                  <h3 className="text-base font-serif italic font-bold text-white tracking-wide leading-tight group-hover:text-[#d4ff00] transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
                    {pilar.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 pt-4 text-3xs font-mono uppercase tracking-widest text-[#d4ff00]">
                  <span>Princípio Ativo</span>
                  <span className="w-1 h-1 rounded-none bg-[#d4ff00] inline-block animate-pulse" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollAnimate>

      {/* 5. FUNDADORES */}
      <ScrollAnimate as="section" id="fundadores" className="py-20 md:py-28 bg-[#050805] relative overflow-hidden">
        
        {/* Background Atmosphere circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4ff00]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-none text-xs font-mono text-[#d4ff00]">
              <span>AS RAÍZES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
              Primeiras Raízes Deste Micélio Coletivo
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-light font-sans">
              Os fundadores representam as primeiras raízes deste movimento cultural, simbolizando a origem afetiva, criativa e comunitária da Cultura Shroom.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {FUNDADORES_DATA.map((founder, idx) => (
              <div 
                id={`founder-card-${founder.id}`}
                key={founder.id}
                className="p-5 rounded-none glass border border-white/10 hover:border-[#d4ff00]/40 transition-all duration-300 flex flex-col justify-between text-center relative group overflow-hidden"
              >
                {/* Background aura gradient for founders */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#d4ff00]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#d4ff00]/10 transition-all pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Styled Avatar Placeholder representation with nice visual tokens */}
                  <div className="mx-auto w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-[#050805]/95 group-hover:border-[#d4ff00] shadow-2xl relative overflow-hidden transition-all duration-500">
                    <span className="text-3xl relative z-10 select-none">
                      {idx === 0 ? "🦁" : idx === 1 ? "🦋" : idx === 2 ? "🦉" : idx === 3 ? "🐒" : "🐾"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a1a]/25 via-transparent to-transparent opacity-80" />
                  </div>

                  <div>
                    <h3 className="text-base font-serif italic font-bold text-white tracking-wide">
                      {founder.name}
                    </h3>
                    <span className="text-3xs font-sans text-[#d4ff00] uppercase tracking-wider block mt-0.5">
                      {founder.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed min-h-[70px] font-sans">
                    {founder.description}
                  </p>

                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-2xs font-serif text-[#e0e0d0] italic">
                    "{founder.vibe}"
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollAnimate>

      {/* 6. NOMENCLATURA SHROOM */}
      <ScrollAnimate as="section" id="nomenclatura" className="py-20 md:py-28 bg-[#0a0e0a]/70 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-none text-xs font-mono text-[#d4ff00]">
              <Compass className="w-3.5 h-3.5" />
              <span>O DICIONÁRIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
              Nomenclatura Shroom
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-light font-sans leading-relaxed">
              Descubra os termos e as gírias irreverentes criadas no interior do clã, garantindo que a leveza, o riso e a celebração estejam sempre codificados.
            </p>
          </div>

          <NomenclaturaSection />

        </div>
      </ScrollAnimate>

      {/* 7. O SÍMBOLO DO COGUMELO & INTERACTIVE MYCELIUM NETWORK */}
      <ScrollAnimate as="section" id="simbolo" className="py-20 md:py-28 bg-[#050805] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text: 5/12 */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#d4ff00] animate-spin-slow" />
                <span className="text-2xs font-mono uppercase tracking-widest text-[#d4ff00] font-bold">A METÁFORA</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
                {SIMBOLO_CONTENT.title}
              </h2>

              <div className="space-y-4.5 text-slate-300 font-light text-sm md:text-base leading-relaxed font-sans">
                {SIMBOLO_CONTENT.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

            </div>

            {/* Right Interactive Network Canvas Simulation: 7/12 */}
            <div className="lg:col-span-7">
              <MyceliumNetwork />
            </div>

          </div>

        </div>
      </ScrollAnimate>

      {/* 8. NOTA EDUCATIVA (SÉRIA, DISCRETA, RESPONSÁVEL) */}
      <ScrollAnimate as="section" id="educativo" className="py-14 bg-[#0a0e0a]/70 border-y border-white/5">
        <div id="educacional-wrapper" className="max-w-4xl mx-auto px-4">
          <div className="p-6 md:p-8 rounded-none glass border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
            
            <div className="bg-white/5 border border-white/10 w-11 h-11 flex items-center justify-center rounded-none shrink-0 mt-1">
              <AlertCircle className="w-6 h-6 text-[#d4ff00]" />
            </div>

            <div className="space-y-3.5">
              <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-[#d4ff00]">
                {NOTA_EDUCATIVA.title}
              </h3>
              
              <div className="space-y-3 font-sans font-light text-slate-400 text-xs md:text-sm leading-relaxed text-justify">
                {NOTA_EDUCATIVA.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </ScrollAnimate>

      {/* 9. DECLARAÇÃO CULTURAL MANIFESTO & ACTIVE PORTAL GATEWAY */}
      <ScrollAnimate as="section" id="declaracao-final" className="py-20 md:py-28 relative overflow-hidden bg-[#050805]/95 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
          
          <div className="w-16 h-16 rounded-full border border-white/15 mx-auto flex items-center justify-center bg-[#050805]/95 animate-pulse-slow font-serif text-2xl text-white shadow-inner">
            🍄
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight">
            {DECLARACAO_MANIFESTO.title}
          </h2>

          <p className="text-base md:text-lg text-slate-300 font-light max-w-4xl mx-auto leading-relaxed font-sans italic">
            "{DECLARACAO_MANIFESTO.text}"
          </p>

          <div className="pt-6">
            <button
              onClick={() => scrollToSection('shroomland-portal')}
              className="px-8 py-4 bg-[#d4ff00] text-black font-semibold text-xs tracking-widest uppercase rounded-none hover:bg-white hover:text-black transition-all font-sans flex items-center gap-2 mx-auto cursor-pointer shadow-md"
            >
              <Compass className="w-5 h-5 text-black animate-spin-slow" />
              {DECLARACAO_MANIFESTO.buttonText}
            </button>
          </div>

        </div>
      </ScrollAnimate>

      {/* 10. INTERACTIVE SHROOMLAND PORTAL (ACTIVE SOUND ENVIRONMENT & WALL) */}
      <ScrollAnimate as="section" id="shroomland-portal" className="py-20 md:py-28 bg-[#0a0e0a]/40 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-none text-xs font-mono text-[#d4ff00]">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>O PORTAL DOS ESPOROS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-wide">
              Território Virtual de Shroomland
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-light font-sans">
              Bem-vindo ao espaço interativo! Sintonize frequências do clã rítmico no sintetizador ou registre a sua semente espiritual anônima no mural da tribo.
            </p>
          </div>

          <ShroomlandPortal />

        </div>
      </ScrollAnimate>

      {/* FOOTER */}
      <footer className="bg-[#050805] border-t border-white/5 py-12 text-slate-500 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d4ff00]">
              <img src={shroomLogo} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <span className="text-lg font-serif italic text-[#e0e0d0] tracking-wider uppercase">Cultura Shroom</span>
              <p className="text-[10px] text-[#d4ff00] font-sans tracking-widest mt-0.5 uppercase">Conexão • Tolice • Libertação</p>
            </div>
          </div>

          {/* Quick links & references */}
          <div className="text-center font-sans font-light">
            <p>© 2026 Cultura Shroom. Todos os direitos reservados do micélio coletivo.</p>
            <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-widest">Concorrência de Arte, Trance e Humor Simbólico.</p>
          </div>

          {/* Bottom stats / indicator */}
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-none border border-white/10 font-mono text-3xs text-[#d4ff00]">
            <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-none animate-pulse" />
            <span>ALIANÇA DO RISO ATIVA</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
