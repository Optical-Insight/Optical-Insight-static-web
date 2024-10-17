"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroOne = dynamic(() => import("./components/HeroOne"));
const ProjectScope = dynamic(() => import("./components/ProjectScope"));
const Milestones = dynamic(() => import("./components/Milestones"));
const Services = dynamic(() => import("./components/Service"));
const CTABanner = dynamic(() => import("./components/CTABanner"));
const Experience = dynamic(() => import("./components/Experience"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const Clients = dynamic(() => import("./components/Clients"));
const Blogs = dynamic(() => import("./components/Blogs"));
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
      <Services />
      <CTABanner />
      <Experience />
      <Clients />
      <Blogs />
      <GetInTouch />
      <Footer />
      {/* <Switcher /> */}
    </>
  );
}
