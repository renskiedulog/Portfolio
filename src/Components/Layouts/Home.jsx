import { useEffect } from "react";
import { ParticlesContainer } from "../";

const Home = () => {
  useEffect(() => {
    const text = document.querySelector(".text.second-text");

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Web Developer.";
      }, 0);
      setTimeout(() => {
        text.textContent = "CCT Student.";
      }, 4000);
      setTimeout(() => {
        text.textContent = "Programmer.";
      }, 8000);
      setTimeout(() => {
        text.textContent = "PN Scholar.";
      }, 12000);
    };

    textLoad();

    setInterval(textLoad, 16000);
  });

  return (
    <div id="home-section">
      <ParticlesContainer sx={{ zIndex: 10 }} />
      <div className="intro">
        <p className="name">Renato L. Dulog</p>
        <div className="text-container">
          <span className="text first-text">I'm a </span>
          <span className="text second-text"></span>
        </div>
        <p className="catchphrase">Working ideas to reality.</p>
        <a href="/works">
          <i className="fa-solid fa-briefcase" />
          <p>Recent Works</p>
        </a>
      </div>
      <div className="me">
        <img src="images/me.png" alt="me" />
      </div>
    </div>
  );
};

export default Home;
