import React from "react";
import WavyText from "./WavyText";

interface SpeakerProps {
  imgSrc: string;
  name: string;
  reverse?: boolean;
}

const Speaker = ({ imgSrc, name, reverse = true }: SpeakerProps) => {
  return (
    <div
      className={`flex ${reverse ? "flex-row-reverse text-end" : "flex-row text-start"} w-full h-fit gap-8 min-h-40 items-center `}
    >
      <div className="bg-blue rounded-full size-40 sm:size-48 md:size-64 lg:w-[24rem] lg:h-[23rem] aspect-square"></div>
      <WavyText
        text={name}
        className="text-2xl md:text-3xl lg:text-4xl break-words"
      />
    </div>
  );
};

export default Speaker;
