import DotCards from "@/components/Cards/DotCards";

import { cardsData } from "@/lib/data/NextJS";

export default function Page() {
  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center pt-20 space-y-10">
      <DotCards cardsData={cardsData} />
    </div>
  );
}
