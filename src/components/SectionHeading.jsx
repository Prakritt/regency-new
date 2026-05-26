import React from "react";
import { motion } from "framer-motion";

function SectionHeading({ title, className = "", animationDelay = 0 }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`mb-6 text-center text-2xl font-bold leading-tight text-gray-950 sm:text-3xl lg:text-4xl ${className}`}
    >
      {title}
    </motion.h2>
  );
}

export default SectionHeading;
