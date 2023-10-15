/* eslint-disable react/no-unescaped-entities */
import MyTechSkills from "@/components/common/MyTechSkills";

const About = () => {
  return (
    <div className="mt-16" id="about">
      <p className="font-black text-lg uppercase">About me</p>

      <div className="space-y-4">
        <p className="font-light">
          I am Ogechukwu Mephors, a Software Engineer specializing in Next.js,
          TypeScript, React.js, and Tailwind CSS. I have a passion for turning
          ideas into user-friendly software that anyone can use. When I'm not
          coding, I might be watching anime, gyming, or reading a book.
        </p>

        <p className="font-light">
          I've got a mix of skills - techie stuff and a love for creative
          storytelling. Join me on a digital adventure where we blend code,
          creativity, and communication to make a real impact in the digital
          world
        </p>
      </div>

      <p className="font-bold my-4">Technologies I currently work with:</p>

      {/* List of technologies */}
      <div className="w-full grid grid-cols-4 gap-2">
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
