"use client";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";

export default function Projects() {
  const projectsVisible = useSelector((state: RootState) => state.projects.isVisible);
  const nextJSVisible = useSelector((state: RootState) => state.projects.nextJSVisible);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleClickNextJS() {
    dispatch(showProjects(true));
    dispatch(showNextJS(true));
    dispatch(showHome(false));
    dispatch(showThesis(false));
    router.push("/NextJS");
  }

  return (
    <div className="flex flex-col items-center group/project">
      {/* Vertical line - shows on hover or if clicked */}
      <div
        className={clsx(
          "w-[1px] h-4 bg-white mb-1 mx-auto transition-opacity duration-500 gradient-line-vertical",
          projectsVisible
            ? "opacity-100 "
            : "opacity-0 group-hover/project:opacity-100 group-hover/project:gradient-line-vertical"
        )}
      />

      {/* Projects text & sub-navigation */}
      <div className="flex flex-col space-y-1 items-center mx-auto">
        <p
          className={clsx(
            "cursor-pointer hover:text-orangeCustom75 hover:underline transition-all duration-500 ease-in-out",
            projectsVisible ? "text-orangeCustom100 underline" : "text-white"
          )}
        >
          Projects
        </p>

        {/* Sub-navigation: only shows when hovered */}
        <div
          className={clsx(
            "flex flex-col items-center font-jetbrains text-[10px] w-16 pl-2 transition-opacity duration-500 opacity-0 group-hover/project:opacity-100"
          )}
        >
          <div
            className="flex space-x-1 cursor-pointer pl-8 group/Next"
            onClick={handleClickNextJS}
          >
            <p
              className={clsx(
                " transition-all duration-500",
                nextJSVisible
                  ? "text-orangeCustom100"
                  : "text-white group-hover/Next:text-orangeCustom100"
              )}
            >
              └
            </p>

            <p
              className={clsx(
                "cursor-pointer transition-all duration-500",
                nextJSVisible
                  ? "text-orangeCustom100 underline"
                  : "text-white group-hover/Next:text-orangeCustom100 group-hover/Next:underline"
              )}
            >
              NextJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
