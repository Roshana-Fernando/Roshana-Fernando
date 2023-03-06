import React from "react";

function AboutMe() {
  return (
    <div>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="columns">
        <div className="col1">
          ABOUT
          <br /> ME
        </div>
        <div className="column">
          <div className="square">
            <br />
            <br />
            Strategic, high energy and revenue - focused
            <br /> business professional with extensive experience <br />
            as a IT Product Manager with a successful record <br />
            of providing Back - end insights
            <br /> on industry trends, competitive landscape <br />
            to continually improve product offering,
            <br /> inline with profit.
            <br />
            <br />
            <br />
            Moreover I am an Entreprenuer who launcehed my own <br />
            International Brandline and who <br />
            provides goods and services <br />
            online through E-business websites.
          </div>
          {/*Statistics about followers*/}
        </div>
        <div className="column">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Forums</p>
                <p className="title">3,456</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Followers</p>
                <p className="title">456K</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
              </div>
            </div>
          </nav>
        </div>
        <br />
      </div>
      <br />
      <br />
      <div className="columns">
        <br />
      </div>
    </div>
  );
}

export default AboutMe;
