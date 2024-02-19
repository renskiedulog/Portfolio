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
      <nav className="z-50 fixed w-full left-0 md:top-0 bottom-0 md:h-16 h-12 px-5 bg-[#f9f9f9] border-y border-[#0001]">
        <div className="flex md:justify-around justify-between px-3 items-center h-full font-medium">
          <a
            href="#home"
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
              href="#services"
              className={activeSection === "services" ? "font-semibold" : ""}
            >
              Services
            </a>
            <a
              href="#works"
              className={activeSection === "works" ? "font-semibold" : ""}
            >
              Works
            </a>
            <a
              href="#contact"
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
        className={`fixed w-full left-0 bg-[#f9f9f9] p-2 border-t border-[#0001] z-40 overflow-hidden ${
          toggle ? "animation-show" : "animation-fold"
        }`}
      >
        <li className="grid grid-cols-3 gap-2 font-normal text-sm">
          <a
            href="#home"
            className={`
              ${activeSection === "home" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-house"></i>
            <p>Home</p>
          </a>
          <a
            href="#about"
            className={`
              ${activeSection === "about" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-user"></i>
            <p>About</p>
          </a>
          <a
            href="#skills"
            className={`
              ${activeSection === "skills" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-id-card"></i>
            <p>Skills</p>
          </a>
          <a
            href="#services"
            className={`
              ${activeSection === "services" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-briefcase"></i>
            <p>Services</p>
          </a>
          <a
            href="#works"
            className={`
              ${activeSection === "works" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-image"></i>
            <p>Works</p>
          </a>
          <a
            href="#contact"
            className={`
              ${activeSection === "contact" ? "font-semibold bg-[#0001]" : ""}
              w-full py-2 text-center hover:scale-105 rounded-md
            `}
            onClick={() => setToggle(false)}
          >
            <i className="md:text-lg text-base fa-solid fa-address-book"></i>
            <p>Contact</p>
          </a>
        </li>
      </div>
    </>
  );
};

export default NavBar;
