export const profile = {
  name: 'Guilherme S Maia',
  initials: 'GM',
  photo: '/avatar.jpg',
  title: 'Desenvolvedor',
  headline: 'Guilherme S Maia',
  lede:
    'Desenvolvedor com 3 anos de experiência prática em estágio, encerrando a faculdade no fim de 2026, transitando entre front-end, back-end e diferentes stacks de React e Quarkus ao Laravel.',
  location: 'Porto Velho, RO - Brasil',
  email: 'gsalvadormaia@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guilherme-salvador-maia-862290405',
  github: 'https://github.com/GuilhermeSMaia',
}

export const stats = [
  { value: '3 anos', label: 'em estágios de desenvolvimento' },
  { value: '8° período', label: 'Sistemas de Informação' },
  { value: '2026', label: 'previsão de formatura' },
]

export const summary =
  'Desenvolvedor full-stack com 3 anos de experiência em estágios de desenvolvimento, atuando tanto no front-end quanto no back-end em diferentes stacks de React e TypeScript a Java com Quarkus e PHP com Laravel. Cursando o 8° período de Sistemas de Informação, com conclusão prevista para o fim de 2026, e atualmente em estudo autônomo de Python para ampliar a atuação além do desenvolvimento web.'

export const skills = [
  {
    title: 'Front-end',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Java', 'Quarkus', 'PHP', 'Laravel'],
  },
  {
    title: 'Infra & em estudo',
    items: [
      { name: 'Docker' },
      { name: 'Python', learning: true },
    ],
  },
]

export const experience = [
  {
    period: '1 ano - atualmente',
    role: 'Estagiário de Desenvolvimento',
    org: 'DER-RO',
    highlights: [
      'Construção e manutenção de sistemas internos utilizando React no front-end e PHP com Laravel no back-end.',
      'Refatoração de formulários multi-etapa do sistema.',
      'Ajustes no fluxo de validação de dados das aplicações.',
    ],
    tags: ['React', 'PHP', 'Laravel'],
  },
  {
    period: '2 anos',
    role: 'Estagiário de Desenvolvimento',
    org: 'SMTI',
    highlights: [
      'Desenvolvimento de aplicações com React e Node.js em TypeScript, no front-end e back-end.',
      'Desenvolvimento de serviços back-end em Java com Quarkus.',
      'Atuação em times ágeis, contribuindo com features de ponta a ponta.',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'Axios', 'Java', 'Quarkus', 'PostgreSQL', 'Docker'],
  },
]

export const projects = [
  {
    title: 'PreçoChef',
    subtitle: 'Projeto de TCC - comparação de preços via web scraping',
    description:
      'Sistema em desenvolvimento como Trabalho de Conclusão de Curso, criado para ajudar o usuário a decidir onde comprar seus produtos, comparando preços entre diferentes fontes coletadas automaticamente.',
    highlights: [
      'Alimentação do banco de dados por meio de ferramentas de web scraping.',
      'Auxiliar a decisão do usuário sobre onde comprar seus produtos.',
      'Relatorio da mudança do preço dos produtos',
      'em desenvolvimento...'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Quarkus', 'Web Scraping', 'MySQL'],
  },
  {
    title: 'E-Campet',
    subtitle: 'Sistema de apoio à campanha de vacinação antirrábica',
    description:
      'Sistema desenvolvido para o governo de Porto Velho, dando suporte a campanha anual de vacinação antirrábica com fluxo de ponta a ponta: cadastro, acompanhamento e consulta de informações em tempo real, via API REST.',
    highlights: [
      'Gerenciamento de gastos e materiais necessários à campanha.',
      'Cálculo de médias de animais vacinados.',
      'Desenvolvimento full-stack: interfaces em React com TypeScript, integração via Axios, regras de negócio em Quarkus (Java) e Node.js, persistência em PostgreSQL.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Quarkus', 'Axios', 'PostgreSQL'],
  },
]

export const education = [
  {
    title: 'Sistemas de Informação',
    place: '8° período - em andamento, conclusão prevista para o fim de 2026',
    period: 'em andamento',
  },
  {
    title: 'Python',
    place: 'Estudo autônomo em andamento',
    period: 'em andamento',
  },
]
