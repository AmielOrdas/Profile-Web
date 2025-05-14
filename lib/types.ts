import { ReactNode } from "react";

type IconLink = {
  icon: React.ReactNode | string;
  url?: string;
};

type LinkItem = {
  link: string;
  linkDescription: string;
};

type FrontendLink = {
  title: React.ReactNode | string;
  url?: string;
};

type BackendLink = {
  title: React.ReactNode | string;
  url?: string;
};

type DatabaseLink = {
  title: React.ReactNode | string;
  url?: string;
};

type UtilitiesLink = {
  title: React.ReactNode | string;
  url?: string;
};

export type SubNavigationProps = {
  handleClickSubNavigation: () => void;
  subNavigationVisible: boolean;
  subNavigationName: string;
  index: number; // New index to space out the sub-navigation items
};

export type RotateAnimationProps = {
  children: React.ReactNode;
  duration?: number; // Optional: to control the rotation speed
  repeat?: boolean; // Optional: whether to repeat the animation
};

export type AmoCircleProps = {
  rotate?: boolean;
  size?: number;
  ease?: string;
  duration?: number;
  repeat?: number;
};

export type Orientation = "top" | "bottom" | "left" | "right";

export type LineWithCircleProps = {
  orientation?: Orientation;
  height?: string; // Tailwind height class
  width?: string; // Tailwind width class
  color?: string; // Tailwind background color
  circleSize?: string; // Tailwind width/height for the circle
  circleBorder?: string; // Tailwind border class for the circle
  circleInnerBackground?: string;
  className?: string; // Additional utility classes
};

export type ThesisCardProps = {
  title?: string;
  description?: string;
  interests?: string[];
  emoji?: string | ReactNode | ReactNode[];
  links?: LinkItem[];
  icons?: IconLink[];
  emojiMarginLeft?: string;
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
  generalCategory?: string;
  descriptionImage?: React.ReactNode | "";
};

export type ThesisDotCardsProps = {
  cardsData?: ThesisCardProps[];
  bgBase?: string;
};

export type ProjectCardProps = {
  title?: string;
  description?: string;
  frontend?: FrontendLink[];
  backend?: BackendLink[];
  database?: DatabaseLink[];
  utilities?: UtilitiesLink[];
  interests?: string[];
  emoji?: string | ReactNode | ReactNode[];
  links?: LinkItem[];
  icons?: IconLink[];
  emojiMarginLeft?: string;
  bgBase?: string;
  bgBadge?: string;
  textBadge?: string;
  textLink?: string;
  iconBg?: string;
  generalCategory?: string;
};

export type ProjectDotCardsProps = {
  cardsData?: ProjectCardProps[];
};
