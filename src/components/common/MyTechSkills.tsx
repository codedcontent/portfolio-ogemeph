import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPython,
  SiDocker,
} from "react-icons/si";

type Props = {
  title: string;
};

const MyTechSkills = ({ title }: Props) => {
  const iconStyle = "text-3xl";

  const icon =
    title === "HTML" ? (
      <FaHtml5 className={iconStyle} />
    ) : title === "CSS" ? (
      <FaCss3 className={iconStyle} />
    ) : title === "JavaScript" ? (
      <SiJavascript className={iconStyle} />
    ) : title === "Python" ? (
      <SiPython className={iconStyle} />
    ) : title === "React.Js" ? (
      <SiJavascript className={iconStyle} />
    ) : title === "Next.Js" ? (
      <SiNextdotjs className={iconStyle} />
    ) : title === "TypeScript" ? (
      <SiTypescript className={iconStyle} />
    ) : title === "Tailwind" ? (
      <SiTailwindcss className={iconStyle} />
    ) : title === "Figma" ? (
      <SiFigma className={iconStyle} />
    ) : title === "Node.Js" ? (
      <SiNodedotjs className={iconStyle} />
    ) : title === "Express.Js" ? (
      <SiExpress className={iconStyle} />
    ) : title === "MongoDB" ? (
      <SiMongodb className={iconStyle} />
    ) : title === "Firebase" ? (
      <SiFirebase className={iconStyle} />
    ) : title === "Git" ? (
      <SiGit className={iconStyle} />
    ) : title === "GitHub" ? (
      <SiGithub className={iconStyle} />
    ) : title === "Docker" ? (
      <SiDocker className={iconStyle} />
    ) : null;

  return (
    <div className="flex flex-col items-center justify-center bg-primary p-3 rounded-md w-full text-white">
      <div>{icon}</div>

      <p className="font-light text-lg">{title}</p>
    </div>
  );
};

export default MyTechSkills;
