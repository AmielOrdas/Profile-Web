"use client";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import SubNavigation from "../SubNavigation";
import LineWithCircle from "@/components/LineCircle";

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
    <div className="flex flex-col items-center group/project relative">
      <LineWithCircle
        orientation="bottom"
        height="h-2"
        width="w-[2px]"
        color="gradient-line-vertical"
        circleSize="w-2 h-2"
        circleBorder="p-[2px] gradient-border-static"
        circleInnerBackground="bg-grayCustom"
        className={clsx(
          "absolute -top-2 mb-1 mx-auto transition-opacity duration-500 ",
          projectsVisible ? "opacity-100" : "opacity-0 group-hover/project:opacity-100"
        )}
      />

      {/* Projects text & sub-navigation */}
      <div className="flex flex-col space-y-1 items-center mx-auto">
        <p
          className={clsx(
            "cursor-pointer hover:text-orangeCustom75 hover:underline transition-all duration-500 ease-in-out mt-2 ",
            projectsVisible ? "text-orangeCustom100 underline" : "text-white"
          )}
        >
          Projects
        </p>
        <div className="flex flex-col relative">
          <SubNavigation
            handleClickSubNavigation={handleClickNextJS}
            subNavigationVisible={nextJSVisible}
            subNavigationName={"NextJS/React"}
            index={0}
          />
        </div>
      </div>
    </div>
  );
}
