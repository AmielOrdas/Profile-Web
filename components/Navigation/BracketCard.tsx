"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import Icon from "../Icon";
import Achievements from "./Achievements";
import Background from "@/public/Circuit.svg";
export default function BracketCard() {
  const [LineCircleAnimationDone, setLineCircleAnimationDone] = useState(false); // State to track animation completion
  const [bracketAnimationDone, setBracketAnimationDone] = useState(false);

  // When the animation ends, set LineCircleAnimationDone to true
  useEffect(() => {
    const LinerCircletimer = setTimeout(() => {
      setLineCircleAnimationDone(true);
    }, 1100); // 1000ms = 1 second duration of the animation (adjust this as needed)
    const bracketAnimation = setTimeout(() => {
      setBracketAnimationDone(true);
    }, 2100);
    return () => {
      clearTimeout(LinerCircletimer);
      clearTimeout(bracketAnimation);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
    >
      {/* Horizontal Line - Orange (Left Side) */}
      <motion.div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: "50%" }} // Animate the width to 50% to converge towards the icon
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className=" h-[1px] bg-orange-500 w-full gradient-line-horizontal-to-right" />
      </motion.div>

      {/* Horizontal Line - Red (Right Side) */}
      <motion.div
        className=" absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: "50%" }} // Animate the width to 50% to converge towards the icon
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="h-[1px] bg-red-700 w-full gradient-line-horizontal-to-left" />
      </motion.div>
      {!bracketAnimationDone && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Icon rotate={true} size={100} repeat={0} duration={1.3} ease="easeInOut" />
        </div>
      )}

      {/* Conditionally render the content after animation */}
      {LineCircleAnimationDone && (
        <motion.div
          className="flex items-center justify-center min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="flex flex-col justify-center items-center relative px-7 mx-auto w-fit bg-black">
            <div className="absolute top-[-105px] left-1/2 transform -translate-x-1/2">
              <Icon rotate={false} size={100} />
            </div>
            {/*Upper bracket */}
            <div className="w-50 sm:w-170 h-10 border-l border-r border-t gradient-border-left mb-[-10px]">
              <Achievements />
            </div>

            <div className="text-center text-white text-lg sm:text-6xl px-2 font-[1000]">
              Amiel Mir O. Ordas
            </div>
            {/*Lower bracket */}
            <div className="w-50 sm:w-170  h-10 border-l border-r border-b gradient-border-left mt-[-10px]" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
