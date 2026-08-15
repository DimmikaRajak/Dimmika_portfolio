import { useState, useEffect } from 'react';
import { Menu, X, Download, Send, Sparkles, User, Code2, Award, Briefcase, BookOpen, Layers, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generateResumePdf';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'research', 'experience', 'certifications', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Patents & Research', href: '#research', id: 'research' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
            : 'bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group" id="navbar-brand">
            <div className="w-[45px] h-[45px] rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              DR
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg leading-[29px] inline-block group-hover:text-indigo-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Resume Download & Contact) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={downloadResumePdf}
              id="navbar-download-resume-btn"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 text-xs font-bold border border-slate-300 transition-all shadow-2xs hover:border-indigo-300 cursor-pointer"
              title="Download PDF Resume"
            >
              <Download className="w-[18px] h-[18px] text-indigo-600 shrink-0" />
              <span className="whitespace-nowrap">Resume</span>
            </button>

            <a
              href="#contact"
              id="navbar-contact-btn"
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <Send className="w-[16px] h-[16px] shrink-0" />
              <span className="whitespace-nowrap">Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger / Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={downloadResumePdf}
              id="mobile-nav-resume-btn"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold cursor-pointer"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            <button
              onClick={() => setMobileDrawerOpen(true)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 cursor-pointer transition-colors"
              aria-label="Open navigation drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Side Drawer Menu */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Side Drawer Container */}
          <div
            id="mobile-side-drawer"
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                    DR
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Dimmika Rajak</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Software Engineer</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  id="close-mobile-drawer-btn"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items List */}
              <div className="py-4 space-y-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Navigation
                </p>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      id={`mobile-link-${link.id}`}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/70'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  downloadResumePdf();
                }}
                id="mobile-drawer-download-resume"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileDrawerOpen(false)}
                id="mobile-drawer-contact"
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200"
              >
                <Send className="w-4 h-4 text-indigo-600" />
                <span>Send a Message</span>
              </a>

              <div className="pt-2 text-center text-[11px] text-slate-500 space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-600 font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </p>
                <p className="flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span className="font-medium">{PERSONAL_INFO.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
