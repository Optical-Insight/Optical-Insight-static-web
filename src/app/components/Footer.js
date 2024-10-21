"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="lg:col-span-5 text-center mt-6 md:mt-0">
            <p className="mb-0">
              © {new Date().getFullYear()} Optical Insight. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
