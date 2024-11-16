"use client";
import { useRef } from "react";
import Countdown from "../Countdown";
import WavyText from "../WavyText";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

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
    <div ref={ref} className="flex w-full h-screen py-8">
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
      </div>
      <motion.div
        className="flex flex-1 flex-col text-center items-center justify-center gap-10"
        style={{ y: textY }}
      >
        <div>
          <WavyText
            text={"Central Launch"}
            className="text-7xl lg:text-8xl px-4 font-semibold"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            November 22 - 23, 2024
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <WavyText
            text={"Launching in"}
            className="text-4xl lg:text-5xl font-medium"
          />
          <Countdown endTime={new Date("2024-11-22").getTime()} />
          <Link
            className="bg-foreground text-white px-8 py-4 font-bold transition-all duration-500 rounded-full hover:rotate-3 hover:scale-105"
            href={"https://forms.gle/jcsVNcpWT7zfSgMB8"}
          >
            <WavyText text={"Join the Launch"} className="text-4xl" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
