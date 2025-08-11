import React from "react";
import { motion } from "framer-motion";

function SectionHeading({ title, className = "", animationDelay = 0 }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`text-center font-extrabold mb-6
        text-xl sm:text-2xl md:text-3xl lg:text-4xl 
        leading-tight tracking-wide ${className}`}
    >
      {title}
    </motion.h2>
  );
}

export default SectionHeading;
