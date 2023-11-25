import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    const handleLocationChange = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const currentPath = location.pathname;
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
