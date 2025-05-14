"use client";
import LineWithCircle from "@/components/LineCircle";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const homeVisible = useSelector((state: RootState) => state.home.isVisible);

  const dispatch = useDispatch();
  const router = useRouter();
  function handleClickHome() {
    dispatch(showHome(true));
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    dispatch(showThesis(false));
    router.push("/");
  }

  return (
    <>
      {/* Home */}
      <div className="flex flex-col items-center group relative pointer-events-none">
        {/* Upper vertical line */}

        <LineWithCircle
          orientation="bottom"
          height="h-2"
          width="w-[2px]"
          color="gradient-line-vertical"
          circleSize="w-2 h-2"
          circleBorder="p-[2px] gradient-border-static"
          circleInnerBackground="bg-grayCustom"
          className={clsx(
            "absolute -top-2 mb-1 mx-auto transition-opacity duration-500 pointer-events-none",
            homeVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100 "
          )}
        />

        {/* Home Text */}
        <p
          className={clsx(
            "cursor-pointer group-hover:text-orangeCustom75 group-hover:underline transition-all duration-500 ease-in-out mt-2 pointer-events-auto",
            homeVisible ? "text-orangeCustom100 underline" : "text-white"
          )}
          onClick={handleClickHome}
        >
          Home
        </p>
      </div>
    </>
  );
}
