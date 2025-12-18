import { useEffect, useState } from "react";

interface TypewriterOptions {
  typingSpeed?: number;   // ms per char
  deletingSpeed?: number;
  delayAfterTyping?: number;
  delayAfterDeleting?: number;
  loop?: boolean;
}

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 20,
    deletingSpeed = 12,
    delayAfterTyping = 1200,
    delayAfterDeleting = 400,
    loop = true,
  }: TypewriterOptions = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        // Deleting
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) =>
            loop ? (prev + 1) % words.length : prev + 1
          );
          setTimeout(() => {}, delayAfterDeleting);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayAfterTyping,
    delayAfterDeleting,
    loop,
  ]);

  return text;
}
