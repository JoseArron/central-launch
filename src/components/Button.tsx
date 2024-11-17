import Link from "next/link";
import React from "react";
import WavyText from "./WavyText";

interface ButtonProps {
  text: string;
  link?: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link
      className="bg-foreground text-white px-4 lg:px-8 py-4 font-bold transition-all duration-200 rounded-full hover:rotate-3 hover:scale-105 max-w-fit"
      href={link && link !== "" ? link : "#"}
    >
      <WavyText text={text} className="text-4xl" />
    </Link>
  );
};

export default Button;
