import DotCards from "@/components/Cards/DotCards";
import BracketCard from "@/components/Navigation/BracketCard";
import ProfileCard from "@/components/Profile Card/ProfileCard";

const cardsData = [
  {
    title: "Interested in learning",
    description:
      "I am interested in learning things that makes me think.  Mathematics and programming mostly sparks my curiosity. Some topics outside mathematics and programming sparks my curiosity as well.",
    emoji: "🚀",
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
    emoji: "📱",
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
    emoji: "🔧",
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

export default function Home() {
  return (
    <>
      <div className="min-h-screen ">
        <BracketCard />
      </div>
      <div className="bg-grayCustom  text-center py-5">
        <h1 className="font-jetbrains text-white text-3xl">Hey there!</h1>
        <ProfileCard />
      </div>
      <div className="bg-grayCustom flex flex-col items-center py-20 pb-40">
        <h1 className="font-jetbrains text-white text-3xl">About me</h1>

        <DotCards cardsData={cardsData} />
      </div>
    </>
  );
}
