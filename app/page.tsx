import DotCards from "@/components/Cards/DotCards";
import BracketCard from "@/components/Navigation/BracketCard";
import ProfileCard from "@/components/Profile Card/ProfileCard";
import { cardsData } from "@/lib/data/Home";

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
      <div className="bg-grayCustom flex flex-col items-center py-20 pb-20">
        {/*About me Card */}
        <h1 className="font-jetbrains text-white text-3xl">About me</h1>
        <DotCards cardsData={cardsData} />
      </div>
    </>
  );
}
