import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0F1122]/90 via-[#0A0B14]/90 to-[#07080D]/90 border border-indigo-500/30 shadow-2xl overflow-hidden text-center"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Quick Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Looking for Srikar's Detailed Credentials?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            AI Engineer at eMedicalPractice with a B.Tech in Computer Science Engineering (AI &amp; ML) from Malla Reddy Engineering College. Hands-on expertise in Python, Generative AI, Large Language Models, NLP, Scikit-learn, and Full-Stack Web architectures.
          </p>

          {/* Key Checklist Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-medium mb-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              B.Tech in CSE (AI &amp; ML) &bull; CGPA 7.5/10
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Active AI Engineer @ eMedicalPractice
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verified Microsoft &amp; Cisco Credentials
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg hover:shadow-indigo-500/10"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>View Interactive Resume</span>
            </button>

            <a
              href={portfolioData.personalInfo.resumeDownloadPath}
              download="Srikar_Gajula_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
