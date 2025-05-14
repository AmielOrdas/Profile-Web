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
            className="bg-orangeCustomLow text-orangeCustom100 text-xs font-[1000] rounded-full px-2 py-1 mt-2 hover:underline hover:text-orangeCustom75 transition"
          >
            {item.skill}
          </Link>
        ))}
      </div>
    </div>
  );
}
