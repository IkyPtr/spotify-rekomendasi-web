import { useEffect, useState } from "react";

export default function Typewriter({ words, speed = 70, pause = 2000, className = "" }) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIdx((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words, speed, pause]);

  return (
    <span className={`typewriter ${className}`}>
      {text}
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
