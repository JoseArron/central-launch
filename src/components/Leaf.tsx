"use client";
import { motion } from "motion/react";
import Image from "next/image";
import leaf from "@/../public/assets/leaf.svg";

interface LeafProps {
  className?: string;
}

const Leaf = ({ className }: LeafProps) => {
  return (
    <motion.div className={`absolute ${className}`}>
      <Image src={leaf} alt="leaf" fill className="object-contain" />
    </motion.div>
  );
};

export default Leaf;
