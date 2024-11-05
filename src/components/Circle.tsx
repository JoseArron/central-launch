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
      className={`w-20 h-20 bg-purple-950 rounded-full flex items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Circle;
