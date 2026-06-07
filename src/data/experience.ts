export type ExperienceEntry = {
  title: string;
  organisation: string;
  location: string;
  period: string;
  bullets: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Brown University",
    degree: "B.A., Computer Science",
    location: "Providence, RI, USA",
    period: "Sep 2021 – Aug 2026",
    details: [
      "Included one year of full-time employment as software engineer at Airbus Corporation (Aug 2023 – Jun 2024)",
      "Coursework: Deep Learning, Blockchains, Software Security, Databases, Compilers, LLMs, Discrete Structures, Linear Algebra, Statistical Inference",
    ],
  },
  {
    institution: "St Paul's School London",
    degree: "A-Levels",
    location: "London, UK",
    period: "Sep 2016 – May 2021",
    details: [
      "Mathematics (A*), Further Mathematics (A*), Physics (A*), Chemistry (A*), EPQ in CS (A*)",
      "ACT: 35/36 · SAT Math Level 2: 800 · SAT Physics: 780",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "Cofounder",
    organisation: "Trace Travel Sharing App",
    location: "London, UK",
    period: "Jan 2026 – Present",
    bullets: [
      "Built mobile beta app using Flutter and Cursor to allow users to share travel itineraries",
      "Developed business strategy, go-to-market plan, and marketing pitch",
      "Raised $2,000 entrepreneurship grant from Università Bocconi",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    organisation: "Department of Engineering, Brown University",
    location: "Providence, RI, USA",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Researched player agility and effort required for playing squash with different ball types at varying temperatures",
      "Wrote code to convert high-speed camera images into metrics including pre- and post-impact ball velocities",
      "Produced research report summarising methodology and results under Professor Roberto Zenit",
    ],
  },
  {
    title: "Software Engineer",
    organisation: "Airbus Corporation",
    location: "Bristol, UK",
    period: "Aug 2023 – Jun 2024",
    bullets: [
      "Developed a client-side solution automating work requests using React, Python, and FastAPI",
      "Designed and developed validation software for simulation output databases",
      "Designed, developed, and released three productivity-enhancing sites for internal teams",
    ],
  },
  {
    title: "Automation Consultant",
    organisation: "Parus Finance",
    location: "London, UK",
    period: "Jul 2024 – Sep 2024",
    bullets: [
      "Built AI-driven tools using OpenAI's API, Python, and TypeScript to automate Due Diligence Questionnaire responses",
    ],
  },
  {
    title: "Mobile Developer Intern",
    organisation: "Rocket Lawyer",
    location: "London, UK",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Developed and maintained mobile app; created two new app pages and a comprehensive unit test suite",
      "Produced and ran automation tests on BrowserStack",
    ],
  },
  {
    title: "Full Stack Developer Intern & Digital Strategist",
    organisation: "Educai",
    location: "London, UK",
    period: "Sep 2018 – Jul 2022",
    bullets: [
      "Developed Educai's website and personalised teaching platform including Help Centre using Webflow",
      "Created a student-teacher matching algorithm for the platform's API using TypeScript",
      "Managed digital infrastructure including social media and YouTube channel",
    ],
  },
  {
    title: "Research Intern",
    organisation: "Max Planck Institute for Biophysics",
    location: "Frankfurt, Germany",
    period: "Jul 2019 – Aug 2019",
    bullets: [
      "Ran research simulations placing proteins inside cell membranes using Gromacs and coarse-grained software",
    ],
  },
];
