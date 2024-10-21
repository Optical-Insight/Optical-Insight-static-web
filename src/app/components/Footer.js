"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";
export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              {/* <Link href="#" className="text-[22px] focus:outline-none">
                 <Image
                  src="/images/logo-light.png"
                  width={96}
                  height={20}
                  className="mx-auto md:me-auto md:ms-0"
                  alt=""
                /> 
                <Image
                  width={96}
                  height={20}
                  src="/images/logos/Logo.png"
                  className="inline-block dark:hidden"
                  alt=""
                /> 
                <h1>
                  <span>Optical Insight</span>
                </h1>
              </Link> */}
            </div>

            <div className="lg:col-span-5 text-center mt-6 md:mt-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Optical Insight. All rights
                reserved.
              </p>
            </div>

            <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
              {/* <li className="inline">
                {" "}
                <Link
                  href="mailto:opticalinsight24@gmail.com"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"
                >
                  <Unicons.UilEnvelope width={16} />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
