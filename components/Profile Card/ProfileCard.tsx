"use client";
import React from "react";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import LinksAndContacts from "./LinksAndContacts";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { AnimatePresence } from "framer-motion";

import { SlideLeftRightAnimation, RotateAnimation } from "../wrappers/Animation";

import Logo from "@/public/MyLogo.png";
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
    <div className="bg-white rounded-3xl shadow-lg overflow-visible max-w-sm min-h-[470px] mx-auto relative">
      {/* Top Orange Section */}
      <div className="bg-orangeCustom75 h-30 rounded-t-3xl">
        {/* Plus Icon (Placeholder) */}

        <div className="absolute top-[-20px] right-[-30px] ">
          <RotateAnimation>
            <Image src={Logo} alt="Logo" width={70} className="object-contain" />
          </RotateAnimation>
        </div>
      </div>

      {/* Profile Image (Placeholder) */}
      <div className="relative mt-5">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center">
          {/* You can replace this div with an img tag */}
          <span className="text-gray-600">👤</span>
        </div>
      </div>

      {/* Name and Title */}
      <div className="px-6 pt-16 pb-4 text-justify">
        <h2 className="text-center text-xl font-jetbrains font-[1000] ">
          Amiel Mir O. Ordas
        </h2>
        <p className="text-gray-600 text-xs mt-2">
          I'm Amiel, a computer engineer working towards becoming a software engineer. I
          love learning, programming, mathematics, and solving real problems.
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
