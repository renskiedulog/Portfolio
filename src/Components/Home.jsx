const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen items-center md:justify-around flex-col-reverse flex md:flex-row relative"
    >
      {/* Socials */}
      <div className="absolute flex flex-col top-[25%] md:top-1/2 md:translate-y-[-50%] left-[5%] justify-center max-w-10 items-center md:gap-5 gap-7 text-lg">
        <i className="fa-brands fa-instagram cursor-pointer hover:scale-105 transition"></i>
        <i className="fa-brands fa-facebook-f cursor-pointer hover:scale-105 transition"></i>
        <i className="fa-brands fa-discord cursor-pointer hover:scale-105 transition"></i>
        <i className="fa-brands fa-github cursor-pointer hover:scale-105 transition"></i>
      </div>
      {/* Hero Description */}
      <div className="md:w-5/12 w-10/12 md:ml-20">
        <h1 className="md:text-5xl text-4xl font-bold my-2">Renato Dulog</h1>
        <p className="my-2">Web Developer / PN Student / CCT Student</p>
        <p className="my-2 opacity-80">
          I&apos;m a creative designer based in New York, and I&apos;m very
          passionate and dedicated to my work.
        </p>
        <button className="my-5 rounded-xl gap-3 hover:scale-105 hover:brightness-105 transition cursor-pointer flex items-center bg-slate-700 text-white px-5 py-3">
          <p>Say Hello</p>
          <i class="fa-regular fa-paper-plane"></i>
        </button>
      </div>
      <img
        src="https://picsum.photos/300/300"
        alt="me"
        className="justify-self-end rounded-full md:max-w-[300px] max-w-[250px] md:my-0 my-5"
      />
      <div className="absolute bottom-5 md:flex hidden left-1/2 translate-x-[-50%] animate-pulse items-center gap-2">
        <div className="w-5 h-8 border border-black rounded-xl relative">
          <div className="w-[2px] h-2 bg-black top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute animation-scroll"></div>
        </div>
        <p className="text-sm">Scroll Down</p>
      </div>
    </section>
  );
};

export default Home;
