import About from "./pages/about/About";
import ContactMe from "./pages/contact/ContactMe";
import Projects from "./pages/projects/Projects";

const RightSide = () => {
  return (
    <div className="md:w-1/2 w-full h-full md:h-screen md:overflow-y-scroll px-6 lg:px-24 lg:py-5 md:py-4 py-0 md:space-y-7 space-y-5">
      {/* Projects */}
      <Projects />

      {/* About */}
      <About />

      {/* Contact Me */}
      <ContactMe />
    </div>
  );
};

export default RightSide;
