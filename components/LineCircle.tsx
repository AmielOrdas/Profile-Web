import React from "react";

type Orientation = "top" | "bottom" | "left" | "right";

type LineWithCircleProps = {
  orientation?: Orientation;
  height?: string; // Tailwind height class
  width?: string; // Tailwind width class
  color?: string; // Tailwind background color
  circleSize?: string; // Tailwind width/height for the circle
  circleBorder?: string; // Tailwind border class for the circle
  circleInnerBackground?: string;
  className?: string; // Additional utility classes
};
// Note: "Positioning (absolute/relative/etc.) should be applied via the className prop externally."

export default function LineCircle({
  orientation = "top",
  height = "h-12",
  width = "w-[2px]",
  color = "bg-red-700",
  circleSize = "w-3 h-3",
  circleBorder = "p-[2px] gradient-border-static",
  circleInnerBackground = "bg-black",
  className = "",
}: LineWithCircleProps) {
  const isVertical = orientation === "top" || orientation === "bottom";

  return (
    <div
      className={`flex items-center justify-center ${
        isVertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {(orientation === "top" || orientation === "left") && (
        <div className={`${circleBorder} rounded-full ${circleSize}`}>
          <div className={`${circleInnerBackground} w-full h-full rounded-full `} />
        </div>
      )}

      <div className={`${height} ${width} ${color} ${isVertical ? "" : "mx-1 "}`} />

      {(orientation === "bottom" || orientation === "right") && (
        <div className={`${circleBorder} rounded-full ${circleSize} `}>
          <div className={`${circleInnerBackground} w-full h-full rounded-full `} />
        </div>
      )}
    </div>
  );
}
