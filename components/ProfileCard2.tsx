import React from "react";

function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto mt-8">
      {/* Top Blue Section */}
      <div className="bg-blue-400 h-24">
        {/* Plus Icon (Placeholder) */}
        <div className="absolute top-2 right-2 text-white text-xl">+</div>
      </div>

      {/* Profile Image (Placeholder) */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center">
          {/* You can replace this div with an img tag */}
          <span className="text-gray-600">👤</span>
        </div>
      </div>

      {/* Name and Title */}
      <div className="px-6 pt-16 pb-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Ron Lee</h2>

        <p className="text-gray-600 text-sm">
          Hello! I am Ron, UX Designer at StudioXX. I like traveling and eating with my
          friends on free times.
        </p>
      </div>

      <div className="relative w-full mb-6">
        {/* Horizontal line */}
        <div className="w-full h-px bg-gray-500"></div>

        {/* Container for text and dividers */}
        <div className="flex justify-center items-center text-xs text-black relative">
          {/* Left side text */}
          <div className="text-right w-[50%]">
            <p className="mr-2">Links & Contacts </p>
          </div>

          {/* Vertical divider */}
          <div className="h-8 border-l-2 border-gray-500"></div>

          {/* Right side text */}
          <div className="text-left w-[50%]">
            <p className="ml-2">Knowledge & Skills</p>
          </div>
        </div>
      </div>

      {/* Social Icons (Placeholders) */}
      <div className="flex justify-center py-4">
        <div className="text-gray-500 text-lg mx-2">M</div>
        <div className="text-gray-500 text-lg mx-2">f</div>
        <div className="text-gray-500 text-lg mx-2">t</div>
        <div className="text-gray-500 text-lg mx-2">in</div>
        <div className="text-gray-500 text-lg mx-2">p</div>
      </div>
    </div>
  );
}

export default ProfileCard;
