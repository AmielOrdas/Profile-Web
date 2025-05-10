export default function NavigationText() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-start text-[7px] font-semibold text-white h-3 relative">
        {/* Left text */}
        <div className="flex-1 text-right mr-2 ">
          <p className="cursor-pointer hover:text-orangeCustom75 hover:underline transition duration-150 ease-in-out">
            NextJS + React + TypeScript
          </p>
        </div>

        {/* Vertical divider */}
        <div className="w-[1px] h-3 gradient-line-vertical" />

        {/* Middle text */}
        <div className="flex-1 text-left ml-2 ">
          <p className="cursor-pointer hover:text-orangeCustom75 hover:underline transition duration-150 ease-in-out">
            Undergraduate thesis
          </p>
        </div>
      </div>
    </div>
  );
}
