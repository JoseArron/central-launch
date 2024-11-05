import React from "react";

const Track = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col text-start p-3 rounded-xl bg-violet-950 min-h-40 w-full">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Track;
