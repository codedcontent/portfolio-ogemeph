import Link from "next/link";
import { FaCode, FaGlobe } from "react-icons/fa";

type Props = {
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  projectSite: string;
  projectCode: string;
};

const ProjectInfo = ({
  projectTitle,
  technologiesUsed,
  projectDescription,
  projectCode,
  projectSite,
}: Props) => {
  return (
    <div className="w-full p-5 bg-primary text-white rounded-md">
      {/* Project Title */}
      <p className="text-lg">{projectTitle}</p>

      {/* Project Technologies used */}
      <span className="uppercase font-semibold text-sm text-[#394867]">
        {technologiesUsed.join(" + ")}
      </span>

      {/* Project description */}
      <p className="font-light">{projectDescription}</p>

      <div className="flex gap-4 mt-2">
        {/* Site Link */}
        <Link href={projectSite} target="_blank">
          <div className="flex gap-1 justify-center items-center">
            <FaGlobe />

            <p className="text-xs font-medium uppercase">Site</p>
          </div>
        </Link>

        {/* Github repo Link */}
        <Link href={projectCode} target="_blank">
          <div className="flex gap-1 justify-center items-center">
            <FaCode />

            <p className="text-xs font-medium uppercase">Code</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectInfo;
