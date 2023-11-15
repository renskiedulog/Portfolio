import React from "react";

const Navigation = () => {
  // Get the current path from the window location
  const currentPath = window.location.pathname;

  // Define the paths that should have the "active" class
  const activePaths = ["/", "/profile", "/works", "/testimonials", "/contact"];

  return (
    <div className="navigation">
      <ul>
        <a
          href="/"
          className={activePaths.includes(currentPath) ? "active" : ""}
        >
          <i className="fa-solid fa-house fa-fw"></i>
        </a>
        <a
          href="/profile"
          className={activePaths.includes(currentPath) ? "active" : ""}
        >
          <i className="fa-solid fa-id-card fa-fw"></i>
        </a>
        <a
          href="/works"
          className={activePaths.includes(currentPath) ? "active" : ""}
        >
          <i className="fa-solid fa-briefcase fa-fw"></i>
        </a>
        <a
          href="/testimonials"
          className={activePaths.includes(currentPath) ? "active" : ""}
        >
          <i className="fa-solid fa-person-circle-check fa-fw"></i>
        </a>
        <a
          href="/contact"
          className={activePaths.includes(currentPath) ? "active" : ""}
        >
          <i className="fa-solid fa-envelopes-bulk fa-fw"></i>
        </a>
      </ul>
    </div>
  );
};

export default Navigation;
