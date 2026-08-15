import { useState } from 'react';
import { Award, BookOpen, ShieldCheck, Users, Sparkles, FileText, CheckCircle2, ChevronRight, Share2, Layers, Calendar, Landmark, Hash, Tag } from 'lucide-react';
import { RESEARCH_ITEMS } from '../data/portfolioData';

export const ResearchSection = () => {
  const [activeResearch, setActiveResearch] = useState<string>(RESEARCH_ITEMS[0]?.id || 'patent-raag-ai');

  return (
    <section id="research" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5 text-amber-600" />
          Intellectual Property & Academic Publications
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          4x Indian Patents & Wiley Research
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Official patent co-inventions in AI Raag synthesis, Digital Twin physical asset control, and cryptographic IoT monitoring, along with peer-reviewed cognitive learning research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Selector (Left Column) */}
        <div className="lg:col-span-5 space-y-3">
          {RESEARCH_ITEMS.map((item) => {
            const isSelected = activeResearch === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveResearch(item.id)}
                id={`research-item-${item.id}`}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.type === 'Patent'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">{item.status.split('|')[0]}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{item.title}</h3>
                <p className="text-xs text-indigo-600 font-mono font-medium mt-1 truncate">
                  {item.patentApplicationNo ? `App No. ${item.patentApplicationNo}` : item.referenceId}
                </p>
              </button>
            );
          })}

          {/* Quick Credential Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2 text-left">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Indian Patent Applications
            </span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Co-inventor on 4 Indian Patent Applications published/filed via SAGE University, covering computational musicology, neural digital twins, and cryptographic IoT telemetry.
            </p>
          </div>
        </div>

        {/* Deep Dive Details Card (Right Column) */}
        <div className="lg:col-span-7">
          {RESEARCH_ITEMS.filter((r) => r.id === activeResearch).map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-6 text-left">
              
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {item.type} • {item.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" /> {item.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-indigo-600 font-mono mt-1">
                  {item.referenceId}
                </p>
              </div>

              {/* Patent Gazette Quick Meta Grid */}
              {item.type === 'Patent' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Applicant</span>
                    <span className="font-bold text-slate-900">{item.applicant || item.organization}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Application Number</span>
                    <span className="font-bold text-amber-800 font-mono">{item.patentApplicationNo || 'Published in Gazette'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Publication / Filing</span>
                    <span className="font-bold text-slate-800 font-mono">{item.publicationDate || item.date}</span>
                  </div>
                </div>
              )}

              {/* Co-Inventors / Authors Roster */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-600" /> Co-Inventors & Research Collaborators
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  {item.coAuthors.map((author, i) => (
                    <span key={i} className={author.includes('Dimmika') ? 'text-indigo-600 font-bold bg-indigo-50 px-1 py-0.5 rounded' : ''}>
                      {author}{i < item.coAuthors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p className="text-[11px] text-slate-500">
                  Affiliation: <strong>{item.organization}</strong>
                </p>
              </div>

              {/* Research Summary / Abstract */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Patent Abstract & Specification</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Architectural Contributions */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Key Technical Innovations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.keyContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* International Classifications & Fields */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Research & IPC Domains</h4>
                  {item.internationalClassification && (
                    <span className="text-[10px] text-slate-500 font-mono">
                      IPC: {item.internationalClassification.join(', ')}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.field.map((f, fIdx) => (
                    <span key={fIdx} className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Significance / Impact */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-indigo-700 block mb-1">Significance & Impact:</span>
                <p className="text-slate-600 leading-relaxed">{item.impact}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
