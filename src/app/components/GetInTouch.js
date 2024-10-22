"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

export default function GetInTouch() {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    setIsSendingEmail(true);
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        reset();
        setIsSendingEmail(false);
        toast.success("Email Sent");
      })
      .catch((err) => {
        setIsSendingEmail(false);
        toast.error("Error sending email");
      });
  }

  return (
    <section
      className="relative md:py-24 py-16 bg-white dark:bg-slate-800"
      id="contact"
    >
      <Toaster />
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Get In Touch !
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            For further inqueries please reach us at opticalinsight24@gmail.com
            <br />
            Hope this project helped you in some manner. Thank you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mt-8 justify-center items-center gap-[30px]">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Name can only contain letters and spaces",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className=" text-sm mt-1" style={{ color: "red" }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        className="text-red-500 text-sm mt-1"
                        style={{ color: "red" }}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="subject"
                      id="subject"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 4,
                          message: "Subject must be at least 4 characters",
                        },
                        maxLength: {
                          value: 100,
                          message: "Subject cannot exceed 100 characters",
                        },
                      })}
                    />
                    {errors.subject && (
                      <p
                        className="text-red-500 text-sm mt-1"
                        style={{ color: "red" }}
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="message"
                      id="message"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Message"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                        maxLength: {
                          value: 1000,
                          message: "Message cannot exceed 1000 characters",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <p
                        className="text-red-500 text-sm mt-1"
                        style={{ color: "red" }}
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn bg-amber-500 text-white rounded-md h-11 justify-center flex items-center"
                  disabled={isSendingEmail}
                  style={{ minWidth: "180px" }}
                >
                  {isSendingEmail ? "Sending..." : "      Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
