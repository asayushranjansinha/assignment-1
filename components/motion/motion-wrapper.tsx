"use client";
import React from "react";
import { motion } from "framer-motion";
interface MotionProps {
  children: React.ReactNode;
}
const MotionWrapper: React.FC<MotionProps> = ({ children, ...props }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
