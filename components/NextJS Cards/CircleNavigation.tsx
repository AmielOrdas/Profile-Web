import React from "react";

interface CircleNavigationProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function CircleNavigation(props: CircleNavigationProps) {
  const { total, currentIndex, onDotClick } = props;

  if (total <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: total }).map(function (_, index) {
        return (
          <button
            key={index}
            onClick={function () {
              onDotClick(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            } transition-colors duration-300`}
          />
        );
      })}
    </div>
  );
}
