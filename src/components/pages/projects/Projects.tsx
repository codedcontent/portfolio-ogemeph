import ProjectInfo from "./ProjectInfo";

const Projects = () => {
  const myProjects = [
    {
      title: "RelationsPilot",
      desc: "RelationsPilot is a service I built for myself to help me continuously improve me interpersonal relationships with family and loved ones",
      code: "https://github.com/codedcontent/relations-pilot-frontend",
      site: "https://relationspilot.netlify.app/",
      placeholderImg: "/assets/RelationsPilot.png",
    },
    {
      title: "Weather Buddy",
      desc: "Weather Buddy is an app that helps you Stay Ahead of Mother Nature.",
      code: "https://github.com/codedcontent/weather-buddy",
      site: "https://weather-buddy-self.vercel.app/",
      placeholderImg: "/assets/weather-buddy.png",
    },
    {
      title: "Tournaments.IO",
      desc: "Tournaments.io is a huge library of games that you can battle it out with your friends, play tournaments to be its victor and win prizes.",
      code: "https://github.com/codedcontent/tournaments-io-web-app",
      site: "https://tournaments-io.web.app",
      placeholderImg: "/assets/tournaments-io.png",
    },
    {
      title: "BUQD",
      desc: "BUQD - Baze University Quick Deliveries. This is a simple e-commerce platform for the university I attended. I has both and admin and customer user interface for managing and making order respectively.",
      code: "https://github.com/codedcontent/baze-university-quick-delivery",
      site: "https://buqd.netlify.app/",
      placeholderImg: "/assets/buqd.png",
    },
    {
      title: "AceCoin",
      desc: "AceCoin was a frontend task I undertook, I particularly like this project because I was able to demonstrate my CSS skills and how well I could code-out a design from scratch",
      code: "https://github.com/codedcontent/acecoinpay-repo",
      site: "https://acecoinpay-challenge.netlify.app/",
      placeholderImg: "/assets/acecoin.png",
    },
  ];
  return (
    <div className="w-full pt-5" id="projects">
      <p className="font-black text-lg uppercase">Projects</p>

      <div className="grid grid-cols-1 gap-y-4 mt-4 w-full">
        {myProjects.map((project, index) => (
          <ProjectInfo key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
