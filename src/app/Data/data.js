import * as Icon from "react-feather";
import { RiNextjsLine } from "react-icons/ri";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoDocker } from "react-icons/io5";
import { SiGooglecolab } from "react-icons/si";
import { PiOpenAiLogoThin } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import { FaAws } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiFlask } from "react-icons/si";

export const expertiseData = [
  {
    title: "Flask",
    Icon: <SiFlask className="h-5 w-5" />,
  },
  {
    title: "Next.js",
    Icon: <RiNextjsLine className="h-5 w-5" />,
  },
  {
    title: "Nest.JS",
    Icon: <SiNestjs className="h-5 w-5" />,
  },
  {
    title: "Tensorflow",
    Icon: <SiTensorflow className="h-5 w-5" />,
  },
  {
    title: "Keras",
    Icon: <SiKeras className="h-5 w-5" />,
  },
  {
    title: "AWS",
    Icon: <FaAws className="h-5 w-5" />,
  },

  {
    title: "Google Cloud",
    Icon: <BiLogoGoogleCloud className="h-5 w-5" />,
  },
  {
    title: "MongoDB",
    Icon: <SiMongodb className="h-5 w-5" />,
  },
  {
    title: "Docker",
    Icon: <IoLogoDocker className="h-5 w-5" />,
  },
  {
    title: "Google Colab",
    Icon: <SiGooglecolab className="h-5 w-5" />,
  },

  {
    title: "OpenAI",
    Icon: <PiOpenAiLogoThin className="h-5 w-5" />,
  },
  {
    title: "Notify.lk",
    Icon: <MdMessage className="h-5 w-5" />,
  },
];
export const ResearchGapData = [
  {
    title: "Limitations in Disease Detection and Quantification",
    desc: "Current models primarily focus on binary classification (i.e., detecting the presence or absence of a disease) rather than quantifying the extent of the disease. There is a need for methodologies that not only detect diseases but also measure their size and spread within the retina, which is critical for effective disease management.",
    Icon: Icon.Airplay,
  },
  {
    title: "Need for Regional Delineation and Disease Spread Analysis",
    desc: "Existing research lacks robust methodologies for delineating affected regions in the retina. Without clear mapping of disease spread, clinicians are limited in their ability to assess disease progression and make informed treatment decisions. Developing techniques that highlight specific areas affected by disease will enhance clinical decision-making.",
    Icon: Icon.Aperture,
  },
  {
    title: "Use of Local Data Sets",
    desc: "Many current models are trained on European datasets, which do not adequately represent the retinal characteristics of non-European populations, such as those in Sri Lanka and Asia. The absence of local datasets can lead to inaccuracies in diagnostic models. There is a critical need for research that utilizes local data to improve model relevance and effectiveness for specific populations.",
    Icon: Icon.Camera,
  },
  {
    title: "Inadequate Training on Diverse Retinal Features",
    desc: "Training models on datasets that are not representative of diverse populations limits the generalizability of these models. There is a need for studies that encompass a variety of retinal features specific to different demographics to enhance model performance across populations.",
    Icon: Icon.Watch,
  },
  {
    title: "Development of Web-Based Clinical Applications",
    desc: "While diagnostic models are being developed, there is a significant gap in translating these models into practical, user-friendly web-based applications for clinical use. Developing intuitive applications will facilitate the integration of diagnostic tools into clinical practice, making them more accessible for healthcare professionals and patients alike.",
    Icon: Icon.Compass,
  },
  {
    title: "Lack of Comprehensive Diagnostic Reports",
    desc: "Current systems may not provide detailed diagnostic reports that encompass disease identification, quantification, and regional delineation. A comprehensive reporting system is needed to enhance the diagnostic process and improve clinical outcomes.",
    Icon: Icon.Settings,
  },
];

export const documentSet = [
  {
    title: "Topic Assessment",
    desc: "",
    link: "",
  },
  // {
  //   title: "Project Charter",
  //   desc: "The phrasal sequence of the is now so that many campaign and benefit The phrasal ",
  //   link: "",
  // },
  {
    title: "Project Proposals",
    desc: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    link: "https://drive.google.com/drive/folders/1LLoOXw4SAdiIbYUXSFU4rhiREvrTAdEy?usp=sharing",
  },
  {
    title: "Status Documents I",
    desc: "",
    link: "https://drive.google.com/drive/folders/1t-JJVs_spmTSiiQ5zcGq1rbQmFSJ5s7r?usp=sharing",
  },
  {
    title: "Status Documents II",
    desc: "",
    link: "https://drive.google.com/drive/folders/1iVqkfd2z7H_FP_4EUU12DBMXMRBS35Fq?usp=sharing",
  },
  {
    title: "Research Paper",
    desc: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    link: "",
  },
  {
    title: "Final Reports",
    desc: "Final Report summarizes the outcomes and findings of a project, providing a comprehensive overview for stakeholders and ensuring accountability.",
    link: "https://drive.google.com/drive/folders/1qkvHQn3_yd_IJ000sdEnCEnAOP0kOIWf?usp=sharing",
  },
  {
    title: "Poster",
    desc: "",
    link: "",
  },
];

export const presentationSet = [
  {
    title: "Project Proposal",
    desc: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    link: "https://docs.google.com/presentation/d/10SC2VgXWOwdpVfaK5lrF1Imkl-YjUlC8/edit?usp=sharing&ouid=111504427288575962898&rtpof=true&sd=true",
  },
  {
    title: "Progress Presentation I",
    desc: "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    link: "https://docs.google.com/presentation/d/11LQBShnvMyMmy4YgHwN2OrPv_5O3XbwN/edit?usp=sharing&ouid=111504427288575962898&rtpof=true&sd=true",
  },
  {
    title: "Progress Presentation II",
    desc: "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
    link: "https://docs.google.com/presentation/d/1IGJ0wPMgDjq7OTkA9Gum0kKxu1_RxPqn/edit?usp=sharing&ouid=111504427288575962898&rtpof=true&sd=true",
  },
  {
    title: "Final Presentation",
    desc: "Final Presentation reviews the completeted demonstration of the project.",
    link: "https://docs.google.com/presentation/d/1IGJ0wPMgDjq7OTkA9Gum0kKxu1_RxPqn/edit?usp=sharing&ouid=111504427288575962898&rtpof=true&sd=true",
  },
];

export const ResearchObjectiveData = [
  {
    title: "Objective 1: Identifying and Delineating Glaucoma",
    desc: "The objective is to develop a deep learning model that can accurately detect and delineate Glaucoma by focusing on optic nerve damage and optic disc localization. Using YOLOv8x for object detection, the model will account for variations in image quality and demographic differences. This will provide early diagnosis, reduce human error, and allow for timely intervention, thereby preventing vision loss.",
    Icon: Icon.Airplay,
  },
  {
    title: "Objective 2: Identifying and Delineating Drusen",
    desc: "Drusen are early indicators of Age-related Macular Degeneration (AMD), and detecting them accurately is crucial for early treatment. This objective aims to design a hybrid ResNet-VGG16 model that can differentiate Drusen from other retinal features, ensuring precise delineation. High sensitivity and specificity in Drusen detection will help in the early identification of AMD, enhancing patient monitoring and treatment outcomes.",
    Icon: Icon.Aperture,
  },
  {
    title: "Objective 3: Identifying and Delineating Macular Holes",
    desc: "Macular Holes lead to significant vision impairment if not diagnosed early. The research aims to create a hybrid U-Net-ResNet model to detect and segment even subtle early-stage macular holes. By overcoming challenges like overfitting and variability in image quality, the model will ensure precise localization, improving the chances of early intervention and preventing permanent vision damage.",
    Icon: Icon.Camera,
  },
  {
    title: "Objective 4: Identifying and Delineating CSR",
    desc: "CSR involves fluid accumulation under the retina, causing visual disturbances. This objective focuses on developing a hybrid DenseNet-VGG16 model that accurately identifies CSR across varying imaging conditions and demographics. By detecting fluid buildup early and reliably, the model will enable better disease management and quicker treatment, reducing the potential for long-term visual impairment in patients.",
    Icon: Icon.Compass,
  },
  {
    title: "Objective 5: Enhancing the trained Deep Learning Models",
    desc: "Another key objective is to ensure the models generalize well across diverse datasets, addressing the common issue of overfitting. By employing advanced data augmentation techniques and hyperparameter tuning, the research seeks to create robust models that maintain high accuracy and consistency even when faced with demographic and image variability. This objective ensures that the models can be reliably applied to a wide range of clinical scenarios.",
    Icon: Icon.Settings,
  },
  {
    title: "Objective 6: Creating a Web-Based Application",
    desc: "The research aims to develop a web-based application that integrates these trained models for real-world clinical use. The application will allow healthcare professionals to upload retinal images, receive real-time diagnostic results, and visualize areas of concern. Built with a microservice architecture, the system will be scalable, user-friendly, and capable of enhancing clinical workflows while ensuring timely and accurate diagnostics.",
    Icon: Icon.Watch,
  },
];
export const project = [
  {
    image: "/images/works/1.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/2.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/3.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/4.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/5.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/6.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/7.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/8.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
];
export const blogData = [
  {
    image: "/images/blog/01_giglink.jpg",
    title: "Giglink: Tailwind CSS NFT Marketplace Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_techwind.jpg",
    title: "Techwind: Tailwind CSS Multipurpose Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_upwind.jpg",
    title: "Upwind: Tailwind CSS Landing Page Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
];
export const review = [
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
];
