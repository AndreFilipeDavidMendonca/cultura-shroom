/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pillar, Founder, Nomenclature } from './types';

export const HERO_CONTENT = {
  title: "Cultura Shroom",
  subtitle: "Uma comunidade cultural de liberdade, música, humor, dança e consciência coletiva.",
  tagline: "A Cultura Shroom nasce como um espaço simbólico e comunitário inspirado na trance music, na natureza, no riso e na libertação das pressões sociais contemporâneas.",
  primaryBtn: "Explorar a Cultura",
  secondaryBtn: "Entrar em Shroomland"
};

export const SOBRE_CONTENT = {
  title: "Sobre a Cultura Shroom",
  paragraphs: [
    "A Cultura Shroom é uma comunidade simbólica, artística e musical inspirada na liberdade, na trance music, na natureza, no humor e na desconstrução das pressões sociais contemporâneas.",
    "Mais do que uma estética, propõe uma forma alternativa de convivência: mais leve, mais democrática, mais humana e menos dependente da validação material. Valoriza a dança, o riso, a criatividade, o respeito mútuo e a libertação de padrões sociais excessivamente marcados pelo consumismo, pela competição e pela aparência."
  ]
};

export const MISSAO_VISAO_CONTENT = {
  missao: {
    title: "Missão",
    text: "Promover uma cultura comunitária, criativa e inclusiva, centrada na música, na dança, no riso, na liberdade individual e no respeito coletivo, incentivando formas de vida mais leves, conscientes e menos condicionadas pela pressão social e pelo consumismo."
  },
  visao: {
    title: "Visão",
    text: "Construir uma comunidade cultural capaz de inspirar novas formas de celebração, convivência e expressão, onde a liberdade, a alegria e a criatividade sejam reconhecidas como elementos fundamentais de uma ligação mais autêntica."
  }
};

export const PILARES_DATA: Pillar[] = [
  {
    id: "pilar-1",
    title: "Abraçar a Tolice",
    description: "A Cultura Shroom reconhece a tolice como uma forma legítima de libertação. Ser “tolo” não significa ausência de consciência, mas sim a capacidade de suspender a rigidez social, rir de si próprio e participar no mundo com leveza, espontaneidade e imaginação.",
    iconName: "Laugh",
    colorClass: "amber"
  },
  {
    id: "pilar-2",
    title: "Liberdade do Consumismo",
    description: "Incentiva a libertação da cultura excessivamente influenciada pelo consumo, pela aparência, pelo estatuto e pela comparação constante. Valoriza experiências, ligações humanas, música, natureza e presença acima da acumulação material.",
    iconName: "Leaf",
    colorClass: "green"
  },
  {
    id: "pilar-3",
    title: "Música como Linguagem Coletiva",
    description: "A trance music ocupa um lugar central na Cultura Shroom. A música é vista como uma linguagem comum, capaz de unir pessoas, dissolver barreiras e criar estados de presença e transcendência coletiva.",
    iconName: "Music",
    colorClass: "purple"
  },
  {
    id: "pilar-4",
    title: "Dança como Ritual de Liberdade",
    description: "A dança é um dos principais rituais da Cultura Shroom. No espaço da dança, o corpo deixa de ser objeto de julgamento externo e passa a ser veículo de pura expressão, movimento e vibração cósmica.",
    iconName: "Activity",
    colorClass: "gold"
  },
  {
    id: "pilar-5",
    title: "Democracia e Respeito",
    description: "A Cultura Shroom assenta numa prática comunitária democrática, onde todas as vozes têm valor de escuta e onde a liberdade individual deve coexistir em sintonia fina com o respeito e integridade do outro.",
    iconName: "Globe",
    colorClass: "sand"
  },
  {
    id: "pilar-6",
    title: "Humor como Cura Social",
    description: "O riso é entendido como uma ferramenta de aproximação, desconstrução e bem-estar. Rir em conjunto ajuda a dissolver o ego e o medo. Rir de si próprio é o passaporte definitivo para a leveza e a sanidade.",
    iconName: "Smile",
    colorClass: "purple"
  },
  {
    id: "pilar-7",
    title: "Bom Coração e Cuidado Mútuo",
    description: "Promove uma ética de cuidado, empatia e proteção ativa dos espaços coletivos. A liberdade não é de forma alguma confundida com indiferença; cuidamos uns dos outros como células do mesmo organismo.",
    iconName: "Heart",
    colorClass: "amber"
  }
];

export const FUNDADORES_DATA: Founder[] = [
  {
    id: "f-1",
    name: "Tó Shroom",
    role: "Raiz Primordial",
    description: "Sentinela de frequências e compassos vibracionais, Tó é o arquiteto de frequências que iniciou as trocas subterrâneas deste ecossistema.",
    avatarSeed: "to",
    vibe: "Alquimista do Ritmo"
  },
  {
    id: "f-2",
    name: "NellyShroom",
    role: "Tejedora de Conexões",
    description: "Protetora do solo cultural e fada curadora do micélio, Nelly assegura que a energia comunitária flua de maneira empática e pacífica.",
    avatarSeed: "nelly",
    vibe: "Compasso de Luz"
  },
  {
    id: "f-3",
    name: "MimShroom",
    role: "Farol Estelar",
    description: "Visionária rítmica e mestre do design visual, Mim desenha e ancora as geometrias visuais que vestem e decoram Shroomland.",
    avatarSeed: "mim",
    vibe: "Descodificadora de Formas"
  },
  {
    id: "f-4",
    name: "ZéShroom",
    role: "Catalisador de Risos",
    description: "Mestre da Shroomocracia e guardião do riso absurdo, Zé recorda-nos que ser 'tolo' é uma nobre arte de rebeldia cósmica contra a rigidez.",
    avatarSeed: "ze",
    vibe: "Suspensão de Gravidade"
  },
  {
    id: "f-5",
    name: "SalpicãoShroom",
    role: "Nutriente Orgânico",
    description: "A essência selvagem da floresta, Salpicão nutre as festividades e assegura que a nossa ligação com a Mãe Natureza e as árvores se mantenha rústica, pura e indomável.",
    avatarSeed: "salpicao",
    vibe: "Fogo Silvestre"
  }
];

export const NOMENCLATURAS_DATA: Nomenclature[] = [
  {
    term: "Shroomocracia",
    definition: "Modelo simbólico de organização comunitária baseado na participação descentralizada, no respeito incondicional, na escuta ativa e na boa disposição coletiva.",
    vibeColor: "green"
  },
  {
    term: "Shroomkend",
    definition: "O período sagrado de encontro físico ou espiritual, celebração e convivência profunda da comunidade. Representa o momento exato em que os membros se reúnem para dançar, rir e partilhar calor humano.",
    vibeColor: "gold"
  },
  {
    term: "Shroomaggaden",
    definition: "Um estado festivo e libertador de caos criativo e celebração intensa, normalmente associado a picos de grande energia coletiva na pista, música hipnótica e humor espontâneo.",
    vibeColor: "amber"
  },
  {
    term: "Shroomfloor",
    definition: "O espaço físico ou terreno simbólico da dança. É visto como um altar de partilha, onde a liberdade corporal, a música envolvente e a expressão individual genuína se encontram sem julgamentos.",
    vibeColor: "purple"
  },
  {
    term: "Shroomland",
    definition: "O território imaginário e espiritual da Cultura Shroom. Pode manifestar-se numa celebração sob as árvores, num centro de partilha cultural, ou em qualquer espaço onde estes valores de cuidado e humor estejam vivos.",
    vibeColor: "sand"
  },
  {
    term: "Shroomanónimo",
    definition: "A figura humilde e coletiva da comunidade. Representa qualquer participante que contribui com a sua alegria e energia positiva para o grupo sem a necessidade de estatuto, holofotes ou ego.",
    vibeColor: "green"
  }
];

export const SIMBOLO_CONTENT = {
  title: "O Símbolo do Cogumelo",
  paragraphs: [
    "A Cultura Shroom utiliza o cogumelo como símbolo de transformação, ligação subterrânea, crescimento orgânico e comunidade invisível.",
    "Tal como as redes de micélio invisíveis ligam diferentes organismos e árvores a milhas de distância debaixo da terra, a Cultura Shroom procura resgatar estas ligações invisíveis entre seres humanos através da música, do riso partilhado e da liberdade consciente.",
    "O cogumelo é, neste contexto filosófico, muito mais do que uma referência psicadélica: é a metáfora perfeita de uma teia cooperativa, de regeneração ambiental, de criatividade espontânea e de consciência de rede coletiva."
  ]
};

export const NOTA_EDUCATIVA = {
  title: "Nota Educativa e Responsabilidade",
  paragraphs: [
    "Existem espécies de cogumelos conhecidas por conter compostos psicoativos naturais como a psilocibina e a psilocina. Estes compostos podem induzir alterações profundas na perceção sensorial, no humor, no fluxo cognitivo e na noção de tempo e individualidade.",
    "A Cultura Shroom não promove nem incentiva de qualquer forma o consumo ou cultivo de substâncias psicoativas. A nossa referência aos cogumelos é assumida estritamente como um pilar filosófico, estético, ecológico e metafórico de conexão coletiva e redes de micélio.",
    "Qualquer substância psicoativa envolve riscos biológicos, psicológicos e legais significativos, devendo ser abordada com um elevado grau de responsabilidade, educação científica, cuidado de saúde mental e plena consciência."
  ]
};

export const DECLARACAO_MANIFESTO = {
  title: "A Declaração Cultural",
  text: "A Cultura Shroom afirma-se como uma comunidade livre de preconceitos, focada na harmonia rítmica, no humor e no respeito. Defendemos a tolice como libertação, a dança como expressão integradora, o riso como cura mútua, a música como união cósmica e a simplicidade como resistência poética ao vazio do consumismo e da pressa. Ser Shroom é participar numa cultura de rede onde a alegria não precisa de pedir licença, a liberdade não dispensa a ética de cuidado e a comunidade nasce da vontade comum de viver com mais leveza, presença e coração.",
  buttonText: "Entrar em Shroomland"
};
