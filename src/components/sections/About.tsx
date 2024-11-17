"use client";

import Image from "next/image";
import Circle from "../Circle";
import Track from "../Track";
import { motion, useScroll, useTransform } from "motion/react";
import cloud from "@/../public/assets/cloud.svg";
import { useRef } from "react";
import WavyText from "../WavyText";

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
export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const cloud4Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const cloud5Y = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  const cloud6Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cloud7Y = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  return (
    <div
      id="about"
      className="flex flex-col bg-background items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-36 gap-20 z-10 w-full relative"
    >
      <div className="-z-10 overflow-hidden">
        <motion.div
          style={{ y: cloudY }}
          className="absolute w-40 h-40 md:w-40 md:h-40 left-10 top-0 md:left-32"
        >
          <Image fill src={cloud} alt="img" className="object-contain" />
        </motion.div>
        <motion.div
          style={{ y: cloud2Y }}
          className="absolute w-[20vw] h-[20vh] top-20 left-20 md:left-40"
        >
          <Image fill src={cloud} alt="img" className="object-contain" />
        </motion.div>
        <motion.div
          style={{ y: cloud3Y }}
          className="absolute w-96 h-96 top-24 right-20"
        >
          <Image fill src={cloud} alt="img" className="object-contain" />
        </motion.div>
        <motion.div
          style={{ y: cloud4Y }}
          className="absolute w-64 h-64 top-1/2 -translate-y-1/2"
        >
          <Image fill src={cloud} alt="img" className="object-contain" />
        </motion.div>
        <motion.div
          style={{ y: cloud5Y }}
          className="absolute w-64 h-64 top-[40%] left-20 -translate-y-1/2"
        >
          <Image fill src={cloud} alt="img" className="object-contain" />
        </motion.div>
        <div className="hidden md:block overflow-hidden">
          <motion.div
            style={{ y: cloud6Y }}
            className="absolute w-96 h-96 bottom-72 right-20"
          >
            <Image fill src={cloud} alt="img" className="object-contain" />
          </motion.div>
          <motion.div
            style={{ y: cloud7Y }}
            className="absolute w-96 h-96 bottom-20 left-20"
          >
            <Image fill src={cloud} alt="img" className="object-contain" />
          </motion.div>
          <motion.div
            style={{ y: cloud4Y }}
            className="absolute w-96 h-96 -bottom-20 left-32"
          >
            <Image fill src={cloud} alt="img" className="object-contain" />
          </motion.div>
        </div>
      </div>
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
        <WavyText
          text={"About"}
          className="text-white text-4xl font-medium bg-foreground p-4 rounded-full max-w-fit justify-self-center mb-4"
        />
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
              <motion.div variants={appearStagger}>
                <Circle className="absolute w-24 h-24 top-12 -left-28">
                  <p>Food</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStagger}>
                <Circle className="absolute -left-16 bottom-0">
                  <p>Pitching</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStagger}>
                <Circle className="absolute -left-2 -bottom-40 w-36 h-36">
                  <p>Connections</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStagger}>
                <Circle className="absolute -right-10 -bottom-36 w-36 h-36">
                  <p>Networks</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStagger}>
                <Circle className="absolute -right-24 bottom-5 w-24 h-24">
                  <p>Workshops</p>
                </Circle>
              </motion.div>
              <motion.div variants={appearStagger}>
                <Circle className="absolute -right-24 top-5">
                  <p>Swag</p>
                </Circle>
              </motion.div>
            </motion.div>
          </Circle>
        </div>
      </div>
      <div className="pt-40 flex flex-col text-center gap-4 w-full sm:px-20 md:px-16 lg:px-28 max-w-screen-lg">
        <h2>Tracks</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 md:max-w-none gap-8 text-white relative">
          <Track title="Track 1" description="Description 1" />
          <Track title="Track 2" description="Description 2" />
          <Track title="Track 3" description="Description 3" />
          <Track title="Track 4" description="Description 4" />
        </div>
      </div>
    </div>
  );
}
