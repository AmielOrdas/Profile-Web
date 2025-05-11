import Home from "./Navlinks/Home";
import Projects from "./Navlinks/Projects";

import Thesis from "./Navlinks/Thesis";
export default function NavigationText() {
  return (
    <div className=" w-full  flex flex-col items-center bg-grayCustom">
      {/* Horizontal line */}

      {/* Items with vertical line attached to horizontal line */}
      <div className="flex justify-center gap-10 text-xs font-jetbrains font-semibold text-black overflow-visible">
        <Projects />
        <Home />
        <Thesis />
      </div>
    </div>
  );
}
