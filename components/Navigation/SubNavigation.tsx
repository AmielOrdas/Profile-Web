// SubNavigation.tsx
import React from "react";
import clsx from "clsx";
import { SubNavigationProps } from "@/lib/types";

export default function SubNavigation({
  handleClickSubNavigation,
  subNavigationVisible,
  subNavigationName,
  index,
}: SubNavigationProps) {
  const marginTop = `calc(100% + ${index * 15}px)`; // 15px multiplication

  return (
    <div
      className={clsx(
        "absolute top-full mt-3 max-h-40 overflow-y-auto text-white font-jetbrains text-[11px] transition-opacity duration-500 opacity-0 group-hover/project:opacity-100 z-50 bg-transparent  "
      )}
      style={{ top: marginTop }} // Apply dynamic margin-top based on the index
    >
      <div
        className="flex space-x-1 cursor-pointer pointer-events-auto group/Next"
        onClick={handleClickSubNavigation}
      >
        <p
          className={clsx(
            "transition-all duration-500",
            subNavigationVisible
              ? "text-orangeCustom100"
              : "text-white group-hover/Next:text-orangeCustom100"
          )}
        >
          └○
        </p>

        <p
          className={clsx(
            "cursor-pointer transition-all duration-500 ",
            subNavigationVisible
              ? "text-orangeCustom100 underline"
              : "text-white group-hover/Next:text-orangeCustom100 group-hover/Next:underline"
          )}
        >
          {subNavigationName}
        </p>
      </div>
    </div>
  );
}
