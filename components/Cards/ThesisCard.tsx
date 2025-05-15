import { ThesisCardProps } from "@/lib/types";

export default function ThesisCard(props: ThesisCardProps) {
  const {
    title = "Project Title",
    description = "",
    interests = [],
    generalCategory = "",
    emoji = "",
    links = [],
    icons = [],
    emojiMarginLeft = "ml-5",
    descriptionImage = "",
    bgBase = "bg-purple-100",
    bgBadge = "bg-purple-200",

    textLink = "text-purple-600",
    iconBg = "bg-purple-300",
  } = props;

  function renderInterests(label: string, items: string[]) {
    if (items.length === 0) return null;

    return (
      <div className="mb-4">
        {label && <p className="text-sm font-semibold text-gray-900 mb-1">{label}:</p>}
        <ul className="list-disc list-outside  pl-4 text-sm text-gray-700 ">
          {items.map(function (item, index) {
            return (
              <li
                key={index}
                className="text-justify leading-[1.75] tracking-tight text-[0.95rem] "
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`${bgBase} w-[300px] rounded-xl  overflow-hidden shadow-md sm:w-2xl p-6`}
    >
      {/* Icons */}
      <div className="w-full flex flex-wrap gap-3 mb-4">
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

      <div className="flex flex-row">
        {/* Left */}
        <div className="w-[100%] pr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h2>
          <p className="text-gray-600 text-sm mb-4 text-justify">{description}</p>
          <div className="flex justify-center">{descriptionImage}</div>

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
        {emoji && (
          <div className="w-[40%] flex items-center justify-center relative">
            <div
              className={`w-50 h-50 transparent rounded-full absolute opacity-50 translate-x-6 translate-y-2`}
            ></div>
            <div
              className={`w-50 h-50 ${iconBg} rounded-full absolute opacity-75 translate-x-6 translate-y-2`}
            ></div>
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
        )}
      </div>
    </div>
  );
}
