import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

const bootMessages = [
  '[BOOT] Initializing secure environment...',
  '[AUTH] Loading security protocols...',
  '[SYS]  Mounting encrypted volumes...',
  '[NET]  Establishing secure connections...',
  '[SOC]  Loading threat intelligence feeds...',
  '[DB]   Indexing project databases...',
  '[UI]   Rendering dashboard components...',
  '[OK]   All systems operational.',
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    bootMessages.forEach((_, i) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, i]);
        setProgress(((i + 1) / bootMessages.length) * 100);
      }, 200 + i * 250);
    });

    // Start exit after all messages
    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 200 + bootMessages.length * 250 + 500);

    // Complete after exit animation
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 200 + bootMessages.length * 250 + 1200);

    return () => {
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[--color-bg-primary]"
        >
          <div className="w-full max-w-lg px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex items-center justify-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-accent]/10">
                <Shield size={22} className="text-[--color-accent]" />
              </div>
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[--color-text-primary]">
                CyberSOC<span className="text-[--color-accent]"> Portfolio</span>
              </span>
            </motion.div>

            {/* Boot Messages */}
            <div className="mb-6 space-y-1.5 font-[family-name:var(--font-mono)] text-xs">
              {bootMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: visibleMessages.includes(i) ? 1 : 0,
                    x: visibleMessages.includes(i) ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    msg.includes('[OK]')
                      ? 'text-[--color-accent]'
                      : 'text-[--color-text-muted]'
                  }`}
                >
                  {msg}
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-1 overflow-hidden rounded-full bg-[--color-bg-secondary]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary]"
              />
            </div>
            <p className="mt-2 text-center font-[family-name:var(--font-mono)] text-[10px] text-[--color-text-muted]">
              {Math.round(progress)}% — Initializing...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
