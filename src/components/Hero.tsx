import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = portfolioData.personalInfo.typingRoles;

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                AI Engineer at <span className="text-indigo-400">eMedicalPractice</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Srikar Gajula
              </span>
              .
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-semibold text-slate-300 font-mono mb-6">
              <span className="text-indigo-400 mr-2.5">&gt;</span>
              <span>{displayedText}</span>
              <span className="inline-block w-2 sm:w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </div>

            {/* Professional Headline */}
            <p className="text-base sm:text-lg text-indigo-200/90 font-medium mb-3">
              {portfolioData.personalInfo.headline}
            </p>

            {/* Compelling Introduction */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              {portfolioData.personalInfo.subheading}
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-indigo-400/50 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-200 cursor-pointer group shadow-sm"
              >
                <FileText className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Quick Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] w-full text-slate-400 text-xs">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-indigo-400/40 hover:text-white transition-all text-slate-300"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-indigo-400/40 hover:text-white transition-all text-slate-300"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-indigo-400/40 hover:text-white transition-all text-slate-300"
                  aria-label="Send Email"
                  title={portfolioData.personalInfo.email}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Visual Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Outer Decorative Gradient Border Card */}
            <div className="relative w-full max-w-md">
              {/* Floating Technology Badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-xl bg-[#0F111E]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">LLMs &amp; GenAI</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-2 z-20 px-3.5 py-2 rounded-xl bg-[#0F111E]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white">Python &amp; ML</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-4 z-20 px-3.5 py-2 rounded-xl bg-[#0F111E]/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-white">FastAPI &amp; React</span>
              </motion.div>

              {/* Main Code Terminal Card Frame */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-indigo-500/30 via-white/[0.08] to-cyan-500/20 shadow-2xl shadow-indigo-900/20">
                <div className="relative rounded-[22px] bg-[#0A0B14] p-5 overflow-hidden border border-white/[0.05]">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* AI Engineering Code Terminal Console */}
                  <div className="relative w-full rounded-2xl bg-[#06070D] p-4 font-mono text-xs border border-white/[0.08] shadow-inner text-left overflow-hidden">
                    {/* Window Controls Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">ai_engineer.py</span>
                      <span className="text-[10px] text-indigo-400 font-mono">Python 3.12</span>
                    </div>

                    {/* Syntax Highlighted Terminal Content */}
                    <div className="space-y-1 text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                      <div>
                        <span className="text-purple-400">class</span>{' '}
                        <span className="text-cyan-300">AIEngineer</span>:
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-indigo-300">__init__</span>(self):
                      </div>
                      <div className="pl-8 text-slate-300">
                        self.name = <span className="text-emerald-300">"Srikar Gajula"</span>
                      </div>
                      <div className="pl-8 text-slate-300">
                        self.role = <span className="text-emerald-300">"AI Engineer"</span>
                      </div>
                      <div className="pl-8 text-slate-300">
                        self.company = <span className="text-emerald-300">"eMedicalPractice"</span>
                      </div>
                      <div className="pl-8 text-slate-300">
                        self.education = <span className="text-emerald-300">"B.Tech AI &amp; ML"</span>
                      </div>
                      <div className="pl-8 text-slate-300">
                        self.stack = [
                        <span className="text-indigo-300">"LLMs"</span>,{' '}
                        <span className="text-indigo-300">"PyTorch"</span>,{' '}
                        <span className="text-indigo-300">"Python"</span>,{' '}
                        <span className="text-indigo-300">"Django"</span>]
                      </div>
                      <div className="pl-4 pt-1">
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-indigo-300">mission</span>(self):
                      </div>
                      <div className="pl-8 text-amber-200">
                        <span className="text-purple-400">return</span>{' '}
                        <span>"Building intelligent, scalable solutions"</span>
                      </div>
                    </div>

                    {/* Live System Status Bar */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>AI Inference: Active</span>
                      </div>
                      <span className="text-slate-400 font-mono">Status: Ready</span>
                    </div>
                  </div>

                  {/* Recruiter Quick Fact Sheet */}
                  <div className="mt-4 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Role
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                        AI Engineer
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Company
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5 truncate">
                        eMedicalPractice
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Degree
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5 truncate">
                        B.Tech AI &amp; ML
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Experience
                      </div>
                      <div className="text-xs font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 flex-shrink-0" />
                        Since Aug 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
