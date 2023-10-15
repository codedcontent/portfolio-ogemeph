import ProjectInfo from "./ProjectInfo";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-full" id="projects">
      <p className="font-black text-lg uppercase">Projects</p>

      <div className="grid grid-cols-1 gap-y-4 mt-4 w-full">
        <ProjectInfo
          projectTitle="Tournaments.IO"
          projectDescription="Tournaments.io is a huge library of games that you can battle it out with your friends, play tournaments to be its victor and win prizes."
          technologiesUsed={["React.Js"]}
          projectCode="https://github.com/codedcontent/tournaments-io-web-app"
          projectSite="https://tournaments-io.web.app"
        />

        <ProjectInfo
          projectTitle="Weather Buddy"
          projectDescription="Tournaments.io is a huge library of games that you can battle it out with your friends, play tournaments to be its victor and win prizes."
          technologiesUsed={["React.Js", "Tailwind", "Express.js", "Firebase"]}
          projectCode="https://github.com/codedcontent/weather-buddy"
          projectSite="https://weather-buddy-self.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
