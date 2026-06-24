import { RatingLevel } from '../data';

// ─── Tipos internos de tradução ───────────────────────────────────────────────

interface PilarTranslation { title: string; description: string; }
interface FounderTranslation { role: string; description: string; vibe: string; }
interface NomenclaturaTranslation { definition: string; }
interface CogumeloTranslation { profile: string; description: string; care: string; }
interface ExpLabel { key: string; label: string; }

// ─────────────────────────────────────────────────────────────────────────────
// TRADUÇÕES
// ─────────────────────────────────────────────────────────────────────────────

export const translations = {

  // ══════════════════════════════════════════════════════════════════════
  // PORTUGUÊS (idioma principal)
  // ══════════════════════════════════════════════════════════════════════
  pt: {

    nav: {
      manifesto:    'Manifesto',
      pilares:      'Pilares',
      shrooms:      'Os Shrooms',
      raizes:       'Raízes',
      nomenclatura: 'Glossário',
      shroomland:   'Shroomland',
      cogumelo:     'Cogumelo',
    },

    hero: {
      badge:       'Movimento Cultural Vivo',
      headingLine1: 'Liberdade,',
      headingLine2: 'Trance &',
      headingLine3: 'Humor.',
      subtitle:    'Uma comunidade simbólica de liberdade, música, humor, dança e presença coletiva.',
      tagline:     'Os Shrooms encontram-se na floresta, na pista e em qualquer lugar onde a música, o riso e o respeito estejam presentes.',
      primaryBtn:  'Entrar em Shroomland',
      secondaryBtn:'Shroom Glossário',
      scrollLabel: 'Os Shrooms chamam',
    },

    logoTagline: 'Conexão · Tolice · Libertação',

    manifesto: {
      sectionTag: 'Manifesto',
      title: 'Manifesto',
      paragraphs: [
        'A Cultura Shroom é uma comunidade simbólica, artística e musical inspirada na natureza, na trance music, no riso, na dança e na libertação das pressões sociais contemporâneas.',
        'Os Shrooms reconhecem a tolice como força de libertação. O Shroom não procura parecer perfeito. O Shroom procura existir com leveza, respeito e verdade.',
        'A Cultura Shroom valoriza a simplicidade, a presença, a música, o humor e a ligação humana acima da aparência, do consumismo e da competição social.',
      ],
      closing: [
        'Em Shroomland, a liberdade não dispensa respeito.',
        'No Shroomfloor, o corpo fala.',
        'Na Shroomunidade, cada Shroom encontra o seu lugar.',
      ],
      quote: 'Os Shrooms falam na terceira pessoa porque o Shroom observa-se a existir.',
    },

    pilares: {
      sectionTag:  'Os Pilares',
      title:       'Sustentáculos do Micélio',
      subtitle:    'Os princípios que os Shrooms reconhecem como alicerces da Cultura Shroom.',
      pillarFooter:'Pilar Shroom',
      data: [
        {
          title: 'Abraçar a Tolice',
          description: 'Os Shrooms reconhecem a tolice como uma forma legítima de libertação. A tolice não é falta de consciência — é a capacidade de suspender a rigidez social, rir de si próprio e viver com mais leveza.',
        },
        {
          title: 'Libertar-se do Consumismo',
          description: 'O Shroom procura libertar-se da cultura influenciada pelo consumismo, pela aparência, pelo estatuto e pela comparação constante. Os Shrooms valorizam experiências, música, natureza e ligação humana acima da acumulação material.',
        },
        {
          title: 'Música como Linguagem Coletiva',
          description: 'A trance music ocupa um lugar central na Cultura Shroom. Para os Shrooms, a música é uma linguagem comum que une corpos, ritmos e estados de espírito — dissolvendo barreiras e criando presença coletiva.',
        },
        {
          title: 'Dança como Ritual de Liberdade',
          description: 'No Shroomfloor, o Shroom liberta o corpo. A dança não é competição. A dança é expressão, presença e libertação. O corpo deixa de ser objeto de julgamento e torna-se veículo de pura vibração.',
        },
        {
          title: 'Shroomocracia e Respeito',
          description: 'A Shroomocracia representa a forma simbólica de organização dos Shrooms: participação, escuta, respeito e boa disposição coletiva. A liberdade individual coexiste com a integridade do outro.',
        },
        {
          title: 'Humor como Cura Social',
          description: 'Os Shrooms reconhecem o riso como ferramenta de cura, aproximação e desconstrução. Rir em conjunto cria Shroomunidade. Rir de si próprio é o passaporte definitivo para a leveza.',
        },
        {
          title: 'Bom Coração e Cuidado Mútuo',
          description: 'A liberdade Shroom caminha sempre com empatia. O Shroom cuida do espaço, da música, da energia e dos outros Shrooms. A comunidade nasce do cuidado, não da indiferença.',
        },
      ] as PilarTranslation[],
    },

    shrooms: {
      sectionTag:  'A Shroomunidade',
      title:       'Quem são os Shrooms',
      intro:       'Os Shrooms são participantes de uma cultura simbólica, musical e comunitária.',
      paragraphs: [
        'O Shroom pode ser quem dança, quem ri, quem observa, quem cuida, quem se perde por instantes e quem encontra novamente o caminho através da música, da natureza e da Shroompanhia.',
        'Os Shrooms não precisam de estatuto, aparência ou protagonismo. Cada Shroom participa à sua forma.',
        'Há Shrooms animados, Shrooms calmos, Shrooms shroomalhados, Shrooms anónimos, Shrooms fundadores e Shrooms que ainda estão a descobrir o seu lugar em Shroomland.',
        'O que une os Shrooms é a vontade de viver com mais liberdade, respeito, humor, presença e bom coração.',
      ],
      types: [
        { label: 'Shroom Animado',       desc: 'Energia de pista, riso fácil, vontade de dançar sem parar.' },
        { label: 'Shroom Calmo',         desc: 'Presença silenciosa e energia estabilizadora da Shroomunidade.' },
        { label: 'Shroomalhado',         desc: 'Ligeiramente perdido no cosmos, mas espiritualmente bem encaminhado.' },
        { label: 'Shroomanónimo',        desc: 'Aparece, espalha boa energia e contribui sem precisar de holofotes.' },
        { label: 'Shroom Fundador',      desc: 'Uma das raízes do micélio. Deu forma à Shroomunidade.' },
        { label: 'Shroom em Descoberta', desc: 'Ainda a encontrar o seu lugar em Shroomland. Bem-vindo.' },
      ],
      rootsBtn: 'Ver as Raízes',
    },

    raizes: {
      sectionTag: 'As Raízes',
      title:      'Primeiras Raízes do Micélio',
      subtitle:   'As raízes da Cultura Shroom nascem dos primeiros Shrooms fundadores. São eles que deram forma inicial ao micélio simbólico da Shroomunidade.',
      footer:     'As Raízes representam a origem afetiva, criativa e comunitária da Cultura Shroom. A partir delas, a Shroomunidade cresce como micélio: de forma orgânica, invisível, coletiva e viva.',
      foundersData: [
        { role: 'Raiz Primordial',       description: 'Arquiteto de frequências que iniciou as primeiras trocas subterrâneas deste micélio. Os Shrooms reconhecem em TóShroom a vibração que deu início a tudo.',                                                                       vibe: 'Alquimista do Ritmo'      },
        { role: 'Tejedora de Conexões',  description: 'Protetora do solo cultural da Shroomunidade. NelShroom assegura que a energia coletiva flua com empatia, cuidado e boa disposição entre os Shrooms.',                                                                          vibe: 'Compasso de Luz'         },
        { role: 'Farol Estelar',         description: 'Visionária rítmica e mestre do design visual. MimShroom desenha as geometrias que vestem e decoram Shroomland com elegância e alma.',                                                                                           vibe: 'Descodificadora de Formas'},
        { role: 'Catalisador de Risos',  description: 'Guardião do riso absurdo e da Shroomocracia. ZéShroom recorda aos Shrooms que ser tolo é uma nobre arte de rebeldia cósmica contra a rigidez social.',                                                                        vibe: 'Suspensão de Gravidade'  },
        { role: 'Nutriente Orgânico',    description: 'A essência selvagem da floresta. SalpicãoShroom nutre as festividades e mantém a ligação dos Shrooms com a natureza rústica, pura e indomável.',                                                                               vibe: 'Fogo Silvestre'          },
      ] as FounderTranslation[],
    },

    glossario: {
      sectionTag: 'O Dicionário',
      title:      'Shroom Glossário',
      subtitle:   'Os termos e nomenclaturas criados no interior da Shroomunidade.',
      vocabLabel: 'Vocabulário Shroom',
      cardFooter: 'Símbolo de convivência, humor e ligação orgânica.',
      shroomifier: {
        title:         'O Shroomificador',
        description:   'Os Shrooms traduzem palavras cansadas da pressão social contemporânea para o dialeto leve, livre e comunitário de Shroomland.',
        placeholder:   'Ex: No fim de semana quero libertar-me do stresso, ir para a natureza ouvir música e dançar na pista!',
        translateBtn:  'Traduzir para Shroomland',
        transmissionLabel: 'Transmissão do Micélio:',
        emptyInput:    'Escreve alguma coisa para o micélio traduzir!',
        emptyOutput:   'Aguarda codificação do micélio subterrâneo…',
      },
      data: [
        { definition: 'Modelo simbólico de organização comunitária baseado na participação, no respeito, na escuta e na boa disposição coletiva. Os Shrooms organizam-se com leveza, não com rigidez.' },
        { definition: 'Território simbólico onde a Cultura Shroom acontece. Pode ser uma festa, uma pista, uma floresta, uma comunidade ou qualquer lugar onde os valores Shroom estejam presentes.' },
        { definition: 'Espaço físico ou simbólico da dança. É onde o Shroom liberta o corpo, encontra a música e se expressa sem julgamentos. Um altar de movimento e presença.' },
        { definition: 'Período sagrado de encontro, celebração e convivência dos Shrooms. O momento em que a Shroomunidade se reúne para dançar, rir e partilhar calor humano.' },
        { definition: 'Estado de preparação, caos criativo e energia acumulada antes ou durante uma grande celebração Shroom. Não é destruição — é a explosão coletiva de boa disposição.' },
        { definition: 'Shroom que participa, espalha boa energia e contribui para a Shroomunidade sem precisar de protagonismo, estatuto ou holofotes. A figura mais humilde e mais essencial.' },
        { definition: 'Preçário ou tabela simbólica de valores da Cultura Shroom, quando existir. Os Shrooms sabem o que vale e o que não vale a pena.' },
        { definition: 'Espaço real ou simbólico de hidratação, convívio e encontros filosóficos de balcão. O Shroombar é onde os Shrooms partilham histórias entre frequências.' },
        { definition: 'Estado de confusão cósmica, desalinhamento temporário ou perda ligeira de orientação, normalmente acompanhado de boa disposição. O Shroom sabe que vai encontrar o caminho.' },
        { definition: 'Estado de energia elevada, dança, riso e participação ativa. O Shroom Animado é contagiante, alegre e incapaz de ficar parado quando a música chama.' },
      ] as NomenclaturaTranslation[],
    },

    shroomland: {
      sectionTag:  'O Território Simbólico',
      title:       'Entrar em Shroomland',
      paragraphs: [
        'Shroomland é o território simbólico onde a Cultura Shroom ganha forma.',
        'Pode ser uma pista, uma floresta, uma festa, uma comunidade ou qualquer espaço onde os Shrooms se encontram através da música, do riso, da dança e do respeito.',
      ],
      values: [
        'Em Shroomland, o Shroom não precisa de provar nada.',
        'A presença vale mais do que a posse.',
        'A dança vale mais do que a pressa.',
        'O riso vale mais do que a pose.',
      ],
      primaryBtn:   'Escolher um Cogumelo',
      secondaryBtn: 'Explorar o Glossário',
    },

    cogumelo: {
      sectionTag:  'Conhecimento Cultural',
      title:       'Escolhe um Cogumelo',
      effectsNoteLabel: 'Nota geral sobre efeitos',
      expandMore:  'Saber mais',
      expandLess:  'Menos',
      tableTitle:  'Tabela Comparativa',
      tableScroll: '← Desliza para ver a tabela completa',
      tableFooter: 'Perfis indicativos de carácter cultural e informativo. A experiência real varia significativamente entre indivíduos.',
      responsibilityTitle: 'Nota de Responsabilidade',
      expLabels: [
        { key: 'visual',        label: 'Visual' },
        { key: 'musical',       label: 'Música / Auditivo' },
        { key: 'social',        label: 'Riso / Social' },
        { key: 'reflexivo',     label: 'Reflexivo' },
        { key: 'energetico',    label: 'Energético' },
        { key: 'introspectivo', label: 'Introspectivo' },
      ] as ExpLabel[],
      tableHeaders: {
        species:      'Espécie',
        visual:       'Visual',
        musical:      'Música',
        social:       'Social',
        reflexivo:    'Reflexivo',
        energetico:   'Energético',
        intensidade:  'Intensidade',
      },
      intro: [
        'Escolhe um Cogumelo é uma secção educativa da Cultura Shroom dedicada ao imaginário dos cogumelos psilocibinos.',
        'Os Shrooms reconhecem o cogumelo como símbolo de transformação, micélio, natureza e consciência coletiva. Esta secção apresenta algumas espécies conhecidas no universo psicadélico, não como incentivo ao consumo, mas como conhecimento cultural, simbólico e informativo.',
        'A experiência associada a cogumelos psilocibinos pode variar muito de pessoa para pessoa. O contexto, o estado emocional, a saúde mental, a espécie e a sensibilidade individual influenciam fortemente os efeitos.',
      ],
      effectsNote: 'Os efeitos dos cogumelos psilocibinos costumam envolver alterações na perceção, no humor, no pensamento, na sensibilidade à música, na noção de tempo e na forma como o corpo sente o espaço. De forma geral, os efeitos podem começar entre 15 e 45 minutos e durar cerca de 4 a 6 horas, embora isto possa variar bastante.',
      possibleEffects: [
        'Intensificação visual',
        'Maior sensibilidade à música',
        'Alteração da noção de tempo',
        'Riso',
        'Introspeção',
        'Euforia',
        'Emoção profunda',
        'Ligação à natureza',
        'Ansiedade',
        'Confusão',
        'Náuseas',
        'Experiências difíceis ou desconfortáveis',
      ],
      responsibilityNote: [
        'A Cultura Shroom não promove o consumo de substâncias. Esta secção existe como conteúdo educativo, cultural e simbólico.',
        'Cogumelos psilocibinos podem envolver riscos psicológicos, físicos e legais. Os efeitos são imprevisíveis e podem incluir ansiedade, medo, confusão, náuseas, perda de orientação ou experiências emocionalmente difíceis.',
        'A identificação incorreta de cogumelos selvagens pode ser perigosa. Algumas espécies tóxicas podem ser confundidas com outras.',
      ],
      mushroomsData: [
        {
          profile: 'Uma das espécies mais conhecidas no imaginário psicadélico contemporâneo. Frequentemente associada a uma experiência equilibrada, com mistura de alterações visuais, riso, introspeção e sensibilidade musical.',
          description: 'A experiência associada a Psilocybe cubensis é muitas vezes descrita como acessível, simbólica e emocionalmente variável. Pode trazer leveza, riso e sensibilidade à música, mas também pode tornar-se introspectiva ou desconfortável dependendo do contexto.',
          care: 'O Shroom observa esta espécie como um dos símbolos mais conhecidos do imaginário psicadélico contemporâneo. A Shroomunidade valoriza consciência, cuidado e respeito.',
        },
        {
          profile: 'Espécie muito conhecida em regiões temperadas, frequentemente referida como naturalmente potente e com perfil mental marcado.',
          description: 'A experiência associada a Psilocybe semilanceata pode ser mais intensa e mental. É frequentemente ligada a estados reflexivos, alterações visuais e uma perceção mais profunda do ambiente. Pode ser emocionalmente desafiante.',
          care: 'O Shroom não confunde curiosidade com incentivo. A Cultura Shroom apresenta esta espécie como conhecimento cultural, não como recomendação.',
        },
        {
          profile: 'Espécie conhecida pela potência e pelo perfil visual mais marcado. A música e o ambiente ganham dimensões adicionais.',
          description: 'A experiência associada a Psilocybe cyanescens pode ser visualmente intensa, com padrões, distorções e forte sensibilidade ao ambiente. A música pode ganhar profundidade e textura. Pode também gerar confusão ou ansiedade se o contexto não for estável.',
          care: 'A Shroomunidade valoriza consciência e respeito. Contextos instáveis aumentam significativamente o risco de experiências difíceis.',
        },
        {
          profile: 'Frequentemente mencionada como uma das espécies mais potentes do género Psilocybe. De forte carga simbólica e sensorial.',
          description: 'A experiência associada a Psilocybe azurescens pode ser muito intensa, profunda e visual. A Cultura Shroom apresenta esta espécie pela sua força simbólica, não como algo recreativo ou leve. Pode aumentar bastante o risco de experiências difíceis.',
          care: 'O Shroom não confunde potência com aventura. Esta espécie é apresentada no site pelo seu valor simbólico e cultural, com particular atenção aos riscos associados.',
        },
        {
          profile: 'Não pertence ao género Psilocybe, mas pode conter psilocibina e psilocina. Conhecida por uma experiência intensa, sensorial e energética.',
          description: 'A experiência associada a Panaeolus cyanescens pode ser energética, visual e emocionalmente rápida. Pode intensificar a música, o corpo e a perceção do espaço. Também pode gerar instabilidade emocional se o contexto não for adequado.',
          care: 'A Cultura Shroom apresenta esta informação como conhecimento cultural. O Shroom reconhece que contextos instáveis amplificam os riscos.',
        },
        {
          profile: 'Espécie historicamente associada a usos tradicionais e contextos culturais na Mesoamérica. Referência cultural e histórica do imaginário dos cogumelos.',
          description: 'A experiência associada a Psilocybe mexicana é muitas vezes descrita em termos mais simbólicos, suaves e introspectivos. O Shroom observa esta espécie como uma referência cultural e histórica de profundo significado simbólico.',
          care: 'A Shroomunidade valoriza o conhecimento histórico e cultural. Esta espécie é apresentada no contexto do seu significado simbólico e antropológico.',
        },
        {
          profile: 'Espécie conhecida também pela associação às chamadas trufas mágicas, em contextos onde estas são discutidas culturalmente. Perfil mais suave e reflexivo.',
          description: 'A experiência associada a Psilocybe tampanensis é geralmente apresentada como mais suave e reflexiva quando comparada com espécies muito potentes. Pode ser descrita como ligada à introspeção, curiosidade e perceção subtil.',
          care: 'O Shroom apresenta esta espécie como conhecimento cultural e simbólico. A Cultura Shroom não confunde curiosidade com incentivo.',
        },
      ] as CogumeloTranslation[],
    },

    declaracao: {
      title: 'A Declaração Shroom',
      text: 'A Cultura Shroom afirma-se como uma comunidade livre de preconceitos, focada na harmonia rítmica, no humor e no respeito. Os Shrooms defendem a tolice como libertação, a dança como expressão integradora, o riso como cura mútua, a música como união coletiva e a simplicidade como resistência poética ao vazio do consumismo. Ser Shroom é participar numa cultura de rede onde a alegria não precisa de pedir licença, a liberdade não dispensa a ética de cuidado e a Shroomunidade nasce da vontade de viver com mais leveza, presença e bom coração.',
      buttonText: 'Entrar em Shroomland',
    },

    notaEducativa: {
      title: 'Nota de Responsabilidade',
      paragraphs: [
        'A Cultura Shroom não promove nem incentiva o consumo de substâncias psicoativas. A referência aos cogumelos é assumida como um pilar filosófico, estético, ecológico e metafórico de conexão coletiva e redes de micélio.',
        'Qualquer substância psicoativa envolve riscos biológicos, psicológicos e legais significativos, devendo ser abordada com responsabilidade, educação científica e cuidado de saúde mental.',
      ],
    },

    footer: {
      copyright: '© 2026 Cultura Shroom. Todos os direitos reservados do micélio coletivo.',
      subtitle:  'Confraria de Arte, Trance e Humor Simbólico.',
      status:    'Shroomunidade Ativa',
    },

    ratingDisplay: {
      'Baixo':         'Baixo',
      'Baixo a Médio': 'Baixo a Médio',
      'Médio':         'Médio',
      'Médio a Forte': 'Médio a Forte',
      'Forte':         'Forte',
      'Muito Forte':   'Muito Forte',
      'Variável':      'Variável',
    } as Record<RatingLevel, string>,

  },

  // ══════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════════════════════════════════
  en: {

    nav: {
      manifesto:    'Manifesto',
      pilares:      'Pillars',
      shrooms:      'The Shrooms',
      raizes:       'Roots',
      nomenclatura: 'Glossary',
      shroomland:   'Shroomland',
      cogumelo:     'Mushroom',
    },

    hero: {
      badge:        'Living Cultural Movement',
      headingLine1: 'Freedom,',
      headingLine2: 'Trance &',
      headingLine3: 'Humour.',
      subtitle:     'A symbolic community of freedom, music, humour, dance, and collective presence.',
      tagline:      'The Shrooms gather in the forest, on the floor, and wherever music, laughter, and respect are present.',
      primaryBtn:   'Enter Shroomland',
      secondaryBtn: 'Shroom Glossary',
      scrollLabel:  'The Shrooms call',
    },

    logoTagline: 'Connection · Foolishness · Liberation',

    manifesto: {
      sectionTag: 'Manifesto',
      title: 'Manifesto',
      paragraphs: [
        'Cultura Shroom is a symbolic, artistic, and musical community inspired by nature, trance music, laughter, dance, and liberation from the pressures of contemporary life.',
        'The Shrooms recognize foolishness as a force of liberation. The Shroom does not seek to appear perfect. The Shroom seeks to exist with lightness, respect, and truth.',
        'Cultura Shroom values simplicity, presence, music, humour, and human connection above appearance, consumerism, and social competition.',
      ],
      closing: [
        'In Shroomland, freedom does not dispense with respect.',
        'On the Shroomfloor, the body speaks.',
        'In the Shroomunidade, every Shroom finds their place.',
      ],
      quote: 'The Shrooms speak in the third person because the Shroom observes itself existing.',
    },

    pilares: {
      sectionTag:   'The Pillars',
      title:        'Pillars of the Mycelium',
      subtitle:     'The principles the Shrooms recognize as the foundations of Cultura Shroom.',
      pillarFooter: 'Shroom Pillar',
      data: [
        {
          title: 'Embrace Foolishness',
          description: 'The Shrooms recognize foolishness as a legitimate force of liberation. Foolishness is not a lack of awareness — it is the capacity to suspend social rigidity, laugh at oneself, and live with greater lightness.',
        },
        {
          title: 'Freedom from Consumerism',
          description: 'The Shroom seeks liberation from a culture shaped by consumerism, appearance, status, and constant comparison. The Shrooms value experiences, music, nature, and human connection above material accumulation.',
        },
        {
          title: 'Music as Collective Language',
          description: 'Trance music holds a central place in Cultura Shroom. For the Shrooms, music is a common language that unites bodies, rhythms, and states of mind — dissolving barriers and creating collective presence.',
        },
        {
          title: 'Dance as a Ritual of Freedom',
          description: 'On the Shroomfloor, the Shroom sets the body free. Dance is not competition. Dance is expression, presence, and liberation. The body ceases to be an object of judgement and becomes a vehicle of pure vibration.',
        },
        {
          title: 'Shroomocracia and Respect',
          description: 'Shroomocracia represents the symbolic form of Shroom organization: participation, listening, respect, and collective goodwill. Individual freedom coexists with care for the other.',
        },
        {
          title: 'Humour as Social Healing',
          description: 'The Shrooms recognize laughter as a tool of healing, closeness, and deconstruction. Laughing together creates Shroomunidade. Laughing at oneself is the definitive passport to lightness.',
        },
        {
          title: 'Good Heart and Mutual Care',
          description: 'Shroom freedom always walks hand in hand with empathy. The Shroom cares for the space, the music, the energy, and the other Shrooms. Community is born from care, not indifference.',
        },
      ] as PilarTranslation[],
    },

    shrooms: {
      sectionTag: 'The Shroomunidade',
      title:      'Who Are the Shrooms',
      intro:      'The Shrooms are participants in a symbolic, musical, and communal culture.',
      paragraphs: [
        'The Shroom can be whoever dances, whoever laughs, whoever watches, whoever cares, whoever loses themselves for a moment and finds their way again through music, nature, and Shroompanhia.',
        'The Shrooms require no status, no appearance, no prominence. Each Shroom participates in their own way.',
        'There are animated Shrooms, calm Shrooms, shroomalhado Shrooms, anonymous Shrooms, founding Shrooms, and Shrooms still discovering their place in Shroomland.',
        'What unites the Shrooms is the desire to live with more freedom, respect, humour, presence, and good heart.',
      ],
      types: [
        { label: 'Shroom Animado',       desc: 'Dancefloor energy, easy laughter, and an unstoppable will to move.' },
        { label: 'Shroom Calmo',         desc: 'A quiet presence and stabilizing energy within the Shroomunidade.' },
        { label: 'Shroomalhado',         desc: 'Slightly adrift in the cosmos, but spiritually on the right path.' },
        { label: 'Shroomanónimo',        desc: 'Arrives, spreads good energy, and contributes without needing the spotlight.' },
        { label: 'Shroom Fundador',      desc: 'One of the roots of the mycelium. Gave shape to the Shroomunidade.' },
        { label: 'Shroom em Descoberta', desc: 'Still finding their place in Shroomland. Welcome.' },
      ],
      rootsBtn: 'See the Roots',
    },

    raizes: {
      sectionTag: 'The Roots',
      title:      'First Roots of the Mycelium',
      subtitle:   'The roots of Cultura Shroom grow from the first founding Shrooms. They gave initial shape to the symbolic mycelium of the Shroomunidade.',
      footer:     'The Roots represent the affective, creative, and communal origins of Cultura Shroom. From them, the Shroomunidade grows like mycelium: organically, invisibly, collectively, and alive.',
      foundersData: [
        { role: 'Primordial Root',       description: 'Architect of frequencies who initiated the first underground exchanges of this mycelium. The Shrooms recognize in TóShroom the vibration that set everything in motion.',                                                                      vibe: 'Rhythm Alchemist'    },
        { role: 'Weaver of Connections', description: 'Guardian of the Shroomunidade\'s cultural soil. NelShroom ensures that collective energy flows with empathy, care, and good spirit among the Shrooms.',                                                                               vibe: 'Compass of Light'    },
        { role: 'Stellar Beacon',        description: 'Rhythmic visionary and master of visual design. MimShroom draws the geometries that clothe and adorn Shroomland with elegance and soul.',                                                                                             vibe: 'Decoder of Forms'    },
        { role: 'Catalyst of Laughter',  description: 'Guardian of absurd laughter and of Shroomocracia. ZéShroom reminds the Shrooms that being silly is a noble art of cosmic rebellion against social rigidity.',                                                                        vibe: 'Suspension of Gravity'},
        { role: 'Organic Nutrient',      description: 'The wild essence of the forest. SalpicãoShroom nourishes the festivities and maintains the Shrooms\' connection to nature — raw, pure, and untamed.',                                                                               vibe: 'Silvery Fire'        },
      ] as FounderTranslation[],
    },

    glossario: {
      sectionTag: 'The Dictionary',
      title:      'Shroom Glossary',
      subtitle:   'The terms and nomenclature created within the Shroomunidade.',
      vocabLabel: 'Shroom Vocabulary',
      cardFooter: 'Symbol of togetherness, humour, and organic connection.',
      shroomifier: {
        title:             'The Shroomifier',
        description:       'The Shrooms translate words tired from contemporary social pressure into the light, free, and communal dialect of Shroomland.',
        placeholder:       'E.g.: This weekend I want to escape the daily stress, go out into nature, listen to music and dance on the floor!',
        translateBtn:      'Translate to Shroomland',
        transmissionLabel: 'Mycelium Transmission:',
        emptyInput:        'Write something for the mycelium to translate!',
        emptyOutput:       'Awaiting underground mycelium encoding…',
      },
      data: [
        { definition: 'Symbolic model of communal organization based on participation, respect, listening, and collective goodwill. The Shrooms organize themselves with lightness, not rigidity.' },
        { definition: 'The symbolic territory where Cultura Shroom takes form. It can be a party, a dancefloor, a forest, a community, or any place where Shroom values are present.' },
        { definition: 'The physical or symbolic space of dance. It is where the Shroom sets the body free, finds the music, and expresses without judgement. An altar of movement and presence.' },
        { definition: 'The sacred period of gathering, celebration, and togetherness for the Shrooms. The moment when the Shroomunidade reunites to dance, laugh, and share human warmth.' },
        { definition: 'A state of preparation, creative chaos, and accumulated energy before or during a great Shroom celebration. Not destruction — the collective explosion of good spirit.' },
        { definition: 'A Shroom who participates, spreads good energy, and contributes to the Shroomunidade without seeking prominence, status, or the spotlight. The most humble and most essential figure.' },
        { definition: 'The symbolic price list or table of values in Cultura Shroom, when it exists. The Shrooms know what is worth it and what is not.' },
        { definition: 'A real or symbolic space of hydration, togetherness, and philosophical encounters at the counter. The Shroombar is where Shrooms share stories between frequencies.' },
        { definition: 'A state of cosmic confusion, temporary misalignment, or mild loss of direction — usually accompanied by good humour. The Shroom knows the way will be found again.' },
        { definition: 'A state of elevated energy, dance, laughter, and active participation. The Shroom Animado is contagious, joyful, and incapable of staying still when the music calls.' },
      ] as NomenclaturaTranslation[],
    },

    shroomland: {
      sectionTag:  'The Symbolic Territory',
      title:       'Enter Shroomland',
      paragraphs: [
        'Shroomland is the symbolic territory where Cultura Shroom takes form.',
        'It can be a dancefloor, a forest, a party, a community, or any space where Shrooms gather through music, laughter, dance, and respect.',
      ],
      values: [
        'In Shroomland, the Shroom has nothing to prove.',
        'Presence is worth more than possession.',
        'Dance is worth more than haste.',
        'Laughter is worth more than posing.',
      ],
      primaryBtn:   'Choose a Mushroom',
      secondaryBtn: 'Explore the Glossary',
    },

    cogumelo: {
      sectionTag:  'Cultural Knowledge',
      title:       'Choose a Mushroom',
      effectsNoteLabel: 'General note on effects',
      expandMore:  'Learn more',
      expandLess:  'Less',
      tableTitle:  'Comparative Table',
      tableScroll: '← Slide to see the full table',
      tableFooter: 'Indicative profiles of a cultural and informational nature. The real experience varies significantly between individuals.',
      responsibilityTitle: 'Responsibility Note',
      expLabels: [
        { key: 'visual',        label: 'Visual' },
        { key: 'musical',       label: 'Music / Auditory' },
        { key: 'social',        label: 'Laughter / Social' },
        { key: 'reflexivo',     label: 'Reflective' },
        { key: 'energetico',    label: 'Energetic' },
        { key: 'introspectivo', label: 'Introspective' },
      ] as ExpLabel[],
      tableHeaders: {
        species:     'Species',
        visual:      'Visual',
        musical:     'Music',
        social:      'Social',
        reflexivo:   'Reflective',
        energetico:  'Energetic',
        intensidade: 'Intensity',
      },
      intro: [
        'Choose a Mushroom is an educational section of Cultura Shroom dedicated to the imaginary world of psilocybin mushrooms.',
        'The Shrooms recognize the mushroom as a symbol of transformation, mycelium, nature, and collective consciousness. This section presents some species known in the psychedelic world — not as an incentive to consume, but as cultural, symbolic, and informative knowledge.',
        'The experience associated with psilocybin mushrooms can vary greatly from person to person. Context, emotional state, mental health, species, and individual sensitivity strongly influence the effects.',
      ],
      effectsNote: 'The effects of psilocybin mushrooms typically involve alterations in perception, mood, thinking, sensitivity to music, the sense of time, and the way the body feels in space. Generally, effects may begin between 15 and 45 minutes and last around 4 to 6 hours, though this can vary considerably.',
      possibleEffects: [
        'Visual intensification',
        'Greater sensitivity to music',
        'Altered sense of time',
        'Laughter',
        'Introspection',
        'Euphoria',
        'Deep emotion',
        'Connection to nature',
        'Anxiety',
        'Confusion',
        'Nausea',
        'Difficult or uncomfortable experiences',
      ],
      responsibilityNote: [
        'Cultura Shroom does not promote or encourage the consumption of psychoactive substances. This section exists as educational, cultural, and symbolic content.',
        'Psilocybin mushrooms can carry psychological, physical, and legal risks. Effects are unpredictable and may include anxiety, fear, confusion, nausea, loss of orientation, or emotionally difficult experiences.',
        'Incorrect identification of wild mushrooms can be dangerous. Some toxic species may be confused with others.',
      ],
      mushroomsData: [
        {
          profile: 'One of the most widely known species in the contemporary psychedelic world. Often associated with a balanced experience, blending visual alterations, laughter, introspection, and musical sensitivity.',
          description: 'The experience associated with Psilocybe cubensis is often described as accessible, symbolic, and emotionally variable. It may bring lightness, laughter, and sensitivity to music — but can also turn introspective or uncomfortable depending on context.',
          care: 'The Shroom observes this species as one of the most recognized symbols of the contemporary psychedelic world. The Shroomunidade values awareness, care, and respect.',
        },
        {
          profile: 'A well-known species in temperate regions, often described as naturally potent with a marked mental profile.',
          description: 'The experience associated with Psilocybe semilanceata can be more intense and mental in nature. It is often linked to reflective states, visual alterations, and a deeper perception of the environment. It can be emotionally challenging.',
          care: 'The Shroom does not confuse curiosity with encouragement. Cultura Shroom presents this species as cultural knowledge, not a recommendation.',
        },
        {
          profile: 'A species known for its potency and more pronounced visual profile. Music and the surrounding environment take on additional dimensions.',
          description: 'The experience associated with Psilocybe cyanescens can be visually intense, with patterns, distortions, and a strong sensitivity to surroundings. Music can gain depth and texture. It can also generate confusion or anxiety if the context is not stable.',
          care: 'The Shroomunidade values awareness and respect. Unstable contexts significantly increase the risk of difficult experiences.',
        },
        {
          profile: 'Frequently mentioned as one of the most potent species in the Psilocybe genus. Of strong symbolic and sensory charge.',
          description: 'The experience associated with Psilocybe azurescens can be very intense, profound, and visual. Cultura Shroom presents this species for its symbolic strength — not as something recreational or light. The risk of difficult experiences is considerably elevated.',
          care: 'The Shroom does not confuse potency with adventure. This species is presented here for its symbolic and cultural value, with particular attention to the associated risks.',
        },
        {
          profile: 'Not of the Psilocybe genus, but may contain psilocybin and psilocin. Known for an intense, sensory, and energetic experience.',
          description: 'The experience associated with Panaeolus cyanescens can be energetic, visual, and emotionally swift. It may intensify music, bodily sensations, and the perception of space. It can also generate emotional instability if the context is not appropriate.',
          care: 'Cultura Shroom presents this information as cultural knowledge. The Shroom recognizes that unstable contexts amplify the risks.',
        },
        {
          profile: 'A species historically associated with traditional uses and cultural contexts in Mesoamerica. A cultural and historical reference in the mushroom world.',
          description: 'The experience associated with Psilocybe mexicana is often described in more symbolic, gentle, and introspective terms. The Shroom observes this species as a cultural and historical reference of deep symbolic meaning.',
          care: 'The Shroomunidade values historical and cultural knowledge. This species is presented in the context of its symbolic and anthropological significance.',
        },
        {
          profile: 'A species also known through the association with what are culturally discussed as magic truffles. A milder and more reflective profile.',
          description: 'The experience associated with Psilocybe tampanensis is generally presented as milder and more reflective when compared to highly potent species. It may be described as linked to introspection, curiosity, and subtle perception.',
          care: 'The Shroom presents this species as cultural and symbolic knowledge. Cultura Shroom does not confuse curiosity with encouragement.',
        },
      ] as CogumeloTranslation[],
    },

    declaracao: {
      title: 'The Shroom Declaration',
      text: 'Cultura Shroom affirms itself as a community free of prejudice, centered on rhythmic harmony, humour, and respect. The Shrooms defend foolishness as liberation, dance as integrating expression, laughter as mutual healing, music as collective union, and simplicity as poetic resistance to the emptiness of consumerism. To be Shroom is to participate in a network culture where joy needs no permission, freedom does not dispense with the ethics of care, and the Shroomunidade is born of the will to live with more lightness, presence, and good heart.',
      buttonText: 'Enter Shroomland',
    },

    notaEducativa: {
      title: 'Responsibility Note',
      paragraphs: [
        'Cultura Shroom does not promote or encourage the consumption of psychoactive substances. The reference to mushrooms is assumed as a philosophical, aesthetic, ecological, and metaphorical pillar of collective connection and mycelium networks.',
        'Any psychoactive substance involves significant biological, psychological, and legal risks, and must be approached with responsibility, scientific education, and mental health care.',
      ],
    },

    footer: {
      copyright: '© 2026 Cultura Shroom. All rights reserved by the collective mycelium.',
      subtitle:  'Brotherhood of Art, Trance and Symbolic Humour.',
      status:    'Active Shroomunidade',
    },

    ratingDisplay: {
      'Baixo':         'Low',
      'Baixo a Médio': 'Low to Medium',
      'Médio':         'Medium',
      'Médio a Forte': 'Medium to High',
      'Forte':         'High',
      'Muito Forte':   'Very High',
      'Variável':      'Variable',
    } as Record<RatingLevel, string>,

  },
} as const;

export type Translations = typeof translations['pt'];
