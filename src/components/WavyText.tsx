import React from "react";

interface WavyTextProps {
  text: string;
  className?: string;
}
const WavyText = ({ text, className }: WavyTextProps) => {
  return (
    <h2 className={`${className} group`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {Array.from(word).map((letter, index) => (
            <span
              key={index}
              className="inline-block ease-out group-hover:animate-wave"
              style={{
                animationDelay: `${wordIndex + index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
          {wordIndex < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h2>
  );
};

export default WavyText;
