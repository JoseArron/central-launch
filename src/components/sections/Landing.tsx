"use client";
import { useRef } from "react";
import Countdown from "../Countdown";
import WavyText from "../WavyText";
import Button from "../Button";

import { motion, useScroll, useTransform } from "motion/react";

export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mountain2Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mountain1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const branchesY = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);
  const nestY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const leavesY = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div
      ref={ref}
      className="flex w-full h-screen py-8 relative overflow-hidden"
    >
      <div className="flex-grow-0 flex-1 md:flex md:flex-auto">
        <motion.div
          className="absolute inset-0 -z-50 bg-[url('/assets/mountain-2.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: mountain2Y }}
        />
        <motion.div
          className="absolute inset-0 -z-40 bg-[url('/assets/mountain-1.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: mountain1Y }}
        />
        <motion.div
          className="absolute inset-0 -z-30 bg-[url('/assets/sun.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: sunY }}
        />
        <motion.div
          className="absolute inset-0 -z-30 bg-[url('/assets/cloud-3.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: cloud3Y }}
        />
        <motion.div
          className="absolute inset-0 -z-30 bg-[url('/assets/cloud-2.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: cloud2Y }}
        />
        <motion.div
          className="absolute inset-0 -z-20 bg-[url('/assets/branches.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: branchesY }}
        />
        <motion.div
          className="absolute inset-0 -z-10 bg-[url('/assets/nest.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: nestY }}
        />
        <motion.div
          className="absolute inset-0 -z-10 bg-[url('/assets/leaves.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          style={{ y: leavesY }}
        />
        <motion.div
          className="absolute inset-0 -z-10 bg-[url('/assets/bird.png')] bg-bottom bg-contain bg-no-repeat sm:bg-cover"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -20, -10, -30, 0],
            rotate: [0, 10, -15, 20, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
      <motion.div
        className="flex flex-1 flex-col text-center items-center justify-center sm:text-right sm:items-end gap-8 px-10 sm:px-24 md:px-36 lg:px-44 xl:px-52 pt-2 lg:pt-4"
        style={{ y: textY }}
      >
        <div>
          <WavyText
            text={"Launch Central"}
            className="text-7xl lg:text-8xl px-4 font-semibold rounded-lg max-w-fit"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Nov 22 - 23, 2024
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl">
            Henry Luce Library, American Corner
          </h3>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <WavyText
            text={"Launching in"}
            className="text-4xl lg:text-5xl font-medium"
          />
          <Countdown endTime={new Date("2024-11-22").getTime()} />
          <Button
            text="Join the Launch"
            link="https://forms.gle/jcsVNcpWT7zfSgMB8"
          />
        </div>
      </motion.div>
    </div>
  );
}
