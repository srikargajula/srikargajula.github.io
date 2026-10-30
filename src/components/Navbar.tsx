import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scrolled state for navbar styling
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-slate-900/40">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080D]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[10px] bg-[#0A0B12] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-tighter bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    {portfolioData.personalInfo.initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-white transition-colors flex items-center gap-1.5">
                  {portfolioData.personalInfo.name}
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-[11px] font-mono text-indigo-400 font-medium">
                  {portfolioData.personalInfo.role}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full -z-10 shadow-sm shadow-indigo-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Resume & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenResumeModal}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200 shadow-sm shadow-indigo-500/10 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenResumeModal}
                className="p-2 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 sm:hidden"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-b border-white/[0.08] bg-[#0A0B14]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                          : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full py-2.5 px-4 text-center rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View &amp; Download Resume
                  </button>

                  <button
                    onClick={() => scrollTo('#contact')}
                    className="w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
