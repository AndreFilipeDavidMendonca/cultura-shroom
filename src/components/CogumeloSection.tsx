/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { COGUMELOS_PSILOCIBINOS, RatingLevel, CogumelhoPsilocibino } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Mushroom, SectionTag } from './Decor';
import { BookOpen, Sprout } from 'lucide-react';

// ─── Cores por nível de intensidade (chaves internas em PT) ──────────────────
const RATING_STYLE: Record<RatingLevel, { text: string; bg: string; border: string; dot: string }> = {
  'Baixo':         { text: 'text-shroom-lightgreen/90', bg: 'bg-shroom-green/10',    border: 'border-shroom-green/20',  dot: 'bg-shroom-green/50' },
  'Baixo a Médio': { text: 'text-shroom-lightgreen',    bg: 'bg-shroom-green/15',    border: 'border-shroom-green/30',  dot: 'bg-shroom-green/70' },
  'Médio':         { text: 'text-shroom-amber',         bg: 'bg-shroom-amber/10',    border: 'border-shroom-amber/25',  dot: 'bg-shroom-amber/70' },
  'Médio a Forte': { text: 'text-shroom-gold',          bg: 'bg-shroom-gold/10',     border: 'border-shroom-gold/25',   dot: 'bg-shroom-gold/80' },
  'Forte':         { text: 'text-shroom-orange',        bg: 'bg-shroom-orange/10',   border: 'border-shroom-orange/25', dot: 'bg-shroom-orange/80' },
  'Muito Forte':   { text: 'text-shroom-lilac',         bg: 'bg-shroom-purple/12',   border: 'border-shroom-lilac/30',  dot: 'bg-shroom-lilac/80' },
  'Variável':      { text: 'text-shroom-sand',          bg: 'bg-shroom-sand/10',     border: 'border-shroom-sand/20',   dot: 'bg-shroom-sand/60' },
};

function RatingBadge({ value }: { value: RatingLevel }) {
  const { lang } = useLanguage();
  const display = translations[lang].ratingDisplay[value];
  const s = RATING_STYLE[value];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${s.bg} ${s.text} border ${s.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {display}
    </span>
  );
}

interface MushroomCardProps {
  m: CogumelhoPsilocibino;
  profile: string;
  description: string;
  care: string;
  expandMore: string;
  expandLess: string;
  expLabels: { key: string; label: string }[];
}

function MushroomCard({ m, profile, description, care, expandMore, expandLess, expLabels }: MushroomCardProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="organic-card glass border border-shroom-green/10 hover:border-shroom-gold/25 transition-all duration-500 overflow-hidden flex flex-col group">
      <div className="h-1 w-full bg-gradient-to-r from-shroom-moss via-shroom-green to-shroom-lightgreen opacity-70" />

      <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">

        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Mushroom className="w-14 h-16 drop-shadow-md group-hover:scale-105 transition-transform duration-500" capColor={m.capColor} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-serif italic font-bold text-shroom-cream leading-tight">
              {m.species}
            </h3>
            {m.commonName && (
              <p className="text-[11px] font-sans text-shroom-gold/80 tracking-[0.12em] mt-0.5">{m.commonName}</p>
            )}
            <div className="mt-2">
              <RatingBadge value={m.intensidadeGeral} />
            </div>
          </div>
        </div>

        <p className="text-xs text-shroom-cream/65 leading-relaxed font-sans font-light">
          {profile}
        </p>

        <div className="space-y-1.5 border-t border-shroom-green/10 pt-3">
          {expLabels.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between gap-2 min-w-0">
              <span className="text-[9px] md:text-[10px] font-mono text-shroom-cream/45 uppercase tracking-[0.08em] shrink-0 truncate max-w-[110px]">
                {label}
              </span>
              <RatingBadge value={m.experience[key as keyof CogumelhoPsilocibino['experience']]} />
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-shroom-lightgreen/70 hover:text-shroom-lightgreen transition-colors"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? expandLess : expandMore}
          </button>
          {expanded && (
            <div className="mt-3 space-y-3 border-t border-shroom-green/10 pt-3">
              <p className="text-xs text-shroom-cream/70 leading-relaxed font-sans">
                {description}
              </p>
              <div className="p-3 rounded-xl bg-shroom-earth/10 border border-shroom-earth/20">
                <p className="text-[11px] font-serif italic text-shroom-clay/90 leading-relaxed">
                  {care}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function CogumeloSection() {
  const { lang } = useLanguage();
  const t = translations[lang].cogumelo;

  // Combina dados estruturais com textos traduzidos
  const mushrooms = COGUMELOS_PSILOCIBINOS.map((m, i) => ({
    ...m,
    ...t.mushroomsData[i],
  }));

  return (
    <>
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
        <SectionTag>
          <BookOpen className="w-3.5 h-3.5" />
          {t.sectionTag}
        </SectionTag>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-shroom-cream tracking-wide leading-tight">
          {t.title}
        </h2>
      </div>

      {/* Intro + efeitos possíveis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">

        <div className="space-y-4">
          {t.intro.map((p, i) => (
            <p key={i} className="text-sm md:text-base text-shroom-cream/75 font-light leading-relaxed font-sans">
              {p}
            </p>
          ))}
        </div>

        <div className="p-5 md:p-6 organic-card glass border border-shroom-green/12 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Sprout className="w-4 h-4 text-shroom-green shrink-0" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-shroom-lightgreen">{t.effectsNoteLabel}</span>
          </div>
          <p className="text-xs md:text-sm text-shroom-cream/70 leading-relaxed font-sans">
            {t.effectsNote}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {t.possibleEffects.map((e, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-shroom-green/60 mt-1.5 shrink-0" />
                <span className="text-[11px] text-shroom-cream/65 font-sans font-light leading-snug">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
        {mushrooms.map((m, i) => (
          <MushroomCard
            key={m.id}
            m={m}
            profile={m.profile}
            description={m.description}
            care={m.care}
            expandMore={t.expandMore}
            expandLess={t.expandLess}
            expLabels={t.expLabels as { key: string; label: string }[]}
          />
        ))}
      </div>

      {/* Tabela comparativa */}
      <div className="mb-12 md:mb-16">
        <h3 className="text-base md:text-lg font-serif italic text-shroom-cream/90 mb-4 md:mb-5 tracking-wide">
          {t.tableTitle}
        </h3>
        <p className="text-[10px] font-mono text-shroom-cream/35 mb-3 md:hidden tracking-wide">
          {t.tableScroll}
        </p>
        <div className="overflow-x-auto rounded-2xl border border-shroom-green/12 table-scroll-mobile">
          <table className="w-full min-w-[580px] text-[10px] md:text-[11px] font-mono">
            <thead>
              <tr className="bg-shroom-night/80 border-b border-shroom-green/15">
                <th className="text-left py-3 px-4 text-shroom-gold/80 uppercase tracking-[0.12em] font-medium sticky left-0 bg-shroom-night/90">{t.tableHeaders.species}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.visual}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.musical}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.social}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.reflexivo}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.energetico}</th>
                <th className="py-3 px-3 text-shroom-cream/60 uppercase tracking-[0.1em] font-medium whitespace-nowrap">{t.tableHeaders.intensidade}</th>
              </tr>
            </thead>
            <tbody>
              {COGUMELOS_PSILOCIBINOS.map((m, idx) => (
                <tr
                  key={m.id}
                  className={`border-b border-shroom-green/8 hover:bg-shroom-forest/15 transition-colors ${idx % 2 === 0 ? 'bg-shroom-deep/40' : 'bg-shroom-deep/20'}`}
                >
                  <td className="py-3 px-4 sticky left-0 bg-inherit">
                    <span className="text-shroom-cream/90 font-serif italic text-xs">{m.species}</span>
                    {m.commonName && (
                      <span className="text-shroom-gold/60 block text-[10px] mt-0.5 font-mono not-italic">{m.commonName}</span>
                    )}
                  </td>
                  {[m.experience.visual, m.experience.musical, m.experience.social, m.experience.reflexivo, m.experience.energetico, m.intensidadeGeral].map((val, vi) => {
                    const s = RATING_STYLE[val];
                    return (
                      <td key={vi} className="py-3 px-3 text-center">
                        <span className={`${s.text} whitespace-nowrap`}>{translations[lang].ratingDisplay[val]}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-shroom-cream/35 font-mono mt-3 text-center tracking-wide">
          {t.tableFooter}
        </p>
      </div>

      {/* Nota de responsabilidade */}
      <div className="p-5 md:p-6 rounded-2xl bg-shroom-deep/50 border border-shroom-earth/25 flex flex-col sm:flex-row gap-4 items-start">
        <div className="bg-shroom-earth/15 border border-shroom-earth/25 w-9 h-9 flex items-center justify-center rounded-xl shrink-0">
          <AlertCircle className="w-4 h-4 text-shroom-clay" />
        </div>
        <div className="space-y-2.5">
          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-shroom-clay">
            {t.responsibilityTitle}
          </h4>
          <div className="space-y-2 text-xs text-shroom-cream/50 leading-relaxed font-sans font-light">
            {t.responsibilityNote.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
