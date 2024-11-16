"use client";
import { motion } from "motion/react";
import Image from "next/image";
import leaf from "@/../public/assets/leaf.svg";
import darkLeaf from "@/../public/assets/darkleaf.svg";
interface LeafProps {
  className?: string;
  leafType?: LeafType;
}
export enum LeafType {
  normal,
  dark
}

const Leaf = ({ className, leafType }: LeafProps) => {
  return (
    <motion.div className={`absolute ${className}`}>
      <Image src={leafType == LeafType["dark"]? darkLeaf : leaf } alt="leaf" fill className="object-contain" />
    </motion.div>
  );
};

export default Leaf;
