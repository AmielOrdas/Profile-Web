import { GraduationCapIcon, NotebookPen, SquareArrowOutUpRight } from "lucide-react";

export default function Qualifications() {
  return (
    <div className=" text-xs text-black text-center">
      <div className="inline-block text-left space-y-1">
        <p className="flex items-center space-x-1">
          <GraduationCapIcon size={20} color="orange" />
          <span>Bachelor of Science in Computer Engineering</span>
        </p>
        <p>
          <span className="ml-0.5 flex items-center space-x-1">
            <NotebookPen size={17} color="orange" />
            <span className="flex group">
              <a
                href="https://exam.csc.gov.ph/detail_examinee.php?id=36918"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-orangeCustom75 group-hover:underline"
              >
                Civil Service Exam Passer - Professional
              </a>
              <SquareArrowOutUpRight
                size={8}
                className="group-hover:text-orangeCustom75 group-hover:underline"
              />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}
