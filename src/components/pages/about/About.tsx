/* eslint-disable react/no-unescaped-entities */
import MyTechSkills from "@/components/common/MyTechSkills";

const About = () => {
  return (
    <div id="about" className="pt-5">
      <p className="font-black text-lg uppercase">About me</p>

      <div className="space-y-4">
        <p className="font-light">
          I am Ogechukwu Mephors, a Fullstack Developer and Data Scientist
          specializing in Next.js, TypeScript, React.js, and TailwindCSS on the
          Web Development side - Data Analysis, Machine Learning as well as Data
          Processing on the Data Science side. I have a passion for turning
          ideas into user-friendly software that anyone can use. When I'm not
          coding, I might be watching anime, at the gym, or reading a book.
        </p>
      </div>

      <p className="font-bold my-4">Technologies I currently work with:</p>

      {/* List of technologies */}
      <div className="w-full grid md:grid-cols-4 grid-cols-3 gap-5 gap-x-10">
        <MyTechSkills title="HTML" />
        <MyTechSkills title="CSS" />
        <MyTechSkills title="JavaScript" />
        <MyTechSkills title="Python" />
        <MyTechSkills title="React.Js" />
        <MyTechSkills title="Next.Js" />
        <MyTechSkills title="TypeScript" />
        <MyTechSkills title="Tailwind" />
        <MyTechSkills title="Figma" />
        <MyTechSkills title="Node.Js" />
        <MyTechSkills title="Express.Js" />
        <MyTechSkills title="MongoDB" />
        <MyTechSkills title="Firebase" />
        <MyTechSkills title="Git" />
        <MyTechSkills title="GitHub" />
        <MyTechSkills title="Docker" />
      </div>
    </div>
  );
};

export default About;
