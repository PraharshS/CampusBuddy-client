import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <div style={contactStyle.div}>
        <div style={contactStyle.wrapper}>
          <div className="left" style={contactStyle.left}>
            <h1 style={contactStyle.leftText}>Contacts</h1>
          </div>
          <div className="right">
            <div className="contact">
              <div className="h2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var contactStyle = {
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
