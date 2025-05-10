// Animations.tsx
import { motion } from "framer-motion";

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

// Rotate Animation
interface RotateAnimationProps {
  children: React.ReactNode;
  duration?: number; // Optional: to control the rotation speed
  repeat?: boolean; // Optional: whether to repeat the animation
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
