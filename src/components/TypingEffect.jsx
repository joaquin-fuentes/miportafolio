import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isWaiting) {
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, delay);
          return;
        }

        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);

          if (currentIndex === 0) {
            setIsDeleting(false);
            setCurrentIndex(0);
          }
        } else {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);

          if (currentIndex === text.length - 1) {
            setIsWaiting(true);
          }
        }
      },
      isWaiting ? delay : speed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isWaiting, text, speed, delay]);

  return (
    <span className="relative">
      {displayedText}
      <span className="animate-pulse text-yellow-400">|</span>
    </span>
  );
};

export default TypingEffect;
