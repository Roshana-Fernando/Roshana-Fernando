import React from "react";

function NavBar() {
  return (
    <>
      <div className="container4">
        <p>ROSHANA NICHOL</p>{" "}
      </div>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: "#ebebe0" }}
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="nava"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Info</a>
            <a className="navbar-item">Photo Gallery</a>
            <a className="navbar-item">Forums</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a className="navbar-item" href="CV.pdf">
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
