"use client";
import React, { useEffect } from "react";
import DotCards from "@/components/Cards/DotCards";
import { showNextJS, showHome, showProjects, showThesis } from "@/lib/redux/slice";
import { useDispatch } from "react-redux";
import { cardsData } from "@/lib/data/NextJS";

export default function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showNextJS(true));
    dispatch(showProjects(true));
    dispatch(showHome(false));
    dispatch(showThesis(false));
  }, []);

  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center pt-20 space-y-10">
      <DotCards cardsData={cardsData} />
    </div>
  );
}
