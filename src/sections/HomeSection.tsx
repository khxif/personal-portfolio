"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "circOut", delay: 0.1 }}
      className="flex items-center h-full justify-center mt-auto md:w-1/2 py-4"
    >
      <Image src="/home-main.svg" alt="home" width={500} height={400} />
    </motion.section>
  );
}
