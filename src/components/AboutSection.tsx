import { GraduationCap, Award, Lightbulb, Code2, Briefcase, CheckCircle2, ArrowRight, Download, UserCheck, Sparkles, MapPin, Mail, Phone, BookOpen, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

export const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      subtitle: "CGPA 8.35 | Top 10%",
      description: "Pursuing B.Tech in Computer Engineering (Software Engineering) at SAGE University, maintaining top academic standing across core CS disciplines."
    },
    {
      icon: Lightbulb,
      title: "4x Patent Co-Inventor",
      subtitle: "Published & Filed IP",
      description: "Co-inventor on 4 Indian Patent Applications spanning AI classical music synthesis (Patent No. 202621056495), Digital Twins, and Cryptographic IoT monitoring."
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      subtitle: "3 Industry Internships",
      description: "Frontend Developer Intern at DEREKS Technology & ESG Solutions, Data Analytics Intern at Novitech, and IoT Systems Intern at SAGE Winter School."
    },
    {
      icon: Award,
      title: "24+ Certifications",
      subtitle: "AWS, GenAI, IIT, NxtWave",
      description: "Certified in AWS Cloud Practitioner Essentials, Amazon Location Service, Tata GenAI Data Analytics, IIT Indore UAS Drone AI, and NCVET Green Hydrogen (Grade B)."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Background & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Software engineer, patent co-inventor, and AI researcher dedicated to building robust web applications, data-driven systems, and machine intelligence pipelines.
        </p>
      </div>

      {/* Main Grid: Story + Image & Profile Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Narrative Story & Engineering Vision */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Engineering Drive & Background</span>
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I am a pre-final year <strong className="text-slate-900 font-semibold">Computer Engineering student at SAGE University</strong> with a track record of translating complex algorithmic and computational problems into functional, production-ready software.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              My engineering work spans the entire stack—from developing reactive web applications in <strong className="text-indigo-600 font-semibold">React.js, Next.js 16, TypeScript, and Tailwind CSS</strong> to architecting backend services in <strong className="text-indigo-600 font-semibold">Node.js, Express, Python, and PostgreSQL (Supabase)</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Beyond software engineering, I actively contribute to intellectual property development. I am a co-inventor on <strong className="text-slate-900 font-semibold">4 published Indian Patent Applications</strong> and a co-author on an accepted book chapter for <strong className="text-slate-900 font-semibold">Wiley Scrivener Publishing</strong> titled <em className="text-indigo-700 font-medium">&quot;Cognitive Digital Twins and IoMT-Enabled Personalized Healthcare&quot;</em>.
            </p>

            {/* Target Roles & Values */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                Software Engineer
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                Full Stack Developer
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Frontend / UI Engineer
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                AI & Data Systems
              </span>
            </div>
          </div>

          {/* Quick Action Banner */}
          <div className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50/40 p-5 rounded-2xl border border-indigo-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Looking for a high-impact engineer?</h4>
              <p className="text-xs text-slate-600">Available for immediate hiring, technical interviews, and collaborations.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={downloadResumePdf}
                id="about-download-resume-btn"
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-indigo-600 text-xs font-bold border border-slate-300 shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600" />
                <span>Resume (PDF)</span>
              </button>
              <a
                href="#contact"
                id="about-contact-btn"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image / Visual Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs flex flex-col justify-between h-full space-y-6">
            
            {/* Top Profile Visual Box */}
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-6 text-white text-left overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex items-center gap-4">
                {/* Developer Profile Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/15 backdrop-blur-md border-2 border-white/30 shadow-inner shrink-0 group">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={`${PERSONAL_INFO.name} - Software Engineer`}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for SWE Roles
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-indigo-200 font-mono">Software Engineer & 4x Patent Co-Inventor</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-indigo-200 block uppercase font-mono">Academic Track</span>
                  <span className="font-bold text-white">CGPA 8.35 (Top 10%)</span>
                </div>
                <div>
                  <span className="text-[10px] text-indigo-200 block uppercase font-mono">Intellectual Property</span>
                  <span className="font-bold text-white">4 Indian Patents</span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Details List */}
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" /> Location
                </span>
                <span className="font-semibold text-slate-900">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" /> Direct Email
                </span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono font-bold text-indigo-600 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-600" /> Phone
                </span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono font-bold text-slate-900 hover:text-indigo-600">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Core Badges Row */}
            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1 font-bold text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Credentials
              </span>
              <span className="font-mono text-[10px] text-slate-400">2023 – 2027 SAGE University</span>
            </div>

          </div>
        </div>

      </div>

      {/* Education & Academic Excellence Card */}
      <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" /> CGPA: {EDUCATION.cgpa} • Top 10%
            </span>
            <h3 className="text-2xl font-black text-slate-900">{EDUCATION.degree}</h3>
            <p className="text-sm font-bold text-indigo-600">{EDUCATION.field}</p>
            <p className="text-xs text-slate-500">{EDUCATION.institution} — {EDUCATION.location}</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
            {EDUCATION.period}
          </span>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Honors, Publications & Key Academic Achievements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {EDUCATION.highlights.map((hl, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed font-medium">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Pillars Highlights Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-200 transition-all space-y-2 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded-full border border-indigo-100">
                    {item.subtitle}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm pt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
