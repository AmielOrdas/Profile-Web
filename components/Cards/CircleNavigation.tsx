import React from "react";

type CircleNavigationProps = {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  bgColors: string[];
};

export default function CircleNavigation(props: CircleNavigationProps) {
  const { total, currentIndex, onDotClick, bgColors } = props;

  if (total <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: total }).map(function (_, index) {
        const isActive = index === currentIndex;
        const color = bgColors[index] || "bg-gray-400";

        return (
          <button
            key={index}
            onClick={function () {
              onDotClick(index);
            }}
            className={`h-10 w-10 sm:w-3 sm:h-3 rounded-full ${color} transition-transform duration-300 ${
              isActive ? "ring-2 ring-offset-2 scale-100" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
