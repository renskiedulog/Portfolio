"use client";
import Image from "next/image";
import { useState } from "react";
import { services } from "../constants";

const Services = () => {
  const [displayed, setDisplayed] = useState(null);
  return (
    <section id="services" className="min-h-screen md:pt-[4rem] pt-5 w-full">
      <div className="text-center py-3 header">
        <h1 className="text-3xl font-semibold text-slate-700">Services</h1>
        <p className="py-1 text-sm opacity-80">What I Can Offer You.</p>
      </div>
      <div className="flex md:flex-row md:gap-2 flex-col items-center mt-10 services">
        <button
          onClick={() => setDisplayed(services[0])}
          className="bg-white opacity-0 shadow-sm border border-[#0001] group cursor-pointer hover:scale-[1.02] px-3 py-2 rounded-md min-w-48 md:w-1/4 w-1/2 my-2 aspect-square flex flex-col items-center justify-center mx-auto"
        >
          <Image
            src="/web-design.svg"
            alt="web-design"
            width={50}
            height={50}
          />
          <p className="py-2 text-xl text-center">Web Design</p>
          <div className="opacity-70 flex gap-2 items-center text-sm">
            <p>View Details</p>
            <i className="fa-solid fa-arrow-right opacity-70 text-sm group-hover:translate-x-2 transition"></i>
          </div>
        </button>
        <button
          onClick={() => setDisplayed(services[1])}
          className="bg-white opacity-0 shadow-sm border border-[#0001] group cursor-pointer hover:scale-[1.02] px-3 py-2 rounded-md min-w-48 md:w-1/4 w-1/2 my-2 aspect-square flex flex-col items-center justify-center mx-auto"
        >
          <Image
            src="/web-programming.svg"
            alt="programming"
            width={50}
            height={50}
          />
          <p className="py-2 text-xl text-center">Code Implementation</p>
          <div className="opacity-70 flex gap-2 items-center text-sm">
            <p>View Details</p>
            <i className="fa-solid fa-arrow-right opacity-70 text-sm group-hover:translate-x-2 transition"></i>
          </div>
        </button>
        <button
          onClick={() => setDisplayed(services[2])}
          className="bg-white opacity-0 shadow-sm border border-[#0001] group cursor-pointer hover:scale-[1.02] px-3 py-2 rounded-md min-w-48 md:w-1/4 w-1/2 my-2 aspect-square flex flex-col items-center justify-center mx-auto"
        >
          <Image src="/testing.svg" alt="programming" width={50} height={50} />
          <p className="py-2 text-xl text-center">
            Quality Assurance
            <br />
            Software Testing
          </p>
          <div className="opacity-70 flex gap-2 items-center text-sm">
            <p>View Details</p>
            <i className="fa-solid fa-arrow-right opacity-70 text-sm group-hover:translate-x-2 transition"></i>
          </div>
        </button>
      </div>
      {displayed !== null && (
        <div className="opacity-0 pop-up fixed w-4/5 h-4/5 bg-white z-50 shadow border border-[#0001] overflow-y-auto top-1/2 left-1/2 translate-x-[-50%] -translate-y-[55%] md:-translate-y-[45%] rounded-md md:px-5 px-2 md:py-3 py-2 md:pt-0 pt-5 scrollbar">
          <i
            className="fa-solid fa-x absolute top-3 right-4 text-sm cursor-pointer hover:scale-105 z-40"
            onClick={() => setDisplayed(null)}
          ></i>
          <h1 className="p-3 text-center text-2xl font-bold opacity-70">
            {displayed?.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center h-[85%]">
            <Image
              src={displayed?.image}
              width={450}
              height={450}
              className="w-full max-w-[400px]"
              alt={displayed?.title}
            />
            <div className="px-3 py-2 self-start">
              <p className="font-medium lg:text-base md:text-sm text-sm opacity-90 mx-auto">
                {displayed?.description}
              </p>
              <div className="flex flex-col gap-2 py-3">
                {displayed?.services?.map((service, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <i className="fa-regular fa-circle-check text-lg text-[green]"></i>
                    <p>{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
