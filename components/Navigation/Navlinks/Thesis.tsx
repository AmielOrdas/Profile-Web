"use client";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
export default function Thesis() {
  const dispatch = useDispatch();

  function handleClickThesis() {
    dispatch(showThesis(true));
    dispatch(showHome(false));
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    dispatch(showThesis(true));
  }

  const thesisVisible = useSelector((state: RootState) => state.thesis.isVisible);
  return (
    <>
      {/* Thesis */}
      <div className="flex flex-col items-center group">
        <div
          className={clsx(
            "w-[1px] h-1 bg-black mb-1 transition-opacity duration-200 gradient-line-vertical",
            thesisVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        />
        <p
          className={clsx(
            "cursor-pointer hover:text-orangeCustom75 hover:underline",
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
