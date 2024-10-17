"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Image from "next/image";
import { PiFirstAidFill } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
export default function HeroOne() {
  const [isOpenVideo, setOpenVideo] = useState(false);

  const handleVideo = () => {
    setOpenVideo(!isOpenVideo);
  };
  return (
    <>
      <section
        className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5"
        id="home"
      >
        <div className="absolute inset-0" id="overlay"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
              {" "}
              <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                <span className="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
                <span className="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
              </div>
              <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">
                Optical Insight
                <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Vision Insights.",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Retinal Detect.",
                    2000,
                    "Eye Precision.",
                    2000,
                    "Scan to See.",
                    2000,
                    "Eye Health AI.",
                    2000,
                    "Smart Retinal.",
                    2000,
                    "Vision Tech.",
                    2000,
                    "Detect & Map.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typewrite text-amber-500"
                  repeat={Infinity}
                />
                <span
                  className="typewrite text-amber-500"
                  data-period="2000"
                  data-type='[ "Dennis Scott", "Website Designer", "Web Developer", "UI/UX Designer" ]'
                >
                  {" "}
                  <span className="wrap"></span>{" "}
                </span>
              </h4>
              <p className="text-slate-400 max-w-xl mb-20">
                Enhancing Ophthalmic Diagnostics with Automated Detection of
                Retinal Abnormalities
              </p>
              <br />
              <button
                className="  text-white bg-amber-500 p-20 w-11 h-11 flex justify-center items-center border rounded-full"
                onClick={handleVideo}
              >
                <FaPlay />
              </button>
            </div>

            <div className="relative">
              <Image
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "auto", width: "100%" }}
                src="/images/hero/doctor.png"
                alt=""
              />

              <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <span className="text-3xl font-medium mb-0">
                  <span className="counter-value font-bold" data-target="125">
                    {" "}
                    <CountUp
                      start={0}
                      className="counter-value"
                      end={8}
                      duration={2.75}
                    />
                  </span>
                </span>
                <h6 className="text-sm text-slate-400 mt-1">Models Trained</h6>
              </div>

              <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <h6 className="font-semibold">To Detect</h6>
                <h6 className="text-sm text-slate-400 mt-1">4 Diseases</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
          <Link href="#projectScop">
            <i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
          </Link>
        </div>
      </div>
      <ModalVideo
        channel="youtube" // You can change this to 'vimeo' or other supported platforms
        autoplay
        isOpen={isOpenVideo}
        videoId="w9RxpQwho0o" // Replace with your video ID
        onClose={handleVideo}
      />
    </>
  );
}
