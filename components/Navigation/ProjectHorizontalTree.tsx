import { showHome, showProjects, showThesis } from "@/lib/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/lib/redux/store";

export default function Projects() {
  const projectsVisible = useSelector((state: RootState) => state.projects.isVisible);
  const dispatch = useDispatch();

  function handleClickProjects() {
    dispatch(showProjects(true));
    dispatch(showHome(false));
    dispatch(showThesis(false));
  }

  return (
    <div className="flex flex-col items-center group/project">
      {/* Parent Node - Projects */}
      <div
        className="text-black font-medium mb-4 cursor-pointer"
        onClick={handleClickProjects}
      >
        Projects
      </div>

      {/* Horizontal Connecting Line */}
      <div className="flex justify-center w-full mb-4">
        <div className="bg-white h-2 w-full rounded-full"></div>
      </div>

      {/* Vertical Connecting Lines */}
      <div className="flex justify-around w-full items-start mb-4">
        <div className="bg-white w-2 h-8 rounded-full"></div>
        <div className="bg-white w-2 h-8 rounded-full"></div>
      </div>

      {/* Child Nodes - C and NextJS */}
      <div className="flex justify-around w-full mt-[-1rem]">
        {/* C Node */}
        <div className="text-white text-sm font-medium">C</div>

        {/* NextJS Node */}
        <div className="text-white text-sm font-medium">NextJS</div>
      </div>
    </div>
  );
}
