import React from "react";
import { ResearchObjectiveData } from "../Data/data";

function ResearchObjective() {
  return (
    <>
      <div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              Research Objectives
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              Identify and delineate the tendency of diseases and abnormalities
              through retinal insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {ResearchObjectiveData.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-gray-50 dark:bg-slate-900 flex flex-row text-center"
                  key={index}
                >
                  <div className="content mt-7">
                    <p href="" className="title h5 text-[17px] font-medium ">
                      {item.title}
                    </p>
                    <p className="text-slate-400 mt-3 text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchObjective;
