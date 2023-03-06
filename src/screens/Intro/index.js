import React from "react";

function Intro() {
  return (
    <div id="container">
      <img src="profile.jpg" />
      <p style={{ fontSize: "70px", fontFamily: '"ink free"' }}>
        Hey I'm Roshana
        <br />
        <img src="designation.jpg" />
        <br />
        <a href="mailto:eroshananlf1@gmail.com" style={{ color: "inherit" }}>
          <i className="fa-solid fa-envelope" />
        </a>{" "}
        <a href="www.facebook.com" style={{ color: "inherit" }}>
          <i className="fa-brands fa-facebook" />
        </a>
      </p>
      {/*sign up button starts*/}
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" style={{padding: "30px", fontSize: "30px" }}>
              <strong>Sign up</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
