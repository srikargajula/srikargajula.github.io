import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Layers,
  Database,
  Wrench,
  Binary,
  Search,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SkillCategory } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  BrainCircuit,
  Layers,
  Database,
  Wrench,
  Binary,
};

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter skills based on category and search query
  const filteredCategories = portfolioData.skillCategories
    .map((cat) => {
      if (selectedCategory !== 'all' && cat.categoryKey !== selectedCategory) {
        return null;
      }

      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (searchQuery && matchingSkills.length === 0) {
        return null;
      }

      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            A comprehensive overview of my technical stack across machine learning, generative AI, backend development, and systems engineering.
          </motion.p>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              All Skills
            </button>
            {portfolioData.skillCategories.map((cat) => (
              <button
                key={cat.categoryKey}
                onClick={() => setSelectedCategory(cat.categoryKey)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.categoryKey
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const IconComponent = iconMap[category.iconName] || Terminal;

              return (
                <motion.div
                  key={category.categoryKey}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Category Icon */}
                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/[0.08]">
                      <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} skills listed
                        </span>
                      </div>
                    </div>

                    {/* Skill Badges & Indicators */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-indigo-600/15 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400 transition-colors" />
                          <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[10px] font-mono text-indigo-400/80 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Footer Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Proficiency Focus</span>
                    <span className="text-indigo-400">Production &amp; Research</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
