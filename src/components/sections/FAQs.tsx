"use client";
import FAQ from "../FAQ";
import WavyText from "../WavyText";
import { motion, useScroll, useTransform } from "motion/react";
import Leaf, { LeafType } from "../Leaf";
import { useRef } from "react";

type FaqsProps = {
  question: string;
  answer: string;
}[];

const faqs: FaqsProps = [
  {
    question: "What is Netflix?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel aliquam odit sunt illo, quibusdam adipisci quod ad in. Sequi, omnis expedita laborum harum dolorum obcaecati nulla error aliquid! Unde.",
  },
];

export default function FAQs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leafGroup1Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const leafGroup2Y = useTransform(scrollYProgress, [0, 1], ['0vh', "20vh"]);
  const leafGroup3Y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const leafGroup4Y = useTransform(scrollYProgress, [0, 1], ["0vh", "90vh"]);

  return (
    <div
      id="faqs"
      className="flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-36 w-full gap-5 z-10 relative"
      ref={ref}
    >
      <div className="-z-10 relative w-full">
        <motion.div style={{ y: leafGroup1Y }}>
          <Leaf className={"w-20 h-20 left-32 rotate-12"} />
          <Leaf className={"w-20 h-20 right-32 bottom-0 -rotate-45"} leafType={LeafType.dark} />
        </motion.div>
        <motion.div style={{ y: leafGroup2Y }}>
          <Leaf className={"w-20 h-20 right-10 bottom-0 rotate-12"} />
          <Leaf className={"w-20 h-20 left-0 top-0 "} />
        </motion.div>
        <motion.div style={{ y: leafGroup3Y }}>
          <Leaf className={"w-20 h-20 right-24 -rotate-12"} leafType={LeafType.dark} />
          <Leaf className={"w-20 h-20 left-48 top-10 -rotate-45"} leafType={LeafType.dark} />
        </motion.div>
        <motion.div style={{ y: leafGroup4Y }}>
          <Leaf className={"w-20 h-20 right-20 -rotate-45"} />
          <Leaf className={"w-20 h-20 left-20 top-10 rotate-45"} leafType={LeafType.dark} />
        </motion.div>
      </div>
      <WavyText
        text={"FAQs"}
        className="text-white text-4xl font-medium bg-foreground p-4 rounded-full max-w-fit justify-self-center mb-4"
      />
      <div className="flex flex-col gap-4 items-center justify-center w-full max-w-screen-sm">
        {faqs.map(({ question, answer }, idx) => (
          <FAQ question={question} answer={answer} key={idx} />
        ))}
      </div>
    </div>
  );
}
