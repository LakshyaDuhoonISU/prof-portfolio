import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(
  text: string,
  speed: number = 50,
  startDelay: number = 0,
  shouldStart: boolean = true
) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const reset = useCallback(() => {
    setDisplayedText('');
    setIsComplete(false);
    setIsTyping(false);
  }, []);

  useEffect(() => {
    if (!shouldStart) {
      reset();
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay, shouldStart, reset]);

  return { displayedText, isComplete, isTyping, reset };
}
