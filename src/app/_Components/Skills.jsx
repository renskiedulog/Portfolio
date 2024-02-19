import BackgroundExp from "./BackgroundExp";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full md:pt-[4rem] pt-5">
      {/* Top */}
      <div className="text-center py-3 opacity-0 header">
        <h1 className="text-3xl font-semibold text-slate-700">Skills</h1>
        <p className="py-1 text-sm opacity-80">What I Am Capable Of.</p>
      </div>

      <div className="flex md:justify-between md:flex-row flex-col-reverse mt-10 md:items-start items-center">
        {/* Left */}
        <div className="md:w-[48%] w-10/12 md:my-0 my-10 skills-info opacity-0">
          <h1 className="text-3xl">
            UI / UX <span className="font-bold">Designer</span> & Web Developer.
          </h1>
          <p className="my-5 opacity-80">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex gap-1 gap-y-2 flex-wrap">
            <div className="w-28 border-r border-[#0001] md:pl-2 pl-1">
              <h1 className="font-bold md:text-xl text-base">13+</h1>
              <p className="uppercase mt-2 md:text-base text-xs">
                Years of Passion
              </p>
            </div>
            <div className="w-28 border-r border-[#0001] md:pl-2 pl-1">
              <h1 className="font-bold md:text-xl text-base">50+</h1>
              <p className="uppercase mt-2 md:text-base text-xs">
                Projects Done
              </p>
            </div>
            <div className="w-28 border-r border-[#0001] md:pl-2 pl-1">
              <h1 className="font-bold md:text-xl text-base">200+</h1>
              <p className="uppercase mt-2 md:text-base text-xs">
                HAPPY CLIENTS
              </p>
            </div>
            <div className="w-28 md:pl-2 pl-1">
              <h1 className="font-bold md:text-xl text-base">2+</h1>
              <p className="uppercase mt-2 md:text-base text-xs">
                Year Experience
              </p>
            </div>
          </div>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="my-5 w-max rounded-xl gap-3 hover:scale-105 hover:brightness-105 transition cursor-pointer flex items-center bg-slate-700 text-white px-5 py-3"
          >
            <p>Read CV</p>
            <i className="fa-solid fa-id-card"></i>
          </a>
        </div>

        {/* Right */}
        <div className="md:w-6/12 w-10/12 skills-rating opacity-0">
          <div className="flex flex-col gap-2">
            <div>
              <div className="pl-1 flex justify-between items-center">
                <p>HTML, CSS, Javascript</p>
                <span className="opacity-80 text-xs">95%</span>
              </div>
              <div className="w-full bg-[#0001] h-3 rounded-xl relative overflow-hidden">
                <div className="w-[95%] absolute left-0 h-full top-0 bg-[#F3B95F]"></div>
              </div>
            </div>
            <div>
              <div className="pl-1 flex justify-between items-center">
                <p>React</p>
                <span className="opacity-80 text-xs">90%</span>
              </div>
              <div className="w-full bg-[#0001] h-3 rounded-xl relative overflow-hidden">
                <div className="w-[90%] absolute left-0 h-full top-0 bg-[#BBE2EC]"></div>
              </div>
            </div>
            <div>
              <div className="pl-1 flex justify-between items-center">
                <p>Next JS</p>
                <span className="opacity-80 text-xs">80%</span>
              </div>
              <div className="w-full bg-[#0001] h-3 rounded-xl relative overflow-hidden">
                <div className="w-[80%] absolute left-0 h-full top-0 bg-[#747264]"></div>
              </div>
            </div>
          </div>
          {/* Right - Bottom */}
          <BackgroundExp />
        </div>
      </div>
    </section>
  );
};

export default Skills;
