"use client";
import Link from "next/link";
// import { useState, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

const CoffeeButton = ({ onClick }: Props) => {
  return (
    <Link
      href={"https://www.buymeacoffee.com/ogemeph"}
      target="_blank"
      className="bg-transparent border-2 border-primary rounded-md text-white font-bold py-2 px-4 animate-bounce flex justify-center items-center w-max"
    >
      <FaCoffee className="text-black" />
      <span className="pl-6 text-black">Buy me a coffee</span>
    </Link>
  );
};

export default CoffeeButton;
