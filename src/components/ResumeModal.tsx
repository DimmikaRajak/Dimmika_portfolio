import { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, RESEARCH_ITEMS, INTERNSHIPS, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
DIMMIKA RAJAK
Software Engineer | Full Stack Developer | AI & Data Researcher
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

TECHNICAL SKILLS
- Frontend: React.js, Next.js 16, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS v4, Redux, Tone.js, Web Audio API
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, Python, Cryptographic Ledgers
- Database & Analytics: MongoDB, Supabase (PostgreSQL), SQL Server, Power BI, Tableau
- AI & Cloud: Groq AI (Llama 3), OpenAI API, Gemini API, Agentic AI, NLP, Amazon Location Service, AWS Cloud Practitioner, Make.com
- Tools & Leadership: Git, GitHub, Figma UI/UX, VS Code, Vercel, Netlify | Leadership, Team Mentoring, Agile Problem Solving

RESEARCH, PATENTS & PUBLICATIONS
1. Indian Patent Application No. 202621056495 A (Filed: 04/05/2026 • Published: 03/07/2026)
   Title: A System and Method for Cloud-Based AI Raag-Guided Lyric-to-Melody Generation
   Applicant: SAGE University, Indore
   Co-Inventors: Dr. Prashant Jain, Dr. Satyendra Sharma, Dr. Sumit Jain, Dr. Piyush Moghe, Ms. Dimmika Rajak, Mr. Cherag Saxena, Mr. Chaitanya Verma

2. Indian Patent Application (Published in Gazette, 2026)
   Title: System and Method for Digital Twin Based Synchronization and Control of a Physical Asset
   Applicant: SAGE University, Indore
   Co-Inventors: Dr. Prashant Jain, Dr. Sumit Jain, Manoj Yadav, Dr. Deepak Agrawal, Dimmika Rajak, Atharvika Solanki

3. Indian Patent Application No. 202621049034 A (Filed: 17/04/2026 • Published: 12/06/2026)
   Title: Apparatus and Method for Tamper-Evident Environmental Monitoring of Temperature-Sensitive Goods
   Applicant: SAGE University, Indore
   Co-Inventors: Ms. Sakshi Agrawal, Dr. Prashant Jain, Prof. Suranjit Kosta, Dr. Sumit Jain, Dimmika Rajak, Unnati Chourasiya

4. Book Chapter — Wiley Scrivener International (NeuroTrust: AI, Neurosciences & Cognitive Healthcare, 2026 Release)
   Title: Neurological Mode in AI-Powered Collaborative Learning (CodeMentorAI)
   Authors: Ms. Dimmika Rajak & Research Collaborators (SAGE University)

INDUSTRY INTERNSHIP EXPERIENCE
- Frontend Developer Intern — DEREKS Technology & ESG Solutions LLP (June 22 – August 5, 2026 | Cert ID: DTESG-INT-2026-276BA496)
  * Built interactive ESG analytics dashboards, frontend component architecture, and responsive user flows in React.js.
- AI/ML API Developer — Lablab.ai (Part of NativelyAI) (August 3 – 10, 2026 | Cert ID: CMSR96WHV01FPS601E9ZPG8JN)
  * Completed intensive AI Factory program; engineered multimodal prompt chains and low-latency API workflows.
- Data Analytics Intern — Novitech Learning Hub (Remote, 2025)
  * Performed Exploratory Data Analysis (EDA) using Python (Pandas/NumPy) and designed enterprise Power BI/Tableau dashboards.
- IoT Engineering Intern — SAGE Winter School, SAGE University (March 3 – 14, 2025)
  * Configured sensor arrays, microcontrollers, and real-time MQTT/HTTP telemetry streaming.

FEATURED PROJECTS
- Dhun AI: Indian Classical Music Composition System (Next.js 16, Groq AI, Tone.js, Web Audio API, Supabase) — Patent No. 202621056495
- Code Mentor AI: Dual AI API integration (OpenAI + Gemini), MERN stack — Wiley Scrivener published model (https://code-mentorai.netlify.app)
- ClosetIQ: AI-Powered Smart Wardrobe Digitization & Valuation Assistant (React.js, Tailwind, Multimodal AI)
- Responsive Tourism & Restaurant Hub: Mobile-first responsive suite (HTML5, CSS3, JavaScript, Bootstrap)

EDUCATION
Bachelor of Technology (B.Tech) in Computer Engineering (Software Engineering)
SAGE University, Indore (2023 – 2027) | CGPA: 8.35 / 10.0 (Top 10% of Class)

24+ VERIFIED CERTIFICATIONS & MASTERCLASSES
- AWS Cloud Practitioner Essentials (Amazon Web Services, Mar 27, 2026)
- Getting Started with Amazon Location Service (AWS, Mar 27, 2026)
- GenAI Powered Data Analytics Job Simulation (Tata / Forage, Mar 27, 2026)
- AI Factory Completion Certificate (Lablab.ai / NativelyAI, Aug 10, 2026)
- Frontend Developer Internship Certificate (DEREKS Tech & ESG Solutions, Aug 05, 2026)
- Next-Gen UAS: AI/ML for Drones Bootcamp (IIT Indore & MeitY, 40+ Hrs, May 2024)
- Green Hydrogen Junior Technician Electrolyzer (NCVET & Skill Council for Green Jobs, Grade B, 330 Hrs)
- Build Your Own Static Website (NxtWave CCBP 4.0, NASSCOM Member)
- LLMs & Agentic AI 101 Masterclass (Drishti Wali, SWE at Ion Health)
- How to become a World Class Engineer (Mohan KRK, Head of Engineering at Atlassian)
- Generative AI Mega Workshop 2.0 (Tezan Sahu, SDE II at Microsoft)
- UI/UX Mega Workshop (Aman Maheshwari, Head of Product Design at NxtWave)
`.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
              SWE
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Dimmika Rajak — SWE Resume</h3>
              <p className="text-xs text-slate-400">Verified Full Stack Developer & AI Researcher Profile</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Resume Paper View */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm bg-slate-900 selection:bg-indigo-500/40">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-indigo-400 font-medium text-sm md:text-base mt-1">
              Software Engineer | Full Stack Developer | Data Analyst | UI / UX Designer
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-2.5">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-indigo-400 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-indigo-300 mt-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                github.com/Dimmika-rajak
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                linkedin.com/in/dimmika-rajak-6b20792b8/
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-2 flex items-center gap-1.5">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-2 flex items-center gap-1.5">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p><strong className="text-white">Frontend:</strong> React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS v4, Redux</p>
              <p><strong className="text-white">Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Python</p>
              <p><strong className="text-white">Database:</strong> MongoDB, Supabase (PostgreSQL), SQL Server, Excel</p>
              <p><strong className="text-white">AI & Cloud:</strong> Groq AI, OpenAI API, Gemini API, Agentic AI, NLP, Make.com</p>
              <p><strong className="text-white">Tools & Soft Skills:</strong> Git, GitHub, Vercel, Figma, VS Code | Leadership, Mentoring, Team Collaboration</p>
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-3 flex items-center gap-1.5">
              Research & Publications
            </h2>
            <div className="space-y-4">
              {RESEARCH_ITEMS.map((item) => (
                <div key={item.id} className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-white text-xs md:text-sm">
                      {item.type === 'Patent' ? `${item.referenceId} (${item.status})` : 'Book Chapter — Wiley Scrivener | NeuroTrust: AI, Neurosciences & Cognitive Healthcare'}
                    </h3>
                    <span className="text-[11px] text-indigo-400 font-mono">{item.date}</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium mb-1.5">Title: {item.title}</p>
                  <p className="text-[11px] text-slate-400 mb-2">
                    <strong>Co-Inventors/Authors:</strong> {item.coAuthors.join(', ')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    <li>{item.description}</li>
                    {item.keyContributions.slice(0, 2).map((contrib, i) => (
                      <li key={i}>{contrib}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-3 flex items-center gap-1.5">
              Internship Experience
            </h2>
            <div className="space-y-3">
              {INTERNSHIPS.map((intern) => (
                <div key={intern.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{intern.role} — <span className="text-indigo-300 font-normal">{intern.company} ({intern.type})</span></span>
                    <span className="text-slate-400 font-mono text-[11px]">{intern.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                    {intern.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-3 flex items-center gap-1.5">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-xs md:text-sm">{proj.title}</span>
                      <span className="text-slate-400">— {proj.subtitle}</span>
                    </div>
                    <span className="text-indigo-400 font-mono text-[11px]">{proj.techStack.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    <strong>Role:</strong> {proj.role} {proj.patentNumber && `| Patent Filed: ${proj.patentNumber}`}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                    {proj.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                  {proj.liveUrl && (
                    <p className="text-[11px] text-indigo-400">
                      Live: <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="underline">{proj.liveUrl}</a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-2 flex items-center gap-1.5">
              Education
            </h2>
            <div className="flex items-center justify-between text-xs">
              <div>
                <strong className="text-white">{EDUCATION.degree} — {EDUCATION.field}</strong> | {EDUCATION.institution}, {EDUCATION.location}
              </div>
              <span className="text-slate-400 font-mono">{EDUCATION.period}</span>
            </div>
            <p className="text-xs text-emerald-400 font-semibold mt-1">CGPA: {EDUCATION.cgpa} | Top 10% of Class</p>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 pb-1 border-b border-slate-800 mb-2 flex items-center gap-1.5">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="flex items-start gap-1.5">
                  <span className="text-indigo-400">•</span>
                  <span><strong>{c.title}</strong> ({c.issuer}, {c.date})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>Dimmika Rajak • Software Engineering & AI Profile</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
