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
    title: "Gap 1",
    desc: "The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Airplay,
  },
  {
    title: "Gap 2",
    desc: "The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Aperture,
  },
  {
    title: "Photography",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Camera,
  },
  {
    title: "Graphic Designer",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Compass,
  },
  {
    title: "Web Security",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Settings,
  },
  {
    title: "Web Security",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Watch,
  },
];

export const documentSet = [
  {
    title: "Topic Assessment",
    desc: "The phrasal sequence of the is now so that many ",
    link: "",
  },
  {
    title: "Project Charter",
    desc: "The phrasal sequence of the is now so that many campaign and benefit The phrasal ",
    link: "",
  },
  {
    title: "Project Proposal",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Status Documents I",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Status Documents II",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Research Paper",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Final Report",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Poster",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
];

export const presentationSet = [
  {
    title: "Project Proposal",
    desc: "The phrasal sequence of the is now so that many ",
    link: "",
  },
  {
    title: "Progress Presentation I",
    desc: "The phrasal sequence of the is now so that many campaign and benefit The phrasal ",
    link: "https://drive.google.com/file/d/1FBFyl0UPC4iANVhblm9sUVF-4wMAT1O-/view?usp=sharing",
  },
  {
    title: "Progress Presentation II",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
  },
  {
    title: "Final Presentation",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    link: "",
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
    title:
      "Objective 4: Identifying and Delineating Central Serous Retinopathy",
    desc: "CSR involves fluid accumulation under the retina, causing visual disturbances. This objective focuses on developing a hybrid DenseNet-VGG16 model that accurately identifies CSR across varying imaging conditions and demographics. By detecting fluid buildup early and reliably, the model will enable better disease management and quicker treatment, reducing the potential for long-term visual impairment in patients.",
    Icon: Icon.Compass,
  },
  {
    title:
      "Objective 5: Enhancing Generalization and Reducing Overfitting in Deep Learning Models",
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
