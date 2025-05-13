"use client";
import React, { useEffect } from "react";
import DotCards from "@/components/Cards/DotCards";
import Image from "next/image";
import LogoBlack from "@/public/LogoBlack.png";
import { showNextJS, showHome, showProjects, showThesis } from "@/lib/redux/slice";
import { useDispatch } from "react-redux";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiZod } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { GiLightningHelix, GiCutDiamond } from "react-icons/gi";
import { SiLucide, SiAxios } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import neonLogo from "@/public/neonLogo.svg";
export default function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showNextJS(true));
    dispatch(showProjects(true));
    dispatch(showHome(false));
    dispatch(showThesis(false));
  }, []);

  const cardsData = [
    {
      title: "EZCode",
      description:
        "EZCode is a web-based code editor developed using numerous technologies namely NextJS, TypeScript, TailwindCSS, ShadCN, etc. ",
      frontend: [
        { title: "React", url: "https://react.dev/" },
        { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { title: "shadcn/ui", url: "https://ui.shadcn.com/" },
        { title: "NextJS", url: "https://nextjs.org/" },
      ],
      backend: [
        {
          title: "NextJS Route Handlers (API Routes)",
          url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
        },
        { title: "Neon Serverless PostgreSQL", url: "https://neon.tech/" },
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
        { title: "lucide icons", url: "https://lucide.dev/icons/" },
      ],
      emoji: <Image src={LogoBlack} alt="" />,
      bgBase: "bg-purple-100",
      bgBadge: "bg-purple-200",
      textBadge: "text-purple-800",
      textLink: "text-purple-600",
      iconBg: "bg-purpleCustom",
      link: "https://ezcode-code-editor.vercel.app/",
      icons: [
        { icon: <FaReact />, url: "https://react.dev/" }, // React
        { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" }, // Tailwind CSS
        { icon: <GiCutDiamond />, url: "https://ui.shadcn.com/" }, // shadcn/ui (generic design/UI symbol)

        { icon: <SiPostgresql />, url: "https://www.postgresql.org/" }, // Postgres
        {
          icon: <Image src={neonLogo} alt="" width={20} color="black" />,
          url: "https://neon.tech/",
        }, // Neon
        { icon: <SiZod />, url: "https://zod.dev/" }, // Zod
        { icon: <TbBrandRedux />, url: "https://react-redux.js.org/" }, // Redux Toolkit
        { icon: <FiFramer />, url: "https://www.npmjs.com/package/framer-motion" }, // Framer Motion
        { icon: "clsx", url: "https://www.npmjs.com/package/clsx" }, // clsx
        { icon: <SiAxios />, url: "https://axios-http.com/docs/intro" }, // Axios
        { icon: <SiLucide />, url: "https://lucide.dev/icons/" }, // lucide icons (stylized icon representation)
      ],
    },
  ];

  return (
    <div className="bg-grayCustom min-h-screen flex flex-col items-center pt-20 space-y-10">
      <DotCards cardsData={cardsData} />
    </div>
  );
}
