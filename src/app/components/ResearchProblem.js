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
                The diagnosis of retinal diseases such as Glaucoma, Macular Hole
                (MH), Central Serous Retinopathy (CSR), and Drusen remains a
                significant challenge in ophthalmology. Traditional diagnostic
                methods, which rely heavily on human expertise and manual
                interpretation of retinal fundus images, are prone to
                subjectivity, variability, and inefficiency. These issues are
                particularly critical in early-stage disease detection, where
                subtle changes in retinal structure can easily go unnoticed,
                leading to delayed treatment and worsening of patient outcomes.
                The complexity of accurately diagnosing these conditions is
                further compounded by variations in image quality, patient
                demographics, and the presence of other comorbidities, which
                often make consistent and accurate diagnoses difficult to
                achieve. Moreover, current imaging techniques, while capable of
                providing high-resolution retinal images, are still limited by
                the clinician’s ability to interpret the data consistently. This
                results in variability in diagnostic accuracy, especially in
                detecting the early and subtle manifestations of these diseases,
                which can lead to misdiagnoses or late-stage detection when
                treatment options are limited and less effective.
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
                This research introduces a hybrid deep learning approach that
                integrates multiple architectures to address the limitations of
                existing single-model techniques in detecting retinal diseases.
                By combining models such as ResNet, VGG16, DenseNet, U-Net, and
                YOLOv8x, the proposed solution leverages the strengths of each
                architecture to improve the accuracy, generalization, and
                robustness of automated diagnosis. For instance, the
                U-Net-ResNet hybrid model addresses the overfitting issues seen
                with Macular Hole detection, while the DenseNet-VGG16 hybrid
                enhances Central Serous Retinopathy detection. The YOLOv8x
                object detection model excels in Glaucoma detection by
                localizing and segmenting the optic disc with high precision.
              </p>
              <p className="text-slate-400 text-[15px] mt-6">
                To further enhance diagnostic consistency, the study employed
                data augmentation techniques to handle variability in patient
                demographics and image quality, preventing overfitting and
                improving model generalization. These models were integrated
                into a web-based application that allows healthcare
                professionals to upload fundus images and receive real-time
                diagnostic reports. With sensitivities and specificities
                exceeding 95%, the solution offers a powerful tool for early
                detection, significantly reducing dependency on human expertise
                and streamlining clinical workflows.
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
