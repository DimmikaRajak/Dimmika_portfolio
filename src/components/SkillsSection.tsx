import { useState } from 'react';
import { Layout, Server, Database, Sparkles, Wrench, CheckCircle2, Cpu, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-600" />;
      default: return <Wrench className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          Technical Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Skills & Technical Stack
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Engineering foundation spanning modern frontend frameworks, scalable Node/Python backends, relational & NoSQL schemas, and production AI/LLM pipelines.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {['All', 'Frontend', 'Backend', 'Database', 'AI', 'Tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? 'All Domains' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-2xs transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  {getIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{cat.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {cat.skills.map((sk, sIdx) => {
                  const isHighlighted = sk.highlight;
                  return (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                        isHighlighted
                          ? 'bg-indigo-50/70 text-indigo-900 border-indigo-200 shadow-2xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{sk.name}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        sk.level === 'Expert'
                          ? 'bg-indigo-100 text-indigo-700 font-bold'
                          : sk.level === 'Advanced'
                          ? 'bg-emerald-100 text-emerald-800 font-bold'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {sk.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
