import React from "react";
import Image from "next/image";

function Methodology() {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 border dark:border-gray-800 mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
              <Image
                src="/images/systemOverview.svg"
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                style={{ height: "auto", width: "100%" }}
                className=" shadow-md shadow-gray-200 dark:shadow-gray-800"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="lg:ms-5">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Methodology
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
      </div>

      {/* <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
          Hobbies & Expertise
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
          Obviously I am a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </p>
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
                <div className="rotate-45">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-0 text-[17px] font-medium">{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div> */}
    </div>
  );
}

export default Methodology;
