/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NOMENCLATURAS_DATA } from '../data';
import { BookOpen, RefreshCw, Zap, Headphones, CheckCircle } from 'lucide-react';

export default function NomenclaturaSection() {
  const [selectedTerm, setSelectedTerm] = useState(NOMENCLATURAS_DATA[0].term);
  const [inputText, setInputText] = useState("");
  const [shroomifiedText, setShroomifiedText] = useState("");

  const activeData = NOMENCLATURAS_DATA.find(n => n.term === selectedTerm) || NOMENCLATURAS_DATA[0];

  const handleShroomify = () => {
    if (!inputText.trim()) {
      setShroomifiedText("Escreva alguma coisa para o micélio traduzir!");
      return;
    }

    let text = inputText.toLowerCase();

    // Standard mappings
    text = text.replace(/(fim de semana|fds|fim-de-semana)/g, "Shroomkend 🍄")
               .replace(/(democracia|votação|governo|coletivo)/g, "Shroomocracia 🌟")
               .replace(/(caos|loucura|festa rija|celebração)/g, "Shroomaggaden 🔥")
               .replace(/(pista de dança|pista|chão|dancefloor)/g, "Shroomfloor 🔊")
               .replace(/(lugar|parque|natureza|festival|festival)/g, "Shroomland ⛰️")
               .replace(/(pessoa|participante|amigo|gajo|moça|anónimo)/g, "Shroomanónimo 🕊️")
               .replace(/(cogumelos|cogumelo)/g, "Shrooms 🍄")
               .replace(/(liberdade|livre)/g, "liberdade radical ✨")
               .replace(/(música|som|ritmo|trance)/g, "Trance Cósmico 🎶")
               .replace(/(conversar|falar)/g, "trocar esporos 💬")
               .replace(/(triste|aborrecido|trabalhar|stresso|stress)/g, "vazio consumista 🛒");

    // Add prefix/suffixes randomly to provide a funny, alternative response
    const words = text.split(" ");
    const processedWords = words.map((word, idx) => {
      if (word.length > 5 && !word.includes("shroom") && idx % 3 === 0) {
        return `shroom-${word}`;
      }
      return word;
    });

    let result = processedWords.join(" ");
    
    // Capitalize first letter
    result = result.charAt(0).toUpperCase() + result.slice(1);
    setShroomifiedText(result);
  };

  const getVibeColors = (colorName: string) => {
    switch (colorName) {
      case 'green': return { bg: 'glass-morphic-green', border: 'border-shroom-green/30', text: 'text-shroom-lightgreen' };
      case 'gold': return { bg: 'glass-morphic-amber', border: 'border-shroom-gold/30', text: 'text-shroom-gold' };
      case 'amber': return { bg: 'glass-morphic-amber', border: 'border-shroom-amber/30', text: 'text-shroom-amber' };
      case 'purple': return { bg: 'glass-morphic-purple', border: 'border-shroom-purple/30', text: 'text-shroom-purple' };
      default: return { bg: 'glass-morphic', border: 'border-shroom-beige/20', text: 'text-shroom-beige' };
    }
  };

  const vibe = getVibeColors(activeData.vibeColor);

  return (
    <div id="nomenclatura-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Glossary Display: 7/12 cols */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
        
        <div className="flex flex-wrap gap-2.5">
          {NOMENCLATURAS_DATA.map((item) => (
            <button
              id={`tab-vocab-${item.term.toLowerCase()}`}
              key={item.term}
              onClick={() => setSelectedTerm(item.term)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-all duration-300 border font-display ${
                selectedTerm === item.term
                  ? 'bg-shroom-amber/15 text-shroom-gold border-shroom-amber/50 shadow-lg scale-102 font-semibold'
                  : 'bg-shroom-deep/45 text-slate-400 border-white/5 hover:bg-shroom-deep/90 hover:text-slate-200'
              }`}
            >
              {item.term}
            </button>
          ))}
        </div>

        {/* Selected Term detail card */}
        <div id="term-detail" className={`p-6 md:p-8 rounded-2xl ${vibe.bg} border ${vibe.border} relative overflow-hidden transition-all duration-500 flex-1 flex flex-col justify-center min-h-[220px]`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />
          
          <div className="mb-4">
            <span className="text-2xs font-mono tracking-widest text-shroom-sand font-bold uppercase bg-shroom-dark/50 px-2 py-1 rounded">
              VOCABULÁRIO SHROOM
            </span>
          </div>

          <h3 className={`text-2xl md:text-3xl font-display font-semibold mb-3 tracking-wide ${vibe.text}`}>
            {activeData.term}
          </h3>

          <p className="text-sm md:text-base text-shroom-cream/90 leading-relaxed max-w-2xl">
            {activeData.definition}
          </p>

          <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-shroom-sand">
            <CheckCircle className="w-4 h-4 text-shroom-lightgreen" />
            <span>Símbolo de convivência cooperativa e humor.</span>
          </div>
        </div>

      </div>

      {/* Interactive translator: 5/12 cols */}
      <div className="lg:col-span-5">
        <div id="translator-box" className="p-6 md:p-8 rounded-2xl bg-shroom-deep border border-shroom-green/10 flex flex-col h-full justify-between relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-shroom-purple/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <BookOpen className="w-5 h-5 text-shroom-gold" />
              <h4 className="text-lg font-bold font-display tracking-wide text-shroom-cream">
                O Shroomificador
              </h4>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Traduz palavras enfadonhas e cansadas da pressão social contemporânea para o dialeto leve, livre e comunitário de Shroomland!
            </p>

            <textarea
              id="shroomify-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ex: No fim de semana, quero libertar-me do stresso, ir para a natureza com amigos ouvir música e dançar na pista!"
              className="w-full h-24 bg-shroom-dark px-4 py-3 rounded-xl border border-white/5 text-sm placeholder-slate-500 focus:outline-none focus:border-shroom-amber/50 font-sans resize-none text-shroom-cream"
            />
          </div>

          {/* Action button */}
          <div className="my-4">
            <button
              id="btn-shroomfy"
              onClick={handleShroomify}
              className="w-full py-2.5 bg-gradient-to-r from-shroom-amber to-shroom-gold text-shroom-dark font-semibold text-xs md:text-sm tracking-wide rounded-xl hover:from-shroom-gold hover:to-shroom-amber hover:shadow-lg hover:shadow-shroom-amber/10 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              Traduzir para Shroomland
            </button>
          </div>

          {/* Translation output */}
          <div className="bg-shroom-dark/80 px-4 py-3.5 rounded-xl border border-white/5 min-h-[90px] flex flex-col justify-between">
            <div className="flex items-center gap-1 mb-2">
              <Zap className="text-shroom-amber w-3.5 h-3.5" />
              <span className="text-2xs font-mono uppercase tracking-widest text-[#e5c28c]">Transmissão Codificada:</span>
            </div>
            
            <p className="text-xs md:text-sm text-shroom-cream/90 font-sans italic leading-relaxed min-h-[40px]">
              {shroomifiedText || <span className="text-slate-500 italic">"Aguarda codificação do micélio subterrâneo..."</span>}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
