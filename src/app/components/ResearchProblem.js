import React from "react";

import Image from "next/image";
function ResearchProblem() {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-6">
            <div className="lg:ms-5">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                Research Problem & Solution
              </h3>

              <h5 className="mb-6 md:text-lg text-lg text-amber-500 md:leading-normal leading-normal font-semibold">
                Research Problem
              </h5>

              <p className="text-slate-400 max-w-xl text-[15px] text-justify">
                Retinal diseases such as Age-Related Macular Degeneration (AMD),
                glaucoma, and Central Serous Retinopathy (CSR) are leading
                causes of blindness, particularly among the elderly. Early
                detection is vital, yet current manual diagnostic methods are
                prone to errors, especially in identifying complex retinal
                features like Drusen. Additionally, most diagnostic models are
                developed using datasets from European populations, making them
                less effective in non-European regions like Sri Lanka. The lack
                of automated, localized diagnostic systems hinders efficient and
                accurate detection, leaving many patients vulnerable to
                preventable vision loss, especially in resource-poor settings.
              </p>
              {/* <p className="text-slate-400 max-w-xl text-[15px] mt-6">
                I am a professional web designer. My motive is to build a best
                web design with my all years of experience.
              </p> */}
            </div>
          </div>{" "}
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
        </div>

        <div className=" items-center gap-[30px]">
          <div className="lg:col-span-12">
            <div className="lg:ms-5">
              <br />
              <br />{" "}
              <h5 className="mb-6 md:text-lg text-lg text-amber-500 md:leading-normal leading-normal font-semibold">
                Research Solution
              </h5>
              <p className="text-slate-400 text-[15px]">
                To address the limitations of current retinal disease
                diagnostics, this research aims to develop an automated,
                AI-powered diagnostic system that enhances early detection and
                treatment of retinal conditions like AMD, glaucoma, CSR, and
                macular holes. By leveraging deep learning models, especially
                convolutional neural networks and advanced techniques like
                transfer learning, the system will improve accuracy and
                efficiency in identifying retinal abnormalities. A comprehensive
                dataset of retinal images will be collected from Sri Lankan eye
                care centers, ensuring that the model is trained on
                population-specific data, making it culturally and
                geographically relevant.
              </p>
              <p className="text-slate-400 text-[15px] mt-6">
                Additionally, a user-friendly, web-based platform will be
                developed, allowing healthcare professionals to easily upload
                retinal images for analysis. The platform will integrate AI
                diagnostic models capable of detecting and quantifying various
                retinal diseases, delivering actionable insights that are easy
                to interpret. This will not only improve the accuracy of
                diagnoses but also enable healthcare workers in resource-limited
                settings to make informed decisions, reducing the time and labor
                associated with current manual methods. Ultimately, this
                solution will enhance clinical outcomes by increasing
                accessibility to accurate diagnostics, empowering both
                healthcare providers and patients in managing retinal diseases.
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

export default ResearchProblem;
