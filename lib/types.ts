type SubNavigationProps = {
  handleClickSubNavigation: () => void;
  subNavigationVisible: boolean;
  subNavigationName: string;
  index: number; // New index to space out the sub-navigation items
};

type RotateAnimationProps = {
  children: React.ReactNode;
  duration?: number; // Optional: to control the rotation speed
  repeat?: boolean; // Optional: whether to repeat the animation
};

type AmoCircleProps = {
  rotate?: boolean;
  size?: number;
  ease?: string;
  duration?: number;
  repeat?: number;
};
