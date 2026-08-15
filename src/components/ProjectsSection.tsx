import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Code2, Layers, CheckCircle2, Award, BookOpen, Users, User } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Patent') return p.category === 'Patent' || p.wileyRef;
        if (activeCategory === 'Full-Stack') return p.category === 'Full-Stack';
        if (activeCategory === 'AI / ML') return p.category === 'AI / ML' || p.techStack.some(t => t.toLowerCase().includes('ai'));
        return true;
      });

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Code2 className="w-3.5 h-3.5" />
          Featured Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Projects & Engineering Systems
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Production full-stack applications, dual-LLM mentoring platforms, patented audio synthesis engines, and responsive user portals.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {['All', 'Patent', 'Full-Stack', 'AI / ML'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isTeamProject = project.id === 'dhun-ai' || project.id === 'code-mentor-ai';

          return (
            <div
              key={project.id}
              className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-2xs transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex-1 flex flex-col">
                {/* Badges & Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    project.category === 'Patent'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : project.category === 'Full-Stack'
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}>
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {project.wileyRef && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        <BookOpen className="w-3 h-3" /> Wiley Book
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                      {isTeamProject ? <Users className="w-3 h-3 text-indigo-600" /> : <User className="w-3 h-3 text-slate-400" />}
                      <span>{isTeamProject ? 'Team Project' : 'Independent Project'}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-600 font-semibold mt-0.5">{project.subtitle}</p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                  {project.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 flex-1">
                  {project.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5">
                      <span className="text-indigo-600 mt-0.5 font-bold shrink-0">•</span>
                      <span className="text-slate-600 text-[11px] leading-relaxed">{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  {project.patentNumber ? (
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                      Patent {project.patentNumber}
                    </span>
                  ) : project.wileyRef ? (
                    <span className="text-[10px] font-mono font-bold text-indigo-800 bg-indigo-50 px-2 py-1 rounded border border-indigo-200">
                      Chapter Accepted
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-semibold">
                      Production Build
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-live-${project.id}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href="#research"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
                    >
                      <span>View Patent</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
