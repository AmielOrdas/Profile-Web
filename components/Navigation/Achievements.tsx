import { SquareArrowOutUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <div className="flex justify-center items-start gap-1 text-[7px] sm:text-[9px] font-semibold text-white h-3 relative">
      {/* Left text */}
      <div className="flex-1 text-right mr-2">
        <p>Computer Engineer</p>
      </div>

      {/* Vertical divider */}
      <div className="w-[1px] h-3 gradient-line-vertical" />

      {/* Middle text */}
      <div className="flex-1 text-left ml-2 ">
        <div className="flex items-center space-x-1 inline-flex group">
          {/* The group is applied only to the icon and the link */}

          <SquareArrowOutUpRight
            size={8}
            className="group-hover:text-orangeCustom75 group-hover:underline"
          />
          <a
            href="https://exam.csc.gov.ph/detail_examinee.php?id=36918"
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-orangeCustom75 group-hover:underline"
          >
            CSE Passer - Professional
          </a>
        </div>
      </div>
    </div>
  );
}
