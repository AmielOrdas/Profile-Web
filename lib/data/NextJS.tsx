import { FaReact } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiZod } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { GiCutDiamond } from "react-icons/gi";
import { SiLucide, SiAxios } from "react-icons/si";
import { FiFigma, FiFramer } from "react-icons/fi";
import neonLogo from "@/public/neonLogo.svg";
import Image from "next/image";
import LogoBlack from "@/public/LogoBlack.png";
import { SiTypescript } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import ReactIconsIcon from "@/public/react-icons logo.svg";
import MyLogo from "@/public/MyLogo.png";
const EZCodeCardsData = [
  {
    title: "EZCode",
    description:
      "EZCode is a web-based code editor developed using numerous technologies namely NextJS, TypeScript, TailwindCSS, ShadCN, etc. ",
    frontend: [
      { title: "React", url: "https://react.dev/" },
      { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { title: "shadcn/ui", url: "https://ui.shadcn.com/" },
      { title: "NextJS", url: "https://nextjs.org/" },
      { title: "TypeScript", url: "https://www.typescriptlang.org/" },
    ],
    backend: [
      {
        title: "NextJS Route Handlers (API Routes)",
        url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
      },
      { title: "Neon Serverless PostgreSQL", url: "https://neon.tech/" },
      { title: "TypeScript", url: "https://www.typescriptlang.org/" },
    ],
    database: [
      { title: "Neon Postgres", url: "https://neon.tech/" },
      {
        title: "Postgres",
        url: "https://www.postgresql.org/",
      },
    ],
    utilities: [
      { title: "Zod", url: "https://zod.dev/" },
      { title: "React Redux / Redux Toolkit", url: "https://react-redux.js.org/" },
      { title: "Framer Motion", url: "https://www.npmjs.com/package/framer-motion" },
      { title: "clsx library", url: "https://www.npmjs.com/package/clsx" },
      { title: "Axios", url: "https://axios-http.com/docs/intro" },
      { title: "Lucide", url: "https://lucide.dev/icons/" },
      { title: "Figma", url: "https://www.figma.com/" },
      { title: "Canva", url: "https://www.canva.com/" },
    ],
    emoji: <Image src={LogoBlack} alt="" />,
    bgBase: "bg-purple-100",
    bgBadge: "bg-purple-200",
    textBadge: "text-purple-800",
    textLink: "text-purple-600",
    iconBg: "bg-purpleCustom",
    links: [
      { link: "https://ezcode-code-editor.vercel.app/", linkDescription: "View Project" },
    ],
    icons: [
      { icon: <FaReact />, url: "https://react.dev/" },
      { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
      { icon: <RiNextjsLine />, url: "https://nextjs.org/" },
      {
        icon: <SiTypescript />,
        url: "https://www.typescriptlang.org/",
      },
      { icon: <GiCutDiamond />, url: "https://ui.shadcn.com/" }, //

      { icon: <SiPostgresql />, url: "https://www.postgresql.org/" },
      {
        icon: <Image src={neonLogo} alt="" width={20} color="black" />,
        url: "https://neon.tech/",
      }, // Neon
      { icon: <SiZod />, url: "https://zod.dev/" },
      { icon: <TbBrandRedux />, url: "https://react-redux.js.org/" },
      { icon: <FiFramer />, url: "https://www.npmjs.com/package/framer-motion" },
      { icon: "clsx", url: "https://www.npmjs.com/package/clsx" },
      { icon: <SiAxios />, url: "https://axios-http.com/docs/intro" }, // Axios
      { icon: <SiLucide />, url: "https://lucide.dev/icons/" },
      {
        icon: <FiFigma />,
        url: "https://www.figma.com/",
      },
      {
        icon: <SiCanva />,
        url: "https://www.canva.com/",
      },
    ],
  },
];

const ProfileWebAppCardsData = [
  {
    title: "AMO Profile Application",
    description:
      "AMO Profile Application is a web application that showcases information about me. It includes my basic information such as my name, degree, contacts, etc. Moreover, it also displays my projects, skills, and thesis.",
    frontend: [
      { title: "React", url: "https://react.dev/" },
      { title: "NextJS", url: "https://nextjs.org/" },
      { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { title: "TypeScript", url: "https://www.typescriptlang.org/" },
    ],
    utilities: [
      { title: "Framer Motion", url: "https://www.npmjs.com/package/framer-motion" },
      { title: "Lucide", url: "https://lucide.dev/icons/" },
      { title: "React Icons", url: "https://react-icons.github.io/react-icons/" },
      { title: "React Redux", url: "https://react-redux.js.org/" },
      { title: "Figma", url: "https://www.figma.com/" },
      { title: "Canva", url: "https://www.canva.com/" },
    ],
    bgBase: "bg-purple-100",
    bgBadge: "bg-purple-200",
    textBadge: "text-purple-800",
    textLink: "text-purple-600",
    iconBg: "bg-purpleCustom",
    links: [
      {
        link: "https://amiel-mir-ordas-amo-profile.vercel.app/",
        linkDescription: "View Project",
      },
    ],
    icons: [
      { icon: <FaReact />, url: "https://react.dev/" },
      { icon: <RiNextjsLine />, url: "https://nextjs.org/" },
      { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
      {
        icon: <SiTypescript />,
        url: "https://www.typescriptlang.org/",
      },
      { icon: <TbBrandRedux />, url: "https://react-redux.js.org/" },
      {
        icon: <Image src={ReactIconsIcon} alt="" />,
        url: "https://react-icons.github.io/react-icons/",
      },

      { icon: <FiFramer />, url: "https://www.npmjs.com/package/framer-motion" },
      { icon: <SiLucide />, url: "https://lucide.dev/icons/" },
      {
        icon: <FiFigma />,
        url: "https://www.figma.com/",
      },
      {
        icon: <SiCanva />,
        url: "https://www.canva.com/",
      },
    ],
    emoji: <Image src={MyLogo} alt="" />,
  },
];

export { EZCodeCardsData, ProfileWebAppCardsData };
