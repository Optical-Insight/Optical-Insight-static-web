import React from "react";
import Image from "next/image";
function Milestones() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="Milestones"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Timeline in Brief
          </h3>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
            <div className="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image
                    src="/images/logos/facebook-logo-2019.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Facebook</h5>
                  <h6 className="text-sm mb-0">2019-21</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Project Proposal</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    A Project Proposal is presented to potential sponsors or
                    clients to receive funding or get your project approved.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start md:ms-8 relative md:order-2">
                  {/* <Image
                    src="/images/logos/google-logo.png"
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Google Tech.</h5>
                  <h6 className="text-sm mb-0">2018-19</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">
                    Progress Presentation I
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Progress Presentation I reviews the 50% completetion status
                    of the project. This reveals any gaps or inconsistencies in
                    the design/requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image
                    src="/images/logos/lenovo-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                  <h6 className="text-sm mb-0">2016-18</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">Research Paper</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Describes what you contribute to existing knowledge, giving
                    due recognition to all work that you referred in making new
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start md:ms-8 relative md:order-2">
                  {/* <Image
                    src="/images/logos/circle-logo.png"
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                  <h6 className="text-sm mb-0">2015-16</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">
                    Progress Presentation II
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Progress Presentation II reviews the 90% completetion status
                    demonstration of the project. Along with a Poster
                    presesntation which describes the project as a whole.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image
                    src="/images/logos/lenovo-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                  <h6 className="text-sm mb-0">2016-18</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    {" "}
                    Website Assessment
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    The Website helps to promote our research project and
                    reveals all details related to the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start md:ms-8 relative md:order-2">
                  {/* <Image
                    src="/images/logos/circle-logo.png"
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                  <h6 className="text-sm mb-0">2015-16</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">Logbook</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Status of the project is validated through the Logbook. This
                    also includes, Status documents 1 & 2.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image
                    src="/images/logos/lenovo-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                  <h6 className="text-sm mb-0">2016-18</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    {" "}
                    Final Presentation & Viva
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Viva is held individually to assess each members
                    contribution to the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="text-start md:ms-8 relative md:order-2">
                  {/* <Image
                    src="/images/logos/circle-logo.png"
                    className="rounded-full h-9 w-9 md:me-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Circle CI</h5>
                  <h6 className="text-sm mb-0">2015-16</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                  <h5 className="title mb-1 font-semibold">Final Report</h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    Final Report evalutes the completed project done throughout
                    the year. Marks mentioned below includes marks for
                    Individual & group reports and also Final report.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
              <div className="grid md:grid-cols-2">
                <div className="md:text-end md:me-8 relative">
                  {/* <Image
                    src="/images/logos/lenovo-logo.png"
                    className="rounded-full h-9 w-9 md:ms-auto"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ with: "100%", height: "auto" }}
                  />
                  <h5 className="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                  <h6 className="text-sm mb-0">2016-18</h6> */}
                </div>

                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                  <h5 className="title mb-1 font-semibold">
                    {" "}
                    Final Presentation & Viva
                  </h5>
                  <p className="mt-3 mb-0 text-slate-400 text-[15px]">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
