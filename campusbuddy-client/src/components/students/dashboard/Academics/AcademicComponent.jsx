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
      <div className="cardsWrapper" style={cardsWrapperStyle.div}>
        <TimeTableCardComponent />
        <HolidayCardComponent />
        <NoticesCardComponent />
        <FeedbackCardComponent props={this.props} />
      </div>
    );
  }
}

var cardsWrapperStyle = {
  div: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
};
