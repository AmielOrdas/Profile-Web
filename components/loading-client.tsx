"use client";
import Icon from "@/components/Icon";

export default function ClientLoading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black relative">
      <div className="absolute top-20 left-20">
        <Icon rotate={true} size={100} repeat={Infinity} duration={3} ease="easeInOut" />
      </div>
    </div>
  );
}
