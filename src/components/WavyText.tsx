import React from "react";

interface WavyTextProps {
  text: string;
  className?: string;
}

const WavyText = ({ text, className }: WavyTextProps) => {
  return (
    <h2 className={`${className} group`}>
      {text.split(" ").map((word) => (
        <span className="inline-block mr-2">
          {Array.from(word).map((letter, index) => (
            <span
              key={index}
              className="inline-block ease-out group-hover:animate-wave"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
};

export default WavyText;
