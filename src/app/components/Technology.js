import React from "react";
import { expertiseData } from "../Data/data";

function Technology() {
  return (
    <div>
      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Technologies Used
          </h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {expertiseData.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                className="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900"
                key={index}
              >
                <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                  <div className="rotate-45">{item.Icon}</div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technology;
