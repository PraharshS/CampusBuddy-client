import React, { Component } from "react";
import CalenderImg from "../../../../assets/images/holiday.png";
export default class holidays extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">HOLIDAYS</h1>
        <div className="dflex justify-content-center">
          <img
            src={CalenderImg}
            alt=""
            style={{ width: "600px", margin: "auto", display: "block" }}
          />
        </div>
      </div>
    );
  }
}
