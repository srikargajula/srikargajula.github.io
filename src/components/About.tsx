import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Brain,
  Code,
  Languages,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Approach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About Srikar Gajula
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            An AI Engineer passionate about translating bleeding-edge machine learning into production-grade systems that solve real-world challenges.
          </motion.p>
        </div>

        {/* Dynamic Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Engineering Intelligent Systems</h3>
                  <p className="text-xs text-indigo-400 font-mono">From Concept to Scalable Deployment</p>
                </div>
              </div>

              {portfolioData.personalInfo.bioParagraphs.map((para, i) => (
                <p key={i} className="text-slate-300/90">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Applied AI Focus:</strong> NLP, LLMs, Computer Vision &amp; Generative AI
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white">Software Craft:</strong> Clean code, Python, REST APIs &amp; microservices
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Banner inside */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {portfolioData.personalInfo.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5 text-gradient-accent">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Educational & Role Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Current Position Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      Current Position
                    </span>
                    <h3 className="text-base font-bold text-white">AI Engineer</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  Aug 2026 – Present
                </span>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed">
                Contributing as an AI Engineer at <strong className="text-white">eMedicalPractice</strong>, focusing on developing intelligent AI-driven applications, clinical data automation, and robust Python services.
              </div>
            </motion.div>

            {/* Academic Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Formal Education
                    </span>
                    <h3 className="text-base font-bold text-white">B.Tech in CSE (AI &amp; ML)</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                  CGPA: 7.5 / 10
                </span>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed">
                Graduated from <strong className="text-white">Malla Reddy Engineering College</strong> (2022–2026) with deep curriculum coursework in artificial intelligence, neural architectures, data structures, and algorithms.
              </div>
            </motion.div>

            {/* Languages Spoken & Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Languages className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Spoken Languages &amp; Communication</h4>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {portfolioData.personalInfo.languages.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                  >
                    <div className="text-xs font-bold text-white">{item.language}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 truncate">{item.proficiency}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional Interests Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass-panel rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
            <Code className="w-4 h-4 text-indigo-400" />
            <span>Key Research &amp; Engineering Interests:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {portfolioData.personalInfo.interests.map((interest, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/10 text-indigo-300 border border-indigo-500/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
