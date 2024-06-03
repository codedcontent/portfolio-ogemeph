"use client";
import Link from "next/link";
// import { useState, useEffect } from "react";
import { FaCoffee, FaEye } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

const CoffeeButton = ({ onClick }: Props) => {
  return (
    <Link
      // href={"https://www.buymeacoffee.com/ogemeph"}
      href={"https://youtube.com/@alexmephors?si=gQr8a0G0gZQQFTm6"}
      target="_blank"
      className="bg-transparent border-2 border-primary rounded-md text-white font-bold py-2 px-4 animate-bounce flex justify-center items-center w-max"
    >
      <FaEye className="text-black" />
      <span className="pl-2 text-black">Other stuff I do</span>
    </Link>
  );
};

export default CoffeeButton;
