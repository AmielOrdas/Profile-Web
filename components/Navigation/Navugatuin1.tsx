import Home from "./Navlinks/Home";
import Projects from "./Navlinks/Projects";

import Thesis from "./Navlinks/Thesis";
export default function NavigationText() {
  return (
    <div className="relative w-full mb-4 flex flex-col items-center">
      {/* Horizontal line */}

      {/* Items with vertical line attached to horizontal line */}
      <div className="flex justify-center gap-10 text-xs font-jetbrains font-semibold text-black overflow-visible">
        {/* Projects */}
        {/* <Projects /> */}
        <Projects />
        <Home />
        <Thesis />
        {/* Navigation Text FIXED at the same spot as the bottom bracket */}
        <div className="fixed top-[calc(65%+40px)] left-1/2 transform -translate-x-1/2 z-50">
          <NavigationText />
        </div>
      </div>
    </div>
  );
}
