export default function Achievements() {
  return (
    <div className="flex justify-center items-start gap-1 text-[7px] sm:text-[9px] font-semibold text-white h-3 relative">
      {/* Left text */}
      <div className="flex-1 text-right mr-2">
        <p>Computer Engineer</p>
      </div>

      {/* Vertical divider */}
      <div className="w-[1px] h-3 gradient-line-vertical" />
      <div className="flex-1 text-left ml-2">
        <p>Software Engineer</p>
      </div>
      {/* Middle text */}
      {/*
<div className="flex-1 text-left ml-2">
  <div className="flex items-center space-x-1 inline-flex group">
    <SquareArrowOutUpRight
      size={8}
      className="group-hover:text-orangeCustom75 group-hover:underline"
    />
    <a
      href="link"
      target="_blank"
      rel="noopener noreferrer"
      className="group-hover:text-orangeCustom75 group-hover:underline"
    >
      Software Engineer
    </a>
  </div>
</div>
*/}
    </div>
  );
}
