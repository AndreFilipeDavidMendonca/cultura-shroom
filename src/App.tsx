/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

// @ts-ignore
import shroomLogo from './assets/images/shroom_cultura_logo.jpg';
// @ts-ignore
import festivalHero from './assets/images/cultura_shroom_festival_hero_1782048743292.jpg';

import { PILARES_DATA, FUNDADORES_DATA } from './data';

import { useLanguage } from './contexts/LanguageContext';
import { translations } from './i18n/translations';

import NomenclaturaSection from './components/NomenclaturaSection';
import CogumeloSection from './components/CogumeloSection';
import ScrollAnimate from './components/ScrollAnimate';
import { Mushroom, Spores, WaveDivider, MyceliumThread, SectionTag } from './components/Decor';

import {
  Laugh, Leaf, Music, Activity, Globe, Smile, Heart,
  Menu, X, ArrowDown, Sparkles, AlertCircle, Compass,
  Landmark, ArrowRight, Users, TreePine, BookOpen,
  MapPin, Sprout, CheckCircle2
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { lang, setLang } = useLanguage();
  const t = translations[lang];

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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const iconColorMap: Record<string, string> = {
    amber: 'text-shroom-amber',
    green: 'text-shroom-green',
    purple: 'text-shroom-lilac',
    gold: 'text-shroom-gold',
    sand: 'text-shroom-sand',
    red: 'text-shroom-red',
  };

  const renderPillarIcon = (iconName: string, colorClass: string) => {
    const props = { className: `w-6 h-6 ${iconColorMap[colorClass] || 'text-shroom-gold'}` };
    switch (iconName) {
      case 'Laugh':    return <Laugh    {...props} />;
      case 'Leaf':     return <Leaf     {...props} />;
      case 'Music':    return <Music    {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Globe':    return <Globe    {...props} />;
      case 'Smile':    return <Smile    {...props} />;
      case 'Heart':    return <Heart    {...props} />;
      default:         return <Sparkles {...props} />;
    }
  };

  const navLinks = [
    { id: 'manifesto',    label: t.nav.manifesto },
    { id: 'pilares',      label: t.nav.pilares },
    { id: 'shrooms',      label: t.nav.shrooms },
    { id: 'raizes',       label: t.nav.raizes },
    { id: 'nomenclatura', label: t.nav.nomenclatura },
    { id: 'shroomland',   label: t.nav.shroomland },
    { id: 'cogumelo',     label: t.nav.cogumelo },
  ];

  // Dados com traduções mescladas
  const pilares = PILARES_DATA.map((p, i) => ({ ...p, ...t.pilares.data[i] }));
  const founders = FUNDADORES_DATA.map((f, i) => ({ ...f, ...t.raizes.foundersData[i] }));

  // Seletor PT / EN
  const LangSwitcher = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-1 font-mono text-[10px] tracking-[0.18em] ${className}`}>
      <button
        onClick={() => setLang('pt')}
        className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'pt' ? 'text-shroom-lightgreen font-bold' : 'text-shroom-cream/35 hover:text-shroom-cream/65'}`}
        aria-label="Português"
      >
        PT
      </button>
      <span className="text-shroom-cream/20 select-none">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'en' ? 'text-shroom-lightgreen font-bold' : 'text-shroom-cream/35 hover:text-shroom-cream/65'}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-shroom-dark text-shroom-cream selection:bg-shroom-green/30 selection:text-shroom-lightgreen relative">

      {/* Barra de progresso */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #3d6e2e, #c8861a, #5ea845)',
          boxShadow: '0 0 12px rgba(94,168,69,0.6)',
        }}
      />

      {/* Auras de fundo */}
      <div className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] bg-shroom-moss rounded-full blur-[140px] opacity-[0.14] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-12%] w-[460px] h-[460px] bg-shroom-earth rounded-full blur-[150px] opacity-[0.10] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[620px] h-[620px] bg-shroom-purple rounded-full blur-[170px] opacity-[0.06] pointer-events-none -z-10" />

      {/* ═══════════ HEADER ═══════════ */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 ${
            scrolled
              ? 'py-2 bg-shroom-night/90 backdrop-blur-xl border border-shroom-green/20 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]'
              : 'py-2 bg-transparent border border-transparent'
          }`}>

            {/* Logo + Nome */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10 shrink-0">
                <div className="absolute -inset-1 rounded-full border border-shroom-green/25 group-hover:border-shroom-green/55 animate-spin-slow transition-colors" />
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-shroom-gold/60 group-hover:border-shroom-gold shadow-[0_0_14px_-4px_rgba(94,168,69,0.5)] transition-colors duration-300 relative z-10">
                  <img
                    src={shroomLogo}
                    alt="Logótipo Cultura Shroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="text-base md:text-xl font-serif italic tracking-[0.10em] uppercase text-shroom-cream group-hover:text-shroom-lightgreen transition-colors leading-none">
                  Cultura Shroom
                </span>
                <span className="hidden md:block text-[8px] font-sans tracking-[0.28em] text-shroom-gold/80 uppercase font-light mt-0.5">
                  {t.logoTagline}
                </span>
              </div>
            </div>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[10px] font-medium uppercase tracking-[0.16em] font-sans text-shroom-cream/60">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="relative py-1 hover:text-shroom-lightgreen transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 hover:after:w-full after:bg-shroom-green after:transition-all after:duration-300 whitespace-nowrap"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Seletor de idioma — desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <LangSwitcher />
            </div>

            {/* Hamburger + lang mobile */}
            <div className="lg:hidden flex items-center gap-2">
              <LangSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-shroom-cream hover:text-shroom-lightgreen p-2 transition-colors rounded-full hover:bg-shroom-green/10"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-shroom-night/98 backdrop-blur-xl flex flex-col justify-center items-center animate-in fade-in duration-200">
          <Spores count={10} />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-shroom-cream/60 hover:text-shroom-lightgreen p-2 rounded-full hover:bg-shroom-green/10 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8 relative z-10">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-shroom-gold/50 mx-auto">
              <img src={shroomLogo} alt="Cultura Shroom" className="w-full h-full object-cover" />
            </div>
          </div>

          <nav className="flex flex-col items-center gap-5 relative z-10 w-full px-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="hover:text-shroom-lightgreen transition-colors text-xl font-serif italic text-shroom-cream/85 w-full text-center py-1.5 border-b border-shroom-green/10 last:border-b-0"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 relative z-10 flex flex-col items-center gap-4">
            <button
              onClick={() => scrollToSection('shroomland')}
              className="btn-shroom px-7 py-3 font-semibold text-xs tracking-widest uppercase flex items-center gap-2 font-sans"
            >
              <Compass className="w-4 h-4" />
              {t.hero.primaryBtn}
            </button>
          </div>
        </div>
      )}

      {/* ═══════════ 1. HERO ═══════════ */}
      <ScrollAnimate as="section" id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src={festivalHero}
            alt="Shroomland na floresta noturna"
            className="w-full h-full object-cover scale-105 filter brightness-[0.32] saturate-[1.1] animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shroom-dark via-shroom-dark/80 to-shroom-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-br from-shroom-moss/20 via-transparent to-shroom-earth/15 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-gradient-to-b from-shroom-dark/50 via-transparent to-shroom-dark" />
        </div>

        <Spores count={16} className="z-[1]" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shroom-green/10 border border-shroom-green/30 w-max backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-shroom-green animate-pulse shadow-[0_0_8px_var(--color-shroom-green)]" />
              <span className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] text-shroom-lightgreen uppercase font-bold">{t.hero.badge}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[0.95] glow-text italic font-light text-shroom-cream">
              {t.hero.headingLine1}<br />
              <span className="font-semibold not-italic bg-gradient-to-r from-shroom-lightgold via-shroom-gold to-shroom-amber bg-clip-text text-transparent">{t.hero.headingLine2}</span><br />
              {t.hero.headingLine3}
            </h1>

            <p className="text-base md:text-xl font-serif italic text-shroom-beige/90 tracking-wide leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <p className="text-sm text-shroom-cream/55 font-light max-w-xl leading-relaxed tracking-wide hidden sm:block">
              {t.hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('shroomland')}
                className="btn-shroom px-6 py-3.5 font-semibold text-xs uppercase tracking-[0.14em] font-sans flex items-center justify-center gap-2 cursor-pointer"
              >
                {t.hero.primaryBtn}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('nomenclatura')}
                className="btn-ghost px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-sans flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-shroom-gold" />
                {t.hero.secondaryBtn}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] group">
              <div className="absolute -inset-6 rounded-full border border-shroom-green/12 group-hover:border-shroom-green/25 animate-spin-slow pointer-events-none transition-all duration-500" />
              <div className="absolute -inset-2 rounded-full border border-shroom-gold/15 group-hover:border-shroom-gold/30 animate-spin-reverse pointer-events-none transition-all duration-500" />
              <div className="absolute inset-0 bg-shroom-moss/8 rounded-full blur-3xl group-hover:bg-shroom-moss/15 transition-all pointer-events-none animate-pulse-slow" />
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-shroom-gold/40 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02] animate-float glow-gold">
                <img src={shroomLogo} alt="Logótipo Cultura Shroom" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-8 left-1 w-3 h-3 bg-shroom-green rounded-full glow-green animate-pulse" />
              <div className="absolute bottom-14 -right-1 w-2.5 h-2.5 bg-shroom-gold rounded-full glow-gold animate-pulse [animation-delay:1s]" />
              <Mushroom className="absolute -bottom-3 -left-2 w-10 h-12 opacity-90 animate-float [animation-delay:0.6s] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" capColor="var(--color-shroom-earth)" />
            </div>
          </div>

        </div>

        <div
          onClick={() => scrollToSection('manifesto')}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-shroom-cream/40 hover:text-shroom-lightgreen transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-[8px] font-mono tracking-[0.3em] uppercase">{t.hero.scrollLabel}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

      </ScrollAnimate>

      <div className="relative -mt-px bg-shroom-dark">
        <WaveDivider color="#142110" />
      </div>

      {/* ═══════════ 2. MANIFESTO ═══════════ */}
      <ScrollAnimate as="section" id="manifesto" className="py-14 md:py-20 lg:py-28 relative bg-shroom-deep/70 border-y border-shroom-green/10 section-glow-green">
        <MyceliumThread className="absolute top-6 right-6 w-64 h-32 opacity-40 hidden md:block pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 group">
                <div className="absolute -inset-4 rounded-full border border-shroom-gold/12 animate-spin-slow pointer-events-none" />
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-shroom-gold/35 shadow-xl glow-gold transition-transform duration-500 group-hover:scale-[1.03]">
                  <img src={shroomLogo} alt="Cultura Shroom" className="w-full h-full object-cover" />
                </div>
                <Mushroom className="absolute -bottom-3 right-3 w-9 h-11 opacity-80 animate-float" capColor="var(--color-shroom-bark)" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">

              <SectionTag>
                <Sprout className="w-3.5 h-3.5" />
                {t.manifesto.sectionTag}
              </SectionTag>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
                {t.manifesto.title}
              </h2>

              <div className="space-y-3.5 text-shroom-cream/75 font-light text-sm md:text-base leading-relaxed font-sans">
                {t.manifesto.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="space-y-2 pt-1">
                {t.manifesto.closing.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-shroom-green mt-1.5 shrink-0 animate-pulse" style={{ animationDelay: `${idx * 0.4}s` }} />
                    <p className="text-sm font-serif italic text-shroom-beige/90">{line}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 md:p-5 organic-card glass border-l-4 border-l-shroom-green relative overflow-hidden">
                <Mushroom className="absolute -right-2 -bottom-3 w-14 h-16 opacity-15" capColor="var(--color-shroom-moss)" />
                <p className="text-sm md:text-base font-serif text-shroom-lightgreen italic font-light relative z-10">
                  "{t.manifesto.quote}"
                </p>
              </div>

            </div>
          </div>
        </div>
      </ScrollAnimate>

      {/* ═══════════ 3. PILARES ═══════════ */}
      <ScrollAnimate as="section" id="pilares" className="py-14 md:py-20 lg:py-28 bg-shroom-pine/30 relative border-y border-shroom-gold/10 overflow-hidden">
        <Spores count={8} />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
            <SectionTag>
              <Landmark className="w-3.5 h-3.5" />
              {t.pilares.sectionTag}
            </SectionTag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
              {t.pilares.title}
            </h2>
            <p className="text-sm text-shroom-cream/55 font-light font-sans">
              {t.pilares.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {pilares.map((pilar) => (
              <div
                key={pilar.id}
                className="p-5 md:p-6 organic-card glass border border-shroom-green/10 hover:border-shroom-green/35 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[240px] md:min-h-[280px] shadow-lg group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-shroom-moss via-shroom-green to-shroom-lightgreen opacity-70" />
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-shroom-moss/8 rounded-full blur-2xl pointer-events-none group-hover:bg-shroom-moss/16 transition-all" />

                <div className="space-y-3 relative z-10">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-shroom-night/70 border border-shroom-green/15 shadow-inner group-hover:scale-105 transition-transform">
                    {renderPillarIcon(pilar.iconName, pilar.colorClass)}
                  </div>
                  <h3 className="text-base md:text-lg font-serif italic font-semibold text-shroom-cream tracking-wide leading-tight group-hover:text-shroom-lightgreen transition-colors">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-shroom-cream/55 leading-relaxed font-light font-sans">
                    {pilar.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-3 text-[9px] font-mono uppercase tracking-[0.2em] text-shroom-green/70 relative z-10">
                  <span>{t.pilares.pillarFooter}</span>
                  <span className="w-1 h-1 rounded-full bg-shroom-green inline-block animate-pulse" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollAnimate>

      {/* ═══════════ 4. QUEM SÃO OS SHROOMS ═══════════ */}
      <ScrollAnimate as="section" id="shrooms" className="py-14 md:py-20 lg:py-28 bg-shroom-deep/60 relative overflow-hidden border-y border-shroom-earth/20 section-glow-earth">
        <Spores count={6} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shroom-moss/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
            <SectionTag>
              <Users className="w-3.5 h-3.5" />
              {t.shrooms.sectionTag}
            </SectionTag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
              {t.shrooms.title}
            </h2>
            <p className="text-sm text-shroom-cream/55 font-light font-sans">
              {t.shrooms.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            <div className="space-y-4">
              {t.shrooms.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm md:text-base text-shroom-cream/75 font-light leading-relaxed font-sans">
                  {p}
                </p>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('raizes')}
                  className="btn-shroom px-5 py-2.5 font-semibold text-[11px] uppercase tracking-[0.13em] font-sans flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
                >
                  <TreePine className="w-4 h-4" />
                  {t.shrooms.rootsBtn}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.shrooms.types.map((type, idx) => (
                <div
                  key={idx}
                  className="p-4 organic-card glass border border-shroom-green/12 hover:border-shroom-green/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-shroom-forest/60 border border-shroom-green/20 flex items-center justify-center shrink-0 group-hover:border-shroom-green/40 transition-colors mt-0.5">
                      <Mushroom className="w-4 h-5" capColor="var(--color-shroom-moss)" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif italic font-semibold text-shroom-lightgreen mb-1 leading-tight">
                        {type.label}
                      </h4>
                      <p className="text-xs text-shroom-cream/55 font-light leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </ScrollAnimate>

      {/* ═══════════ 5. RAÍZES ═══════════ */}
      <ScrollAnimate as="section" id="raizes" className="py-14 md:py-20 lg:py-28 bg-shroom-night relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-shroom-earth/5 rounded-full blur-3xl pointer-events-none" />
        <MyceliumThread className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[420px] h-40 opacity-35 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
            <SectionTag>
              <TreePine className="w-3.5 h-3.5" />
              {t.raizes.sectionTag}
            </SectionTag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
              {t.raizes.title}
            </h2>
            <p className="text-sm text-shroom-cream/60 font-light font-sans">
              {t.raizes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {founders.map((founder, idx) => {
              const emojis = ["🦁", "🦋", "🌙", "🐒", "🌿"];
              return (
                <div
                  key={founder.id}
                  className="p-5 organic-card glass border border-shroom-gold/10 hover:border-shroom-gold/35 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between text-center relative group overflow-hidden"
                >
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-shroom-earth/10 rounded-full blur-xl pointer-events-none group-hover:bg-shroom-earth/20 transition-all" />

                  <div className="space-y-3.5 relative z-10">
                    <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full border border-shroom-gold/20 flex items-center justify-center bg-shroom-night/80 group-hover:border-shroom-gold shadow-2xl relative overflow-hidden transition-all duration-500">
                      <span className="text-2xl md:text-3xl relative z-10 select-none">{emojis[idx]}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-shroom-earth/25 via-transparent to-transparent opacity-80" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-serif italic font-bold text-shroom-cream tracking-wide">
                        {founder.name}
                      </h3>
                      <span className="text-[9px] font-sans text-shroom-gold uppercase tracking-[0.15em] block mt-1">
                        {founder.role}
                      </span>
                    </div>
                    <p className="text-xs text-shroom-cream/55 font-light leading-relaxed font-sans">
                      {founder.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-shroom-gold/10 relative z-10">
                    <span className="text-[11px] font-serif text-shroom-beige italic">"{founder.vibe}"</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-shroom-cream/45 font-serif italic mt-8 md:mt-10 max-w-2xl mx-auto px-4">
            {t.raizes.footer}
          </p>

        </div>
      </ScrollAnimate>

      {/* ═══════════ 6. SHROOM GLOSSÁRIO ═══════════ */}
      <ScrollAnimate as="section" id="nomenclatura" className="py-14 md:py-20 lg:py-28 bg-shroom-deep/60 relative border-y border-shroom-green/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
            <SectionTag>
              <BookOpen className="w-3.5 h-3.5" />
              {t.glossario.sectionTag}
            </SectionTag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
              {t.glossario.title}
            </h2>
            <p className="text-sm text-shroom-cream/55 font-light font-sans leading-relaxed">
              {t.glossario.subtitle}
            </p>
          </div>

          <NomenclaturaSection />

        </div>
      </ScrollAnimate>

      {/* ═══════════ 7. SHROOMLAND ═══════════ */}
      <ScrollAnimate as="section" id="shroomland" className="py-14 md:py-20 lg:py-32 relative overflow-hidden bg-shroom-night border-b border-shroom-green/10">
        <Spores count={12} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-shroom-moss/6 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 group">
                <div className="absolute -inset-6 rounded-full border border-shroom-green/12 animate-spin-slow pointer-events-none" />
                <div className="absolute -inset-2 rounded-full border border-shroom-gold/15 animate-spin-reverse pointer-events-none" />
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-shroom-gold/35 shadow-2xl glow-gold">
                  <img src={shroomLogo} alt="Shroomland — Cultura Shroom" className="w-full h-full object-cover" />
                </div>
                <Mushroom className="absolute -bottom-4 -right-2 w-10 h-12 opacity-90 animate-float [animation-delay:0.8s]" capColor="var(--color-shroom-earth)" />
                <Mushroom className="absolute -top-2 -left-3 w-7 h-9 opacity-65 animate-float [animation-delay:1.4s]" capColor="var(--color-shroom-bark)" />
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">

              <SectionTag>
                <MapPin className="w-3.5 h-3.5" />
                {t.shroomland.sectionTag}
              </SectionTag>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
                {t.shroomland.title}
              </h2>

              <div className="space-y-3.5 text-shroom-cream/75 font-light text-sm md:text-base leading-relaxed font-sans">
                {t.shroomland.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="space-y-2.5 pt-1">
                {t.shroomland.values.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-shroom-forest/20 border border-shroom-green/10 hover:border-shroom-green/25 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-shroom-green shrink-0" />
                    <span className="text-sm font-serif italic text-shroom-beige/90">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => scrollToSection('cogumelo')}
                  className="btn-shroom px-5 py-3 font-semibold text-xs uppercase tracking-[0.13em] font-sans flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  {t.shroomland.primaryBtn}
                </button>
                <button
                  onClick={() => scrollToSection('nomenclatura')}
                  className="btn-ghost px-5 py-3 text-xs uppercase tracking-[0.13em] font-sans flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-shroom-gold" />
                  {t.shroomland.secondaryBtn}
                </button>
              </div>

            </div>
          </div>

        </div>
      </ScrollAnimate>

      {/* ═══════════ 8. ESCOLHE UM COGUMELO ═══════════ */}
      <ScrollAnimate as="section" id="cogumelo" className="py-14 md:py-20 lg:py-28 bg-shroom-night relative overflow-hidden">
        <Spores count={8} />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <CogumeloSection />
        </div>
      </ScrollAnimate>

      {/* ═══════════ 9. DECLARAÇÃO FINAL ═══════════ */}
      <ScrollAnimate as="section" id="declaracao-final" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-shroom-night border-b border-shroom-gold/10">
        <Spores count={12} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-shroom-moss/6 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10 text-center space-y-6 md:space-y-8">

          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-shroom-gold/25 mx-auto flex items-center justify-center bg-shroom-night/80 animate-pulse-slow shadow-[0_0_40px_-8px_rgba(94,168,69,0.4)] overflow-hidden">
            <img src={shroomLogo} alt="Cultura Shroom" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic text-shroom-cream leading-tight">
            {t.declaracao.title}
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-shroom-beige/85 font-light leading-relaxed font-serif italic">
            "{t.declaracao.text}"
          </p>

          <div className="pt-2">
            <button
              onClick={() => scrollToSection('shroomland')}
              className="btn-shroom px-7 md:px-9 py-3.5 md:py-4 font-semibold text-xs tracking-[0.15em] uppercase font-sans flex items-center gap-2 mx-auto cursor-pointer"
            >
              <Compass className="w-4 h-4 md:w-5 md:h-5 animate-spin-slow" />
              {t.declaracao.buttonText}
            </button>
          </div>

        </div>
      </ScrollAnimate>

      {/* ═══════════ 10. NOTA DE RESPONSABILIDADE ═══════════ */}
      <ScrollAnimate as="section" id="educativo" className="py-8 md:py-10 bg-shroom-night/80 border-t border-shroom-earth/15">
        <div className="max-w-3xl mx-auto px-5">
          <div className="p-4 md:p-6 rounded-2xl bg-shroom-deep/50 border border-shroom-earth/20 flex flex-col sm:flex-row gap-4 items-start">
            <div className="bg-shroom-earth/15 border border-shroom-earth/25 w-9 h-9 flex items-center justify-center rounded-xl shrink-0">
              <AlertCircle className="w-4 h-4 text-shroom-clay" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-shroom-clay">
                {t.notaEducativa.title}
              </h3>
              <div className="space-y-2 font-sans font-light text-shroom-cream/40 text-xs leading-relaxed">
                {t.notaEducativa.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>

      <div className="relative -mb-px bg-shroom-night/80">
        <WaveDivider color="#060c05" />
      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="relative bg-shroom-night border-t border-shroom-gold/12 py-10 md:py-12 text-shroom-cream/45 font-sans text-xs overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-64 h-64 bg-shroom-moss/5 rounded-full blur-3xl pointer-events-none" />
        <MyceliumThread className="absolute top-0 right-10 w-56 h-28 opacity-25 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 relative z-10">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-shroom-gold/50 shadow-[0_0_14px_-4px_rgba(94,168,69,0.5)] shrink-0">
              <img src={shroomLogo} alt="Logo Cultura Shroom" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <span className="text-base md:text-lg font-serif italic text-shroom-cream tracking-[0.12em] uppercase">Cultura Shroom</span>
              <p className="text-[10px] text-shroom-gold/70 font-sans tracking-[0.2em] mt-0.5 uppercase">{t.logoTagline}</p>
            </div>
          </div>

          <div className="text-center font-sans font-light order-3 md:order-2">
            <p>{t.footer.copyright}</p>
            <p className="text-[10px] text-shroom-cream/28 mt-1 uppercase tracking-[0.2em]">{t.footer.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 bg-shroom-green/8 px-3 py-1.5 rounded-full border border-shroom-green/20 font-mono text-[9px] uppercase tracking-[0.15em] text-shroom-lightgreen/80 order-2 md:order-3">
            <span className="w-1.5 h-1.5 bg-shroom-green rounded-full animate-pulse" />
            <span>{t.footer.status}</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
