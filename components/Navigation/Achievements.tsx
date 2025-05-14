export default function Achievements() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-start text-[9px] font-semibold text-white h-3 relative">
        {/* Left text */}
        <div className="flex-1 text-right mr-2 mt-0.5">
          <p>Computer Engineer</p>
        </div>

        {/* Vertical divider */}
        <div className="w-[1px] h-3 gradient-line-vertical" />

        {/* Middle text */}
        <div className="flex-1 text-left ml-2 mt-0.5">
          <p>CSE Passer - Professional</p>
        </div>
      </div>
    </div>
  );
}
