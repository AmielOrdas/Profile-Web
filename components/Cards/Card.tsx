import { ReactNode } from "react";

interface IconLink {
  icon: React.ReactNode | string;
  url?: string;
}
interface FrontendLink {
  title: React.ReactNode | string;
  url?: string;
}
interface BackendLink {
  title: React.ReactNode | string;
  url?: string;
}
interface DatabaseLink {
  title: React.ReactNode | string;
  url?: string;
}
interface UtilitiesLink {
  title: React.ReactNode | string;
  url?: string;
}

type LinkItem = {
  link: string;
  linkDescription: string;
};

interface ProjectCardProps {
  title?: string;
  description?: string;
  frontend?: FrontendLink[];
  backend?: BackendLink[];
  database?: DatabaseLink[];
  utilities?: UtilitiesLink[];
  interests?: string[];
  emoji?: string | ReactNode | ReactNode[];
  links?: LinkItem[];
  icons?: IconLink[];
  emojiMarginLeft?: string;
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
  generalCategory?: string;
}

export default function CardTemplate(props: ProjectCardProps) {
  const {
    title = "Project Title",
    description = "This is a sample project...",
    frontend = [],
    backend = [],
    database = [],
    utilities = [],
    interests = [],
    generalCategory = "Interests",
    emoji = "🚀",
    links = [],
    icons = [],
    emojiMarginLeft = "ml-5",
    bgBase = "bg-purple-100",
    bgBadge = "bg-purple-200",
    textBadge = "text-purple-800",
    textLink = "text-purple-600",
    iconBg = "bg-purple-300",
  } = props;

  function renderTechGroup(
    label: string,
    techs: { title: React.ReactNode | string; url?: string }[]
  ) {
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
                {tech.url ? (
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {tech.title}
                  </a>
                ) : (
                  tech.title
                )}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  function renderInterests(label: string, interests: string[]) {
    if (interests.length === 0) return null;

    return (
      <div className="flex mb-2">
        <p className="text-sm font-semibold text-gray-700 mb-1">{label}:</p>
        <div className="flex flex-wrap gap-2 ml-1">
          {interests.map((interest, index) => (
            <span
              key={index}
              className={`${bgBadge} ${textBadge} text-xs font-semibold rounded-full px-2 py-1`}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgBase} w-md rounded-xl overflow-hidden shadow-md sm:w-2xl  p-6`}>
      {/* Icons */}
      <div className="hidden  w-full sm:flex flex-wrap gap-3 mb-4">
        {icons.map(function (iconObj, index) {
          return (
            <div key={index} className="gradient-border-hover p-1 rounded-full">
              <a
                href={iconObj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${bgBadge} rounded-full flex items-center justify-center`}
              >
                {iconObj.icon}
              </a>
            </div>
          );
        })}
      </div>

      <div className="flex-col flex  sm:flex-row">
        {/* Right */}
        <div className="mx-auto sm:hidden w-full sm:w-[40%] flex items-center justify-center relative ">
          <div
            className={`w-50 h-50 ${bgBadge} rounded-full absolute opacity-50 translate-x-6 translate-y-2`}
          />
          <div
            className={`w-50 h-50 ${iconBg} rounded-full absolute opacity-75 translate-x-6 translate-y-2`}
          />
          <div
            className={`w-50 h-50 ${iconBg} rounded-full flex items-center justify-center text-3xl relative space-x-2 ${emojiMarginLeft}`}
          >
            {Array.isArray(emoji)
              ? emoji.map(function (emj: React.ReactNode, index: number) {
                  return <span key={index}>{emj}</span>;
                })
              : emoji}
          </div>
        </div>
        {/* Left */}
        <div className="w-full sm:w-[60%] pr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4 text-justify">{description}</p>
          {renderTechGroup("Frontend", frontend)}
          {renderTechGroup("Backend", backend)}
          {renderTechGroup("Database", database)}
          {renderTechGroup("Utilities", utilities)}
          {renderInterests(generalCategory, interests)}

          {links?.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`${textLink} font-semibold hover:underline mr-2`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linkDescription}{" "}
              <span className={`${textLink} text-sm`}>&#8594;</span>
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden w-full sm:w-[40%] sm:flex items-center justify-center relative">
          <div
            className={`w-50 h-50 ${bgBadge} rounded-full absolute opacity-50 translate-x-6 translate-y-2`}
          />
          <div
            className={`w-50 h-50 ${iconBg} rounded-full absolute opacity-75 translate-x-6 translate-y-2`}
          />
          <div
            className={`w-50 h-50 ${iconBg} rounded-full flex items-center justify-center text-3xl relative space-x-2 ${emojiMarginLeft}`}
          >
            {Array.isArray(emoji)
              ? emoji.map(function (emj: React.ReactNode, index: number) {
                  return <span key={index}>{emj}</span>;
                })
              : emoji}
          </div>
        </div>
      </div>
    </div>
  );
}
