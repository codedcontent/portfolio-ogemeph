import About from "./pages/about/About";
import ContactMe from "./pages/contact/ContactMe";
import Projects from "./pages/projects/Projects";


const RightSide = () => {
  return (
    <div className="w-1/2 h-screen overflow-y-scroll px-4 sm:px-6 lg:px-24 lg:py-10">
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
