"use client";

import Helpers from "../Helpers";
import { motion } from "motion/react";
const organizers = [
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
];

const sponsors = [
  {
    logoSrc: "",
    title: "Sample Sponsor",
  },

  {
    logoSrc: "",
    title: "Sample Sponsor",
  },
  {
    logoSrc: "",
    title: "Sample Sponsor",
  },
];

const partners = [
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
];

export default function MadePossible() {
  const appearVariants = {
    visible: {
      opacity: 100,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <div className="flex flex-col items-center justify-center py-12 px-12 md:px-24 lg:px-52 gap-14">
      <div className="w-full space-y-2">
        <h1 className="text-center">Organizers</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.2,
            ease: "linear",
          }}
          variants={appearVariants}
          className="grid lg:grid-cols-3 w-full gap-10 grid-cols-1 text-white"
        >
          {organizers.map(({ logoSrc, title }, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={appearVariants}
              key={idx}
            >
              <Helpers logosrc={logoSrc} title={title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full space-y-2">
        <h1 className="text-center">Sponsors</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.2,
            ease: "linear",
          }}
          variants={appearVariants}
          className="grid lg:grid-cols-3 w-full gap-10 grid-cols-1 text-white"
        >
          {sponsors.map(({ logoSrc, title }, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{
                staggerChildren: 0.2,
                ease: "linear",
              }}
              variants={appearVariants}
              key={idx}
            >
              <Helpers logosrc={logoSrc} title={title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full space-y-2">
        <h1 className="text-center">Partners</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.2,
            ease: "linear",
          }}
          variants={appearVariants}
          className="grid lg:grid-cols-3 w-full gap-10 grid-cols-1 text-white"
        >
          {partners.map(({ logoSrc, title }, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{
                staggerChildren: 0.2,
                ease: "linear",
              }}
              variants={appearVariants}
              key={idx}
            >
              <Helpers logosrc={logoSrc} title={title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
