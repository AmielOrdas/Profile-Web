"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon";
import Achievements from "./Achievements";
import Background from "@/public/Circuit.svg";

export default function BracketCard() {
  const [animationDone, setAnimationDone] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  // After a short delay, trigger icon exit
  useEffect(function () {
    const timer = setTimeout(function () {
      setShowIcon(false); // Triggers exit animation
    }, 1500); // After lines animate
    return function () {
      clearTimeout(timer);
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
        animate={{ width: "50%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="h-[1px] bg-orange-500 w-full gradient-line-horizontal-to-right" />
      </motion.div>

      {/* Horizontal Line - Red (Right Side) */}
      <motion.div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none"
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="h-[1px] bg-red-700 w-full gradient-line-horizontal-to-left" />
      </motion.div>

      {/* Icon Entrance + Exit */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setAnimationDone(true); // Trigger content reveal after icon exits
        }}
      >
        {showIcon && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Icon rotate={true} size={100} repeat={0} duration={1.3} ease="easeInOut" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content appears after icon animation completes */}
      {animationDone && (
        <motion.div
          className="flex items-center justify-center min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          <div className="flex flex-col justify-center items-center relative px-7 mx-auto w-fit bg-black">
            <div className="absolute top-[-105px] left-1/2 transform -translate-x-1/2">
              <Icon rotate={false} size={100} />
            </div>

            {/* Upper bracket */}
            <div className="w-170 h-10 border-l border-r border-t gradient-border-left mb-[-10px]">
              <Achievements />
            </div>

            <div className="text-center text-white text-6xl px-2 font-[1000]">
              Amiel Mir O. Ordas
            </div>

            {/* Lower bracket */}
            <div className="w-170 h-10 border-l border-r border-b gradient-border-left mt-[-10px]" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
