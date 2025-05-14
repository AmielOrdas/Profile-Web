// Animations.tsx
import { RotateAnimationProps } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

// Slide Left/Right Animation
export function SlideLeftRightAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -70, opacity: 0 }}
      transition={{ duration: 0.4, ease: "anticipate" }}
    >
      {children}
    </motion.div>
  );
}

export function RotateAnimation({
  children,
  duration = 5, // Default duration for one full rotation (5 seconds)
  repeat = true, // Default to repeating the animation
}: RotateAnimationProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: repeat ? Infinity : 0, // Infinite loop if `repeat` is true
        duration: duration,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

export function CardFlip({
  children,
  currentCardIndex,
}: {
  children: React.ReactNode;
  currentCardIndex: number;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentCardIndex}
        initial={{ rotateY: 90 }}
        animate={{ rotateY: 0 }}
        exit={{ rotateY: -90 }}
        transition={{ duration: 0.3 }}
        className="w-full"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
