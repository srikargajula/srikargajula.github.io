import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05060A] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand & Title */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-[#0A0B12] flex items-center justify-center font-extrabold text-sm text-white">
                  {portfolioData.personalInfo.initials}
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {portfolioData.personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-indigo-400 font-mono">
              AI Engineer &bull; Software Developer &bull; eMedicalPractice
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Designing and implementing intelligent AI workflows, transformer models, machine learning pipelines, and robust backend web architectures.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">Education &amp; Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Hyderabad, Telangana, India
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-500">
              Built with React, Vite, Tailwind CSS &amp; Framer Motion
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer group"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
