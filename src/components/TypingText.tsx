import { useTypingEffect } from '../hooks/useTypingEffect';

interface TypingTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  shouldStart?: boolean;
}

export default function TypingText({
  text,
  speed = 50,
  startDelay = 0,
  className = '',
  showCursor = true,
  shouldStart = true,
}: TypingTextProps) {
  const { displayedText, isComplete, isTyping } = useTypingEffect(text, speed, startDelay, shouldStart);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (isTyping || !isComplete) && (
        <span className="animate-blink text-[--color-accent]">▊</span>
      )}
      {showCursor && isComplete && (
        <span className="animate-blink text-[--color-accent]">▊</span>
      )}
    </span>
  );
}
