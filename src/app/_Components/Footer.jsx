import React from "react";

const Footer = () => {
  return (
    <section className="absolute footer w-full min-h-[40vh] py-5 flex flex-col justify-between items-center left-0 md:pb-8 pb-16">
      <a href="#home" className="text-3xl font-semibold text-slate-700">
        Renato Dulog.
      </a>
      <div className="flex md:gap-5 gap-3 justify-center font-medium text-slate-800">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#services">Services</a>
      </div>
      <div className="flex justify-center md:gap-5 gap-3">
        <a
          href="#"
          className="fa-brands fa-facebook-f text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
        <a
          href="#"
          className="fa-brands fa-discord text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
        <a
          href="#"
          className="fa-brands fa-github text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
      </div>
      <p className=" justify-self-end">
        © Ren. Does Coding. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
