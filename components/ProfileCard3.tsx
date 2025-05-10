import React from "react";

function Card() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-md relative">
      {/* Custom Orange Top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-orange-400 rounded-t-xl"></div>

      <div className="p-6 relative">
        {/* Black Circle */}
        {/* Profile Image (Placeholder) */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12 w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center">
            {/* You can replace this div with an img tag */}
            <span className="text-gray-600">👤</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-32 mb-4 text-center">TITLE</h2>

        {/* Line below the title */}
        <div className="w-full h-px bg-gray-500 mb-4"></div>

        {/* Welcome Contacts Skills */}
        <div className="flex justify-around items-center mb-4 text-sm text-white">
          <div className="border-r border-white pr-2">Welcome</div>
          <div className="border-r border-white px-2">Contacts / Links</div>
          <div className="pl-2">Skills</div>
        </div>

        <p className="text-gray-200 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer.
        </p>
      </div>
    </div>
  );
}

export default Card;
