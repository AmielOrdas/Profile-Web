import DotCards from "@/components/Cards/DotCards";

import { EZCodeCardsData, ProfileWebAppCardsData } from "@/lib/data/NextJS";

export default function Page() {
  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center pt-15 pb-5 space-y-10">
      <DotCards cardsData={EZCodeCardsData} />
      <DotCards cardsData={ProfileWebAppCardsData} />
    </div>
  );
}
