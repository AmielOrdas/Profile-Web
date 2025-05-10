import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function SlideLeftRightAnimation(props: Props) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -70, opacity: 0 }}
      transition={{ duration: 0.4, ease: "anticipate" }}
    >
      {props.children}
    </motion.div>
  );
}
