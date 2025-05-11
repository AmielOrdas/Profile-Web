"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../Project Card/Card";
import CircleNavigation from "./CircleNavigation";
import { CardFlip } from "../wrappers/Animation";
const cardsData = [
  {
    title: "Interested in learning",
    description:
      "I am interested in learning things that makes me think.  Mathematics and programming mostly sparks my curiosity. Some topics outside mathematics and programming sparks my curiosity as well.",
    emoji: "🚀",
    interests: ["Mathematics", "Computers"],
    bgBase: "bg-red-100",
    bgBadge: "bg-red-200",
    textBadge: "text-red-800",
    textLink: "text-red-600",
    iconBg: "bg-redCustom",
    link: "",
  },
  {
    title: "Interested in mathematics",
    description:
      "I am interested in math topics related to circuits, computers, and physics.",
    emoji: "📱",
    interests: ["Discrete Mathematics", "Linear Algebra", "Calculus"],
    bgBase: "bg-purple-100",
    bgBadge: "bg-purple-200",
    textBadge: "text-purple-800",
    textLink: "text-purple-600",
    iconBg: "bg-purpleCustom",
    link: "",
  },
  {
    title: "Interested in computers",
    description:
      "I am interested in the hardware and software of computers. However, I lean towards software more than hardware.",
    emoji: "🔧",
    interests: [
      "Digital Circuits",
      "Artificial Intelligence",
      "Programming",
      "System Design",
    ],
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
    iconBg: "bg-blue-300",
    link: "",
  },
];

export default function DynamicCardDisplay() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function handleDotClick(index: number) {
    if (index === currentCardIndex) return;

    setCurrentCardIndex(index);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative w-full h-full">
        <CardFlip currentCardIndex={currentCardIndex}>
          <Card {...cardsData[currentCardIndex]} />
        </CardFlip>
      </div>

      <div className="mt-4">
        <CircleNavigation
          total={cardsData.length}
          currentIndex={currentCardIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
}
