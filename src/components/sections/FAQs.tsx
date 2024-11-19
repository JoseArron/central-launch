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
    question: "When and where will the hackathon take place?",
    answer:
      "The hackathon will be on November 22 and 23, 2023, from 7:30 AM to 5:00 PM each day. The venue is the Henry Luce Library American Corner, Central Philippine University.",
  },
  {
    question: "Who can join the hackathon?",
    answer:
      "Senior high school and college students are eligible to participate.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, the event is completely free to join!",
  },
  {
    question: "What should I wear?",
    answer:
      "None, but abide by the university’s standard dress code.",
  },
  {
    question: "Do I need to have a team before the event?",
    answer:
      "No, teams will be formed on the day of the hackathon.",
  },
  {
    question: "What roles can I take on in a team?",
    answer:
      "You can choose to be a Hacker (technical skills), Hipster (creative/design), or Hustler (business/pitching).!",
  },
  {
    question: "Do I need coding or technical skills to participate?",
    answer:
      "No, you can contribute through other roles like design or business strategy.",
  },
  {
    question: "Can I work on a pre-existing idea or project?",
    answer:
      "No, the hackathon requires participants to develop new ideas.",
  },
  {
    question: "Will there be workshops during the event?",
    answer:
      "Yes, there will be workshops to help you learn and grow your ideas.",
  },
  {
    question: "Are mentors available during the event?",
    answer:
      "Yes, mentors will be on hand to guide and support you.",
  },
  {
    question: "What is expected at the end of the hackathon?",
    answer:
      "Teams will present their startup ideas. You’ll have 5 minutes to pitch your idea, followed by 5 minutes for Q&A with the judges.",
  },
  {
    question: "What are the prizes for winners?",
    answer:
      "Winners will receive support and incubation opportunities from the university’s TBI (Technology Business Incubator).",
  },
  {
    question: "Will food or refreshments be provided?",
    answer:
      "Yes, food and refreshments will be available for participants.",
  },
  {
    question: "Do I need to bring my own device or materials?",
    answer:
      "Yes, please bring your own devices and any materials you think you’ll need.",
  },
  {
    question: "Is there internet access at the venue?",
    answer:
      "Yes, internet access will be provided.",
  },
  {
    question: "What if I need to leave early?",
    answer:
      "Please ask for permission from the organizers if you need to leave early.",
  },
  {
    question: "Will I get a certificate for participating?",
    answer:
      "Yes, participants will receive a certificate.",
  },
];

export default function FAQs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leafGroup1Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const leafGroup2Y = useTransform(scrollYProgress, [0, 1], ['0vh', "120vh"]);
  const leafGroup3Y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const leafGroup4Y = useTransform(scrollYProgress, [0, 1], ["0vh", "160vh"]);

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
          <Leaf className={"w-20 h-20 right-40 -rotate-12"} leafType={LeafType.dark} />
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
      <div className="flex flex-col gap-2 items-center justify-center w-full max-w-screen-sm">
        {faqs.map(({ question, answer }, idx) => (
          <FAQ question={question} answer={answer} key={idx} />
        ))}
      </div>
    </div>
  );
}
