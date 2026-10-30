import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Resume Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0B0C16] border border-white/[0.12] shadow-2xl z-10 overflow-hidden"
        >
          {/* Modal Header Actions Bar */}
          <div className="px-6 py-4 bg-[#0F111E] border-b border-white/[0.08] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-sm font-bold text-white tracking-wide">
                Srikar Gajula — Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <a
                href={portfolioData.personalInfo.resumeDownloadPath}
                download="Srikar_Gajula_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
                aria-label="Close resume viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Styled Document Sheet Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0C16] text-slate-200">
            {/* Document Header */}
            <div className="border-b border-white/[0.1] pb-6 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  GAJULA SRIKAR
                </h1>
                <p className="text-sm font-semibold text-indigo-400 mt-1">
                  AI Engineer &bull; Software Developer
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs text-slate-400 font-mono mt-3">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    {portfolioData.personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-indigo-400" />
                    {portfolioData.personalInfo.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex sm:flex-col gap-2 justify-center">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 flex items-center justify-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 flex items-center justify-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI Engineer at eMedicalPractice with a B.Tech background in Computer Science Engineering, specializing in Artificial Intelligence and Machine Learning from Malla Reddy Engineering College (2022–2026, CGPA: 7.5/10). Hands-on foundation in Python, machine learning, natural language processing, data analysis, and software development. Interested in building practical AI solutions and applying data-driven approaches to real-world problems.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Professional Experience
              </h2>

              <div className="space-y-4">
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="text-sm font-bold text-white">
                        {exp.role.toUpperCase()} <span className="text-indigo-400">| {exp.company}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{exp.summary}</p>
                    <ul className="space-y-1">
                      {exp.contributions.map((c, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">&bull;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Education
              </h2>

              <div className="space-y-3">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {edu.degree}
                      </div>
                      <div className="text-xs font-mono text-emerald-400 font-semibold">
                        {edu.score}
                      </div>
                    </div>
                    <div className="text-xs text-indigo-300 font-medium mt-1">
                      {edu.institution} &bull; {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <strong className="text-white">Programming:</strong> Python, Java (Basic), JavaScript, SQL
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <strong className="text-white">AI &amp; ML:</strong> Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, NLP, Generative AI, LLMs
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <strong className="text-white">Frameworks:</strong> Django, Node.js, Express.js, NLTK
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <strong className="text-white">Databases &amp; Tools:</strong> MongoDB, MySQL, Git, GitHub, VS Code, Postman
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                Certifications
              </h2>
              <div className="space-y-2">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.id} className="text-xs text-slate-300 flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span>
                      <strong className="text-white">{cert.title}</strong> &mdash; {cert.issuer}
                    </span>
                    <span className="font-mono text-slate-400 text-[11px]">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
