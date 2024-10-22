"use client";
import React from "react";
import LiteratureSurvey from "./LiteratureSurvey";
import ResearchGap from "./ResearchGap";
import ResearchProblem from "./ResearchProblem";
import ResearchObjective from "./ResearchObjective";
import Methodology from "./Methodology";
import Technology from "./Technology";

export default function ProjectScope() {
  return (
    <section id="projectScop" className="md:pb-24 pb-16">
      <div className="relative md:py-24 py-16">
        <LiteratureSurvey />
      </div>
      <div className=" md:mb-24 mb-16 relative ">
        <ResearchGap />
      </div>{" "}
      <div className="relative md:py-24 py-16 ">
        <ResearchProblem />
      </div>
      <div className="relative md:py-24 py-16 ">
        <ResearchObjective />
      </div>
      <div className="relative  ">
        <Methodology />
      </div>
      <div className="relative   ">
        <Technology />
      </div>
    </section>
  );
}
