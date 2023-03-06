import React from "react";

function Projects() {
  return (
    <div className="columns">
      <div className="oval">
        <br />
        <br />
        <p style={{ fontSize: "50px" }}>PROJECTS</p>
        <br />
        <a href="#LOGISTIC TACO (IT)">LOGISTIC TACO (IT)</a>
        <br />
        <br />
        <a href="#W0WO 2.0">W0WO 2.0 (IT)</a>
        <br />
        <br /> <a href="#NR21  "> NR21 (Personal E-business)</a>
        <br />
        <br />
        <a href="#NR21 Brandline ">NR21 Brandline </a>
      </div>
      <div className="column">
        <h1 className="title">CLIENTS</h1>
        <h2 className="subtitle">Some Happy clients</h2>
      </div>
      <div className="column20">
        <img src="smart.jpg" />
        <img src="medline.jpg" />
        <img src="mitto.jpg" />
        <br />
        <img src="uplight.jpg" />
      </div>
    </div>
  );
}

export default Projects;
