import {
  IconBrandGit,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

const skills = [
  {
    name: "TypeScript",
    description: "JavaScript, but better",
    color: "#3178C6",
    icon: <IconBrandTypescript size={26} color="#3178C6" />,
  },
  {
    name: "React",
    description: "JavaScript Library",
    color: "#00FFFF",
    icon: <IconBrandReact size={26} color="#00FFFF" />,
  },
  {
    name: "Next.js",
    description: "React Framework",
    color: "#ffffff",
    icon: <IconBrandNextjs size={26} color="#ffffff" />,
  },
  {
    name: "Git",
    description: "Version Control",
    color: "#F05032",
    icon: <IconBrandGit size={26} color="#F05032" />,
  },
  {
    name: "MongoDB",
    description: "The wild west of databases",
    color: "#4DB33D",
    icon: <IconBrandMongodb size={26} color="#4DB33D" />,
  },
  {
    name: "Tailwind CSS",
    description: "The utility-first CSS framework",
    color: "#38BDF8",
    icon: <IconBrandTailwind size={26} color="#38BDF8" />,
  },
];

export default skills;
