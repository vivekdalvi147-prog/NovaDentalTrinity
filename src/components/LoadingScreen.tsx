import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Visual Abstract Tooth/Smile Logo Design */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-teal-500/10 border border-teal-500/30"
            >
              {/* Outer glowing wave representing a smile */}
              <svg className="absolute w-20 h-20 text-teal-400" viewBox="0 0 100 100">
                <motion.path
                  d="M 20,50 Q 50,85 80,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 35,40 Q 50,30 65,40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
                />
              </svg>
              <Sparkles className="w-8 h-8 text-teal-400 animate-pulse" />
              <ShieldCheck className="absolute -top-1 -right-1 w-5 h-5 text-sky-400" />
            </motion.div>

            {/* Clinic Name and Premium Subtitle */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl md:text-3xl font-sans tracking-widest uppercase text-slate-100 font-semibold"
            >
              Nova Dental <span className="text-teal-400">Trinity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs tracking-widest text-slate-400 uppercase mt-2 font-mono"
            >
              Premium Oral Health Clinic
            </motion.p>

            {/* Tiny aesthetic loading line */}
            <div className="w-32 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-teal-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
