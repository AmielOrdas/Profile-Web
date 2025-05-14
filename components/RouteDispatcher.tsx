"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { showHome, showNextJS, showProjects, showThesis } from "@/lib/redux/slice";

export default function RouteDispatcher() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/") {
      dispatch(showHome(true));
      dispatch(showNextJS(false));
      dispatch(showProjects(false));
      dispatch(showThesis(false));
    } else if (pathname === "/NextJS") {
      dispatch(showNextJS(true));
      dispatch(showHome(false));
      dispatch(showProjects(true));
      dispatch(showThesis(false));
    } else if (pathname === "/Thesis") {
      dispatch(showThesis(true));
      dispatch(showNextJS(false));
      dispatch(showProjects(false));
      dispatch(showHome(false));
    }
  }, [pathname]);

  return null;
}
