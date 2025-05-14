"use client";
import Icon from "@/components/Icon";

export default function ClientLoading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Icon rotate={true} size={100} repeat={Infinity} duration={3} ease="easeInOut" />
    </div>
  );
}
