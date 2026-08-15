import {
  Project,
  ResearchItem,
  Internship,
  Hackathon,
  Education,
  Certification,
  SkillCategory,
} from "../types";

export const PERSONAL_INFO = {
  name: "Dimmika Rajak",
  initials: "DR",
  title: "Software Engineer",
  subtitles: [
    "Software Engineer",
    "Full Stack Developer",
    "4x Patent Co-Inventor",
    "AI & Data Researcher",
  ],
  bio: "B.Tech Computer Engineering student at SAGE University (CGPA 8.35 | Top 10% of class) with 24+ certifications across AWS, GenAI, Web Dev & IoT. Co-inventor on 4 Indian Patent Applications (AI Raag synthesis, Digital Twin physical asset control, and cryptographic tamper-evident monitoring) and co-author of an accepted Wiley Scrivener book chapter. Seeking Software Engineer, Full Stack, or AI Developer roles.",
  email: "rajakdimika@gmail.com",
  phone: "+91-9302676858",
  location: "Indore, Madhya Pradesh, India",
  profileImage: "/public/Dimmika.png",
  github: "https://github.com/DimmikaRajak",
  linkedin: "https://linkedin.com/in/dimmika-rajak-6b20792b8/",
  githubUsername: "DimmikaRajak",
  status: "Available for Software Engineer & Data Roles",
  stats: [
    { label: "B.Tech CGPA", value: "8.35", detail: "Top 10% of Class" },
    {
      label: "Indian Patents",
      value: "4 Patents",
      detail: "Published & Filed",
    },
    {
      label: "Wiley Publication",
      value: "1 Paper",
      detail: "NeuroTrust / Scrivener",
    },
    {
      label: "Certifications",
      value: "24+",
      detail: "AWS, GenAI, IIT, NxtWave",
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    description:
      "Building responsive, high-performance, and accessible client-side user experiences",
    iconName: "Layout",
    skills: [
      {
        name: "React.js",
        level: "Expert",
        category: "Frontend",
        highlight: true,
      },
      {
        name: "Next.js 16",
        level: "Advanced",
        category: "Frontend",
        highlight: true,
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        category: "Frontend",
        highlight: true,
      },
      {
        name: "TypeScript",
        level: "Advanced",
        category: "Frontend",
        highlight: true,
      },
      {
        name: "Tailwind CSS v4",
        level: "Expert",
        category: "Frontend",
        highlight: true,
      },
      {
        name: "HTML5 & CSS3 / Bootstrap",
        level: "Expert",
        category: "Frontend",
      },
      {
        name: "Web Audio API / Tone.js",
        level: "Advanced",
        category: "Frontend",
        highlight: true,
      },
      { name: "Redux", level: "Advanced", category: "Frontend" },
    ],
  },
  {
    name: "Backend & Systems",
    description:
      "Developing resilient REST APIs, microservices, cryptographic logging, and authentication layers",
    iconName: "Server",
    skills: [
      {
        name: "Node.js",
        level: "Expert",
        category: "Backend",
        highlight: true,
      },
      {
        name: "Express.js",
        level: "Expert",
        category: "Backend",
        highlight: true,
      },
      {
        name: "Python",
        level: "Advanced",
        category: "Backend",
        highlight: true,
      },
      { name: "RESTful APIs", level: "Expert", category: "Backend" },
      { name: "JWT Authentication", level: "Advanced", category: "Backend" },
      {
        name: "Cryptographic Ledgers & IoT",
        level: "Proficient",
        category: "Backend",
        highlight: true,
      },
    ],
  },
  {
    name: "Databases & Storage",
    description:
      "Architecting relational schemas, NoSQL document stores, and cloud storage",
    iconName: "Database",
    skills: [
      {
        name: "Supabase (PostgreSQL)",
        level: "Advanced",
        category: "Database",
        highlight: true,
      },
      {
        name: "MongoDB",
        level: "Advanced",
        category: "Database",
        highlight: true,
      },
      { name: "SQL Server", level: "Proficient", category: "Database" },
      {
        name: "Power BI & Tableau",
        level: "Advanced",
        category: "Analytics",
        highlight: true,
      },
    ],
  },
  {
    name: "AI, ML & Cloud",
    description:
      "Harnessing LLM APIs, fast inference, agentic workflows, AWS cloud services, and digital twins",
    iconName: "Sparkles",
    skills: [
      {
        name: "Groq AI (Llama 3 / Fast Inference)",
        level: "Advanced",
        category: "AI",
        highlight: true,
      },
      {
        name: "OpenAI API & Gemini API",
        level: "Advanced",
        category: "AI",
        highlight: true,
      },
      {
        name: "Agentic AI & NLP",
        level: "Advanced",
        category: "AI",
        highlight: true,
      },
      {
        name: "Amazon Location Service & AWS",
        level: "Advanced",
        category: "Cloud",
        highlight: true,
      },
      {
        name: "AWS Cloud Practitioner",
        level: "Advanced",
        category: "Cloud",
        highlight: true,
      },
      {
        name: "Make.com Automation",
        level: "Proficient",
        category: "Automation",
      },
      {
        name: "Digital Twin & ANN Systems",
        level: "Proficient",
        category: "AI",
        highlight: true,
      },
    ],
  },
  {
    name: "Tools, DevOps & Soft Skills",
    description:
      "Version control, UI/UX prototyping, agile workflows, and collaborative leadership",
    iconName: "Wrench",
    skills: [
      {
        name: "Git & GitHub",
        level: "Expert",
        category: "Tools",
        highlight: true,
      },
      {
        name: "Figma UI/UX",
        level: "Advanced",
        category: "Tools",
        highlight: true,
      },
      { name: "VS Code", level: "Expert", category: "Tools" },
      { name: "Vercel / Netlify", level: "Expert", category: "Cloud" },
      {
        name: "Leadership & Team Mentoring",
        level: "Expert",
        category: "Soft Skills",
      },
      {
        name: "Agile Problem Solving",
        level: "Expert",
        category: "Soft Skills",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dhun-ai",
    title: "Dhun AI",
    subtitle: "Indian Classical Music Composition System",
    tagline:
      "Full-stack AI platform composing authentic Indian dhuns from Hindi lyrics using raag theory and oscillator-based audio synthesis.",
    category: "Patent",
    featured: true,
    techStack: [
      "Next.js 16",
      "Groq AI",
      "Tone.js",
      "Web Audio API",
      "Supabase",
      "Tailwind CSS v4",
      "PostgreSQL",
    ],
    patentNumber: "No. 202621056495",
    metrics: [
      "10+ REST API Routes",
      "5 Synthesized Instruments",
      "ADSR Envelope & Reverb",
      "Patent-Backed Architecture",
    ],
    description:
      "Dhun AI is an advanced full-stack music AI system developed as a collaborative engineering team project that translates emotional sentiment and Hindi lyrical inputs into authentic Indian Classical melodies based on traditional Raag grammar. The system incorporates Groq AI for fast emotion detection and mood classification, Tone.js and Web Audio API for custom oscillator frequency modulation, and custom WAV export capabilities.",
    bulletPoints: [
      "Collaborated on full-stack AI platform composing authentic Indian dhuns from Hindi lyrics using raag theory, Groq AI mood detection, and oscillator-based audio synthesis (ADSR, reverb, 5 instruments).",
      "Designed 10+ REST API routes and Supabase PostgreSQL schema; engineered WAV export directly from Web Audio API output buffers.",
      "System architecture and novel Raag-guided algorithmic structure directly informed published Indian Patent Application No. 202621056495.",
    ],
    architectureDetails: {
      frontend:
        "Next.js 16 with responsive Web Audio API graph, Tone.js instrument polyphony, real-time waveform visualizers, and Tailwind v4.",
      backend:
        "Next.js Serverless API endpoints handling raag matrix conversions, lyric tokenization, and mood classification.",
      aiCloud:
        "Groq AI high-speed inference for sentiment parsing & raag mode selection.",
      database:
        "Supabase (PostgreSQL) storing raag scale matrices, user composition sessions, and audio metadata.",
    },
  },
  {
    id: "code-mentor-ai",
    title: "Code Mentor AI",
    subtitle: "AI Mentoring & Collaborative Code Review Platform",
    tagline:
      "Collaborative team project solving 'tutorial hell' through dual-LLM context-aware code reviews and personalized learning paths.",
    category: "Full-Stack",
    featured: true,
    liveUrl: "https://code-mentorai.netlify.app",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Gemini API",
      "JWT",
      "Netlify",
    ],
    metrics: [
      "Dual AI Integration (OpenAI + Gemini)",
      "Multi-Language AST Code Review",
      "Full End-to-End SDLC",
      "Live Production App",
    ],
    description:
      "Code Mentor AI is an intelligent developer learning platform built by an engineering team to bridge the gap between beginner coding tutorials and real-world software engineering. Powered by a dual-AI architecture utilizing both OpenAI and Gemini models, the platform evaluates syntax, architecture, and code quality in real time while tracking developer skill growth.",
    bulletPoints: [
      "Built full-stack AI mentoring platform as a collaborative team project — dual AI API integration (OpenAI + Gemini) for context-aware code review and personalized learning paths.",
      "Built robust JWT authentication, user dashboard analytics, and interactive multi-language code review flows.",
      "Engineered automated code diagnostics and syntax feedback loops to help learners transition smoothly from tutorials to production development.",
    ],
    architectureDetails: {
      frontend:
        "React.js SPA with Monaco code editor integration, responsive learning path dashboard, and dark mode interface.",
      backend:
        "Node.js & Express.js REST API with rate-limiting, JWT secure cookies, and AI prompt orchestration.",
      aiCloud:
        "Dual pipeline with OpenAI for deep AST logic analysis and Gemini API for interactive code tutoring.",
      database:
        "MongoDB Atlas for storing student progress, review histories, and personalized skill roadmaps.",
    },
  },
  {
    id: "closetiq",
    title: "ClosetIQ",
    subtitle: "AI-Powered Clothing Listing & Smart Wardrobe Assistant",
    tagline:
      "AI web application that auto-scans, categorizes, prices, and creates structured listings for clothing items.",
    category: "AI / ML",
    featured: true,
    liveUrl: "https://ai-closet-organizer.lovable.app",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Computer Vision AI",
      "Lovable.app Cloud",
    ],
    metrics: [
      "Instant Auto-Categorization",
      "AI Smart Pricing Engine",
      "One-Click Listing Export",
      "Production Deployed",
    ],
    description:
      "ClosetIQ is an automated wardrobe digitization and resale assistant. Users upload photos of clothing, and the AI model automatically detects garment type, color palette, fabric condition, estimated resale valuation, and generates ready-to-post listings with descriptive tags.",
    bulletPoints: [
      "Built AI web application that automatically scans, categorizes, prices, and lists clothing items with accurate tags.",
      "Engineered clean, mobile-first responsive UI with instant photo analysis and editable category cards.",
      "Deployed to production on Lovable.app with high uptime and rapid asset processing.",
    ],
    architectureDetails: {
      frontend:
        "Modern React.js frontend with drag-and-drop image upload and instant client-side preview rendering.",
      aiCloud:
        "Multimodal image recognition pipeline parsing fabric, color palettes, and brand classifications.",
      backend: "Serverless cloud execution with optimized state persistence.",
    },
  },
  {
    id: "tourism-restaurant-portals",
    title: "Responsive Tourism & Food Experience Hub",
    subtitle: "Mobile-First Static & Dynamic Portals",
    tagline:
      "Designed high-performance, mobile-first responsive layouts with clean user interfaces as part of NxtWave CCBP 4.0 Academy.",
    category: "Web Apps",
    featured: false,
    liveUrl: "https://dimmika.ccbp.tech",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
    ],
    metrics: [
      "100% Mobile Responsive",
      "Sub-Second Load Times",
      "NxtWave CCBP 4.0 Certified",
    ],
    description:
      "A suite of responsive web platforms showcasing modern UI/UX design patterns, seamless cross-device compatibility, accessibility compliance, and interactive restaurant menus & destination guides.",
    bulletPoints: [
      "Designed mobile-first responsive layouts with clean UI; developed as part of NxtWave CCBP 4.0 Academy.",
      "Implemented modular HTML5 semantic markup and CSS3 flexbox/grid architectures.",
      "Live deployment hosted on CCBP Tech ecosystem with optimized performance scores.",
    ],
    architectureDetails: {
      frontend:
        "Semantic HTML5, CSS3, JavaScript DOM manipulation, Bootstrap grid framework.",
      backend: "Static optimized asset distribution.",
    },
  },
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "patent-raag-ai",
    type: "Patent",
    title:
      "A System and Method for Cloud-Based AI Raag-Guided Lyric-to-Melody Generation",
    referenceId: "Indian Patent Application No. 202621056495 A",
    patentApplicationNo: "202621056495 A",
    filingDate: "04/05/2026",
    publicationDate: "03/07/2026",
    applicant: "SAGE University, Indore",
    internationalClassification: [
      "G10H 1/00",
      "G06N 20/00",
      "G06F 17/27",
      "G10H 1/36",
      "G06F 40/30",
    ],
    status: "Published in Patent Gazette",
    date: "Filed: 04/05/2026 • Published: 03/07/2026",
    organization: "SAGE University, Indore",
    coAuthors: [
      "Dr. Prashant Jain",
      "Dr. Satyendra Sharma",
      "Dr. Sumit Jain",
      "Dr. Piyush Moghe",
      "Ms. Dimmika Rajak",
      "Mr. Cherag Saxena",
      "Mr. Chaitanya Verma",
    ],
    field: [
      "Artificial Intelligence",
      "Computational Musicology",
      "Cloud Computing",
      "Natural Language Processing",
      "Creative Audio AI",
    ],
    description:
      "Invented a novel cloud-based AI system capable of generating authentic Indian classical music directly from Hindi lyrics using traditional raag theory, emotion detection, and human preference learning. Solves a major computational gap in automated non-Western music synthesis where no comparable technology previously existed.",
    keyContributions: [
      "Novel mathematical mapping of Indian classical Raag grammar (Aaroh, Avroh, Vadi, Samvadi notes) to real-time audio synthesis frequencies.",
      "Emotion extraction pipeline translating lyrical intent into harmonic moods (Rasa theory).",
      "Cloud-native microservice architecture supporting concurrent multi-instrument generation and Web Audio API WAV synthesis.",
      "Human preference reinforcement loop for improving melodic naturalness and authentic ornamentation (meend, gamak).",
    ],
    impact:
      "Provides a foundational patent-published methodology for AI-driven heritage music preservation and contemporary automated composition.",
  },
  {
    id: "patent-digital-twin-1",
    type: "Patent",
    title:
      "System and Method for Digital Twin Based Synchronization and Control of a Physical Asset",
    referenceId:
      "Indian Patent Application (Digital Twin Control & Neural Analytics)",
    applicant: "SAGE University, Indore",
    internationalClassification: [
      "G05B 19/418",
      "G05B 19/042",
      "H04L 67/12",
      "H04L 29/06",
      "H04L 29/08",
    ],
    status: "Published in Patent Gazette",
    date: "Gazette Published: 2026",
    organization: "SAGE University, Indore",
    coAuthors: [
      "Dr. Prashant Jain",
      "Dr. Sumit Jain",
      "Manoj Yadav",
      "Dr. Deepak Agrawal",
      "Dimmika Rajak",
    ],
    field: [
      "Digital Twins",
      "Artificial Neural Networks (ANN)",
      "IoT & Telemetry",
      "Asset Synchronization",
      "Predictive Control",
    ],
    description:
      "A system and method for digital twin based synchronization and control of a physical asset. Includes a communication interface that receives sensor data streams across multiple protocols and transmits control signals to actuator devices, with an ANN model processing digital twin states to compute fault probability scores and trigger closed-loop control.",
    keyContributions: [
      "Automatic protocol adaptation across heterogeneous industrial sensor streams to generate unified data representations.",
      "Dynamic synchronization frequency algorithm adjusting telemetry based on real-time rate of change.",
      "Trained Artificial Neural Network (ANN) model processing synchronized digital twin states to compute fault probability scores.",
      "Targeted closed-loop control signals dispatched to actuator devices to prevent operational failure.",
    ],
    impact:
      "Pioneers real-time fault mitigation and low-latency industrial IoT synchronization using neural predictive intelligence.",
  },
  {
    id: "patent-digital-twin-2",
    type: "Patent",
    title:
      "System and Method for Digital Twin Based Synchronization and Control of a Physical Asset (Adaptive Control)",
    referenceId:
      "Indian Patent Application (Multi-Node Digital Twin Architecture)",
    applicant: "SAGE University, Indore",
    internationalClassification: [
      "G05B 19/418",
      "G05B 19/042",
      "H04L 67/12",
      "H04L 29/06",
      "H04L 29/08",
    ],
    status: "Published in Patent Gazette",
    date: "Gazette Published: 2026",
    organization: "SAGE University, Indore",
    coAuthors: [
      "Dr. Prashant Jain",
      "Dr. Sumit Jain",
      "Manoj Yadav",
      "Dr. Deepak Agrawal",
      "Dimmika Rajak",
      "Atharvika Solanki",
    ],
    field: [
      "Multi-Node Telemetry",
      "Dynamic State Comparison",
      "Sensor Normalization",
      "Closed-Loop Actuation",
      "Edge Computing",
    ],
    description:
      "Multi-node architecture for industrial digital twin state convergence and asset synchronization. Features advanced event-driven state comparison algorithms that adjust telemetry frequency dynamically based on rate of change, enabling sub-millisecond edge response times.",
    keyContributions: [
      "Multi-sensor array normalization pipeline for high-vibration manufacturing equipment.",
      "Event-driven state comparison algorithm minimizing bandwidth consumption over edge wireless networks.",
      "Automated fallback safety routine triggering emergency asset stop upon anomaly threshold breach.",
      "Bi-directional synchronization between physical actuators and digital simulation state machines.",
    ],
    impact:
      "Scales distributed digital twin deployments for smart factories and aerospace physical asset monitoring.",
  },
  {
    id: "patent-tamper-evident",
    type: "Patent",
    title:
      "Apparatus and Method for Tamper-Evident Environmental Monitoring of Temperature-Sensitive Goods",
    referenceId: "Indian Patent Application No. 202621049034 A",
    patentApplicationNo: "202621049034 A",
    filingDate: "17/04/2026",
    publicationDate: "12/06/2026",
    applicant: "SAGE University, Indore",
    internationalClassification: [
      "H04L 9/32",
      "G06F 21/64",
      "H04L 9/08",
      "H04L 9/06",
      "H04L 9/30",
    ],
    status: "Published in Patent Gazette",
    date: "Filed: 17/04/2026 • Published: 12/06/2026",
    organization: "SAGE University, Indore",
    coAuthors: [
      "Ms. Sakshi Agrawal",
      "Dr. Prashant Jain",
      "Prof. Suranjit Kosta",
      "Dr. Sumit Jain",
      "Dimmika Rajak",
      "Unnati Chourasiya",
    ],
    field: [
      "Cryptographic Hardware",
      "Distributed Ledger Technology (DLT)",
      "IoT Sensors",
      "Cold-Chain Logistics",
      "Data Integrity",
    ],
    description:
      "An apparatus and method for tamper-evident environmental monitoring of temperature-sensitive goods. Features a sensor node with temperature sensors coupled to a cryptographic co-processor with hardware hash and digital signature engines, committing verified telemetry transactions to a distributed cryptographic ledger.",
    keyContributions: [
      "Dedicated cryptographic co-processor with hardware hash engine and digital signature engine.",
      "Tamper-resistant secure memory storing hardware private keys for cryptographic packet signing.",
      "Gateway controller with ledger interface circuit committing verified signed data packets to a distributed cryptographic ledger.",
      "Public-key verification mechanism enabling any party with the public key to instantly detect post-generation packet alterations.",
    ],
    impact:
      "Solves critical cold-chain supply security and regulatory auditing for pharmaceuticals and temperature-critical freight.",
  },
  {
    id: "wiley-book-chapter",
    type: "Book Chapter",
    title: "Cognitive Digital Twins and IoMT-Enabled Personalized Healthcare",
    referenceId: "NeuroTrust: AI, Neurosciences & Cognitive Healthcare",
    status: "Accepted & Published / Forthcoming",
    date: "2026 Release • Wiley Scrivener Publishing",
    organization: "Wiley Scrivener Publishing",
    coAuthors: [
      "Ms. Dimmika Rajak",
      "Research Faculty & Collaborators — SAGE University",
    ],
    field: [
      "Cognitive Digital Twins",
      "Internet of Medical Things (IoMT)",
      "Personalized Healthcare",
      "Predictive Analytics",
      "Explainable AI",
    ],
    description:
      "Co-authored a research book chapter investigating the integration of Cognitive Digital Twins and IoMT (Internet of Medical Things) frameworks into personalized healthcare and intelligent decision support systems. Examines state estimation, predictive telemetry, and real-time patient-centric adaptive analytics.",
    keyContributions: [
      "Formulation of Cognitive Digital Twin architecture for continuous physiological state estimation.",
      "IoMT sensor integration with edge telemetry normalization for real-time patient monitoring.",
      "Application of Explainable AI (XAI) to make diagnostic predictions interpretable and clinically actionable.",
      "Integration of predictive analytics to preempt critical healthcare events and personalize treatment protocols.",
    ],
    impact:
      "Published in Wiley Scrivener's international reference volume on NeuroTrust, establishing academic rigor at the intersection of AI, cognitive digital twins, IoMT, and personalized healthcare systems.",
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "dereks-intern",
    role: "Frontend Developer Intern",
    company: "DEREKS Technology and ESG Solutions LLP",
    location: "Remote / Hybrid",
    period: "June 22, 2026 – August 5, 2026",
    type: "Hybrid",
    badge: "Frontend Engineering & ESG",
    certificateId: "DTESG-INT-2026-276BA496",
    bulletPoints: [
      "Built responsive, interactive frontend user interfaces and data-driven dashboards for ESG (Environmental, Social, and Governance) technology solutions in React.js.",
      "Collaborated effectively with cross-functional engineering teams to implement modern component libraries and optimize web load speeds.",
      "Strengthened both technical and professional competencies in frontend development, state management, and production code shipping.",
    ],
    skillsGained: [
      "React.js",
      "Frontend Architecture",
      "UI/UX Design",
      "ESG Analytics",
      "Component Design",
      "Responsive Layouts",
    ],
  },
  {
    id: "novitech-intern",
    role: "Data Analytics Intern",
    company: "Novitech Learning Hub",
    location: "Remote",
    period: "2025",
    type: "Remote",
    badge: "Analytics & BI",
    bulletPoints: [
      "Performed Exploratory Data Analysis (EDA) on complex real-world multi-dimensional datasets to uncover actionable business insights.",
      "Built interactive enterprise dashboards in Power BI & Tableau to support data-driven executive decision-making.",
      "Gained deep hands-on expertise with Python, Pandas, NumPy, statistical modeling, and data storytelling.",
    ],
    skillsGained: [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "EDA",
      "Data Storytelling",
    ],
  },
  {
    id: "sage-iot-intern",
    role: "IoT Engineering Intern (SAGE Winter School)",
    company: "SAGE School, SAGE University",
    location: "Indore, India",
    period: "March 3, 2025 – March 14, 2025",
    type: "On-site",
    badge: "Embedded & Hardware",
    certificateId: "Mastering IoT in Two Weeks",
    bulletPoints: [
      "Configured and calibrated IoT hardware sensors, microcontrollers, and communication interfaces for real-time telemetry collection.",
      "Interfaced connected device arrays with local and cloud server endpoints using MQTT and HTTP protocols.",
      "Participated in hands-on workshops on IoT systems architecture, low-power communication, and embedded firmware programming.",
    ],
    skillsGained: [
      "IoT Architecture",
      "Sensor Interfacing",
      "Embedded Systems",
      "Hardware Calibration",
      "MQTT/HTTP Protocols",
    ],
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    id: "lablab-ai-factory",
    title: "AI Factory — AI/ML API Solution Challenge",
    organizer: "Lablab.ai (Part of NativelyAI)",
    date: "August 3 – 10, 2026",
    badge: "AI/ML & LLM Solutions",
    certificateId: "CMSR96WHV01FPS601E9ZPG8JN",
    description:
      "Awarded Certificate of Completion with distinction for outstanding performance and attendance in the competitive global AI Factory challenge.",
    highlights: [
      "Architected, implemented, and submitted a production-ready solution based on AI/ML APIs within an intensive 7-day sprint.",
      "Engineered prompt chains, multimodal API integrations, and low-latency frontend inference workflows.",
    ],
  },
  {
    id: "masai-xto10x",
    title: "xto10x Hackathon Edition #3",
    organizer: "Masai",
    date: "Nov 2024",
    badge: "Algorithmic & Problem Solving",
    certificateId: "MS-XTO10X-HACK",
    description:
      "Competed in high-intensity coding and problem-solving hackathon solving algorithmic and software engineering constraints.",
    highlights: [
      "Formulated efficient algorithms under tight execution time and memory limits.",
      "Practiced collaborative peer code reviews and clean Git workflows.",
    ],
  },
  {
    id: "sage-startup-spark",
    title: "SAGE Startup Spark 2024",
    organizer:
      "SAGE Incubation & Acceleration Centre (MSME & MoE Innovation Cell)",
    date: "Oct 2024",
    badge: "Tech Innovation & Pitch",
    description:
      "Showcased AI-driven technological innovations and product prototypes before incubation mentors and technical evaluators.",
    highlights: [
      "Presented technical system architectures and market viability studies.",
      "Received commendation for prototype execution and problem-space analysis.",
    ],
  },
  {
    id: "sage-robo-race",
    title: "SAGE Euphoria 2024 — ROBO RACE",
    organizer: "SAGE University TechFest",
    date: "Feb 2024",
    badge: "Hardware & Robotics",
    description:
      "Designed, calibrated, and navigated custom microcontroller-driven robotic vehicle across obstacle tracks.",
    highlights: [
      "Optimized motor driver control and low-latency radio telemetry.",
      "Achieved top qualification rounds with responsive mechanical tuning.",
    ],
  },
];

export const EDUCATION: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Engineering (Software Engineering)",
  institution: "SAGE University",
  location: "Indore, Madhya Pradesh, India",
  period: "2023 – 2027",
  cgpa: "8.35 / 10.0",
  highlights: [
    "Ranked in the Top 10% of the Engineering Cohort (CGPA 8.35)",
    "Co-inventor on 4 Published Indian Patent Applications (AI Music, Digital Twins, Cryptographic IoT)",
    "Co-authored accepted Wiley Scrivener Book Chapter on AI & Cognitive Systems",
    "Frontend Developer Intern at DEREKS Technology & ESG Solutions",
    "Active competitor in hackathons (Lablab.ai AI Factory, Masai xto10x, SAGE Euphoria Robo Race, SAGE Startup Spark)",
    "Core Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, AI/ML, IoT",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 27, 2026",
    category: "Cloud & AWS",
    instructorOrSpeaker: "Michelle Vaz (Director AWS Training & Certification)",
    highlight: true,
  },
  {
    id: "cert-aws-location-service",
    title: "Getting Started with Amazon Location Service",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 27, 2026",
    category: "Cloud & AWS",
    instructorOrSpeaker: "Michelle Vaz (Director AWS Training & Certification)",
    highlight: true,
  },
  {
    id: "cert-tata-genai-data-analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    date: "Mar 27, 2026",
    category: "AI / ML & Data",
    highlight: true,
    instructorOrSpeaker: "Tom Brunskill (Co-Founder Forage)",
  },
  {
    id: "cert-lablab-ai-factory",
    title: "AI Factory — AI/ML API Solution Completion",
    issuer: "Lablab.ai (Part of NativelyAI)",
    date: "Aug 10, 2026",
    category: "AI / ML & Data",
    certificateId: "CMSR96WHV01FPS601E9ZPG8JN",
    instructorOrSpeaker: "Pawel Czech (Founder NativelyAI)",
    highlight: true,
  },
  {
    id: "cert-dereks-frontend",
    title: "Frontend Developer Internship Completion",
    issuer: "DEREKS Technology and ESG Solutions LLP",
    date: "Aug 05, 2026",
    category: "Web & IoT",
    certificateId: "DTESG-INT-2026-276BA496",
    highlight: true,
  },
  {
    id: "cert-aws-intro-genai",
    title: "AWS Educate: Introduction to Generative AI Trained",
    issuer: "AWS Educate",
    date: "Oct 05, 2025",
    category: "Cloud & AWS",
    highlight: true,
  },
  {
    id: "cert-iit-indore-uas-drones",
    title: "Next-Gen UAS: Harnessing AI/ML for Drones (Bootcamp 4.0, 40+ Hrs)",
    issuer: "IIT Indore & SAGE University (Sponsored by MeitY)",
    date: "May 21, 2024",
    category: "AI / ML & Data",
    certificateId: "UAS/10/020922/BCMP4.0/IITI/B01/27",
    hours: "40+ Hours Course",
    highlight: true,
  },
  {
    id: "cert-ncvet-green-hydrogen",
    title: "Green Hydrogen Plant Junior Technician Electrolyzer (Grade B)",
    issuer: "NCVET & Skill Council for Green Jobs (Skill India / PMKVY)",
    date: "Apr 03, 2025",
    category: "Academic & Research",
    certificateId: "AEMPA0031QG-03-ES-00765-2023-V1-SCGJ-022536",
    hours: "330 Hours Training",
    grade: "Grade B (11 Credits)",
    highlight: true,
  },
  {
    id: "cert-nxtwave-static-website",
    title: "Build Your Own Static Website (HTML5, CSS3, Bootstrap)",
    issuer: "NxtWave CCBP 4.0 Academy (NASSCOM Member)",
    date: "Dec 09, 2025",
    category: "Web & IoT",
    certificateId: "VUVNVYYZMXL",
    highlight: true,
  },
  {
    id: "cert-nxtwave-25-under-5-comp",
    title: "NxtCode AI-Powered Challenge: 25 Under 5 (Completion Milestone)",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Feb 08, 2025",
    category: "Web & IoT",
    highlight: true,
  },
  {
    id: "cert-nxtwave-make-automation",
    title: "AI Workflows & Automation Workshop using Make.com",
    issuer: "NxtWave CCBP 4.0 (Make Academic Alliance)",
    date: "Jan 22, 2026",
    category: "AI / ML & Data",
  },
  {
    id: "cert-nxtwave-agentic-ai",
    title: "LLMs & Agentic AI 101: AI Tech You Must Know",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Sep 13, 2025",
    category: "AI / ML & Data",
    instructorOrSpeaker: "Drishti Wali (Software Engineer at Ion Health)",
  },
  {
    id: "cert-nxtwave-genai-2",
    title: "Generative AI Mega Workshop 2.0",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Sep 21, 2024",
    category: "AI / ML & Data",
    instructorOrSpeaker: "Tezan Sahu (SDE II at Microsoft)",
  },
  {
    id: "cert-nxtwave-world-class-engineer",
    title: "Masterclass: How to become a World Class Engineer",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Nov 21, 2024",
    category: "Academic & Research",
    instructorOrSpeaker: "Mohan KRK (Head of Engineering, Atlassian)",
  },
  {
    id: "cert-nxtwave-uiux",
    title: "UI/UX Mega Workshop",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Dec 22, 2024",
    category: "Web & IoT",
    instructorOrSpeaker: "Aman Maheshwari (Head of Product Design, NxtWave)",
  },
  {
    id: "cert-nxtwave-think-ceo",
    title: "Masterclass: Think Like a CEO Even Before You Graduate",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "May 17, 2025",
    category: "Academic & Research",
    instructorOrSpeaker: "Kishore Indukuri (Founder & CEO, Sid's Farm)",
  },
  {
    id: "cert-nxtwave-interview-gamechanger",
    title:
      "Masterclass: The Interview Game Changer: What Employers Really Want",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "Oct 30, 2024",
    category: "Academic & Research",
    instructorOrSpeaker: "Madhura Gade (Interview Coach & Strategist)",
  },
  {
    id: "cert-masai-hackathon",
    title: "xto10x Hackathon Edition #3 (Problem Solving)",
    issuer: "Masai",
    date: "2024",
    category: "Academic & Research",
  },
  {
    id: "cert-sage-startup-spark",
    title: "SAGE Startup Spark 2024 (MSME & MoE Innovation Cell)",
    issuer: "SAGE Incubation & Acceleration Centre",
    date: "Jun 14, 2024",
    category: "Academic & Research",
  },
  {
    id: "cert-sage-winter-school-iot",
    title: "From Zero to IoT Hero: Mastering IoT in Two Weeks",
    issuer: "SAGE Winter School, SAGE University",
    date: "Mar 14, 2025",
    category: "Web & IoT",
  },
  {
    id: "cert-sage-python-session",
    title: "Industrial Requirements and Basic Programming PYTHON",
    issuer: "SAGE University (IAC & IET, IEEE, ACM)",
    date: "May 08, 2024",
    category: "AI / ML & Data",
  },
  {
    id: "cert-sage-euphoria-robo",
    title: "SAGE Euphoria 2024 — ROBO RACE",
    issuer: "SAGE University Fest",
    date: "Apr 20, 2024",
    category: "Academic & Research",
  },
];

export const RAAG_LIST = [
  {
    name: "Raag Bhairav",
    mood: "Devotional, Dawn, Meditative",
    vadi: "Dha (Dh)",
    samvadi: "Re (R)",
    notes: "S r G M P d N S'",
    frequencies: [261.63, 277.18, 329.63, 349.23, 392.0, 415.3, 493.88, 523.25],
    color: "from-amber-500 to-orange-600",
    description:
      "Morning Raag invoking peace, reverence, and grounding spiritual energy.",
  },
  {
    name: "Raag Yaman",
    mood: "Romantic, Evening, Serene Joy",
    vadi: "Ga (G)",
    samvadi: "Ni (N)",
    notes: "N' R G M# D N S'",
    frequencies: [246.94, 293.66, 329.63, 369.99, 440.0, 493.88, 523.25],
    color: "from-rose-500 to-indigo-600",
    description:
      "Evening Raag filled with devotion, romance, and blissful equilibrium.",
  },
  {
    name: "Raag Bilawal",
    mood: "Bright, Uplifting, Celebratory",
    vadi: "Dha (D)",
    samvadi: "Ga (G)",
    notes: "S R G M P D N S'",
    frequencies: [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25],
    color: "from-emerald-500 to-teal-600",
    description:
      "Daytime Raag signifying natural clarity, victory, and uplifting happiness.",
  },
  {
    name: "Raag Darbari",
    mood: "Majestic, Profound, Deep Midnight",
    vadi: "Re (R)",
    samvadi: "Pa (P)",
    notes: "S R g M P d n S'",
    frequencies: [261.63, 293.66, 311.13, 349.23, 392.0, 415.3, 466.16, 523.25],
    color: "from-purple-600 to-violet-900",
    description:
      "Midnight regal Raag conveying royal grandeur, deep contemplation, and gravity.",
  },
];
