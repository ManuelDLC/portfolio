export type Link = {
  label: string;
  href: string;
};

export type Education = {
  school: string;
  degree: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  year: string;
  stack: string[];
  summary: string;
  bullets: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const basics = {
  name: "Manuel De La Cruz",
  headline: "Software Engineering student at UT Dallas",
  tagline:
    "I build full-stack web apps and machine learning systems, and I research where LLM-based agents break down.",
  location: "Garland, TX",
  email: "mdelacruzt04@gmail.com",
  resumePath: "/Resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/ManuelDLC" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manuel-de-la-cruz-329857337",
    },
  ] satisfies Link[],
};

export const about: string[] = [
  "I'm a Software Engineering student at the University of Texas at Dallas, graduating in May 2027. I enjoy working across the stack, from designing and testing Vue.js and React interfaces to training deep learning models in PyTorch.",
  "Right now I'm an undergraduate research assistant studying failure modes in LLM-based AI agents, with a focus on where guardrails break down under adversarial and edge-case conditions. I'm looking for software engineering internships and new-grad roles.",
];

export const education: Education[] = [
  {
    school: "University of Texas at Dallas",
    degree: "B.S. Software Engineering",
    location: "Richardson, TX",
    start: "Aug 2023",
    end: "May 2027",
  },
  {
    school: "Dallas College",
    degree: "Associate of Arts",
    location: "Dallas, TX",
    start: "Aug 2020",
    end: "May 2023",
  },
];

export const experience: Experience[] = [
  {
    role: "Undergraduate RIDE Research Assistant",
    organization: "University of Texas at Dallas",
    location: "Richardson, TX",
    period: "Fall 2026",
    bullets: [
      "Contributed to a team research project studying failure modes in LLM-based AI agents, focusing on where guardrail mechanisms break down under adversarial and edge-case conditions.",
      "Analyzed CrewAI, an open-source multi-agent framework, by collecting behavior traces and labeling failure modes across agent interaction scenarios.",
      "Conducted a literature review on AI agent safety boundaries and guardrail design patterns for LLM-driven systems.",
    ],
  },
  {
    role: "Retail Associate",
    organization: "Sam's Club",
    location: "Garland, TX",
    period: "2025 – Present",
    bullets: [
      "Managed inventory, restocking, and member assistance in a fast-paced warehouse setting.",
      "Developed strong communication and time-management skills serving a high volume of members daily.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "BeyondNeuro Cognitive Wellness Platform",
    year: "2026",
    stack: ["Vue.js", "JavaScript", "Vitest"],
    summary:
      "A web-based cognitive wellness platform for stroke survivors, dementia patients, and caregivers, built for a real client through UTD's EPICS capstone program.",
    bullets: [
      "Contributed to the full product lifecycle: brainstormed and designed cognitive activity games, planned the UI/UX layout, and implemented functional web components in Vue.js.",
      "Wrote unit tests with Vitest to validate component behavior and ensure reliability across features.",
    ],
    repoUrl: "https://github.com/UTDallasEPICS/beyond-neuro",
  },
  {
    name: "Image Captioning with Attention-Based LSTM",
    year: "2025",
    stack: ["Python", "PyTorch", "ResNet-50"],
    summary:
      "An end-to-end image captioning system pairing a frozen ResNet-50 encoder with a custom LSTM decoder and Bahdanau-style attention.",
    bullets: [
      "Implemented the LSTM decoder from scratch using four independent linear layers.",
      "Built an attention mechanism that dynamically focuses on relevant regions across 49 spatial image patches during caption generation.",
      "Trained on Flickr8k (8,091 images, 40,455 captions), reaching a best BLEU-4 score of 0.1069 across three experimental configurations.",
      "Stabilized training with teacher forcing, gradient clipping, and doubly stochastic attention regularization.",
    ],
    repoUrl: "https://github.com/ManuelDLC/LSTM-Attention-Based-Image-Captioning-",
  },
  {
    name: "Netflix Content Rating Predictor",
    year: "2025",
    stack: ["Python", "XGBoost", "scikit-learn", "pandas", "TF-IDF"],
    summary:
      "A regression model predicting content ratings for 6,000+ Netflix titles from metadata and plot descriptions.",
    bullets: [
      "Engineered 60+ features from genre, cast, language, country, and TF-IDF plot descriptions.",
      "Benchmarked Random Forest against tuned XGBoost (max depth 7, 200 estimators), achieving R² = 0.387 and MAE = 0.561 with 5-fold cross-validation.",
      "Applied one-hot encoding across top genres and cast/director features, plus a 300-feature TF-IDF (unigrams and bigrams) on plot summaries.",
    ],
    repoUrl: "https://github.com/ManuelDLC/Netflix-Content-Rating-Predictor",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "C", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Web",
    skills: ["Vue.js", "React"],
  },
  {
    category: "ML / Data",
    skills: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "pandas",
      "NumPy",
      "matplotlib",
      "seaborn",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vitest", "JUnit", "Jupyter Notebook", "Figma"],
  },
  {
    category: "Concepts",
    skills: [
      "Full-Stack Development",
      "OOP",
      "Design Patterns (Strategy, Factory)",
      "Deep Learning",
      "NLP",
      "LLM Agents",
      "Agile/Scrum",
      "Concurrent Programming",
    ],
  },
];

export const navItems: Link[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
