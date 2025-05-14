"use client";
import React, { useState } from "react";
import Card from "./Card";
import CircleNavigation from "./CircleNavigation";
import { CardFlip } from "../wrappers/Animation";
import { ProjectDotCardsProps } from "@/lib/types";

export default function DotCards(props: ProjectDotCardsProps) {
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
          <Card {...cardsData[currentCardIndex]} />
        </CardFlip>
      </div>

      {cardsData.length > 1 && (
        <div className="mt-4">
          <CircleNavigation
            total={cardsData.length}
            currentIndex={currentCardIndex}
            onDotClick={handleDotClick}
            bgColors={cardsData.map(function (item) {
              return item.bgBase ?? "bg-gray-800";
            })}
          />
        </div>
      )}
    </div>
  );
}
