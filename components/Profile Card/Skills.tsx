"use client";

export default function Skills() {
  const skillsArray = ["React", "Zod"];

  return (
    <div className="mt-4 text-sm text-black text-center">
      <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
        {skillsArray.map((skill, index) => (
          <span
            key={index}
            className="bg-orangeCustomLow text-orangeCustom100 text-xs font-[1000] rounded-full px-2 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
