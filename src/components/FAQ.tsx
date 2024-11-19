"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col w-full rounded-md px-5 ${
        isOpen ? "bg-[#BCC6FF] text-[#4E0666]" : "bg-purple-950 text-neutral-50"
      }`}
    >
      <div>
        <button
          className="w-full text-start p-5 rounded-md flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={isOpen ? "font-bold" : ""}>{question}</p>

          {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </button>
      </div>
      <div
        className={`overflow-hidden px-5 transition-max-h duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 pb-5 "
            : "max-h-0 p-0"
        }`}
      >
        
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
