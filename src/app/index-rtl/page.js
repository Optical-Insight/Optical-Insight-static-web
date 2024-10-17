"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const HeroOne = dynamic(() => import("../components/HeroOne"));
const AboutUs = dynamic(() => import("../components/ProjectScope"));
const Services = dynamic(() => import("../components/Service"));
const CTABanner = dynamic(() => import("../components/CTABanner"));
const Experience = dynamic(() => import("../components/Experience"));
const Projects = dynamic(() => import("../components/AboutUs"));
const Clients = dynamic(() => import("../components/Clients"));
const Blogs = dynamic(() => import("../components/Blogs"));
const GetInTouch = dynamic(() => import("../components/GetInTouch"));
const Footer = dynamic(() => import("../components/Footer"));
const Switcher = dynamic(() => import("../components/Switcher"));

export default function IndexRtl() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.classList.add("light");
    }
  }, []);
  return (
    <>
      <Navbar />
      <HeroOne />
      <AboutUs />
      <Services />
      <CTABanner />
      <Experience />
      <Projects />
      <Clients />
      <Blogs />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
