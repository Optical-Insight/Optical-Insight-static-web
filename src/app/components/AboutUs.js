"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { aboutUsSupervisors, aboutUsStudents } from "../Data/data";

const images = [
  "/images/aboutUs/dinukaWijendra.jpeg",
  "/images/aboutUs/dilshanDeSilva.jpeg",
  "/images/aboutUs/priyangaIddawela.jpg",
  "/images/aboutUs/kithminaSiriwardana.jpeg",
  "/images/aboutUs/UdeshPiyumantha.jpeg",
  "/images/aboutUs/shehanGunasekara.png",
  "/images/aboutUs/SahanThilakarathne.jpeg",
];

export default function AboutUs() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(!isOpen);
  };

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50" id="Aboutus">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              About Us
            </h3>

            <p className="text-slate-400  mx-auto text-[15px]">
              Meet our team of passionate professionals, driven by innovation{" "}
              <br />
              and expertise, committed to transforming healthcare through
              groundbreaking solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {aboutUsSupervisors.map((item, index) => {
              return (
                <div
                  className=" shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                  key={index}
                >
                  <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{ height: "auto", width: "100%" }}
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                      <Link
                        href={item.linkedIn}
                        className="text-white hover:text-amber-500 font-semibold transition-all duration-500 flex flex-row gap-[10px]"
                      >
                        <FaLinkedin />
                        <p style={{ marginLeft: "5px", marginTop: "-3px" }}>
                          {item.linkedInName}
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 flex flex-row gap-[10px] mt-1"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `mailto:${item.email}`;
                        }}
                      >
                        <MdOutlineMail />
                        <p style={{ marginLeft: "5px", marginTop: "-3px" }}>
                          {" "}
                          {item.email}
                        </p>
                      </Link>
                    </div>
                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(index)}
                        className="btn bg-amber-500  text-white btn-icon rounded-full lightbox"
                      >
                        <Unicons.UilCamera width={16} />
                      </Link>
                    </div>
                  </div>
                  <div className="p-3">
                    <p href="" className="title h4 text-[20px] font-medium ">
                      {item.name}
                    </p>
                    <p
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.memberType}
                    </p>
                    <p className=" mt-2 font-bold" style={{ fontSize: "12px" }}>
                      {item.position} <br />
                    </p>{" "}
                    <span
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.workPlace}
                    </span>
                    <p className=" mt-2 font-bold" style={{ fontSize: "12px" }}>
                      Department <br />
                    </p>{" "}
                    <span
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.department}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {aboutUsStudents.map((item, index) => {
              return (
                <div
                  className=" shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                  key={index}
                >
                  <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{ height: "auto", width: "100%" }}
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                      <Link
                        href={item.linkedIn}
                        className="text-white hover:text-amber-500 font-semibold transition-all duration-500 flex flex-row gap-[10px]"
                      >
                        <FaLinkedin />
                        <p style={{ marginLeft: "5px", marginTop: "-3px" }}>
                          {item.linkedInName}
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 flex flex-row gap-[10px] mt-1"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `mailto:${item.email}`;
                        }}
                      >
                        <MdOutlineMail />
                        <p style={{ marginLeft: "5px", marginTop: "-3px" }}>
                          {" "}
                          {item.email}
                        </p>
                      </Link>
                    </div>
                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                      <Link
                        href="#"
                        onClick={() => handleCLick(3 + index)}
                        className="btn bg-amber-500 text-white btn-icon rounded-full lightbox"
                      >
                        <Unicons.UilCamera width={16} />
                      </Link>
                    </div>
                  </div>
                  <div className="p-3">
                    <p href="" className="title h4 text-[20px] font-medium ">
                      {item.name}
                    </p>
                    <p
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.memberType}
                    </p>
                    <p className=" mt-2 font-bold" style={{ fontSize: "12px" }}>
                      {item.position} <br />
                    </p>{" "}
                    <span
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.workPlace}
                    </span>
                    <p className=" mt-2 font-bold" style={{ fontSize: "12px" }}>
                      Department <br />
                    </p>{" "}
                    <span
                      className="text-slate-400  mt-0 "
                      style={{ fontSize: "12px" }}
                    >
                      {item.department}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
