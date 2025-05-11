import DotCard from "@/components/NextJS Cards/DotCard";
import React from "react";

export default function Page() {
  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center pt-5 space-y-10">
      <DotCard />
      <DotCard />
      <DotCard />
    </div>
  );
}
