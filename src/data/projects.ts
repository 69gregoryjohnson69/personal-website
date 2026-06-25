// Real portfolio projects. The flagship course case study preserves Gregory's
// own writing from the original Sway, lightly copyedited for glaring errors only.

export interface CaseSection {
  heading: string;
  body: string[];
  lang?: 'es' | 'en';
}

export interface OutlineItem {
  marker: string;
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line: what it is + why it matters. Shown on the index. */
  tagline: string;
  kind: string;
  context: string;
  year: string;
  tags: string[];
  accent: 'cobalt' | 'coral';
  featured: boolean;
  intro: string;
  sections: CaseSection[];
  /** Optional ordered outline (e.g. course modules). */
  outline?: { heading: string; items: OutlineItem[] };
  /** Optional sources / works cited. */
  sources?: string[];
  link?: { href: string; label: string };
}

export const projects: Project[] = [
  {
    slug: 'fundaciones-escritura-futbol',
    title: 'Fundaciones de la Escritura en Español: Edición futbolera',
    tagline:
      'A Spanish writing course that uses football to teach culture, history, and craft.',
    kind: 'Course design',
    context: 'SPAN 5000 · Dept. of Spanish & Portuguese, University of Iowa',
    year: 'December 2025',
    tags: ['Pedagogy', 'Cultural studies', 'Digital humanities', 'Spanish'],
    accent: 'coral',
    featured: true,
    intro:
      'A prospective course for Spanish majors and minors, built around football as a way into culture, history, and writing.',
    sections: [
      {
        heading: 'The idea',
        body: [
          'Using various cultural manifestations of Spanish and Latin-American football as a guide, the most culturally significant club teams and the national selections — both men’s and women’s — open the door to in-depth cultural and historical themes. Eduardo Galeano and Javier Marías, prolific authors from Uruguay and Spain, both have meaningful work that explores the sociocultural complexities of the sport.',
          'Passages from El fútbol a sol y sombra (Galeano, 1995) and Salvajes y sentimentales: Letras de fútbol (Marías, 2000) demonstrate that cultural analysis of the sport allows for academic exploration far beyond reproductions of celebratory and nostalgic language. Various forms of media — articles, video, and more — round out each module, and students take on written projects that place them in the shoes of a Hispanic football journalist.',
        ],
      },
      {
        heading: 'Philosophy',
        body: [
          'Fútbol, its fans, and the institutions that stage the spectacle offer space for analysis and the acquisition of culture-based knowledge. Placing Galeano’s and Marías’s books as focal points throughout the course helps students recognize the humanistic inquiry that arises when you explore the sport academically. Beyond formal literature, students explore other primary and secondary sources that invite intercultural reflection on their own country’s sporting practices.',
          'Themes like gender, economic inequality, racism, politics, and popular culture organize the research and the academic writing students partake in. Taking classes in formal literature can sound like a daunting endeavor for young students; this course aims to de-escalate the anxieties they face by using sport as a way to facilitate humanist inquiry.',
        ],
      },
      {
        heading: 'How a module works',
        body: [
          'The course employs the principles of communicative language learning. Each module — lasting one to two class meetings — explores various literatures and forms of media through a workflow that begins with input, continues with immediate structured output prompts, and ends in a response that serves as the Tarea. Each digital artifact is curated to challenge students to examine a range of topics within Ibero-American studies.',
          'Most class time is split into thirds. First, discussion-based reaction to the materials connects students communicatively with the preliminary reading. Second, students pre-research and organize their responses to the Tareas with the instructor’s guidance. The final third — perhaps the most enriching — is peer review of a first draft. The instructor stays extremely active, giving explicit written and oral feedback so that collaboration during class is the priority.',
        ],
      },
    ],
    outline: {
      heading: 'The shape of the semester',
      items: [
        {
          marker: 'Módulo 1',
          title: 'Identidad Local',
          detail:
            'Galeano’s “La pelota como bandera” and the barrio of Vallecas open the question of how a club carries a community’s identity. Tarea: research and define “fútbol moderno.”',
        },
        {
          marker: 'Módulo 2',
          title: 'El estado del fútbol femenino',
          detail:
            'Gender discrimination in sport and the Rubiales case. Tarea: watch the documentary Se acabó and write a reflection.',
        },
        {
          marker: 'Módulo 3',
          title: 'Cómo hablan del fútbol en la tele',
          detail:
            'Madridismo and elitism, with Marías’s “Real Madrid Republicano.” Tarea: compare El Chiringuito with a U.S. sports program — how does humor in sports journalism travel?',
        },
        {
          marker: 'Módulo 4',
          title: 'Racismo',
          detail:
            'Galeano’s “Los negros” alongside the documentary on the Williams brothers, followed by a written reflection.',
        },
        {
          marker: 'Módulo 5',
          title: '¿Cómo se juega el fútbol?',
          detail:
            'The introduction to Marcelo Bielsa’s Los 11 caminos al gol — how the structure of play might mirror, or reshape, the act of writing.',
        },
        {
          marker: 'Trabajo final',
          title: 'The football journalist',
          detail:
            'Students become an up-and-coming soccer journalist and write a ~1,000-word article on the cultural significance of a story they choose, working with primary and secondary sources in the style of the two anchor authors.',
        },
      ],
    },
    sources: [
      'Galeano, Eduardo. El fútbol a sol y sombra. Siglo XXI Editores, 1995.',
      'Marías, Javier. Salvajes y sentimentales: Letras de fútbol. Ed. Paul Ingendaay, Alfaguara, 2010.',
      'Bielsa, Marcelo. Los 11 caminos al gol. Sudamericana, 2015.',
      'El Chiringuito de Jugones. “Hermanos. Dios es Madridista.” YouTube, 26 Apr. 2022.',
    ],
  },
  {
    slug: 'iowa-library-advocacy',
    title: 'A Year-Round Library Advocacy Strategy',
    tagline:
      'Helping Iowa’s libraries advocate for themselves all year, not just at budget time.',
    kind: 'Public humanities',
    context: 'Iowa City Public Library Friends Foundation',
    year: 'Summer 2026',
    tags: ['Policy research', 'Community', 'Public humanities'],
    accent: 'cobalt',
    featured: true,
    intro:
      'Research and tools, built during a public-affairs internship, to help Iowa’s libraries make their case year-round.',
    sections: [
      {
        heading: 'The work',
        body: [
          'I assessed Iowa’s library-advocacy ecosystem and identified the gaps and opportunities facing the Iowa Library Association’s Government Affairs Committee, then conducted policy analysis and comparative research across state library associations to support a sustained, year-round advocacy strategy.',
          'From that research I built a stakeholder-engagement framework and a communications toolkit for library foundations, Friends groups, and allies — and translated the findings into a reference guide, including an advocacy-ecosystem map and a policy-landscape report presented to ILA leadership.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Libraries are some of the most genuinely public institutions we have, and too often they only advocate for themselves in a crisis. What I wanted from this project was to give the people who care about libraries a way to organize support that is steady, informed, and ready well before the moment of need.',
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
