import React, { Component } from "react";
import CalenderImg from "../../../../assets/images/holiday.png";
export default class holidays extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center" style={holidayStyle.heading}>
          HOLIDAYS
        </h1>
        <div className="dflex justify-content-center">
          <img src={CalenderImg} alt="" style={holidayStyle.img} />
        </div>
      </div>
    );
  }
}

var holidayStyle = {
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    margin: "2rem auto",
  },
  img: {
    width: "70%",
    display: "block",
    margin: "auto",
  },
};
