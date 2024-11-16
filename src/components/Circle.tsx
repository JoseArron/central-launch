import React from "react";

const Circle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-purple-950 h-20 w-20 flex items-center justify-center text-center ${className} rounded-full `}
    >
      {children}
    </div>
  );
};

export default Circle;
