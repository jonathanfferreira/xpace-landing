// XPACE Dance Company - Constants

export const XPACE_INFO = {
  name: "XPACE Dance Company",
  tagline: "A escola de dança que multiplica talentos",
  location: {
    address: "R. do Ouro, 185 - Iririú",
    city: "Joinville",
    state: "SC",
    zip: "89227-002",
    fullAddress: "R. do Ouro, 185 - Iririú, Joinville - SC, 89227-002"
  },
  contact: {
    email: "xpacedancecompany@gmail.com",
    phone: "+55 47 99946-3474",
    whatsapp: "5547999463474",
    cnpj: "30.006.509/0001-02"
  },
  social: {
    instagram: "https://www.instagram.com/xpacedance/",
    tiktok: "https://www.tiktok.com/@xpacedance",
    youtube: "https://www.youtube.com/@xpacedancecompany"
  },
  integrations: {
    nextfit: {
      trial: "https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4",
      contracts: "https://venda.nextfit.com.br/54a0cf4a-176f-46d3-b552-aad35019a4ff/contratos",
      store: "https://venda.nextfit.com.br/a73fa303-44ae-47e4-b2d0-314298a94dc4/produtos"
    },
    formspree: "https://formspree.io/f/xknldwgy"
  }
};

export const DANCE_STYLES = [
  {
    slug: 'hip-hop',
    name: 'Hip Hop',
    description: 'Cultura urbana com danças sociais, grooves, freestyle e foundations.',
    color: 'from-primary to-secondary'
  },
  {
    slug: 'vogue',
    name: 'Vogue',
    description: 'Originado na Ballroom culture, com poses, linhas e categorias como Vogue Femme, Old Way e New Way.',
    color: 'from-secondary to-accent'
  },
  {
    slug: 'jazz-funk',
    name: 'Jazz Funk',
    description: 'Mistura do jazz com a estética pop/comercial, ênfase em precisão e performance.',
    color: 'from-accent to-primary'
  },
  {
    slug: 'waacking',
    name: 'Waacking',
    description: 'Nascido nas discotecas de Los Angeles nos anos 70, com foco em expressão, linhas de braços e musicalidade.',
    color: 'from-neon-purple to-primary'
  },
  {
    slug: 'contemporaneo',
    name: 'Contemporâneo',
    description: 'Dança expressiva que combina técnicas clássicas e modernas com liberdade criativa.',
    color: 'from-primary to-electric-blue'
  },
  {
    slug: 'jazz',
    name: 'Jazz',
    description: 'Estilo clássico com técnica refinada, isolações e expressão artística.',
    color: 'from-secondary to-neon-pink'
  },
  {
    slug: 'house',
    name: 'House',
    description: 'Clubes de Chicago/NY, com footwork, jacking e lofting.',
    color: 'from-electric-blue to-primary'
  },
  {
    slug: 'dancehall',
    name: 'Dancehall',
    description: 'Da Jamaica, passos e variações com forte identidade cultural.',
    color: 'from-accent to-neon-pink'
  },
  {
    slug: 'heels',
    name: 'Heels',
    description: 'Dança de salto alto combinando técnica, sensualidade e empoderamento.',
    color: 'from-neon-pink to-secondary'
  },
  {
    slug: 'acrobacias',
    name: 'Acrobacias',
    description: 'Movimentos acrobáticos e aéreos para complementar coreografias.',
    color: 'from-primary to-accent'
  },
  {
    slug: 'locking',
    name: 'Locking',
    description: 'Estilo funk com movimentos travados, pontos e energia contagiante.',
    color: 'from-accent to-electric-blue'
  },
  {
    slug: 'ritmos',
    name: 'Ritmos',
    description: 'Aulas com diversos ritmos latinos e populares para iniciantes.',
    color: 'from-secondary to-accent'
  }
];

export const VALUES = [
  { name: 'Família', icon: '👨‍👩‍👧‍👦' },
  { name: 'Respeito', icon: '🤝' },
  { name: 'Disciplina', icon: '🎯' },
  { name: 'Diversão', icon: '🎉' },
  { name: 'Dedicação', icon: '💪' },
  { name: 'Compromisso', icon: '⭐' }
];

export const PLANS = {
  enrollment: 80,
  additionalStyle: 90,
  plans: [
    {
      id: 'monthly',
      name: 'Plano Mensal',
      popular: false,
      prices: {
        twice: 160,
        once: 120
      }
    },
    {
      id: 'semester',
      name: 'Plano Semestral',
      installments: 6,
      popular: false,
      prices: {
        twice: 150,
        once: 110
      }
    },
    {
      id: 'annual',
      name: 'Plano Anual',
      installments: 12,
      popular: true,
      prices: {
        twice: 130,
        once: 100
      }
    }
  ]
};
