// RotateAnimation.tsx
import { motion } from "framer-motion";

interface RotateAnimationProps {
  children: React.ReactNode;
  duration?: number; // Optional: to control the rotation speed
  repeat?: boolean; // Optional: whether to repeat the animation
}

const RotateAnimation: React.FC<RotateAnimationProps> = ({
  children,
  duration = 5, // Default duration for one full rotation (5 seconds)
  repeat = true, // Default to repeating the animation
}) => {
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
};

export default RotateAnimation;
