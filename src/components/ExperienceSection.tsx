import { useState } from 'react';
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { INTERNSHIPS, HACKATHONS } from '../data/portfolioData';

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'internships' | 'hackathons'>('internships');

  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
          Industry & Hackathon Journey
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Experience
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Hands-on software development at DEREKS Tech (ESG Systems), Novitech Analytics, SAGE Winter School IoT, and competitive hackathons.
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab('internships')}
            id="exp-tab-internships"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'internships'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry Internships ({INTERNSHIPS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hackathons')}
            id="exp-tab-hackathons"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'hackathons'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Hackathons & Competitions ({HACKATHONS.length})</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'internships' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIPS.map((intern) => (
            <div
              key={intern.id}
              className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {intern.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-600" /> {intern.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{intern.role}</h3>
                <p className="text-xs font-bold text-indigo-600 mt-0.5">{intern.company}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> {intern.location} ({intern.type})
                </p>

                {intern.certificateId && (
                  <div className="mt-2 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block font-semibold">
                    ID: {intern.certificateId}
                  </div>
                )}

                {/* Bullet Points */}
                <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {intern.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {intern.skillsGained.map((sk, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'hackathons' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HACKATHONS.map((hack) => (
            <div
              key={hack.id}
              className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-amber-600" /> {hack.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{hack.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{hack.title}</h3>
                <p className="text-xs font-bold text-indigo-600 mt-0.5">{hack.organizer}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  {hack.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {hack.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {hack.skillsGained && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {hack.skillsGained.map((sk, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                      {sk}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </section>
  );
};
