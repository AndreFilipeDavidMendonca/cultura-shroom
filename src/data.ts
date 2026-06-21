/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pillar, Founder, Nomenclature } from './types';

export type RatingLevel =
  | 'Baixo'
  | 'Baixo a Médio'
  | 'Médio'
  | 'Médio a Forte'
  | 'Forte'
  | 'Muito Forte'
  | 'Variável';

export interface CogumelhoPsilocibino {
  id: string;
  species: string;
  commonName?: string;
  capColor: string;
  profile: string;
  description: string;
  experience: {
    visual: RatingLevel;
    musical: RatingLevel;
    social: RatingLevel;
    reflexivo: RatingLevel;
    energetico: RatingLevel;
    introspectivo: RatingLevel;
  };
  intensidadeGeral: RatingLevel;
  care: string;
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
export const HERO_CONTENT = {
  title: "Cultura Shroom",
  subtitle: "Uma comunidade simbólica de liberdade, música, humor, dança e presença coletiva.",
  tagline: "Os Shrooms encontram-se na floresta, na pista e em qualquer lugar onde a música, o riso e o respeito estejam presentes.",
  primaryBtn: "Entrar em Shroomland",
  secondaryBtn: "Explorar o Glossário"
};

// ─────────────────────────────────────────────
// MANIFESTO
// ─────────────────────────────────────────────
export const MANIFESTO_CONTENT = {
  title: "Manifesto",
  paragraphs: [
    "A Cultura Shroom é uma comunidade simbólica, artística e musical inspirada na natureza, na trance music, no riso, na dança e na libertação das pressões sociais contemporâneas.",
    "Os Shrooms reconhecem a tolice como força de libertação. O Shroom não procura parecer perfeito. O Shroom procura existir com leveza, respeito e verdade.",
    "A Cultura Shroom valoriza a simplicidade, a presença, a música, o humor e a ligação humana acima da aparência, do consumismo e da competição social.",
  ],
  closing: [
    "Em Shroomland, a liberdade não dispensa respeito.",
    "No Shroomfloor, o corpo fala.",
    "Na Shroomunidade, cada Shroom encontra o seu lugar.",
  ],
  quote: "Os Shrooms falam na terceira pessoa porque o Shroom observa-se a existir.",
};

// ─────────────────────────────────────────────
// MISSÃO & VISÃO (mantido para compatibilidade)
// ─────────────────────────────────────────────
export const MISSAO_VISAO_CONTENT = {
  missao: {
    title: "Missão",
    text: "Os Shrooms promovem uma cultura comunitária, criativa e inclusiva, centrada na música, na dança, no riso, na liberdade e no respeito coletivo — incentivando formas de existência mais leves e menos condicionadas pela pressão social e pelo consumismo."
  },
  visao: {
    title: "Visão",
    text: "A Shroomunidade inspira novas formas de celebração, convivência e expressão, onde a liberdade, a alegria e a criatividade são reconhecidas como elementos fundamentais de uma ligação mais autêntica entre os Shrooms."
  }
};

// ─────────────────────────────────────────────
// PILARES
// ─────────────────────────────────────────────
export const PILARES_DATA: Pillar[] = [
  {
    id: "pilar-1",
    title: "Abraçar a Tolice",
    description: "Os Shrooms reconhecem a tolice como uma forma legítima de libertação. A tolice não é falta de consciência — é a capacidade de suspender a rigidez social, rir de si próprio e viver com mais leveza.",
    iconName: "Laugh",
    colorClass: "amber"
  },
  {
    id: "pilar-2",
    title: "Libertar-se do Consumismo",
    description: "O Shroom procura libertar-se da cultura influenciada pelo consumismo, pela aparência, pelo estatuto e pela comparação constante. Os Shrooms valorizam experiências, música, natureza e ligação humana acima da acumulação material.",
    iconName: "Leaf",
    colorClass: "green"
  },
  {
    id: "pilar-3",
    title: "Música como Linguagem Coletiva",
    description: "A trance music ocupa um lugar central na Cultura Shroom. Para os Shrooms, a música é uma linguagem comum que une corpos, ritmos e estados de espírito — dissolvendo barreiras e criando presença coletiva.",
    iconName: "Music",
    colorClass: "purple"
  },
  {
    id: "pilar-4",
    title: "Dança como Ritual de Liberdade",
    description: "No Shroomfloor, o Shroom liberta o corpo. A dança não é competição. A dança é expressão, presença e libertação. O corpo deixa de ser objeto de julgamento e torna-se veículo de pura vibração.",
    iconName: "Activity",
    colorClass: "gold"
  },
  {
    id: "pilar-5",
    title: "Shroomocracia e Respeito",
    description: "A Shroomocracia representa a forma simbólica de organização dos Shrooms: participação, escuta, respeito e boa disposição coletiva. A liberdade individual coexiste com a integridade do outro.",
    iconName: "Globe",
    colorClass: "sand"
  },
  {
    id: "pilar-6",
    title: "Humor como Cura Social",
    description: "Os Shrooms reconhecem o riso como ferramenta de cura, aproximação e desconstrução. Rir em conjunto cria Shroomunidade. Rir de si próprio é o passaporte definitivo para a leveza.",
    iconName: "Smile",
    colorClass: "purple"
  },
  {
    id: "pilar-7",
    title: "Bom Coração e Cuidado Mútuo",
    description: "A liberdade Shroom caminha sempre com empatia. O Shroom cuida do espaço, da música, da energia e dos outros Shrooms. A comunidade nasce do cuidado, não da indiferença.",
    iconName: "Heart",
    colorClass: "amber"
  }
];

// ─────────────────────────────────────────────
// QUEM SÃO OS SHROOMS
// ─────────────────────────────────────────────
export const QUEM_SAO_SHROOMS = {
  title: "Quem são os Shrooms",
  intro: "Os Shrooms são participantes de uma cultura simbólica, musical e comunitária.",
  paragraphs: [
    "O Shroom pode ser quem dança, quem ri, quem observa, quem cuida, quem se perde por instantes e quem encontra novamente o caminho através da música, da natureza e da Shroompanhia.",
    "Os Shrooms não precisam de estatuto, aparência ou protagonismo. Cada Shroom participa à sua forma.",
    "Há Shrooms animados, Shrooms calmos, Shrooms shroomalhados, Shrooms anónimos, Shrooms fundadores e Shrooms que ainda estão a descobrir o seu lugar em Shroomland.",
    "O que une os Shrooms é a vontade de viver com mais liberdade, respeito, humor, presença e bom coração.",
  ],
  types: [
    { label: "Shroom Animado", desc: "Energia de pista, riso fácil, vontade de dançar sem parar." },
    { label: "Shroom Calmo", desc: "Presença silenciosa e energia estabilizadora da Shroomunidade." },
    { label: "Shroomalhado", desc: "Ligeiramente perdido no cosmos, mas espiritualmente bem encaminhado." },
    { label: "Shroomanónimo", desc: "Aparece, espalha boa energia e contribui sem precisar de holofotes." },
    { label: "Shroom Fundador", desc: "Uma das raízes do micélio. Deu forma à Shroomunidade." },
    { label: "Shroom em Descoberta", desc: "Ainda a encontrar o seu lugar em Shroomland. Bem-vindo." },
  ]
};

// ─────────────────────────────────────────────
// RAÍZES / FUNDADORES
// ─────────────────────────────────────────────
export const FUNDADORES_DATA: Founder[] = [
  {
    id: "f-1",
    name: "TóShroom",
    role: "Raiz Primordial",
    description: "Arquiteto de frequências que iniciou as primeiras trocas subterrâneas deste micélio. Os Shrooms reconhecem em TóShroom a vibração que deu início a tudo.",
    avatarSeed: "to",
    vibe: "Alquimista do Ritmo"
  },
  {
    id: "f-2",
    name: "NelShroom",
    role: "Tejedora de Conexões",
    description: "Protetora do solo cultural da Shroomunidade. NelShroom assegura que a energia coletiva flua com empatia, cuidado e boa disposição entre os Shrooms.",
    avatarSeed: "nel",
    vibe: "Compasso de Luz"
  },
  {
    id: "f-3",
    name: "MimShroom",
    role: "Farol Estelar",
    description: "Visionária rítmica e mestre do design visual. MimShroom desenha as geometrias que vestem e decoram Shroomland com elegância e alma.",
    avatarSeed: "mim",
    vibe: "Descodificadora de Formas"
  },
  {
    id: "f-4",
    name: "ZéShroom",
    role: "Catalisador de Risos",
    description: "Guardião do riso absurdo e da Shroomocracia. ZéShroom recorda aos Shrooms que ser tolo é uma nobre arte de rebeldia cósmica contra a rigidez social.",
    avatarSeed: "ze",
    vibe: "Suspensão de Gravidade"
  },
  {
    id: "f-5",
    name: "SalpicãoShroom",
    role: "Nutriente Orgânico",
    description: "A essência selvagem da floresta. SalpicãoShroom nutre as festividades e mantém a ligação dos Shrooms com a natureza rústica, pura e indomável.",
    avatarSeed: "salpicao",
    vibe: "Fogo Silvestre"
  }
];

// ─────────────────────────────────────────────
// NOMENCLATURAS / SHROOM GLOSSÁRIO
// ─────────────────────────────────────────────
export const NOMENCLATURAS_DATA: Nomenclature[] = [
  {
    term: "Shroomocracia",
    definition: "Modelo simbólico de organização comunitária baseado na participação, no respeito, na escuta e na boa disposição coletiva. Os Shrooms organizam-se com leveza, não com rigidez.",
    vibeColor: "green"
  },
  {
    term: "Shroomland",
    definition: "Território simbólico onde a Cultura Shroom acontece. Pode ser uma festa, uma pista, uma floresta, uma comunidade ou qualquer lugar onde os valores Shroom estejam presentes.",
    vibeColor: "gold"
  },
  {
    term: "Shroomfloor",
    definition: "Espaço físico ou simbólico da dança. É onde o Shroom liberta o corpo, encontra a música e se expressa sem julgamentos. Um altar de movimento e presença.",
    vibeColor: "purple"
  },
  {
    term: "Shroomkend",
    definition: "Período sagrado de encontro, celebração e convivência dos Shrooms. O momento em que a Shroomunidade se reúne para dançar, rir e partilhar calor humano.",
    vibeColor: "amber"
  },
  {
    term: "Shroomageddon",
    definition: "Estado de preparação, caos criativo e energia acumulada antes ou durante uma grande celebração Shroom. Não é destruição — é a explosão coletiva de boa disposição.",
    vibeColor: "amber"
  },
  {
    term: "Shroomanónimo",
    definition: "Shroom que participa, espalha boa energia e contribui para a Shroomunidade sem precisar de protagonismo, estatuto ou holofotes. A figura mais humilde e mais essencial.",
    vibeColor: "green"
  },
  {
    term: "Shroomçário",
    definition: "Preçário ou tabela simbólica de valores da Cultura Shroom, quando existir. Os Shrooms sabem o que vale e o que não vale a pena.",
    vibeColor: "sand"
  },
  {
    term: "Shroombar",
    definition: "Espaço real ou simbólico de hidratação, convívio e encontros filosóficos de balcão. O Shroombar é onde os Shrooms partilham histórias entre frequências.",
    vibeColor: "gold"
  },
  {
    term: "Shroomalhado",
    definition: "Estado de confusão cósmica, desalinhamento temporário ou perda ligeira de orientação, normalmente acompanhado de boa disposição. O Shroom sabe que vai encontrar o caminho.",
    vibeColor: "purple"
  },
  {
    term: "Shroom Animado",
    definition: "Estado de energia elevada, dança, riso e participação ativa. O Shroom Animado é contagiante, alegre e incapaz de ficar parado quando a música chama.",
    vibeColor: "amber"
  },
];

// ─────────────────────────────────────────────
// SÍMBOLO DO COGUMELO
// ─────────────────────────────────────────────
export const SIMBOLO_CONTENT = {
  title: "O Micélio da Shroomunidade",
  paragraphs: [
    "A Cultura Shroom utiliza o cogumelo como símbolo de transformação, ligação subterrânea, crescimento orgânico e comunidade invisível.",
    "Tal como as redes de micélio ligam diferentes organismos debaixo da terra, a Shroomunidade cresce de forma orgânica, invisível e coletiva — através da música, do riso e da liberdade consciente.",
    "O cogumelo é, neste contexto filosófico, a metáfora perfeita de uma teia cooperativa: regeneração, criatividade espontânea e consciência de rede coletiva.",
  ]
};

// ─────────────────────────────────────────────
// SHROOMLAND
// ─────────────────────────────────────────────
export const SHROOMLAND_CONTENT = {
  title: "Entrar em Shroomland",
  subtitle: "O Território Simbólico da Cultura Shroom",
  paragraphs: [
    "Shroomland é o território simbólico onde a Cultura Shroom ganha forma.",
    "Pode ser uma pista, uma floresta, uma festa, uma comunidade ou qualquer espaço onde os Shrooms se encontram através da música, do riso, da dança e do respeito.",
  ],
  values: [
    "Em Shroomland, o Shroom não precisa de provar nada.",
    "A presença vale mais do que a posse.",
    "A dança vale mais do que a pressa.",
    "O riso vale mais do que a pose.",
  ]
};

// ─────────────────────────────────────────────
// ESCOLHE UM COGUMELO — Secção educativa
// ─────────────────────────────────────────────
export const COGUMELO_SECTION = {
  intro: [
    "Escolhe um Cogumelo é uma secção educativa da Cultura Shroom dedicada ao imaginário dos cogumelos psilocibinos.",
    "Os Shrooms reconhecem o cogumelo como símbolo de transformação, micélio, natureza e consciência coletiva. Esta secção apresenta algumas espécies conhecidas no universo psicadélico, não como incentivo ao consumo, mas como conhecimento cultural, simbólico e informativo.",
    "A experiência associada a cogumelos psilocibinos pode variar muito de pessoa para pessoa. O contexto, o estado emocional, a saúde mental, a espécie e a sensibilidade individual influenciam fortemente os efeitos.",
  ],
  effectsNote: "Os efeitos dos cogumelos psilocibinos costumam envolver alterações na perceção, no humor, no pensamento, na sensibilidade à música, na noção de tempo e na forma como o corpo sente o espaço. De forma geral, os efeitos podem começar entre 15 e 45 minutos e durar cerca de 4 a 6 horas, embora isto possa variar bastante.",
  possibleEffects: [
    "Intensificação visual",
    "Maior sensibilidade à música",
    "Alteração da noção de tempo",
    "Riso",
    "Introspeção",
    "Euforia",
    "Emoção profunda",
    "Ligação à natureza",
    "Ansiedade",
    "Confusão",
    "Náuseas",
    "Experiências difíceis ou desconfortáveis",
  ],
  responsibilityNote: [
    "A Cultura Shroom não promove o consumo de substâncias. Esta secção existe como conteúdo educativo, cultural e simbólico.",
    "Cogumelos psilocibinos podem envolver riscos psicológicos, físicos e legais. Os efeitos são imprevisíveis e podem incluir ansiedade, medo, confusão, náuseas, perda de orientação ou experiências emocionalmente difíceis.",
    "A identificação incorreta de cogumelos selvagens pode ser perigosa. Algumas espécies tóxicas podem ser confundidas com outras.",
  ],
};

export const COGUMELOS_PSILOCIBINOS: CogumelhoPsilocibino[] = [
  {
    id: "p-cubensis",
    species: "Psilocybe cubensis",
    commonName: "Cubensis / Golden Teacher",
    capColor: "#8b6914",
    profile: "Uma das espécies mais conhecidas no imaginário psicadélico contemporâneo. Frequentemente associada a uma experiência equilibrada, com mistura de alterações visuais, riso, introspeção e sensibilidade musical.",
    description: "A experiência associada a Psilocybe cubensis é muitas vezes descrita como acessível, simbólica e emocionalmente variável. Pode trazer leveza, riso e sensibilidade à música, mas também pode tornar-se introspectiva ou desconfortável dependendo do contexto.",
    experience: {
      visual: 'Médio',
      musical: 'Médio a Forte',
      social: 'Médio a Forte',
      reflexivo: 'Médio',
      energetico: 'Médio',
      introspectivo: 'Médio',
    },
    intensidadeGeral: 'Médio',
    care: "O Shroom observa esta espécie como um dos símbolos mais conhecidos do imaginário psicadélico contemporâneo. A Shroomunidade valoriza consciência, cuidado e respeito.",
  },
  {
    id: "p-semilanceata",
    species: "Psilocybe semilanceata",
    commonName: "Liberty Cap",
    capColor: "#9a7a3a",
    profile: "Espécie muito conhecida em regiões temperadas, frequentemente referida como naturalmente potente e com perfil mental marcado.",
    description: "A experiência associada a Psilocybe semilanceata pode ser mais intensa e mental. É frequentemente ligada a estados reflexivos, alterações visuais e uma perceção mais profunda do ambiente. Pode ser emocionalmente desafiante.",
    experience: {
      visual: 'Médio a Forte',
      musical: 'Médio',
      social: 'Médio',
      reflexivo: 'Forte',
      energetico: 'Médio',
      introspectivo: 'Forte',
    },
    intensidadeGeral: 'Médio a Forte',
    care: "O Shroom não confunde curiosidade com incentivo. A Cultura Shroom apresenta esta espécie como conhecimento cultural, não como recomendação.",
  },
  {
    id: "p-cyanescens",
    species: "Psilocybe cyanescens",
    commonName: "Wavy Caps",
    capColor: "#5c3a1e",
    profile: "Espécie conhecida pela potência e pelo perfil visual mais marcado. A música e o ambiente ganham dimensões adicionais.",
    description: "A experiência associada a Psilocybe cyanescens pode ser visualmente intensa, com padrões, distorções e forte sensibilidade ao ambiente. A música pode ganhar profundidade e textura. Pode também gerar confusão ou ansiedade se o contexto não for estável.",
    experience: {
      visual: 'Forte',
      musical: 'Forte',
      social: 'Médio',
      reflexivo: 'Médio a Forte',
      energetico: 'Médio',
      introspectivo: 'Médio a Forte',
    },
    intensidadeGeral: 'Forte',
    care: "A Shroomunidade valoriza consciência e respeito. Contextos instáveis aumentam significativamente o risco de experiências difíceis.",
  },
  {
    id: "p-azurescens",
    species: "Psilocybe azurescens",
    commonName: "Flying Saucer Mushroom",
    capColor: "#7a5a2a",
    profile: "Frequentemente mencionada como uma das espécies mais potentes do género Psilocybe. De forte carga simbólica e sensorial.",
    description: "A experiência associada a Psilocybe azurescens pode ser muito intensa, profunda e visual. A Cultura Shroom apresenta esta espécie pela sua força simbólica, não como algo recreativo ou leve. Pode aumentar bastante o risco de experiências difíceis.",
    experience: {
      visual: 'Muito Forte',
      musical: 'Forte',
      social: 'Baixo a Médio',
      reflexivo: 'Forte',
      energetico: 'Variável',
      introspectivo: 'Muito Forte',
    },
    intensidadeGeral: 'Muito Forte',
    care: "O Shroom não confunde potência com aventura. Esta espécie é apresentada no site pelo seu valor simbólico e cultural, com particular atenção aos riscos associados.",
  },
  {
    id: "panaeolus-cyanescens",
    species: "Panaeolus cyanescens",
    commonName: "Blue Meanies",
    capColor: "#6a5a4a",
    profile: "Não pertence ao género Psilocybe, mas pode conter psilocibina e psilocina. Conhecida por uma experiência intensa, sensorial e energética.",
    description: "A experiência associada a Panaeolus cyanescens pode ser energética, visual e emocionalmente rápida. Pode intensificar a música, o corpo e a perceção do espaço. Também pode gerar instabilidade emocional se o contexto não for adequado.",
    experience: {
      visual: 'Forte',
      musical: 'Médio a Forte',
      social: 'Médio',
      reflexivo: 'Médio',
      energetico: 'Médio a Forte',
      introspectivo: 'Médio',
    },
    intensidadeGeral: 'Forte',
    care: "A Cultura Shroom apresenta esta informação como conhecimento cultural. O Shroom reconhece que contextos instáveis amplificam os riscos.",
  },
  {
    id: "p-mexicana",
    species: "Psilocybe mexicana",
    capColor: "#7a5030",
    profile: "Espécie historicamente associada a usos tradicionais e contextos culturais na Mesoamérica. Referência cultural e histórica do imaginário dos cogumelos.",
    description: "A experiência associada a Psilocybe mexicana é muitas vezes descrita em termos mais simbólicos, suaves e introspectivos. O Shroom observa esta espécie como uma referência cultural e histórica de profundo significado simbólico.",
    experience: {
      visual: 'Médio',
      musical: 'Médio',
      social: 'Médio',
      reflexivo: 'Médio a Forte',
      energetico: 'Baixo a Médio',
      introspectivo: 'Médio',
    },
    intensidadeGeral: 'Médio',
    care: "A Shroomunidade valoriza o conhecimento histórico e cultural. Esta espécie é apresentada no contexto do seu significado simbólico e antropológico.",
  },
  {
    id: "p-tampanensis",
    species: "Psilocybe tampanensis",
    capColor: "#9a7850",
    profile: "Espécie conhecida também pela associação às chamadas trufas mágicas, em contextos onde estas são discutidas culturalmente. Perfil mais suave e reflexivo.",
    description: "A experiência associada a Psilocybe tampanensis é geralmente apresentada como mais suave e reflexiva quando comparada com espécies muito potentes. Pode ser descrita como ligada à introspeção, curiosidade e perceção subtil.",
    experience: {
      visual: 'Baixo a Médio',
      musical: 'Médio',
      social: 'Médio',
      reflexivo: 'Médio',
      energetico: 'Baixo a Médio',
      introspectivo: 'Médio',
    },
    intensidadeGeral: 'Baixo a Médio',
    care: "O Shroom apresenta esta espécie como conhecimento cultural e simbólico. A Cultura Shroom não confunde curiosidade com incentivo.",
  },
];

// ─────────────────────────────────────────────
// NOTA EDUCATIVA (mantida, discreta)
// ─────────────────────────────────────────────
export const NOTA_EDUCATIVA = {
  title: "Nota de Responsabilidade",
  paragraphs: [
    "A Cultura Shroom não promove nem incentiva o consumo de substâncias psicoativas. A referência aos cogumelos é assumida como um pilar filosófico, estético, ecológico e metafórico de conexão coletiva e redes de micélio.",
    "Qualquer substância psicoativa envolve riscos biológicos, psicológicos e legais significativos, devendo ser abordada com responsabilidade, educação científica e cuidado de saúde mental.",
  ]
};

// ─────────────────────────────────────────────
// DECLARAÇÃO / MANIFESTO FINAL
// ─────────────────────────────────────────────
export const DECLARACAO_MANIFESTO = {
  title: "A Declaração Shroom",
  text: "A Cultura Shroom afirma-se como uma comunidade livre de preconceitos, focada na harmonia rítmica, no humor e no respeito. Os Shrooms defendem a tolice como libertação, a dança como expressão integradora, o riso como cura mútua, a música como união coletiva e a simplicidade como resistência poética ao vazio do consumismo. Ser Shroom é participar numa cultura de rede onde a alegria não precisa de pedir licença, a liberdade não dispensa a ética de cuidado e a Shroomunidade nasce da vontade de viver com mais leveza, presença e bom coração.",
  buttonText: "Entrar em Shroomland"
};
