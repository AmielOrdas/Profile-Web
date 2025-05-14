import { AmoCircleProps } from "@/lib/types";
import { motion } from "framer-motion";

function AmoCircle({
  rotate = false,
  size = 200,
  ease = "linear",
  duration = 10,
  repeat = Infinity,
}: AmoCircleProps) {
  const arrowFontSize = size * 0.15; // Dynamically scale arrow size (adjust ratio if needed)

  return (
    <div className="flex justify-center items-center font-jetbrains">
      <div
        className="relative rounded-full bg-redCustom flex justify-center items-center"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Purple Inner Circle */}
        <div
          className="rounded-full bg-purpleCustom flex justify-center items-center border"
          style={{
            width: `${size * 0.66}px`,
            height: `${size * 0.66}px`,
          }}
        >
          <p
            className="text-black font-semibold"
            style={{ fontSize: `${size * 0.08}px` }}
          >
            &lt;AMO
            <span
              className="inline-block"
              style={{
                transform: "rotate(30deg)",
                display: "inline-block",
              }}
            >
              1
            </span>
            &gt;&apos;
          </p>
        </div>

        {/* Rotating container for the arrows */}
        {rotate ? (
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 720 }}
            transition={{
              repeat: repeat,
              duration: duration,
              ease: ease,
            }}
          >
            <div
              className="absolute text-black rotate-[45deg]"
              style={{
                top: "16%",
                left: "7%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
            <div
              className="absolute text-black rotate-[135deg]"
              style={{
                top: "16%",
                right: "7%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
            <div
              className="absolute text-black rotate-[90deg] left-1/2 transform -translate-x-1/2"
              style={{
                bottom: "-2%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
          </motion.div>
        ) : (
          <>
            <div
              className="absolute text-black rotate-[45deg]"
              style={{
                top: "16%",
                left: "7%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
            <div
              className="absolute text-black rotate-[135deg]"
              style={{
                top: "16%",
                right: "7%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
            <div
              className="absolute text-black rotate-[90deg] left-1/2 transform -translate-x-1/2"
              style={{
                bottom: "-2%",
                fontSize: `${arrowFontSize}px`,
              }}
            >
              ⇔
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AmoCircle;
