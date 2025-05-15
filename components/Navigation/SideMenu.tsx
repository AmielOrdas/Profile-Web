"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";
import Link from "next/link";

import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export default function SideMenu() {
  const homeVisible = useSelector((state: RootState) => state.home.isVisible);

  const nextJSVisible = useSelector((state: RootState) => state.projects.nextJSVisible);
  const thesisVisible = useSelector((state: RootState) => state.thesis.isVisible);

  const dispatch = useDispatch();

  function handleClickHome() {
    dispatch(showHome(true));
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    dispatch(showThesis(false));
  }
  function handleClickNextJS() {
    dispatch(showHome(false));
    dispatch(showNextJS(true));
    dispatch(showProjects(true));
    dispatch(showThesis(false));
  }
  function handleClickThesis() {
    dispatch(showHome(false));
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    dispatch(showThesis(true));
  }

  return (
    <Sheet>
      <SheetTrigger className="block pr-3 sm:hidden">
        <CiMenuBurger className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-grayCustom flex flex-col text-[11px] sm:text-xs font-jetbrains font-semibold text-white space-x-2">
        <SheetHeader className="bg-custom-gradient text-center">
          <SheetTitle className="text-gray-900 text-[8px] sm:text-[11px]">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="ml-2 flex flex-col space-y-2 w-1/2">
          <Link
            href="/"
            className={clsx(
              "w-fit",
              homeVisible ? "text-orangeCustom100 underline" : "text-white "
            )}
            onClick={handleClickHome}
          >
            Home
          </Link>
          <Link
            href="/Thesis"
            className={clsx(
              "w-fit",
              thesisVisible ? "text-orangeCustom100 underline" : "text-white"
            )}
            onClick={handleClickThesis}
          >
            Thesis
          </Link>

          <h1>Projects</h1>
          <div className="flex  sm:space-x-1 sm:items-center sm:justify-center">
            <h1 className="">└○</h1>
            <Link
              href="/NextJS"
              className={clsx(
                "w-fit sm:ml-0",
                nextJSVisible ? "text-orangeCustom100 underline" : "text-white "
              )}
              onClick={handleClickNextJS}
            >
              NextJS
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
