"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";

export default function Navbar() {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", windowScroll);
      }
    };
  }, []);

  function windowScroll() {
    setStickyNavbar(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link href="/" className="navbar-brand md:me-8">
          <Image
            width={96}
            height={20}
            src="/images/logos/Logo.png"
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            width={96}
            height={20}
            src="/images/logos/Logo.png"
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {/* <!-- Navbar Button --> */}
          <ul className="list-none menu-social mb-0">
            <li className="inline-flex">
              <Link href="" className="ms-1">
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilDribbble width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilDribbble width={16} />
                  </span>
                </span>
              </Link>
              <Link href="" className="ms-1">
                <span className="login-btn-primary ">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilBehance width={16} />
                  </span>
                </span>
                <span className="login-btn-light ">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilBehance width={16} />
                  </span>
                </span>
              </Link>
              <Link href="" className="ms-1">
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilInstagram width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilInstagram width={16} />
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          {/* <!-- Navbar Collapse Manu Button --> */}
          <button
            onClick={toggleMenu}
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className={`navigation lg_992:order-1 lg_992:flex ${
            isMenuOpen ? "block" : "hidden"
          } ms-auto`}
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="projectScop"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Project Scope
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="Milestones"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Milestones
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="Downloads"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Downloads
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="Aboutus"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="blog"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
