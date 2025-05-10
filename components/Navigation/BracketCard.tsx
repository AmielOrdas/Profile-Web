"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/MyLogo.png";
import NavigationLinks from "./Achievements";
import NavigationText from "./NavigationText";

export default function BracketCard() {
  return (
    <>
      <div className="absolute top-[65%] left-0 w-full flex items-center justify-between pointer-events-none">
        {/* Left Line - Orange */}
        <div className="h-[1px] bg-orange-500 w-[calc(50%-140px)] gradient-line-horizontal-to-right" />

        {/* Right Line - Red */}
        <div className="h-[1px] bg-red-700 w-[calc(50%-140px)] gradient-line-horizontal-to-right" />
      </div>

      {/* Centered content with brackets */}
      <div className="flex flex-col justify-center items-center relative px-7 mx-auto w-fit bg-black">
        <div className="absolute top-[-75px] left-1/2 transform -translate-x-1/2">
          <Image src={Logo} alt="Logo" width={70} />
        </div>

        {/* Top Bracket */}
        <div className="w-100 h-10 border-l border-r border-t gradient-border-left mb-[-10px]">
          <NavigationLinks />
        </div>

        {/* Top bracket + nav container */}

        {/* Content */}
        <div className="text-center text-white  text-3xl px-2 font-[1000]">
          Amiel Mir O. Ordas
        </div>

        {/* Bottom Bracket */}
        <div className="w-100 h-10 border-l border-r border-b gradient-border-left  mt-[-10px]" />
        <NavigationText />
      </div>
    </>
  );
}
