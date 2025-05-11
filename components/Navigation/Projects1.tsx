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
    <div className="flex flex-col items-center group">
      <div
        className={clsx(
          "w-[1px] h-4 bg-white mb-1 mx-auto transition-opacity duration-500 group-hover:opacity-100 gradient-line-vertical",
          projectsVisible ? "opacity-100 gradient-line-vertical" : "opacity-0"
        )}
      />

      {/* Projects Text and Sub-Items */}
      <div className="flex flex-col space-y-1 items-center mx-auto">
        <p
          className={clsx(
            "cursor-pointer hover:text-orangeCustom75 hover:underline transition-all duration-500 ease-in-out",
            projectsVisible ? "text-orangeCustom75 underline" : "text-white"
          )}
          onClick={handleClickProjects}
        >
          Projects
        </p>

        {/* Sub-navigation - visible on hover OR when clicked */}
        <div
          className={clsx(
            "flex flex-col items-center font-jetbrains text-[10px] w-16 pl-2 transition-opacity duration-300 group/projects",
            projectsVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          <div className="flex space-x-1 cursor-pointer  group/C">
            <p className="text-white group-hover/C:text-orangeCustom75">└</p>
            <p className="text-white group-hover/C:underline group-hover/C:text-orangeCustom75">
              C
            </p>
          </div>

          <div className="group flex space-x-1 cursor-pointer pl-8 group/Next">
            <p className="text-white group-hover/Next:text-orangeCustom75">└</p>
            <p className="text-white group-hover/Next:text-orangeCustom75 group-hover/Next:underline">
              NextJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
