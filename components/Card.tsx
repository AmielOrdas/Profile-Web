"use client";
import { ReactNode } from "react";

interface IconLink {
  icon: React.ReactNode;
  url: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  frontend?: string[];
  backend?: string[];
  database?: string[];
  utilities?: string[];
  emoji?: string | ReactNode;
  link?: string;
  icons?: IconLink[];
  emojiMarginLeft?: string;
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
}

export default function CardTemplate(props: ProjectCardProps) {
  const {
    title = "Project Title",
    description = "This is a sample project...",
    frontend = [],
    backend = [],
    database = [],
    utilities = [],
    emoji = "🚀",
    link = "#",
    icons = [],
    emojiMarginLeft = "ml-5",
    bgBase = "bg-purple-100",
    bgBadge = "bg-purple-200",
    textBadge = "text-purple-800",
    textLink = "text-purple-600",
    iconBg = "bg-purple-300",
  } = props;

  function renderTechGroup(label: string, techs: string[]) {
    if (techs.length === 0) return null;
    return (
      <div className="flex mb-2">
        <p className="text-sm font-semibold text-gray-700 mb-1">{label}:</p>
        <div className="flex flex-wrap gap-2 ml-1">
          {techs.map(function (tech, index) {
            return (
              <span
                key={index}
                className={`${bgBadge} ${textBadge} text-xs font-semibold rounded-full px-2 py-1`}
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
    <div className={`${bgBase} rounded-xl overflow-hidden shadow-md w-2xl p-6`}>
      {/* Icons */}
      <div className="w-full flex flex-wrap gap-3 mb-4">
        {icons.map(function (iconObj, index) {
          return (
            <div key={index} className="gradient-border-hover p-1 rounded-full">
              <a
                href={iconObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}
              >
                {iconObj.icon}
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row">
        {/* Left */}
        <div className="w-[60%] pr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4 text-justify">{description}</p>
          {renderTechGroup("Frontend", frontend)}
          {renderTechGroup("Backend", backend)}
          {renderTechGroup("Database", database)}
          {renderTechGroup("Utilities", utilities)}
          {link && (
            <a
              href={link}
              className={`${textLink} font-semibold hover:underline`}
              target="_blank"
            >
              View Project <span className="text-gray-500 text-sm">&#8594;</span>
            </a>
          )}
        </div>

        {/* Right */}
        <div className="w-[40%] flex items-center justify-center relative">
          <div
            className={`w-50 h-50 ${bgBadge} rounded-full absolute opacity-50 translate-x-6 translate-y-2`}
          ></div>
          <div
            className={`w-50 h-50 ${iconBg} rounded-full absolute opacity-75 translate-x-6 translate-y-2`}
          ></div>
          <div
            className={`w-50 h-50 ${iconBg} rounded-full flex items-center justify-center text-3xl relative ${emojiMarginLeft}`}
          >
            {emoji}
          </div>
        </div>
      </div>
    </div>
  );
}
