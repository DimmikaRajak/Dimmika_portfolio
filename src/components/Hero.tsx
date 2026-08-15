import { useState } from 'react';
import { ArrowRight, Download, Sparkles, Github, Linkedin, Mail, Phone, MapPin, Award, Terminal, Code2, Cpu, CheckCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<'config' | 'patent' | 'terminal'>('config');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Soft Accent Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-24 right-10 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Bio & Core Pitch */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status & Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-bold text-emerald-800">Available for SWE & Full Stack Roles</span>
            <span className="text-emerald-300">•</span>
            <span className="text-emerald-700 font-medium hidden sm:inline">Indore / Remote / Hybrid</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-indigo-600">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700">
              Software Engineer | Full Stack Developer | 4x Patent Co-Inventor
            </p>
          </div>

          {/* Subtitle & Professional Summary */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            B.Tech Computer Engineering student at SAGE University (<strong className="text-slate-900 font-semibold">CGPA 8.35 | Top 10%</strong>) with <strong className="text-slate-900 font-semibold">24+ verified certifications</strong> in AWS, AI/ML, Web Dev & IoT. Co-inventor on <strong className="text-indigo-700 font-semibold">4 Indian Patents</strong> (including AI Raag synthesis <strong className="text-slate-900 font-semibold">No. 202621056495</strong>, Digital Twins, and Cryptographic IoT) and co-author of an accepted <strong className="text-indigo-700 font-semibold">Wiley Scrivener book chapter</strong>.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 pb-2">
            {PERSONAL_INFO.stats.map((st, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-200 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{st.value}</div>
                <div className="text-xs font-bold text-indigo-600 mt-0.5">{st.label}</div>
                <div className="text-[11px] text-slate-500 truncate font-medium">{st.detail}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-indigo-600/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={downloadResumePdf}
              id="hero-download-resume-btn"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-indigo-600 text-xs sm:text-sm font-bold border border-slate-300 flex items-center gap-2 transition-all shadow-2xs hover:border-indigo-300 cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span>Download Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              id="hero-contact-btn"
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Direct Contact Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 hover:text-indigo-600 font-mono font-medium transition-colors cursor-pointer"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
            </button>
            <span className="text-slate-300">•</span>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-indigo-600 font-mono font-medium transition-colors">
              <Phone className="w-3.5 h-3.5 text-indigo-600" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-3">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#0077b5] transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive SWE Code / Architecture Frame */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden font-mono text-xs text-slate-100">
            
            {/* Terminal Window Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-[11px] text-slate-400 ml-2 font-mono">dimmika@swe-workstation:~</span>
              </div>

              {/* Tab Switcher */}
              <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('config')}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                    activeTab === 'config' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  developer.ts
                </button>
                <button
                  onClick={() => setActiveTab('patent')}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                    activeTab === 'patent' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  patents.json
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                    activeTab === 'terminal' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  status.sh
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 bg-slate-950/80 text-slate-300 leading-relaxed overflow-x-auto min-h-[340px]">
              {activeTab === 'config' && (
                <div className="space-y-1 text-[11px] sm:text-xs">
                  <p className="text-slate-500">// TypeScript SWE Configuration</p>
                  <p><span className="text-indigo-400">export const</span> <span className="text-amber-300">dimmikaRajak</span>: <span className="text-emerald-400">SoftwareEngineer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">"Dimmika Rajak"</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">degree</span>: <span className="text-emerald-300">"B.Tech Computer Engineering"</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">institution</span>: <span className="text-emerald-300">"SAGE University, Indore"</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">cgpa</span>: <span className="text-amber-400">8.35</span>, <span className="text-slate-500">// Top 10%</span></p>
                  <p className="pl-4"><span className="text-sky-300">primaryStack</span>: [</p>
                  <p className="pl-8 text-emerald-300">"React.js", "Next.js 16", "Node.js", "Express.js",</p>
                  <p className="pl-8 text-emerald-300">"Python", "Supabase", "Groq AI", "Tone.js", "AWS"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-sky-300">indianPatents</span>: <span className="text-amber-300">4</span>, <span className="text-slate-500">// Published / Filed</span></p>
                  <p className="pl-4"><span className="text-sky-300">publications</span>: [<span className="text-amber-300">"Wiley Scrivener NeuroTrust 2026"</span>],</p>
                  <p className="pl-4"><span className="text-sky-300">certifications</span>: <span className="text-amber-400">24</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">internships</span>: [<span className="text-emerald-300">"DEREKS Tech"</span>, <span className="text-emerald-300">"Novitech"</span>, <span className="text-emerald-300">"SAGE IoT"</span>],</p>
                  <p className="pl-4"><span className="text-sky-300">availableForHire</span>: <span className="text-emerald-400">true</span></p>
                  <p>&#125;;</p>
                </div>
              )}

              {activeTab === 'patent' && (
                <div className="space-y-1 text-[11px] sm:text-xs">
                  <p className="text-slate-500">// Intellectual Property Specification (4 Patents)</p>
                  <p>&#123;</p>
                  <p className="pl-4"><span className="text-indigo-400">"patent1"</span>: &#123; <span className="text-indigo-300">"appNo"</span>: <span className="text-amber-300">"202621056495 A"</span>, <span className="text-indigo-300">"title"</span>: <span className="text-emerald-300">"AI Raag Music Synthesis"</span> &#125;,</p>
                  <p className="pl-4"><span className="text-indigo-400">"patent2"</span>: &#123; <span className="text-indigo-300">"domain"</span>: <span className="text-amber-300">"ANN Physical Asset Control"</span>, <span className="text-indigo-300">"title"</span>: <span className="text-emerald-300">"Digital Twin Synchronization"</span> &#125;,</p>
                  <p className="pl-4"><span className="text-indigo-400">"patent3"</span>: &#123; <span className="text-indigo-300">"domain"</span>: <span className="text-amber-300">"Multi-Node Telemetry"</span>, <span className="text-indigo-300">"title"</span>: <span className="text-emerald-300">"Adaptive Asset Control"</span> &#125;,</p>
                  <p className="pl-4"><span className="text-indigo-400">"patent4"</span>: &#123; <span className="text-indigo-300">"appNo"</span>: <span className="text-amber-300">"202621049034 A"</span>, <span className="text-indigo-300">"title"</span>: <span className="text-emerald-300">"Cryptographic Ledger Monitoring"</span> &#125;,</p>
                  <p className="pl-4"><span className="text-indigo-400">"applicant"</span>: <span className="text-emerald-300">"SAGE University, Indore"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">"inventor"</span>: <span className="text-sky-300">"Dimmika Rajak"</span></p>
                  <p>&#125;</p>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-2 text-[11px] sm:text-xs text-slate-300">
                  <p className="text-slate-400">$ whoami</p>
                  <p className="text-emerald-400">dimmika_rajak (SWE & Full Stack Developer)</p>
                  
                  <p className="text-slate-400">$ curl -s https://api.dimmika.dev/status</p>
                  <div className="bg-slate-900 p-2.5 rounded border border-slate-800 space-y-1">
                    <p className="text-indigo-300">&#10003; 4 Indian Patent Applications Published/Filed</p>
                    <p className="text-indigo-300">&#10003; 3 Internships (DEREKS ESG, Novitech, SAGE IoT)</p>
                    <p className="text-indigo-300">&#10003; 24+ Professional Certifications (AWS, IIT, Tata, NxtWave)</p>
                    <p className="text-emerald-400 font-bold">&#10003; Ready for Immediate SWE & Data Roles</p>
                  </div>

                  <p className="text-slate-400">$ ping -c 1 rajakdimika@gmail.com</p>
                  <p className="text-emerald-400">64 bytes from mail-relay: time=0.42ms (Live & Responsive)</p>
                </div>
              )}
            </div>

            {/* Terminal Window Footer */}
            <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Node.js v22 & TypeScript 5.8
              </span>
              <span>UTF-8 • Ready</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
