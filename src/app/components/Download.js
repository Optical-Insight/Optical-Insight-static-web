import React from "react";
import Link from "next/link";
import { documentSet, presentationSet } from "../Data/data";
import * as Unicons from "@iconscout/react-unicons";
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaRegFilePowerpoint } from "react-icons/fa";

function Documents() {
  return (
    <section
      className="relative md:py-24 py-16 bg-white dark:bg-slate-800"
      id="Downloads"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Downloads
          </h3>
        </div>
        <div className="grid grid-cols-1  ">
          <h5 className="mb-6 md:text-lg text-lg text-amber-500 md:leading-normal leading-normal font-semibold">
            Documents
          </h5>{" "}
          <p
            className="text-slate-400 max-w-xl text-[15px]"
            style={{ marginTop: "-20px" }}
          >
            Please find all documents related to this project below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {documentSet.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-gray-50 dark:bg-slate-900"
                key={index}
              >
                <FaRegFilePdf className="h-10 w-10 stroke-1 text-amber-500" />

                <div className="content mt-7">
                  <p href="" className="title h5 text-[17px] font-medium ">
                    {item.title}
                  </p>
                  <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>

                  <div className="mt-5">
                    <Link
                      href={item.link}
                      className={`hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1 ${
                        !item.link ? "pointer-events-none opacity-50" : ""
                      }`}
                      target="_blank"
                    >
                      Download{" "}
                      <FiDownload width={16} style={{ marginLeft: "10px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1" style={{ marginTop: "50px" }}>
          <h5 className="mb-6 md:text-lg text-lg text-amber-500 md:leading-normal leading-normal font-semibold">
            Presentations
          </h5>
          <p
            className="text-slate-400 max-w-xl text-[15px]"
            style={{ marginTop: "-20px" }}
          >
            Please find all presentations related this project below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {presentationSet.map((item, index) => {
            const Icon = item.Icon; // If you have a specific icon for each item, adjust accordingly
            return (
              <div
                className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-gray-50 dark:bg-slate-900"
                key={index}
              >
                <FaRegFilePowerpoint className="h-10 w-10 stroke-1 text-amber-500" />

                <div className="content mt-7">
                  <p className="title h5 text-[17px] font-medium">
                    {item.title}
                  </p>
                  <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>

                  <div className="mt-5">
                    <Link
                      href={item.link}
                      className={`hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1 ${
                        !item.link ? "pointer-events-none opacity-50" : ""
                      }`}
                      target="_blank"
                    >
                      Download{" "}
                      <FiDownload width={16} style={{ marginLeft: "10px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Documents;
