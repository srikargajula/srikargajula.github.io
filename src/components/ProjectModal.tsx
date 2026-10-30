import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0C0E1A] border border-white/[0.12] shadow-2xl z-10 text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Image */}
          <div className="relative w-full aspect-video bg-[#080910] border-b border-white/[0.08] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E1A] via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-indigo-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* In-depth Overview */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Project Architecture &amp; Solution
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Capabilities / Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Highlights &amp; Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-indigo-300 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-white font-semibold text-xs transition-all cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
