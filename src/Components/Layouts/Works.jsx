import { ComputerCanvas } from "../";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div id="works-section">
      <ComputerCanvas />
      <div className="works-container">
        <div className="card">
          <div className="top-section">
            <Link
              target="_blank"
              to="https://renskiedulog.github.io/AnimeSensei"
              className="link"
            >
              Check Website
            </Link>
            <div className="image first"></div>
            <div className="border"></div>
            <div className="icons">
              <div className="logo">
                <p>
                  <span className="react">React</span> /{" "}
                  <span className="mui">MUI</span> /{" "}
                  <span className="api">API</span>
                </p>
              </div>
              <div className="social-media">
                <i className="fa-brands fa-discord fa-fw" />
                <i className="fa-brands fa-github fa-fw" />
                <i className="fa-brands fa-linkedin fa-fw" />
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <span className="title">AnimeSensei</span>
            <div className="row row1">
              <p className="description">
                AnimeSensei is a FREE and AD FREE website for animes. Enjoy an
                uninterrupted watching of your favorite animes in AnimeSensei.
              </p>
              <div className="info">
                <i
                  className="fa-solid fa-circle-info"
                  title="Consumet API may sometimes be down and unable to receive HTTP Requests. The website may not display some content until the API servers are fixed."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="top-section">
            <Link
              to="https://renskiedulog.github.io/MangaSensei"
              className="link"
            >
              Check Website
            </Link>
            <div className="image second"></div>
            <div className="border"></div>
            <div className="icons">
              <div className="logo">
                <p>
                  <span className="react">React</span> /{" "}
                  <span className="mui">MUI</span> /{" "}
                  <span className="api">API</span>
                </p>
              </div>
              <div className="social-media">
                <i className="fa-brands fa-discord fa-fw" />
                <i className="fa-brands fa-github fa-fw" />
                <i className="fa-brands fa-linkedin fa-fw" />
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <span className="title">MangaSensei</span>
            <div className="row row1">
              <p className="description">
                MangaSensei is a FREE and AD FREE website for mangas. Enjoy an
                uninterrupted reading of your favorite mangas in MangaSensei.
              </p>
              <div className="info">
                <i
                  className="fa-solid fa-circle-info"
                  title="Due to MangaDex API's CORS Policy, the website is unable to show any content from any hosting domains. The only way to see content would be cloning the website and running it to your localhost."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="top-section">
            <Link
              to="https://renskiedulog.github.io/Portfolio"
              className="link"
            >
              Check Website
            </Link>
            <div className="image third"></div>
            <div className="border"></div>
            <div className="icons">
              <div className="logo">
                <p>
                  <span className="react">React</span> /{" "}
                  <span className="mui">CSS</span> /{" "}
                  <span className="api">3 JS</span>
                </p>
              </div>
              <div className="social-media">
                <i className="fa-brands fa-discord fa-fw" />
                <i className="fa-brands fa-github fa-fw" />
                <i className="fa-brands fa-linkedin fa-fw" />
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <span className="title">Personal Portfolio</span>
            <div className="row row1">
              <p className="description">
                My Personal Portofolio website created using React / Three JS /
                TsParticles and Vanilla CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
