import { GraduationCapIcon, NotebookPen } from "lucide-react";

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
            <span>Civil Service Exam Passer — Professional</span>
          </span>
        </p>
      </div>
    </div>
  );
}
