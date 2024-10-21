"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroOne = dynamic(() => import("./components/HeroOne"));
const ProjectScope = dynamic(() => import("./components/ProjectScope"));
const Milestones = dynamic(() => import("./components/Milestones"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const GetInTouch = dynamic(() => import("./components/GetInTouch"));
const Footer = dynamic(() => import("./components/Footer"));
const Download = dynamic(() => import("./components/Download"));

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);
  return (
    <>
      <Navbar />
      <HeroOne />
      <ProjectScope />
      <Milestones />
      <Download />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </>
  );
}
