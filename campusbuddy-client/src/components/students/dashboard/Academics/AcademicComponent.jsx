import React, { Component } from "react";
import FeedbackCardComponent from "./FeedbackCardComponent";
import HolidayCardComponent from "./HolidayCardComponent";
import NoticesCardComponent from "./NoticesCardComponent";
import TimeTableCardComponent from "./TimeTableCardComponent";
export default class AcademicComponent extends Component {
  render() {
    return (
      <div className="container" style={cardsWrapperStyle.div}>
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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
};
