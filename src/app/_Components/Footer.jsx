import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="absolute footer w-full min-h-[40vh] pt-5 flex flex-col md:gap-3 gap-3 justify-end items-center left-0 md:pb-4 pb-16"
    >
      <a href="#home" className="text-3xl font-semibold text-slate-700">
        Renato Dulog.
      </a>
      <div className="flex md:gap-5 gap-3 justify-center font-medium text-slate-800">
        <a href="#about" className="hover:font-semibold">
          About
        </a>
        <a href="#works" className="hover:font-semibold">
          Works
        </a>
        <a href="#services" className="hover:font-semibold">
          Services
        </a>
      </div>
      <div className="flex justify-center md:gap-5 gap-3">
        <a
          href="https://www.facebook.com/renatodulog.27"
          className="fa-brands fa-facebook-f text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
        <a
          href="https://discordapp.com/users/renskiedulog#8212"
          className="fa-brands fa-discord text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
        <a
          href="https://github.com/renskiedulog"
          className="fa-brands fa-github text-white bg-slate-700 w-10 aspect-square flex justify-center items-center hover:scale-105 rounded-md shadow-md"
        ></a>
      </div>
      <p className=" justify-self-end">
        © Ren Does Coding. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
