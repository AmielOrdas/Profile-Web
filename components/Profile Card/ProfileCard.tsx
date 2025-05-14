"use client";
import React from "react";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import LinksAndContacts from "./LinksAndContacts";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import { SlideLeftRightAnimation } from "../wrappers/Animation";

import GradPic from "@/public/GradPic.png";
import Image from "next/image";

export function ProfileCard() {
  const qualificationsVisible = useSelector(
    (state: RootState) => state.qualifications.isVisible
  );
  const skillsVisible = useSelector((state: RootState) => state.skills.isVisible);
  const LinksAndContactsVisible = useSelector(
    (state: RootState) => state.linksAndContacts.isVisible
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-visible max-w-sm min-h-[500px] mx-auto relative">
      {/* Top Orange Section */}
      <div className="bg-orangeCustom75 h-25 rounded-t-3xl">
        <div className="absolute top-[-20px] right-[-30px] ">
          <Icon rotate={true} size={90} />
        </div>
      </div>

      {/* Profile Image (Placeholder) */}
      {/* <div className="relative mt-5">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-20 w-60 h-60 rounded-full border-4 border-white bg-transparent flex items-center justify-center overflow-hidden">
         
          <Image src={GradPic} alt="" width={150} height={150} className="object-cover" />
        </div>
      </div> */}

      <div className="relative mt-5">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 w-40 h-40 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center">
          {/* You can replace this div with an img tag */}
          <Image src={GradPic} alt="" width={250} height={250} className="object-cover" />
        </div>
      </div>

      {/* Name and Title */}
      <div className="px-6 pt-30 pb-4 text-justify">
        <h2 className="text-center text-xl font-jetbrains font-[1000] ">
          Amiel Mir O. Ordas
        </h2>
        <p className="text-gray-600 text-xs mt-2">
          I'm Amiel, a recent graduate in computer engineering working towards becoming a
          software engineer. I love learning, programming, mathematics, and solving real
          problems.
        </p>
      </div>

      <Navbar />
      <AnimatePresence mode="wait">
        {qualificationsVisible && (
          <SlideLeftRightAnimation key="qualifications">
            <Qualifications />
          </SlideLeftRightAnimation>
        )}
        {skillsVisible && (
          <SlideLeftRightAnimation key="skills">
            <Skills />
          </SlideLeftRightAnimation>
        )}
        {LinksAndContactsVisible && (
          <SlideLeftRightAnimation key="LinksAndContacts">
            <LinksAndContacts />
          </SlideLeftRightAnimation>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProfileCard;
