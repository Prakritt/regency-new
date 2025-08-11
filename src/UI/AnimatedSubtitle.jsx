import { motion } from "framer-motion";

function AnimatedSubtitle({ children, animationDelay = 0.6 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="text-center text-gray-600 max-w-xl mx-auto
                 text-sm sm:text-base md:text-lg
                 mb-6 md:mb-8
                 px-4"
      style={{ lineHeight: 1.6 }}
    >
      {children}
    </motion.p>
  );
}

export default AnimatedSubtitle;
