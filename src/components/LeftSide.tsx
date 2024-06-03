/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import TopNav from "./TopNav";
import MaxWidthButton from "./common/MaxWidthButton";
import CoffeeButton from "./common/CoffeeButton";

const LeftSide = () => {
  // Function to download my resume
  const downloadResume = () => {
    const resumeUrl = "my_resume_url";
    // Create a link element
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;

    // Set the download attribute to specify the desired file name
    downloadLink.download = "CV-Resume.pdf";

    // Simulate a click on the link to trigger the download
    downloadLink.click();
  };

  // Function to buy me coffee
  const buyMeCoffee = () => {
    alert("Buying me coffee...");
  };

  return (
    <div className="md:h-screen h-full md:w-1/2 w-full px-6 lg:px-24 lg:py-10 flex flex-col justify-between">
      <div className="hidden md:block">
        <TopNav />
      </div>

      {/* Main content */}
      <div className="w-full py-4">
        {/* Greeting && Intro */}
        <div className="-space-y-1">
          <p className="text-base font-bold">Hi there 👋🏿</p>

          <p className="font-bold md:text-6xl text-5xl">
            I am <span className="text-primary">Oge.</span>
          </p>
        </div>

        {/* Short message about my professional work */}
        <p className="font-light text-lg my-4">
          I'm a <span className="text-primary">Full-stack developer</span> and I
          also happen to like doing this thing called Data Science, so yeah, I'm
          a <span className="text-primary">Data Scientist</span> as well. I
          build the ideas I have in my head because I can, It's more
          exhilarating that way.
        </p>

        <Link
          href="#about"
          className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2.5 px-4 rounded uppercase"
        >
          More about me
        </Link>

        {/* Social Media Locations */}
        <div className="mt-8 flex justify-center flex-col">
          <p className="font-medium md:text-lg">You can find me here:</p>

          {/* Social icons */}
          <div className="flex gap-4 mt-2 flex-wrap items-center">
            <Link
              target="_blank"
              href="https://twitter.com/@i_am_meph"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaTwitter className="md:text-3xl text-2xl cursor-pointer text-secondary" />
              <p className="font-medium md:text-sm text-xs">Twitter</p>
            </Link>

            <Link
              target="_blank"
              href="https://instagram.com/i.am.meph"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaInstagram className="md:text-3xl text-2xl cursor-pointer text-secondary" />
              <p className="font-medium md:text-sm text-xs">Instagram</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ogeme/"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaLinkedin className="md:text-3xl text-2xl cursor-pointer text-secondary" />
              <p className="font-medium md:text-sm text-xs">LinkedIn</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.github.com/codedcontent"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaGithub className="md:text-3xl text-2xl cursor-pointer text-secondary" />
              <p className="font-medium md:text-sm text-xs">GitHub</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/@techwithoge6899"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaYoutube className="md:text-3xl text-2xl cursor-pointer text-secondary" />
              <p className="font-medium md:text-sm text-xs">Youtube</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Other stuff I do */}
      <div className="md:my-0 my-8">
        <CoffeeButton onClick={buyMeCoffee} />
      </div>
    </div>
  );
};

export default LeftSide;
