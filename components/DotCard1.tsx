"use client";
import React, { useState } from "react";
import Card from "./Project Card/Card";
import CircleNavigation from "./CircleNavigation";
import { CardFlip } from "./wrappers/Animation";

interface CardData {
  title?: string;
  description?: string;
  emoji?: string;
  interests?: string[];
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
  link?: string;
}

interface DynamicCardDisplayProps {
  cardsData?: CardData[];
}

export default function DynamicCardDisplay(props: DynamicCardDisplayProps) {
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
          />
        </div>
      )}
    </div>
  );
}
