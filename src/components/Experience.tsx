import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Hands-on software engineering and AI development experience across enterprise healthcare workflows and predictive machine learning.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {portfolioData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node on Timeline */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 w-9 h-9 rounded-full bg-[#07080D] border-2 border-indigo-500 items-center justify-center shadow-lg shadow-indigo-500/30">
                    <span className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel-hover rounded-3xl p-6 sm:p-7 relative overflow-hidden">
                      {/* Current Status Pill */}
                      {exp.current && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>Current Role</span>
                        </div>
                      )}

                      {/* Header with Company Logo / Monogram */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          {/* Company Logo Badge */}
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 flex items-center justify-center font-bold text-white text-sm shadow-md">
                            {exp.companyLogoPlaceholder || 'EMP'}
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-white leading-tight">
                              {exp.role}
                            </h3>
                            <div className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                              <Building2 className="w-3.5 h-3.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08] whitespace-nowrap">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta information: Date & Location */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 mb-5 pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Contributions / Responsibilities list */}
                      <div className="space-y-2.5 mb-6">
                        {exp.contributions.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="pt-4 border-t border-white/[0.06]">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-indigo-300 border border-white/[0.06]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
