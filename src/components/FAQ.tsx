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
    <div className="flex flex-col bg-neutral-800 w-full rounded-md px-5 mb-4">
      <div>
        <button
          className="w-full text-start text-neutral-100 p-5 rounded-md flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{question}</p>

          {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out px-5 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0 p-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
