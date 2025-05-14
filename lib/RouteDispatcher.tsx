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
    } else if (pathname === "/NextJS") {
      dispatch(showNextJS(true));
      dispatch(showProjects(true));
    } else if (pathname === "/Thesis") {
      dispatch(showThesis(true));
    }
  }, [pathname]);

  return null;
}
