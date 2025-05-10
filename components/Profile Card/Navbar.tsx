"use client";

import { showQualifications, showSkills, showLinksAndContacts } from "@/lib/redux/slice";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();

  function handleClickQualifications() {
    dispatch(showQualifications(true));
    dispatch(showSkills(false));
    dispatch(showLinksAndContacts(false));
  }

  function handleClickSkills() {
    dispatch(showSkills(true));
    dispatch(showLinksAndContacts(false));
    dispatch(showQualifications(false));
  }

  function handleClickLinksAndContacts() {
    dispatch(showLinksAndContacts(true));
    dispatch(showSkills(false));
    dispatch(showQualifications(false));
  }

  return (
    <div className="relative w-full mb-4">
      {/* Horizontal line */}
      <div className="w-full h-[1px] gradient-line-horizontal"></div>

      {/* Container for text and dividers */}
      <div className="flex justify-center items-center text-xs font-jetbrains font-semibold text-black relative ">
        {/* Left side text */}
        <div className="flex-1 text-right">
          <p
            className="mr-3 hover:text-orangeCustom75 
            hover:underline"
          >
            Qualifications
          </p>
        </div>
        {/* Vertical divider */}
        <div className="w-[1px] h-8 gradient-line-vertical"></div>
        {/* Right side text */}
        <div className="text-center">
          <p className="px-2 hover:text-orangeCustom75 hover:underline">Skills</p>
        </div>
        {/* Vertical divider */}
        <div className="w-[1px] h-8 gradient-line-vertical"></div>
        {/* Right side text */}
        <div className="flex-1 text-left">
          <p className="ml-2 text-left hover:text-orangeCustom75 hover:underline">
            Links & Contacts
          </p>
        </div>
      </div>
    </div>
  );
}
