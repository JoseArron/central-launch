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
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} w-full h-fit gap-8 min-h-40 items-center`}
    >
      <div className="bg-blue rounded-full w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[34rem] lg:h-[33rem] aspect-square"></div>
      <WavyText text={name} className="text-3xl lg:text-4xl break-words" />
    </div>
  );
};

export default Speaker;
