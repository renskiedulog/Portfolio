import Image from "next/image";
const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen items-center justify-end flex-col-reverse flex md:flex-row relative active md:translate-y-0 translate-y-[-2rem]"
    >
      {/* Socials */}
      <div className="socials z-10 absolute flex lg:flex-col flex-row top-[5.2rem] lg:top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 lg:left-[5%] justify-center opacity-0 max-w-10 items-center lg:gap-5 gap-7 text-xl">
        <a
          href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=renrendulog@gmail.com&tf=1"
          target="_blank"
          className="fa-brands fa-google hover:scale-105 transition"
          aria-label="google-icon"
        ></a>
        <a
          href="https://www.facebook.com/renatodulog.27"
          target="_blank"
          className="fa-brands fa-facebook-f hover:scale-105 transition"
          aria-label="facebook-icon"
        ></a>
        <a
          href="https://discordapp.com/users/901746145095712768"
          target="_blank"
          className="fa-brands fa-discord hover:scale-105 transition"
          aria-label="discord-icon"
        ></a>
        <a
          href="https://github.com/renskiedulog"
          target="_blank"
          className="fa-brands fa-github hover:scale-105 transition"
          aria-label="github-icon"
        ></a>
      </div>
      {/* Hero Description */}
      <div className="hero md:w-5/12 w-10/12 md:ml-[15%]">
        <h1 className="md:text-5xl text-4xl font-bold my-2">Renato Dulog</h1>
        <p className="my-2">Web Developer / PN Student / CCT Student</p>
        <p className="my-2 opacity-80">
          I&apos;m a college student and a frontend developer based in Cebu
          Philippines, and I&apos;m very passionate and dedicated to my work.
        </p>
        <a
          href="#contact"
          className="my-5 w-max rounded-xl gap-3 hover:scale-105 hover:brightness-105 transition cursor-pointer flex items-center bg-slate-700 text-white px-5 py-3"
        >
          <p>Say Hello</p>
          <i className="fa-regular fa-paper-plane"></i>
        </a>
      </div>
      <Image
        src="/images/me.webp"
        alt="me"
        width={500}
        height={200}
        className="me justify-self-end aspect-square object-cover object-bottom md:translate-y-0 translate-y-[15%]"
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
