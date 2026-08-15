import { useState } from 'react';
import { Award, CheckCircle2, Sparkles, FileCheck, Search, UserCheck, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Top 10 primary certifications prioritized by industry recognition
  const top10Certifications = CERTIFICATIONS.slice(0, 10);
  const remainingCount = CERTIFICATIONS.length - 10;
  const displayedCerts = showAll ? CERTIFICATIONS : top10Certifications;

  return (
    <section id="certifications" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5 text-amber-600" />
          Verified Credentials
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Top Certifications & Accreditations
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Showing top 10 primary industry certifications spanning Amazon Web Services, Generative AI Data Analytics (Tata), Drone AI/ML (IIT Indore & MeitY), AI Factory (Lablab.ai), and executive masterclasses.
        </p>
      </div>

      {/* Top 10 Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
        {displayedCerts.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-5 shadow-2xs transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {cert.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{cert.date}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-indigo-600 mt-1 font-semibold">{cert.issuer}</p>

              {cert.instructorOrSpeaker && (
                <div className="mt-2 text-[10px] text-slate-600 flex items-start gap-1 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <UserCheck className="w-3 h-3 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-2 leading-tight">{cert.instructorOrSpeaker}</span>
                </div>
              )}

              {cert.certificateId && (
                <p className="mt-2 text-[9px] font-mono text-emerald-800 truncate bg-emerald-50/60 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">
                  ID: {cert.certificateId}
                </p>
              )}

              {(cert.hours || cert.grade) && (
                <div className="mt-2 flex flex-wrap items-center gap-1 text-[9px] font-mono text-slate-600">
                  {cert.hours && <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{cert.hours}</span>}
                  {cert.grade && <span className="bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-800 font-bold">{cert.grade}</span>}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                <FileCheck className="w-3 h-3 text-emerald-600" /> Verified
              </span>
              <span className="font-mono text-[9px] text-slate-400">Credential</span>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining Count Banner & Toggle */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              +{remainingCount} More Verified Credentials
            </span>
            <span className="text-xs text-slate-500 font-medium">({CERTIFICATIONS.length} total credentials on record)</span>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl">
            Additional certifications include NxtWave CCBP Python & Web Foundations, Database Systems, NCVET Skill India accreditations, and Lablab.ai hackathon masterclasses.
          </p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          id="certifications-toggle-more-btn"
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 shadow-2xs flex items-center gap-1.5 shrink-0 cursor-pointer transition-colors"
        >
          {showAll ? (
            <>
              <span>Show Top 10 Only</span>
              <ChevronUp className="w-3.5 h-3.5 text-slate-600" />
            </>
          ) : (
            <>
              <span>View All {CERTIFICATIONS.length} Certificates</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
            </>
          )}
        </button>
      </div>

    </section>
  );
};
