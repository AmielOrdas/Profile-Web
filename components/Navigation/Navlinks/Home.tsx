"use client";
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
      <div className="flex flex-col items-center group">
        {/* Upper vertical line */}
        <div
          className={clsx(
            "w-[1px] h-4 bg-black mb-1 transition-opacity duration-500 gradient-line-vertical",
            homeVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100 "
          )}
        />

        {/* Home Text */}
        <p
          className={clsx(
            "cursor-pointer group-hover:text-orangeCustom75 group-hover:underline transition-all duration-500 ease-in-out",
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
