import Image from "next/image";
import Link from "next/link";
import { FaCode, FaGlobe } from "react-icons/fa";

type Props = {
  title: string;
  desc: string;
  code: string;
  site: string;
  placeholderImg: string;
};

const ProjectInfo = ({ title, desc, code, site, placeholderImg }: Props) => {
  return (
    <div className="w-full bg-primary text-white rounded-md">
      {/* Project info on hover */}
      <div className="flex w-full relative rounded-t-md">
        <Image
          className="h-52 w-full rounded-t-md"
          src={placeholderImg}
          alt={title}
          width={500}
          height={300}
        />

        <div className="absolute inset-0 bg-gray-500 opacity-70 rounded-t-md"></div>

        {/* Outside links */}
        <div className="absolute inset-0 flex items-center justify-evenly">
          {/* Site Link */}
          <Link
            href={site}
            target="_blank"
            className="hover:border-2 border-primary py-3 px-5 rounded-md z-10"
          >
            <div className="flex gap-2 justify-center items-center">
              <FaGlobe />

              <p className="text-xs font-medium uppercase">View this site</p>
            </div>
          </Link>

          {/* Github repo Link */}
          <Link
            href={code}
            target="_blank"
            className="hover:border-2 border-primary py-3 px-5 rounded-md z-10"
          >
            <div className="flex gap-2 justify-center items-center">
              <FaCode />

              <p className="text-xs font-medium uppercase">View my Code</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Project Short Info */}
      <div className="flex flex-col p-5">
        {/* Project Title */}
        <p className="text-lg font-bold">{title}</p>

        {/* Project description */}
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
