import { motion } from 'framer-motion';
import { WifiOff, ArrowLeft, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[--color-bg-primary] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg text-center"
      >
        {/* Terminal Window */}
        <div className="overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-sm">
          {/* Title Bar */}
          <div className="flex items-center gap-2 border-b border-[--color-border] bg-[--color-bg-secondary]/50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
              <div className="h-3 w-3 rounded-full bg-[--color-accent]" />
            </div>
            <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
              soc-terminal
            </span>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[--color-danger]/10"
            >
              <WifiOff size={28} className="text-[--color-danger]" />
            </motion.div>

            <div className="mb-2 font-[family-name:var(--font-mono)] text-xs text-[--color-danger]">
              ERROR 404
            </div>

            <h1 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[--color-text-primary]">
              Connection Lost to SOC
            </h1>

            <div className="mb-6 space-y-2 font-[family-name:var(--font-mono)] text-xs text-[--color-text-muted]">
              <p>
                <span className="text-[--color-danger]">[ERROR]</span>{' '}
                Requested endpoint not found in the network.
              </p>
              <p>
                <span className="text-[--color-warning]">[WARN]</span>{' '}
                The page you're looking for may have been moved or decommissioned.
              </p>
              <p>
                <span className="text-[--color-accent]">[INFO]</span>{' '}
                Redirecting to main dashboard...
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => navigate('/')} variant="secondary">
                <ArrowLeft size={14} />
                Return to Dashboard
              </Button>
              <Button onClick={() => navigate('/')} variant="ghost">
                <Terminal size={14} />
                Home
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
