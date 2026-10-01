// English copy for the whole site. Every visible string lives here, so German and
// Portuguese can be added later as de.ts and pt.ts with the same shape.
// Project stories live in /content/projects instead.

export const en = {
  meta: {
    title: 'Diogo Caraça · Full-Stack Engineer (Laravel & Vue), Zurich',
    description:
      'Diogo Caraça is a full-stack engineer in Zurich. Laravel, Vue, MySQL. From requirements to production, certified in IREB CPRE and ISTQB.',
    beyondTitle: 'Beyond code · Diogo Caraça',
    beyondDescription:
      'The person behind the code: boxing, a dog, Swiss-Portuguese roots, and working while studying.',
  },
  a11y: {
    skip: 'Skip to content',
    mainNav: 'Main',
    menu: 'Menu',
    quickFacts: 'Quick facts',
    githubProfile: 'GitHub profile',
    linkedinProfile: 'LinkedIn profile',
    instagramProfile: 'Instagram profile',
    home: 'Diogo Caraça, home',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    beyond: 'Beyond',
  },
  hero: {
    greeting: '// hello, world',
    name: 'Diogo Caraça',
    role: 'Full-Stack Engineer · Laravel & Vue',
    value: 'From the first requirements meeting to production.',
    location: 'Zurich, Switzerland',
    github: 'GitHub',
    linkedin: 'Connect on LinkedIn',
    linkedinShort: 'LinkedIn',
    headshotAlt: 'Portrait of Diogo Caraça',
    whoami: [
      { key: 'stack', value: 'PHP · Laravel · Vue · MySQL' },
      { key: 'since', value: 'Shipping since 2021' },
      { key: 'now', value: 'Software Engineer @ siabit AG' },
      {
        key: 'certs',
        value: 'Requirements Engineering (IREB CPRE) · Software Testing (ISTQB)',
        short: 'IREB CPRE · ISTQB',
      },
    ],
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I'm Diogo, a full-stack engineer based in Zurich, working mainly in Laravel, Vue and MySQL. I like owning problems end to end: pinning down with the customer what's needed, designing the architecture, building it, and testing it until it runs in production.",
      "Right now that's at siabit AG, on ForstControl, an ERP system for the forestry sector with several million records and several thousand users. Alongside that 80% job, I'm studying for a BSc in Computer Science at FFHS.",
    ],
    skillGroups: [
      { label: 'daily', tone: 'daily', items: ['PHP', 'Laravel', 'JavaScript', 'Vue', 'MySQL', 'REST APIs', 'Docker'] },
      { label: 'also', tone: 'neutral', items: ['CI/CD', 'Linux', 'Java'] },
      {
        label: 'exploring',
        tone: 'exploring',
        items: ['Google Cloud', 'Terraform', 'Kubernetes', 'Python', 'AI-assisted development'],
      },
    ],
    languagesLabel: 'languages',
    languages: 'German and Portuguese (native) · English (fluent) · French (basic)',
  },
  howIBuild: {
    heading: 'How I build',
    tiles: [
      {
        title: 'Own the whole path',
        text: 'Requirements → architecture → build → test → go-live.',
        link: { label: 'HR data sync', href: '#platform-data-exchange' },
      },
      {
        title: 'One contract, many adapters',
        text: 'My go-to when one core has to talk to several outside systems.',
        link: { label: 'Finance adapters', href: '#forstcontrol-accounting-adapters' },
      },
      {
        title: 'Requirements before code',
        text: "Pin down what's needed with the customer first.",
        proof: 'IREB CPRE',
        link: { label: 'Certifications', href: '#experience' },
      },
      {
        title: 'Test what ships',
        text: 'Testing is part of the build, not an afterthought.',
        proof: 'ISTQB',
        link: { label: 'Certifications', href: '#experience' },
      },
    ],
  },
  projects: {
    heading: 'Projects',
    diogosPart: "diogo's part",
    stack: 'stack',
    howItWorks: 'How it works',
    timelineLabel: 'Project timeline',
  },
  github: {
    heading: 'On GitHub',
    all: 'All repositories on GitHub',
    updated: 'updated',
  },
  experience: {
    heading: 'Experience',
    types: { work: 'work', education: 'education', cert: 'cert' },
    now: 'now',
    inProgress: 'in progress',
    entries: [
      {
        type: 'work',
        current: true,
        start: '2023-05',
        end: null,
        title: 'Software Engineer',
        org: 'siabit AG, Gebenstorf',
        chips: ['80%'],
        bullets: [
          'Full-stack development on ForstControl 3.0 (Laravel, Vue, MySQL).',
          'Designed the accounting adapter architecture, owned a platform data exchange from requirements to go-live, and took over requirements elicitation for the team.',
        ],
      },
      {
        type: 'education',
        start: '2023-08',
        end: 'in-progress',
        title: 'BSc Computer Science',
        org: 'FFHS (Swiss Distance University of Applied Sciences)',
        chips: ['part-time'],
        bullets: ['Part-time, alongside an 80% engineering role.'],
        link: { label: 'How I combine work and study', href: '/beyond#work-study' },
      },
      {
        type: 'cert',
        start: '2026-01',
        title: 'Requirements Engineering · IREB CPRE Foundation Level',
        org: 'IREB',
      },
      {
        type: 'work',
        start: '2022-07',
        end: '2023-05',
        title: 'Civilian service',
        org: 'Primary school, Dietikon',
        bullets: ['Classroom support and one-to-one help for pupils, on unpaid leave from Cognizant.'],
        link: { label: 'More on the Beyond page', href: '/beyond#civilian-service' },
      },
      {
        type: 'work',
        start: '2021-08',
        end: '2023-04',
        title: 'Software Developer',
        org: 'Cognizant AG, Zurich',
        bullets: ['Application development, continuing at the company after my apprenticeship.'],
      },
      {
        type: 'education',
        start: '2017-08',
        end: '2021-07',
        title: 'Informatiker EFZ + Berufsmaturität',
        org: 'TBZ Zurich / Cognizant AG',
        bullets: [
          '4-year federal apprenticeship in application development, plus the vocational baccalaureate.',
        ],
      },
      {
        type: 'cert',
        start: '2019-12',
        title: 'Software Testing · ISTQB Certified Tester Foundation Level',
        org: 'Swiss Testing Board',
      },
    ],
  },
  teaser: {
    heading: 'Beyond code',
    intro: 'My wife, a dog, two home countries, and a BSc on the side.',
    more: 'More beyond code',
    tiles: [
      { id: 'together', title: 'My wife and I', text: 'On our wedding day.', glyph: '♥', photo: 'together', photoPosition: 'top' },
      { id: 'dog', title: 'Daisy', text: 'Our dog, and part of the family.', glyph: 'woof', photo: 'dog' },
      { id: 'roots', title: 'Roots', text: 'Swiss with Portuguese roots, two native languages.', glyph: 'CH ⇄ PT' },
      { id: 'exploring', title: 'Exploring', text: 'Cloud, Kubernetes and AI-assisted development.', glyph: '$ ls ~/learning' },
    ],
  },
  beyond: {
    back: 'Main page',
    prompt: '// beyond --code',
    heading: 'Beyond code',
    intro: [
      'The main page is the work. This page is the rest: where I come from, what keeps me grounded, and what I am learning next.',
      "When I'm not coding, I'm usually out with my wife and our dog, or at the boxing gym.",
    ],
    blocks: {
      roots: {
        heading: 'Roots and languages',
        glyph: 'CH ⇄ PT',
        text: [
          "I'm Swiss with Portuguese roots, and both German and Portuguese are my native languages. That is also why this site will come in English, German and Portuguese.",
        ],
      },
      boxing: {
        heading: 'Boxing',
        photoAlt: 'Diogo boxing',
        text: [
          'Boxing and fitness are how I switch off next to work and study.',
          'The ring rewards the same things good software does: preparation, taking feedback, and staying calm under pressure.',
        ],
      },
      together: {
        heading: 'My wife and I',
        photoAlt: 'Diogo and wife on their wedding day',
        text: ['On our wedding day.'],
      },
      dog: {
        heading: 'Daisy',
        photoAlt: "Daisy, Diogo's dog",
        text: ['Daisy, our dog, is part of the family, and the best reason to close the laptop.'],
      },
      workStudy: {
        heading: 'Working and studying',
        text: [
          'I work 80% as a software engineer and study Computer Science at FFHS part-time, since 2023.',
          'It is a long run by design: the part-time model keeps the pace sustainable next to a real engineering job, and what I learn goes straight into my work.',
        ],
      },
      civilianService: {
        heading: 'Civilian service',
        text: [
          'For my Swiss civilian service I spent a school year at a primary school in Dietikon: classroom assistance, one-to-one support for pupils, supervision and after-school care.',
          'Explaining things simply and patiently turned out to be useful far beyond the classroom.',
        ],
      },
      exploring: {
        heading: 'Currently exploring',
        prompt: '$ ls ~/learning',
        items: [
          { name: 'google-cloud/', text: 'Building up cloud skills for running production infrastructure.' },
          { name: 'terraform/', text: 'Infrastructure as code.' },
          { name: 'kubernetes/', text: 'Container orchestration.' },
          { name: 'ai-assisted-dev/', text: 'Daily practice. FFHS Skills and this site are results of it.' },
        ],
      },
    },
    updated: 'Updated September 2026',
    backButton: 'Back to the main page',
  },
  footer: {
    location: 'Zurich, Switzerland',
    builtWith: 'Built with Astro',
    source: 'Source on GitHub',
    lastBuild: 'last build',
  },
} as const;

export type Dictionary = typeof en;
