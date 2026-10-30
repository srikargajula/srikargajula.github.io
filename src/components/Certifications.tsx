import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Trophy, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations &amp; Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certifications &amp; Activities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Recognized industry certifications in Generative AI, Cloud AI, and Computer Networking, alongside hackathon milestones.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Badge Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-indigo-300 border border-white/[0.08]">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-400 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Footer with year & verification */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {cert.year}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Hackathons &amp; Technical Events
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Project Exhibitions &amp; Collaborative Engineering
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.activities.map((act, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white">{act.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300">
                      {act.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
