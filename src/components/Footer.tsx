import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Download, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                DR
              </div>
              <div>
                <span className="text-base font-bold text-slate-900 block">{PERSONAL_INFO.name}</span>
                <span className="text-xs text-indigo-600 font-semibold font-mono">Software Engineer & 4x Patent Co-Inventor</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              B.Tech Computer Engineering student at SAGE University (CGPA 8.35 | Top 10%). Co-inventor on 4 Indian Patent Applications (including AI Raag synthesis No. 202621056495).
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-2xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-[#0077b5] border border-slate-200 transition-colors shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#home" className="text-slate-600 hover:text-indigo-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Projects</a></li>
              <li><a href="#research" className="text-slate-600 hover:text-indigo-600 transition-colors">Patents & Research</a></li>
              <li><a href="#experience" className="text-slate-600 hover:text-indigo-600 transition-colors">Experience</a></li>
              <li><a href="#certifications" className="text-slate-600 hover:text-indigo-600 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Actions */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Quick Actions</h4>
            <div className="space-y-2.5">
              <button
                onClick={downloadResumePdf}
                id="footer-download-resume-btn"
                className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold flex items-center justify-between transition-colors shadow-2xs cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Download Resume (PDF)</span>
                </span>
                <span className="text-indigo-600 font-bold">➔</span>
              </button>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="text-emerald-700 font-semibold font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for SWE & Full Stack Roles</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Dimmika Rajak. All Rights Reserved. 4x Indian Patent Co-Inventor.</p>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer shadow-2xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
