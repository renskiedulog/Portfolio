import { ComputerCanvas } from "../";

const Works = () => {
  return (
    <div id="works-section">
      <ComputerCanvas />
      <div class="works-container">
        <div class="parent first">
          <div class="card color-first border">
            <div class="content-box">
              <span class="card-title">AnimeSensei</span>
              <p class="card-content">
                Anime Website Using React / MUI / Gogoanime API.
              </p>
              <span class="see-more color-first background">See More</span>
            </div>
          </div>
        </div>
        <div class="parent second">
          <div class="card color-second border">
            <div class="content-box">
              <span class="card-title">Portfolio</span>
              <p class="card-content">
                Anime Website Using React / MUI / Gogoanime API.
              </p>
              <span class="see-more color-second background">See More</span>
            </div>
          </div>
        </div>
        <div class="parent third">
          <div class="card color-third border">
            <div class="content-box">
              <span class="card-title orange">MangaSensei</span>
              <p class="card-content orange">
                Anime Website Using React / MUI / Gogoanime API.
              </p>
              <span class="see-more color-third background">See More</span>
            </div>
          </div>
        </div>
        <div class="parent">
          <div class="card color-one border">
            <div class="content-box">
              <span class="card-title">MangaSensei</span>
              <p class="card-content">
                Anime Website Using React / MUI / Gogoanime API.
              </p>
              <span class="see-more color-one background">See More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
