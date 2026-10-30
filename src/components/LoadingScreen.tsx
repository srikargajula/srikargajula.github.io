import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080D]"
        >
          <div className="relative flex items-center justify-center">
            {/* Glowing ambient ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-28 h-28 rounded-full bg-indigo-500/20 blur-xl"
            />

            {/* Logo Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-[1.5px] shadow-2xl shadow-indigo-500/25"
            >
              <div className="w-full h-full rounded-2xl bg-[#0A0B12] flex items-center justify-center">
                <span className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-cyan-400 bg-clip-text text-transparent">
                  SG
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <div className="text-sm font-semibold tracking-widest uppercase text-slate-400">
              Srikar Gajula
            </div>
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Initializing AI Portfolio...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
