import React from "react";

// I don't know what to name here

interface HelpersProps {
  logosrc: string;
  title: string;
}

const Helpers = ({ logosrc, title }: HelpersProps) => {
  return (
    <div className="rounded-md bg-neutral-800 px-5 py-2 flex items-center justify-center w-full min-h-32">
      {logosrc}
      <h3 className="w-full ">{title}</h3>
    </div>
  );
};

export default Helpers;
