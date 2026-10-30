import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education &amp; Qualifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Specialized higher education in Computer Science with focus on Artificial Intelligence and Machine Learning paradigms.
          </motion.p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <Award className="w-3.5 h-3.5" />
                    {edu.score}
                  </span>
                </div>

                {/* Degree & College */}
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-semibold text-indigo-400 mb-4">
                  {edu.institution}
                </h4>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 pb-4 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Coursework list */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
