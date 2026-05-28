import React from "react";
import { motion } from "framer-motion";

function SectionHeading({
  title,
  className = "",
  animationDelay = 0,
  tone = "light",
}) {
  const toneClassName = tone === "dark" ? "text-white" : "text-gray-950";

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`mb-4 text-center text-[1.625rem] font-bold leading-tight sm:mb-6 sm:text-3xl lg:text-4xl ${toneClassName} ${className}`}
    >
      {title}
    </motion.h2>
  );
}

export default SectionHeading;
