import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/src/components/smooth-scroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SAASTEK",
  description:
    "SAASTEK is a software development company specializing in building custom web applications and providing software solutions to businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
