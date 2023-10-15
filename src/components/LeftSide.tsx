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
    downloadLink.download = "your-file-name.ext";

    // Simulate a click on the link to trigger the download
    downloadLink.click();
  };

  // Function to buy me coffee
  const buyMeCoffee = () => {
    alert("Buying me coffee...");
  };

  return (
    <div className="h-full w-1/2 px-4 sm:px-6 lg:px-24 lg:py-10 flex flex-col justify-between">
      <TopNav />

      {/* Main content */}
      <div className="w-11/12 py-4">
        {/* Greeting && Intro */}
        <div className="-space-y-1">
          <p className="text-base font-bold">Hi there 👋🏿</p>

          <p className="font-bold text-7xl">
            I am <span className="text-primary">Oge.</span>
          </p>
        </div>

        {/* Short message about my professional work */}
        <p className="font-light text-lg my-4">
          I&apos;m a <span className="text-primary">Software Engineer</span> and
          i&apos;m passionate about making things work on the internet. I design
          and build websites that are functional and look great as well. I am
          always eager to learn and take on new challenges to create something
          amazing.
        </p>

        <MaxWidthButton text="Download my resume" onClick={downloadResume} />

        {/* Social Media Locations */}
        <div className="mt-8 flex justify-center flex-col">
          <p className="font-medium text-lg">You can find me here:</p>

          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <Link
              target="_blank"
              href="https://twitter.com/@i_am_meph"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaTwitter className="text-3xl cursor-pointer text-secondary" />
              <p className="font-medium text-sm">Twitter</p>
            </Link>

            <Link
              target="_blank"
              href="https://instagram.com/i.am.meph"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaInstagram className="text-3xl cursor-pointer text-secondary" />
              <p className="font-medium text-sm">Instagram</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ogeme/"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaLinkedin className="text-3xl cursor-pointer text-secondary" />
              <p className="font-medium text-sm">LinkedIn</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.github.com/codedcontent"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaGithub className="text-3xl cursor-pointer text-secondary" />
              <p className="font-medium text-sm">GitHub</p>
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/@techwithoge6899"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <FaYoutube className="text-3xl cursor-pointer text-secondary" />
              <p className="font-medium text-sm">Youtube</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Buy me coffee */}
      <CoffeeButton onClick={buyMeCoffee} />
    </div>
  );
};

export default LeftSide;
