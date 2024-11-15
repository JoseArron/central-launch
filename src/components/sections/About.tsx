"use client";

import Circle from "../Circle";
import Track from "../Track";
import { motion } from "motion/react";

export default function About() {
  const appearVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 100,
    },
  };

  const appearStagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 100,
    },
    transition: {
      staggerChildren: 0.2,
    },
  };

  const appearStaggerChildren = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 100,
    },
  };
  return (
    <div
      id="about"
      className="bg-white flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-36 gap-20 z-10 w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        variants={appearVariants}
        viewport={{ once: true }}
        className="text-center self-center"
      >
        <h1>About</h1>
        <h3 className="max-w-md self-center">
          A two-day immersive experience for Centralian students to ideate,
          develop, and pitch startup ideas.
        </h3>
      </motion.div>
      <div className="relative">
        <h1 className="text-center py-5">What&apos;s in it for you?</h1>
        <div className="relative text-white">
          <Circle className="justify-center w-72 h-72 px-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={appearVariants}
              viewport={{ once: true }}
            >
              Chance to represent CPU for an international startup conference
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={appearStagger}
              transition={{
                duration: 1,
                staggerChildren: 0.25,
              }}
              viewport={{ once: true }}
            >
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute w-24 h-24 top-12 -left-28">
                  <p>Food</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute -left-16 bottom-0">
                  <p>Pitching</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute -left-2 -bottom-40 w-36 h-36">
                  <p>Connections</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute -right-10 -bottom-36 w-36 h-36">
                  <p>Networks</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute -right-24 bottom-5 w-24 h-24">
                  <p>Workshops</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStaggerChildren}>
                <Circle className="absolute -right-24 top-5">
                  <p>Swag</p>
                </Circle>
              </motion.div>
            </motion.div>
          </Circle>
        </div>
      </div>
      <div className="pt-40 flex flex-col text-center gap-4 w-full sm:px-10 md:px-16 lg:px-28 max-w-screen-lg">
        <h2>Tracks</h2>
        <div className="grid grid-cols-2 gap-8 text-white">
          <Track title="Track 1" description="Description 1" />
          <Track title="Track 2" description="Description 2" />
          <Track title="Track 3" description="Description 3" />
          <Track title="Track 4" description="Description 4" />
        </div>
      </div>
    </div>
  );
}
