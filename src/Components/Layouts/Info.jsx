const Info = () => {
  return (
    <div className="info-container">
      <div className="left">
        <h1>Profile Information</h1>
      </div>
      <div className="right">
        <h1>Skills</h1>
        <div className="skills">
          <div>
            <p>HTML</p>
            <div className="overlay"></div>
          </div>
          <div>
            <p>CSS</p>
            <div className="overlay"></div>
          </div>
          <div>
            <p>JS</p>
            <div className="overlay"></div>
          </div>
          <div>
            <p>PHP</p>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
