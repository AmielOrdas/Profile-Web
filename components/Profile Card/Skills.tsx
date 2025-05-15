import Link from "next/link";
import { skillsArray } from "@/lib/data/Skills";

export default function Skills() {
  return (
    <div className="mt-4 text-sm text-black text-center">
      <div className="flex flex-wrap justify-center space-x-2 overflow-x-auto">
        {skillsArray.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="bg-orange-200 text-orange-800 text-xs rounded-full px-2 py-1 mt-2 font-semibold hover:underline hover:text-orangeCustom75 font-semibold transition"
          >
            {item.skill}
          </Link>
        ))}
      </div>
    </div>
  );
}
