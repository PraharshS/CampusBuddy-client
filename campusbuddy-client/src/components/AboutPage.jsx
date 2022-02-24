import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div style={aboutStyle.div}>
        <div style={aboutStyle.wrapper}>
          <div className="left" style={aboutStyle.left}>
            <h1 style={aboutStyle.leftText}>About Us</h1>
          </div>
          <div className="right">
            <p style={aboutStyle.rightText}>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail. Keeping your eye on the ball
              while performing a deep dive on the start-up mentality to derive
              convergence on cross-platform integration. Objectively innovate
              empowered manufactured products whereas parallel platforms.
              Holisticly predominate extensible testing procedures for reliable
              supply chains. Dramatically engage top-line web services vis-a-vis
              cutting-edge deliverables.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
var aboutStyle = {
  div: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "60vw",
    backgroundColor: "#6C63FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  leftText: {
    textAlign: "center",
    fontSize: "4rem",
    fontWeight: "bold",
  },
  rightText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    padding: "1rem",
  },
};
