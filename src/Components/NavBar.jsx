const NavBar = () => {
  return (
    <nav className="z-50 fixed w-full left-0 top-0 h-16 flex items-center md:justify-around justify-between md:px-0 px-5 bg-[#f9f9f9] border-[#0002]">
      <a
        href="#"
        className="md:text-xl text-base hover:scale-105 cursor-pointer transition"
      >
        Ren.
      </a>
      <li className={`items-center md:gap-10 gap-2 flex font-normal`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#">Services</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
      </li>
    </nav>
  );
};

export default NavBar;
