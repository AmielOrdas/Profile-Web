import React from "react";
import Home from "./Navlinks/Home";
import Projects from "./Navlinks/Projects";
import Thesis from "./Navlinks/Thesis";

export default function NavigationArea() {
  return (
    <div className="w-full flex flex row justify-between items-center bg-grayCustom fixed top-0 left-0 z-50 shadow-md pr-10">
      <h1 className="text-xs font-jetbrains font-semibold text-white ml-10">
        Amiel Mir O. Ordas
      </h1>
      <div className="flex justify-center  gap-10 text-xs font-jetbrains font-semibold text-white">
        <Projects />
        <Home />
        <Thesis />
      </div>
    </div>
  );
}
