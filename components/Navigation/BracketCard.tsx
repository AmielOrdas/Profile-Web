"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/MyLogo.png";

import Achievements from "./Achievements";

export default function BracketCard() {
  return (
    <div className="bg-black relative min-h-screen">
      {/* Horizontal Line - Orange (Left Side) */}
      <div className="absolute top-1/2 left-0 right-1/2 transform -translate-y-1/2 pointer-events-none">
        <div className="h-[1px] bg-orange-500 w-full gradient-line-horizontal-to-right" />
      </div>

      {/* Horizontal Line - Red (Right Side) */}
      <div className="absolute top-1/2 left-1/2 right-0 transform -translate-y-1/2 pointer-events-none">
        <div className="h-[1px] bg-red-700 w-full gradient-line-horizontal-to-right" />
      </div>

      {/* Centered Bracket Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center relative px-7 mx-auto w-fit bg-black">
          <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
            <Image src={Logo} alt="Logo" width={100} />
          </div>

          <div className="w-170 h-10 border-l border-r border-t gradient-border-left mb-[-10px]">
            <Achievements />
          </div>

          <div className="text-center text-white text-6xl px-2 font-[1000]">
            Amiel Mir O. Ordas
          </div>

          <div className="w-170 h-10 border-l border-r border-b gradient-border-left mt-[-10px]" />
        </div>
      </div>
    </div>
  );
}
