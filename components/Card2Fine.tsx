import React from "react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  frontend?: string[];
  backend?: string[];
  database?: string[];
  utilities?: string[];
  emoji?: string;
  link?: string;
  icons?: React.ReactNode[];
  colorTheme?: string; // e.g., "purple", "lime", etc.
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    title = "Project Title",
    description = "This is a sample project that showcases how to structure and display technology stacks in a portfolio.",
    frontend = ["React", "TailwindCSS"],
    backend = ["Next.js", "Node.js"],
    database = ["PostgreSQL"],
    utilities = ["Redux", "Framer Motion", "Zod"],
    emoji = "🚀",
    link = "#",
    colorTheme = "purple",
    icons = new Array(15).fill(null).map(function (_, index) {
      return (
        <div
          key={index}
          className={`w-10 h-10 bg-${colorTheme}-300 rounded-full flex items-center justify-center`}
        >
          <span className="text-white text-sm">?</span>
        </div>
      );
    }),
  } = props;

  function renderTechGroup(groupTitle: string, techs: string[]) {
    if (techs.length === 0) {
      return null;
    }

    return (
      <div className="flex mb-2">
        <p className="text-sm font-semibold text-gray-700 mb-1">{groupTitle}:</p>
        <div className="flex flex-wrap gap-2 ml-1">
          {techs.map(function (tech, index) {
            return (
              <span
                key={index}
                className={`bg-${colorTheme}-200 text-${colorTheme}-800 text-xs font-semibold rounded-full px-2 py-1`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-${colorTheme}-100 rounded-xl overflow-hidden shadow-md max-w-2xl p-6`}
    >
      {/* Icons Row */}
      <div className="w-full flex flex-wrap gap-3 mb-4">
        {icons.map(function (icon, index) {
          return (
            <div
              key={index}
              className={`w-10 h-10 bg-${colorTheme}-300 rounded-full flex items-center justify-center`}
            >
              {icon}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row">
        {/* Left Side */}
        <div className="w-[60%] pr-4">
          <div className="w-[90%] flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 text-justify">{description}</p>

            {renderTechGroup("Frontend", frontend)}
            {renderTechGroup("Backend", backend)}
            {renderTechGroup("Database", database)}
            {renderTechGroup("Utilities", utilities)}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${colorTheme}-600 font-semibold hover:underline`}
              >
                View Project <span className="text-gray-500 text-sm">&#8594;</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[40%] flex items-center justify-center relative">
          <div
            className={`w-50 h-50 bg-${colorTheme}-200 rounded-full absolute opacity-50`}
          ></div>
          <div
            className={`w-50 h-50 bg-${colorTheme}-300 rounded-full absolute opacity-75 translate-x-2 translate-y-2`}
          ></div>
          <div
            className={`w-50 h-50 bg-${colorTheme}-500 rounded-full flex items-center justify-center text-3xl relative`}
          >
            {emoji}
          </div>
        </div>
      </div>
    </div>
  );
}
