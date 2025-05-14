"use client";
import ThesisDotCards from "@/components/Cards/ThesisDotCard";
import { showNextJS, showProjects, showHome, showThesis } from "@/lib/redux/slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import HardwareImage from "@/public/Picture3-removebg-preview.png";

import {
  IntroductionCardsData,
  MethodologyData,
  resultsCardData,
} from "@/lib/data/Thesis";

export default function page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showNextJS(false));
    dispatch(showProjects(false));
    dispatch(showHome(false));
    dispatch(showThesis(true));
  }, []);

  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center py-20 space-y-5">
      <h1 className="font-jetbrains text-white text-3xl">Introduction</h1>
      <ThesisDotCards cardsData={IntroductionCardsData} />
      <h1 className="font-jetbrains text-white text-3xl">Methodology</h1>
      <ThesisDotCards cardsData={MethodologyData} />
      <h1 className="font-jetbrains text-white text-3xl">Results and ACM Link</h1>
      <ThesisDotCards cardsData={resultsCardData} />
      <h1 className="font-jetbrains text-white text-3xl">Prototype Image</h1>
      <Image src={HardwareImage} alt="" />
    </div>
  );
}
