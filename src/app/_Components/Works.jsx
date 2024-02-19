import React from "react";
import Image from "next/image";
import { works } from "../constants";

const Works = () => {
  return (
    <section id="works" className="min-h-screen pt-5">
      <div className="text-center py-3 header opacity-0">
        <h1 className="text-3xl font-semibold text-slate-700">Works</h1>
        <p className="py-1 text-sm opacity-80">The Things That I Made.</p>
      </div>
      {works?.map((work, index) => (
        <div key={index} className="md:my-10 my-5 px-8 work">
          <div
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-1 justify-center items-center`}
          >
            <Image
              src={work?.image}
              height={250}
              width={500}
              alt={`${work?.title}-${index}`}
              className="md:w-1/2 w-full max-h-[400px] h-[250px] rounded-lg shadow-md object-cover opacity-0"
            />
            <div
              className={`${
                index % 2 === 1 ? "md:text-right text-left" : "text-left"
              } md:px-3 py-2 opacity-0`}
            >
              <h1 className="text-2xl font-bold">{work?.title}</h1>
              <p className="md:text-base text-sm opacity-80 py-2">
                {work?.description}
              </p>
              <div
                className={`flex md:gap-3 gap-1 items-center font-bold text-lg py-2 flex-wrap ${
                  index % 2 === 1
                    ? "md:justify-end justify-start"
                    : "justify-start"
                }`}
              >
                <p className="opacity-70">Stacks:</p>
                {work?.stacks?.map((stack, index) => (
                  <h1 key={index}>{stack}</h1>
                ))}
              </div>
              <div
                className={`flex md:gap-3 gap-1 items-center text-lg py-2 ${
                  index % 2 === 1
                    ? "md:justify-end justify-start"
                    : "justify-start"
                }`}
              >
                <a
                  href={work?.repository}
                  target="_blank"
                  className="rounded-md gap-2 text-base hover:scale-105 group hover:brightness-105 transition cursor-pointer flex items-center bg-[#0001] font-semibold px-3 py-2"
                >
                  <p>Code</p>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={work?.url}
                  target="_blank"
                  className="rounded-md gap-2 text-base hover:scale-105 group hover:brightness-105 transition font-semibold cursor-pointer flex items-center bg-slate-700 text-white px-3 py-2"
                >
                  <p>Live Demo</p>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;
