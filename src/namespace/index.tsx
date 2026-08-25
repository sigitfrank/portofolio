import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiMui, SiBootstrap, SiRedux, SiMobx, SiNodedotjs, SiExpress, SiNestjs, SiLaravel,
  SiMysql, SiMongodb, SiPostgresql, SiSupabase, SiGraphql, SiSocketdotio,
  SiCodewars, SiLinkedin, SiInstagram, SiGithub, SiGmail
} from 'react-icons/si'

import {
  ExperienceInterface, LinkInterface, ProjectInterface,
  SkillGroupInterface, SocialInterface
} from '../interfaces/interfaces'
import calculateDuration from '../utils/calculateDuration'

/* ---------------------------------------------------------------
   Identity
--------------------------------------------------------------- */
export const fullName = 'Sigit Tunggul Waskito'
export const role = 'Front-End Engineer'
export const location = 'Jakarta, Indonesia'
export const email = 'sigittunggul.w@gmail.com'
export const careerStart = new Date('2021-01-01')
export const birthday: Date = new Date('1998-07-23')

/* The hero thesis: one sentence, no emoji, states what he actually does. */
export const thesis =
  'I build the front end of products people work inside all day — a conversational AI platform, trading dashboards, and the awkward edge cases nobody else wants to touch.'

export const profileDescription =
  'Front-end engineer with production experience across SaaS, fintech and enterprise dashboards. I care about the parts users feel: interfaces that stay fast under real data, states that fail clearly, and code the next developer can pick up without a handover call.'

export const availability = 'Open to select freelance and full-time work'

/* ---------------------------------------------------------------
   Section index — an ordered tour, so numbering carries meaning
--------------------------------------------------------------- */
export const links: LinkInterface[] = [
  { label: 'Intro', value: 'intro' },
  { label: 'Toolkit', value: 'toolkit' },
  { label: 'Roles', value: 'roles' },
  { label: 'Work', value: 'work' },
  { label: 'Contact', value: 'contact' },
]

/* ---------------------------------------------------------------
   Skills — grouped by what they're used for, not one flat wall
--------------------------------------------------------------- */
export const skillGroups: SkillGroupInterface[] = [
  {
    name: 'Interface',
    note: 'What the user actually touches',
    items: [
      { label: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/' },
      { label: 'JavaScript', icon: <SiJavascript />, link: 'https://www.javascript.com/' },
      { label: 'React', icon: <SiReact />, link: 'https://react.dev/' },
      { label: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/' },
      { label: 'React Native', icon: <SiReact />, link: 'https://reactnative.dev/' },
      { label: 'HTML', icon: <SiHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/' },
      { label: 'CSS', icon: <SiCss3 />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/' },
    ],
  },
  {
    name: 'Styling',
    note: 'Design systems and component libraries',
    items: [
      { label: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/' },
      { label: 'Material UI', icon: <SiMui />, link: 'https://mui.com/' },
      { label: 'Bootstrap', icon: <SiBootstrap />, link: 'https://getbootstrap.com/' },
    ],
  },
  {
    name: 'State',
    note: 'Keeping complex screens predictable',
    items: [
      { label: 'Redux', icon: <SiRedux />, link: 'https://redux.js.org/' },
      { label: 'MobX', icon: <SiMobx />, link: 'https://mobx.js.org' },
      { label: 'Zustand', icon: <SiReact />, link: 'https://zustand-demo.pmnd.rs/' },
    ],
  },
  {
    name: 'Server',
    note: 'APIs I build against, and sometimes build',
    items: [
      { label: 'Node.js', icon: <SiNodedotjs />, link: 'https://nodejs.org/en/' },
      { label: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/' },
      { label: 'NestJS', icon: <SiNestjs />, link: 'https://nestjs.com/' },
      { label: 'Laravel', icon: <SiLaravel />, link: 'https://laravel.com/' },
      { label: 'GraphQL', icon: <SiGraphql />, link: 'https://graphql.org/' },
      { label: 'WebSocket', icon: <SiSocketdotio />, link: 'https://socket.io/' },
    ],
  },
  {
    name: 'Data',
    note: 'Where it all ends up',
    items: [
      { label: 'PostgreSQL', icon: <SiPostgresql />, link: 'https://www.postgresql.org/' },
      { label: 'MySQL', icon: <SiMysql />, link: 'https://www.mysql.com/' },
      { label: 'MongoDB', icon: <SiMongodb />, link: 'https://www.mongodb.com/' },
      { label: 'Supabase', icon: <SiSupabase />, link: 'https://supabase.com/' },
    ],
  },
]

export const tickerItems: string[] = [
  'TypeScript', 'React', 'Next.js', 'Design Systems', 'Node.js',
  'GraphQL', 'React Native', 'NestJS', 'WebSocket', 'Tailwind',
]

/* ---------------------------------------------------------------
   Roles
--------------------------------------------------------------- */
export const experienceList: ExperienceInterface[] = [
  {
    label: 'AiChat Pte Ltd',
    img: '/assets/aichat.png',
    link: 'https://aichat.com',
    position: 'Frontend Developer',
    status: 'Full-time',
    duration: `${calculateDuration(new Date('2022-03-07'), new Date())} · Mar 2022 — present`,
    marker: 'Current',
  },
  {
    label: 'Astronacci International',
    img: '/assets/astronacci.png',
    link: 'https://astronacci.com',
    position: 'Web Developer',
    status: 'Full-time',
    duration: '1.6 years · 2020 — 2022',
    marker: 'Previous',
  },
  {
    label: 'TÜV NORD',
    img: '/assets/tuvnord.png',
    link: 'https://www.tuv-nord.com/id/en/home/',
    position: 'Frontend Developer',
    status: 'Freelance',
    duration: '3 months',
    marker: 'Contract',
  },
]

/* ---------------------------------------------------------------
   Work — responsibilities rewritten as outcomes, not duties
--------------------------------------------------------------- */
export const projects: ProjectInterface[] = [
  {
    label: 'AiChat Pte Ltd',
    img: '/assets/aichat.png',
    summary: 'A conversational AI platform for enterprise support teams — live chat, ticketing and channel integrations.',
    jobdesc: [
      'Shipped features to deadline across a distributed team, reporting progress and blockers daily',
      'Tracked down and fixed critical, hard-to-reproduce bugs in the embedded web widget',
      'Built AiChat 2.0 with the team during an intensive three-week session in Malaysia',
      'Worked directly with product managers and backend engineers to shape solutions before code',
      'Named Outstanding Proactivity and Initiative Developer of the Year, 2024',
    ],
    list: [
      'Ticketing enhancement', 'Conversation enhancement', 'Geo-location',
      'Facebook recurring notifications', 'HubSpot integration', 'Email ticketing',
      'SMS broadcast', 'LINE channel integration',
    ],
  },
  {
    label: 'Astronacci International',
    img: '/assets/astronacci.png',
    summary: 'Trading education and fintech products — member platforms, campaign landing pages and internal tooling.',
    jobdesc: [
      'Built web applications and campaign landing pages for a trading education business',
      'Created a client database that other divisions ran their day-to-day work on',
      'Wrote reusable components that cut build time on every landing page that followed',
      'Helped teammates isolate and resolve bugs across the codebase',
      'Promoted to a senior position within 1.5 years',
    ],
    list: [
      'A-Club Super Web App', 'Aclub database management', 'Risk & management calculator',
      'Forexflix', 'Ashop V2', 'The Tradepreneur', 'Fun Quiz',
      'Landing page — Sucor', 'Landing page — Price Action', 'Landing page — Belajar Fibonacci',
    ],
  },
  {
    label: 'TÜV NORD',
    img: '/assets/tuvnord.png',
    summary: 'Certification and inspection services — an internal dashboard for simulation calculations.',
    jobdesc: [
      'Rebuilt the dashboard UI in React with a clearer information hierarchy',
      'Followed the existing Redux architecture so the handover stayed clean',
      'Partnered with backend developers on API integration and data flow',
      'Supported the team on debugging across the stack',
    ],
    list: ['Simcal dashboard'],
  },
]

/* ---------------------------------------------------------------
   Recognition
--------------------------------------------------------------- */
export const awards: string[] = [
  'Outstanding Proactivity and Initiative Developer of the Year 2024 — AiChat',
  'Runner Up, Codig 2.0',
  'Finalist, IT FEST 3.0',
]

export const education = {
  school: 'Lampung University',
  degree: 'B.Sc. Computer Science (S.Kom)',
  detail: 'GPA 3.81 / 4.00',
}

export const organizations: string[] = [
  'HIMAKOM — Computer Science Student Association',
  'ROIS FMIPA UNILA',
]

/* ---------------------------------------------------------------
   Files & links
--------------------------------------------------------------- */
export const files = {
  cv: '/assets/Sigit-Tunggul-Waskito-CV.pdf',
  certificate: '/assets/Sigit-Tunggul-Aichat-Certificate-of-Achievement-2024.pdf',
  portfolioPdf: '/assets/sigit-portofolio.pdf',
  portfolioPpt: '/assets/sigit-portofolio.pptx',
}

export const socials: SocialInterface[] = [
  { label: 'GitHub', handle: 'sigitfrank', icon: <SiGithub />, link: 'https://github.com/sigitfrank' },
  { label: 'LinkedIn', handle: 'sigittuw', icon: <SiLinkedin />, link: 'https://www.linkedin.com/in/sigittuw/' },
  { label: 'Codewars', handle: 'sigitfrank', icon: <SiCodewars />, link: 'https://www.codewars.com/users/sigitfrank' },
  { label: 'Instagram', handle: 'sigit_frank', icon: <SiInstagram />, link: 'https://www.instagram.com/sigit_frank/' },
  { label: 'Email', handle: email, icon: <SiGmail />, link: `mailto:${email}?subject=Hi Sigit` },
]

/* ---------------------------------------------------------------
   Stats — computed from the data above so they never go stale
--------------------------------------------------------------- */
export const shippedCount = projects.reduce((total, p) => total + p.list.length, 0)
export const yearsOfExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
)
