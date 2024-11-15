"use client";

import Image from "next/image";

import WavyText from "../WavyText";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute top-0 left-0 px-10 py-4 w-full z-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center font cursor-pointer">
          <Image
            src={"/assets/cpugad-logo.svg"}
            alt="Central Launch"
            width={16}
            height={16}
            className="size-16"
          />
          {/* <WavyText
            text="Central Launch"
            className="text-nowrap font-semibold"
          /> */}
        </div>
        <div className="hidden sm:flex flex-row items-center gap-12">
          <button onClick={() => scrollToSection("about")}>
            <WavyText text="About" className="text-nowrap font-medium" />
          </button>
          <button onClick={() => scrollToSection("speakers")}>
            <WavyText text="Speakers" className="text-nowrap font-medium" />
          </button>
          <button onClick={() => scrollToSection("schedule")}>
            <WavyText text="Schedule" className="text-nowrap font-medium" />
          </button>
          <button onClick={() => scrollToSection("faqs")}>
            <WavyText text="FAQs" className="text-nowrap font-medium" />
          </button>
        </div>
      </div>
    </header>
  );
}
