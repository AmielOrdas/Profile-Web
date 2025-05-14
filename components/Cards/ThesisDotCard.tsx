"use client";
import React, { useState } from "react";
import ThesisCard from "./ThesisCard";
import CircleNavigation from "./CircleNavigation";
import { CardFlip } from "../wrappers/Animation";
import { ThesisDotCardsProps } from "@/lib/types";

export default function ThesisDotCards(props: ThesisDotCardsProps) {
  const { cardsData = [] } = props;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function handleDotClick(index: number) {
    if (index === currentCardIndex) return;
    setCurrentCardIndex(index);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <CardFlip currentCardIndex={currentCardIndex}>
          <ThesisCard {...cardsData[currentCardIndex]} />
        </CardFlip>
      </div>

      {cardsData.length > 1 && (
        <div className="mt-4">
          <CircleNavigation
            total={cardsData.length}
            currentIndex={currentCardIndex}
            onDotClick={handleDotClick}
            bgColors={cardsData.map((item) => {
              return item.bgBase ?? "bg-gray-700";
            })}
          />
        </div>
      )}
    </div>
  );
}
