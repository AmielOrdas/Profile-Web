"use client";
import LineWithCircle from "@/components/LineCircle";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
export default function Thesis() {
  const thesisVisible = useSelector((state: RootState) => state.thesis.isVisible);

  const dispatch = useDispatch();
  const router = useRouter();

  function handleClickThesis() {
    dispatch(showThesis(true));
    dispatch(showHome(false));
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    router.push("/Thesis");
  }

  return (
    <>
      {/* Thesis */}
      <div className="flex flex-col items-center group relative">
        <LineWithCircle
          orientation="bottom"
          height="h-2"
          width="w-[2px]"
          color="gradient-line-vertical"
          circleSize="w-2 h-2"
          circleBorder="p-[2px] gradient-border-static"
          className={clsx(
            "absolute -top-2 mb-1 mx-auto transition-opacity duration-500",
            thesisVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        />
        <p
          className={clsx(
            "cursor-pointer hover:text-orangeCustom75 hover:underline transition-all duration-500 ease-in-out mt-3",
            thesisVisible ? "text-orangeCustom100 underline" : "text-white"
          )}
          onClick={handleClickThesis}
        >
          Thesis
        </p>
      </div>
    </>
  );
}
