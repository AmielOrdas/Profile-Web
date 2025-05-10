import Card from "@/components/Project Card/Card";

import ProfileCard from "@/components/Profile Card/ProfileCard";

import NavigationArea from "@/components/Navigation/NavigationArea";

export default function Home() {
  return (
    <div className="bg-grayCustom">
      <NavigationArea />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-10 mt-10">
        <Card
          title="Purple Project"
          frontend={["React", "TailwindCSS"]}
          backend={["Next.js"]}
          database={["PostgreSQL"]}
          utilities={["Zod", "Redux"]}
          link="#"
          emoji="🚀"
          icons={[]}
          bgBase="bg-purple-100"
          bgBadge="bg-purple-200"
          textBadge="text-purple-800"
          textLink="text-purple-600"
          iconBg="bg-purpleCustom"
          emojiMarginLeft="ml-5"
        />
        <ProfileCard />
      </div>
    </div>
  );
}
