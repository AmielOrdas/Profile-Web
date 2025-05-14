import { PiStudentBold } from "react-icons/pi";
import { TbMathIntegral } from "react-icons/tb";
import { TbMatrix } from "react-icons/tb";
import { TbMathAvg } from "react-icons/tb";
import { TbLogicAnd } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
const cardsData = [
  {
    title: "Interested in learning",
    description:
      "I am interested in learning things that makes me think.  Mathematics and programming mostly sparks my curiosity. Some topics outside mathematics and programming sparks my curiosity as well.",
    emoji: <PiStudentBold size={50} />,
    interests: ["Mathematics", "Computers"],
    bgBase: "bg-red-100",
    bgBadge: "bg-red-200",
    textBadge: "text-red-800",
    textLink: "text-red-600",
    iconBg: "bg-redCustom",
    link: "",
  },
  {
    title: "Interested in mathematics",
    description:
      "I am interested in math topics related to circuits, computers, and physics.",
    emoji: [
      <TbMathIntegral key={"Integral"} />,
      <TbMatrix key={"Matrix"} />,
      <TbMathAvg key={"Discrete Math"} />,
    ],
    interests: ["Discrete Mathematics", "Linear Algebra", "Calculus"],
    bgBase: "bg-purple-100",
    bgBadge: "bg-purple-200",
    textBadge: "text-purple-800",
    textLink: "text-purple-600",
    iconBg: "bg-purpleCustom",
    link: "",
  },
  {
    title: "Interested in computers",
    description:
      "I am interested in the hardware and software of computers. However, I lean towards software more than hardware.",
    emoji: [
      <TbLogicAnd key={"Logic"} />,
      <FaCode key={"Code"} />,
      <GiArtificialIntelligence key={"AI"} />,
    ],
    interests: [
      "Digital Circuits",
      "Artificial Intelligence",
      "Programming",
      "System Design",
    ],
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
    iconBg: "bg-blue-300",
    link: "",
  },
];

export { cardsData };
