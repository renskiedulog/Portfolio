"use client";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const barsIcon = ref.current;
    if (barsIcon) {
      barsIcon.className = toggle
        ? "fa-solid fa-x cursor-pointer hover:scale-105 md:hidden block text-xl"
        : "fa-solid fa-bars cursor-pointer hover:scale-105 md:hidden block text-xl";
    }
  }, [toggle]);

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Adjust this selector based on your section structure
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Run once on component mount

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
        entry.target.classList.add("active");
      }
    });
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <nav className="z-50 fixed w-full left-0 top-0 h-16 px-5 bg-[#f9f9f9] border-b border-[#0001]">
        <div className="flex md:justify-around justify-between px-3 items-center h-full">
          <a
            href="#"
            className="md:text-xl text-base hover:scale-105 cursor-pointer transition"
          >
            Ren.
          </a>
          <li className="md:flex hidden items-center md:gap-10 gap-2 font-normal">
            <a
              href="#home"
              className={activeSection === "home" ? "font-semibold" : ""}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "font-semibold" : ""}
            >
              About
            </a>
            <a
              href="#skills"
              className={activeSection === "skills" ? "font-semibold" : ""}
            >
              Skills
            </a>
            <a
              href="#"
              className={activeSection === "services" ? "font-semibold" : ""}
            >
              Services
            </a>
            <a
              href="#"
              className={activeSection === "works" ? "font-semibold" : ""}
            >
              Works
            </a>
            <a
              href="#"
              className={activeSection === "contact" ? "font-semibold" : ""}
            >
              Contact
            </a>
          </li>
          <i
            ref={ref}
            className={
              toggle
                ? "fa-solid fa-x cursor-pointer hover:scale-105 md:hidden block text-xl"
                : "fa-solid fa-bars cursor-pointer hover:scale-105 md:hidden block text-xl"
            }
            onClick={handleToggle}
          ></i>
        </div>
      </nav>
      <div
        className={`fixed w-2/4 h-screen py-[4rem] bg-[#f9f9f9] border-r border-[#0001] top-0 left-0 z-40 overflow-hidden ${
          toggle ? "block animation-slide-left" : "hidden"
        }`}
      >
        <li className="flex flex-col items-center md:gap-10 font-normal">
          <a
            href="#home"
            className={`
              ${activeSection === "home" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={`
              ${activeSection === "about" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className={`
              ${activeSection === "skills" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            Skills
          </a>
          <a
            href="#"
            className={`
              ${activeSection === "services" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            Services
          </a>
          <a
            href="#"
            className={`
              ${activeSection === "works" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            Works
          </a>
          <a
            href="#"
            className={`
              ${activeSection === "contact" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105
            `}
            onClick={() => setToggle(false)}
          >
            Contact
          </a>
        </li>
      </div>
    </>
  );
};

export default NavBar;
