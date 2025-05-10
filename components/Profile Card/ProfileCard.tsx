"use client";
import React from "react";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import LinksAndContacts from "./LinksAndContacts";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export function ProfileCard() {
  const showQualifications = useSelector(
    (state: RootState) => state.qualifications.isVisible
  );
  const showSkills = useSelector((state: RootState) => state.skills.isVisible);
  const showLinksAndContacts = useSelector(
    (state: RootState) => state.linksAndContacts.isVisible
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm mx-auto mt-8">
      {/* Top Orange Section */}
      <div className="bg-orangeCustom75 h-30">
        {/* Plus Icon (Placeholder) */}
        <div className="absolute text-black text-xl">+</div>
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
      {showQualifications && <Qualifications />}
      {showSkills && <Skills />}
      {showLinksAndContacts && <LinksAndContacts />}
    </div>
  );
}

export default ProfileCard;
