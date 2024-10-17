import React from "react";

import Image from "next/image";
import { expertiseData } from "../Data/data";

function LiteratureSurvey() {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
              <Image
                src="/images/literatureSurvey.jpg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "auto", width: "100%" }}
                className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="lg:ms-5">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Literature Survey
              </h3>

              <p className="text-slate-400 max-w-xl text-[15px]">
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
                am a Web Designer. Web Developer with over 7 years of
                experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
                am a Web Designer. Web Developer with over 7 years of
                experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
              </p>
              <p className="text-slate-400 max-w-xl text-[15px] mt-6">
                I am a professional web designer. My motive is to build a best
                web design with my all years of experience.
              </p>
            </div>
          </div>
        </div>

        <div className=" items-center gap-[30px]">
          <div className="lg:col-span-12">
            <div className="lg:ms-5">
              <p className="text-slate-400  text-[15px]">
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
                Obviously I am a Web Designer. Web Developer with over 7 years
                of experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
                am a Web Designer. Web Developer with over 7 years of
                experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
                am a Web Designer. Web Developer with over 7 years of
                experience. Experienced with all stages of the development
                content here, making it look like readable English. Obviously I
                am a Web Designer. Web Developer with over 7 years of
                experience. Experienced with all stages of the development
              </p>
              <p className="text-slate-400 max-w-xl text-[15px] mt-6">
                I am a professional web designer. My motive is to build a best
                web design with my all years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiteratureSurvey;
