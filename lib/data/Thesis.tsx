import Image from "next/image";
import ConceptualFramework from "@/public/ConceptualFramework.png";
import HardwareDevelopment from "@/public/HardwareFramework.png";
import SoftwareDevelopment from "@/public/SoftwareFramework.png";

const IntroductionCardsData = [
  {
    title: "Brief Background",
    description:
      "The traffic management system creates rules and conventions for people’s safety and order.",

    interests: ["Pedestrian Crossing", "Road Markings", "Signages", "Traffic Lights"],
    generalCategory: "It is composed of",
    link: "",
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
  {
    title: "Problem Statement",

    interests: [
      "The conventional system has limitations due to its fixed traffic timings, which cannot adapt to real-time traffic conditions.",
      "This limitation highlights the need for an adaptive traffic light control system that uses flexible timings.",
      "Leveraging advanced computer vision techniques, such as YOLOv8, can provide the necessary adaptability, prioritizing practicality and optimal traffic flow.",
    ],
    link: "",
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
  {
    title: "Objectives",
    description:
      "The study aims to create a detection system via Raspberry Pi and YOLOv8 to create an adaptive traffic light that adjusts the timings on different scenarios based on the number of pedestrians about to cross.",
    generalCategory: "Specific objectives",
    interests: [
      "Develop a system that uses a camera to capture video footage of pedestrians.",
      "Use LEDs and dot matrix module to imitate a traffic light system.",
      "Use YOLOv8 algorithm to detect pedestrians.",
      "Use the YOLOv8 algorithm, camera, LEDs, and dot matrix module to simulate an adaptive traffic light system.",
      "Evaluate the system’s performance using percent error.",
    ],
    link: "",
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
];

const MethodologyData = [
  {
    title: "Conceptual Framework",
    descriptionImage: <Image src={ConceptualFramework} alt="" width={700} />,
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
    interests: [
      "The system takes the video feed of pedestrian crossing and highway as input.",
      "The input is processed using the Object Detection Algorithm using YOLOv8 algorithm with the Traffic Light Timing Sequence Algorithm.",
      "After processing, the system outputs a traffic light color (red, green, orange) and an adjust timing sequence based on the processed input.",
    ],
    link: "",
  },
  {
    title: "Hardware Development",
    descriptionImage: <Image src={HardwareDevelopment} alt="" width={400} />,
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
    iconBg: "bg-transparent",
    interests: [
      "Inputs: The camera  is the main source of input of the system because it gives visual to the system. Moreover, the 7-inch allows the researchers to control the system.",
      "Storage: The SD card is the main storage of the system",
      "Power: The Power Bank is the main power of the system",
      "Outputs: The 4-in-1 display dot module acts as the traffic light timer for the system while the mini traffic light acts as the traffic light for the system.",
    ],
    link: "",
  },
  {
    title: "Software Development",
    interests: [
      "If there are no people about to cross then green light is activated indefinitely.",
      "If there are 1-3 people about to cross then red light is activated with 15 seconds countdown",
      "If there are 4-7 people about to cross then  red light is activated with 20 seconds countdown",
      "If there are more than 7 people about to cross then red light is activated with 30 seconds countdown.",
      "The GUI of the system is written in Python and the YOLOv8 algorithm is written in C++",
    ],
    emoji: <Image src={SoftwareDevelopment} alt="" width={150} />,
    iconBg: "bg-transparent",
    links: [
      {
        link: "https://github.com/ortegagerson/thesis_pbatlcuyv8/tree/main/C%2B%2B%20Variant",
        linkDescription: "View GitHub Repository",
      },
    ],
    linkDescription: "View GitHub Repository",
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
];

const resultsCardData = [
  {
    title: "Results",
    interests: [
      "The researchers successfully developed a pedestrian-based system for adaptive traffic light control.",
      "The system achieved a percentage error rate of 7.33% which implies 92.67% accuracy on average, signifying effectiveness in real-world pedestrian detection scenarios.",
      "Using YOLOv8 in traffic management to detect pedestrians and procure the total pedestrian count is possible.",
    ],
    link: "",
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
  {
    title: "ACM Article",
    description: "This thesis is submitted to the Association for Computing Machinery.",
    links: [
      {
        link: "https://dl.acm.org/doi/10.1145/3700706.3700717?fbclid=IwZXh0bgNhZW0CMTEAAR3CWvWw9l1Lm88KCX_wftZqiBSg65GGiCEjZY5lcv9licdG1VLsIK_HIeU_aem_rq2MQnvnuglhlOstZmbXcg",
        linkDescription: "View ACM Article",
      },
    ],
    bgBase: "bg-blue-100",
    bgBadge: "bg-blue-200",
    textBadge: "text-blue-800",
    textLink: "text-blue-600",
  },
];

export { IntroductionCardsData, MethodologyData, resultsCardData };
