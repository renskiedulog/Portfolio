import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full md:pt-[4rem] pt-5">
      <div className="text-center py-3 header opacity-0">
        <h1 className="text-3xl font-semibold text-slate-700">About Me</h1>
        <p className="py-1 text-sm opacity-80">Who Am I Exactly?</p>
      </div>
      <div className="flex gap-5 mt-10 md:justify-around md:flex-row flex-col items-center">
        <div>
          <Image
            src="/images/about.webp"
            alt="my-picture"
            height={350}
            width={350}
            className="rounded-xl about-me opacity-0 w-auto h-auto"
          />
        </div>
        <div className="md:w-1/2 w-10/12 md:my-0 my-2 about-me-info opacity-0">
          <h1 className="text-xl mb-1 font-medium">Hobbies And Likes</h1>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 text-lg items-center delay-100 justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-code"></i>
              <p>Coding</p>
            </div>
            <div className="flex flex-col gap-1 text-lg items-center delay-150 justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-gamepad"></i>
              <p>Gaming</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-lg delay-200 justify-center bg-white w-36 h-28 rounded-lg border border-[#0001]">
              <i className="fa-solid fa-cat"></i>
              <p>Cats</p>
            </div>
          </div>

          <h1 className="mt-5 text-xl font-medium">Short Description</h1>
          <p className="opacity-80 mb-5">
            I have been passionate about tech for almost 15 years, 2 years ago I
            discovered about Web Development and quickly became fond of it. It
            has been my dream to contribute to the internet and bring beautiful
            and functional websites for the whole world to see.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
