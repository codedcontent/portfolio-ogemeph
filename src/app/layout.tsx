import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font--poppins",
});

export const metadata: Metadata = {
  title: "Ogechukwu Mephors | Software Engineer",
  description: "Welcome to my portfolio. I am Ogechukwu Mephors come on in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
