import { Link } from "react-router-dom";

const Navigation = () => {
  const currentPath = window.location.pathname;

  const activePaths = ["/", "/profile", "/work", "/testimonial", "/contact"];

  return (
    <div className="navigation">
      <ul>
        <Link to="/" className={activePaths[0] === currentPath ? "active" : ""}>
          <i className="fa-solid fa-house fa-fw"></i>
        </Link>
        <Link
          to="/profile"
          className={activePaths[1] === currentPath ? "active" : ""}
        >
          <i className="fa-solid fa-id-card fa-fw"></i>
        </Link>
        <Link
          to="/work"
          className={activePaths[2] === currentPath ? "active" : ""}
        >
          <i className="fa-solid fa-briefcase fa-fw"></i>
        </Link>
        <Link
          to="/testimonial"
          className={activePaths[3] === currentPath ? "active" : ""}
        >
          <i className="fa-solid fa-person-circle-check fa-fw"></i>
        </Link>
        <Link
          to="/contact"
          className={activePaths[4] === currentPath ? "active" : ""}
        >
          <i className="fa-solid fa-envelopes-bulk fa-fw"></i>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
