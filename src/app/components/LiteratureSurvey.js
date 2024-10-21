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
                Recent advancements in automated detection and segmentation of
                retinal diseases, particularly age-related macular degeneration
                (AMD), have seen notable success with the integration of machine
                learning techniques. Kim et al. (2018) emphasized the critical
                need for accurate drusen segmentation, a key biomarker in AMD
                diagnosis, highlighting a 92% accuracy rate using automated
                methods. Building on this, Mohaimin et al. (2018) introduced
                techniques for drusen enhancement through color fundus imaging,
                showing a 15% improvement in segmentation accuracy.
              </p>
              <p className="text-slate-400 max-w-xl text-[15px] mt-6">
                Deep learning, specifically Convolutional Neural Networks
                (CNNs), has further elevated diagnostic precision. A forthcoming
                study reports a 96% accuracy rate in drusen detection,
                reinforcing the potential of CNNs in medical imaging. Meanwhile,
                glaucoma detection has also benefited from CNN architectures,
                with models like U-Net and Xception ResNet achieving accuracies
                of up to 98% for optic disc and cup segmentation, crucial for
                cup-to-disc ratio (CDR) calculation.
              </p>
            </div>
          </div>
        </div>

        <div className=" items-center gap-[30px]">
          <div className="lg:col-span-12">
            <div className="lg:ms-5">
              <p className="text-slate-400 text-[15px] mt-4">
                Emerging research explores the detection of other retinal
                diseases such as macular holes (MHs) and central serous
                retinopathy (CSR). YOLOv7 has demonstrated a 94% accuracy in MH
                detection, while CNN-based models for CSR have reached
                accuracies up to 93%. These models, combined with preprocessing
                techniques like contrast enhancement, show promise for improving
                diagnostic reliability. However, challenges remain in developing
                models capable of generalizing across diverse clinical datasets.
                Despite these obstacles, the integration of deep learning into
                retinal disease diagnostics is proving transformative, offering
                enhanced accuracy and efficiency in clinical settings.
              </p>
              <div className="text-slate-400 text-[15px] mt-6">
                <span className="font-bold">References:</span>
                <p className="text-slate-400 text-[15px]">
                  [1] K. Yenice, C. Kara, T. Türkoglu, D. Işık, İ. Çelik,
                  “Predictive value of serum inflammatory markers in retinopathy
                  of prematurity,” Eye, Jul. 2024.
                </p>
                <p className="text-slate-400 text-[15px]">
                  [2] J. You, A. Perkis and M. Gabbouj, "Improving image quality
                  assessment with modeling visual attention," 2010 2nd European
                  Workshop on Visual Information Processing (EUVIP), Paris,
                  France, 2010, pp. 177-182.
                </p>
                <p className="text-slate-400 text-[15px]">
                  [3] P. Mitchell, W. Smith, K. Attebo, J. Wang, “Prevalence of
                  Age-related Maculopathy in Australia,” The Blue Mountains Eye
                  Study, Ophthalmology, vol. 102, no. 10, pp. 1450–1460, Oct.
                  1995.
                </p>
                <p className="text-slate-400 text-[15px]">
                  [4] S. Waseem, M. U. Akram and B. A. Ahmed, "Drusen detection
                  from colored fundus images for diagnosis of age related
                  Macular degeneration," 7th International Conference on
                  Information and Automation for Sustainability, Colombo, Sri
                  Lanka, 2014, pp. 1-5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiteratureSurvey;
