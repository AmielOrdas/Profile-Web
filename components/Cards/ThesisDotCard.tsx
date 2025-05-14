"use client";
import React, { useState } from "react";
import ThesisCard from "./ThesisCard";
import CircleNavigation from "./CircleNavigation";
import { CardFlip } from "../wrappers/Animation";

interface CardData {
  title?: string;
  description?: string;
  emoji?: string | React.ReactNode[] | React.ReactNode;
  interests?: string[];
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
  link?: string;
  generalCategory?: string;
  icons?: {
    icon: React.ReactNode | string;
    url?: string;
  }[];
}

interface DotCardsProps {
  cardsData?: CardData[];
  bgBase?: string;
}

export default function ThesisDotCards(props: DotCardsProps) {
  const { cardsData = [], bgBase = "bg-gray-700" } = props;
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
              return item.bgBase ?? "bg-gray-800";
            })}
          />
        </div>
      )}
    </div>
  );
}
