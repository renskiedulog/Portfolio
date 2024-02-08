"use client";

import { useState } from "react";

const BackgroundExp = () => {
  const [shown, setShown] = useState(1);
  return (
    <div className="mt-5">
      <div className="flex gap-3">
        <button
          className={`${
            shown === 1 ? "font-semibold opacity-100" : "opacity-80"
          } hover:scale-105`}
          onClick={() => setShown(1)}
        >
          Expertise
        </button>
        <button
          className={`${
            shown === 2 ? "font-semibold opacity-100" : "opacity-80"
          } hover:scale-105`}
          onClick={() => setShown(2)}
        >
          Experience
        </button>
        <button
          className={`${
            shown === 3 ? "font-semibold opacity-100" : "opacity-80"
          } hover:scale-105`}
          onClick={() => setShown(3)}
        >
          Education
        </button>
      </div>
      {/* Showcases */}
      <div
        className={`flex flex-col gap-2 mt-2 text-sm ${
          shown === 1 ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center gap-2 columns-3">
          <p>Web Development</p>
          <span>-</span>
          <i className="fa-brands fa-html5 text-2xl"></i>
          <i className="fa-brands fa-css3-alt text-2xl"></i>
          <i className="fa-brands fa-js text-2xl"></i>
          <i className="fa-brands fa-react text-2xl"></i>
        </div>
        <div className="flex items-center gap-2 columns-3">
          <p>UI/UX Design</p>
          <span>-</span>
          <i className="fa-brands fa-figma"></i>
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 mt-2 text-sm ${
          shown === 2 ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center gap-2 columns-3">
          <p>OJT</p>
          <span>-</span>
          <p className="font-semibold">WebriQ</p>
          <span>-</span>
          <p>2024 - 2025</p>
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 mt-2 text-sm ${
          shown === 3 ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-[25%,45%,30%] items-center gap-2">
          <p>Elementary</p>
          <p className="font-semibold">
            Pinamungajan Central Elementary School
          </p>
          <p>2009 - 2015</p>
        </div>
        <div className="grid grid-cols-[25%,45%,30%] items-center gap-2">
          <p>Highschool</p>
          <p className="font-semibold">Pinamungajan National High School</p>
          <p>2015 - 2019</p>
        </div>
        <div className="grid grid-cols-[25%,45%,30%] items-center gap-2">
          <p>Senior HS</p>
          <p className="font-semibold">Pinamungajan National High School</p>
          <p>2020 - 2022</p>
        </div>
        <div className="grid grid-cols-[25%,45%,30%] items-center gap-2">
          <p>College</p>
          <p className="font-semibold">University Of San Carlos - CCT</p>
          <p>2022 - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundExp;
