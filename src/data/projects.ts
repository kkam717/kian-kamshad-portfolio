export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  role: string;
  status: string;
  description: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  pdfUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "trace",
    title: "Trace",
    subtitle: "Social trip planner for real itineraries",
    year: "2026",
    type: "Consumer mobile app",
    role: "Co-founder, product",
    status: "Early access beta",
    description:
      "Most trip planning still lives in group chats, screenshots, and generic listicles. Trace is a social trip planner for people who trust real routes from friends and travelers they follow — discover complete itineraries, copy a route in one tap, invite your group, and keep bookings, passes, stops, and decisions in one shared workspace.",
    highlights: [
      "Discover public itineraries with destinations, days, stops, and traveler context",
      "Clone a trip, edit the route, adjust dates, and invite your group into one place",
      "Attach tickets, passes, accommodation, and notes to the right part of the journey",
      "Built mobile beta in Flutter; raised entrepreneurship grant from Università Bocconi",
    ],
    liveUrl: "https://by-trace.com",
    featured: true,
  },
  {
    slug: "squash-rebound-research",
    title: "Squash Ball Rebound Research",
    subtitle: "Coefficient of restitution & player agility",
    year: "2025",
    type: "Sports analytics & engineering research",
    role: "Undergraduate research assistant",
    status: "Research report · Zenit Lab, Brown University",
    description:
      "Squash players choose ball type, age, and temperature assuming each affects bounce and difficulty — but how much do those factors actually matter? This study measured coefficients of restitution (CoR) for single- and double-dot balls, new and old, at room and heated temperatures, using an airgun, high-speed camera at 4000 fps, and a MATLAB pipeline to extract pre- and post-impact velocities.",
    highlights: [
      "24 ball type / temperature / age / velocity combinations tested across controlled lab trials",
      "Temperature strongly and significantly increased CoR between 22 °C and 35 °C",
      "Ball type and age showed no statistically significant effect — contrary to conventional player wisdom",
      "CoR decreased as impact velocity increased, with a stronger effect at higher temperatures",
      "Built MATLAB tooling to track ball position over time and convert pixel coordinates to real distances",
    ],
    liveUrl: "/projects/squash-rebound-research",
    featured: false,
  },
  {
    slug: "brown-housing",
    title: "Brown Housing Lottery Demystified",
    subtitle: "Campus discovery tool",
    year: "2024",
    type: "Campus discovery tool",
    role: "Frontend lead",
    status: "Live · 1,100+ dorm rooms",
    description:
      "Brown's housing lottery hands students a hard deadline and almost no usable room information. This tool turns an opaque lottery into a searchable, filterable, reviewable resource — deployable without ongoing infrastructure cost.",
    highlights: [
      "Search and filter 1,100+ rooms by size, location, and bathroom type",
      "Tag-based search scoring for natural queries",
      "Peer reviews as generational housing knowledge",
      "Self-contained deployment with no server dependencies",
    ],
    liveUrl: "https://kkam717.github.io/brown-housing-site/",
    githubUrl: "https://github.com/kkam717/brown-housing-site",
    featured: true,
  },
  {
    slug: "wrf-selection-workflow",
    title: "WRF Selection Workflow",
    subtitle: "Guided configuration for internal engineering teams",
    year: "2023–2024",
    type: "Internal engineering tool",
    role: "Full-stack developer",
    status: "Internal tool · Airbus, Bristol",
    description:
      "Selecting Work Request Form parameters meant navigating a complex space of interdependent options. Invalid combinations were easy to miss, selected state was easy to lose, and engineers repeated the same selection journey without an audit trail. I sat with the internal engineering team to distinguish genuinely interdependent selections from those grouped by convention, and built a guided progression where each step narrows valid options for the next.",
    highlights: [
      "Guided users step by step to prevent invalid combinations before they happened",
      "Kept frontend and backend aligned — what the user saw matched what the system stored",
      "Stored selection history so submitted configurations could be reviewed, audited, and reused",
      "Used progressive filtering to turn a flat field of choices into a clear path",
      "Serialised complex fields cleanly to keep the database queryable downstream",
      "Iterated on interaction patterns with engineering teams acting as both designers and users",
    ],
    featured: false,
  },
  {
    slug: "kamelian-productions",
    title: "Kamelian Productions",
    subtitle: "Video, photo compositing, and short-form storytelling",
    year: "2019–2026",
    type: "Creative production",
    role: "Creator, director, editor",
    status: "Active · YouTube channel",
    description:
      "Kamelian Productions is a YouTube channel for original creative work — Adobe Photoshop compositing, short film, and collaborative documentary-style series. The channel spans fan and branded edits, competition short film, and multi-part projects built around iteration, craft, and narrative.",
    highlights: [
      "Pawns — short film directed and edited for the My RØDE Reel 2020 competition, with behind-the-scenes coverage",
      "Learning how to make croissants for a Frenchman — three-part series from trial runs through iterative design to a final taste test",
      "Photoshop compositing portfolio including Mandalorian edits, original scenes, and channel branding work",
      "Inhibitor Chips (2026) — narrative edit on the tragedy of Arc Trooper CT-5555",
    ],
    liveUrl: "https://www.youtube.com/@kamelianproductions9671",
    featured: false,
  },
  {
    slug: "ddq-automation",
    title: "Automatic DDQ Answering",
    subtitle: "Designing for a regulated workflow",
    year: "2024",
    type: "Enterprise document automation",
    role: "Full-stack builder",
    status: "Client project · Parus Finance",
    description:
      "Due Diligence Questionnaires are repetitive, document-heavy, and draw on the same firm information across many forms. Answering them manually is slow, inconsistent, and prone to formatting errors. I started by mapping what compliance teams actually did with DDQs — studying real prior submissions rather than abstract examples — and treated the required document formats as a constraint to design into, not around.",
    highlights: [
      "Let users upload real prior documents; the training data already lived in their archive",
      "Preserved question–answer structure, because a DDQ's format is part of its credibility",
      "Separated training upload from answering so either side could be updated independently",
      "Generated PDF output — the workflow still ends in document exchange",
      "Planned retrieval-based architecture with embeddings and namespaces to scale across categories",
      "Validated parsing and PDF table extraction directly against the firm's prior submissions",
    ],
    featured: false,
  },
];
