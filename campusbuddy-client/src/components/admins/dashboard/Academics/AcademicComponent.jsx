import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import AcademicBg from "../../../../assets/images/Academics.png";
import { Link } from "react-router-dom";
import TimeTableCardComponent from "./TimeTableCardComponent";
import HolidayCardComponent from "./HolidayCardComponent";
import NoticesCardComponent from "./NoticesCardComponent";
import FeedbackCardComponent from "./FeedbackCardComponent";
export default class AcademicComponent extends Component {
  render() {
    return (
      <div className="container" style={cardsWrapperStyle.div}>
        <TimeTableCardComponent />
        <HolidayCardComponent />
        <NoticesCardComponent props={this.props} />
        <FeedbackCardComponent props={this.props} />
      </div>
    );
  }
}

var cardsWrapperStyle = {
  div: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
};
