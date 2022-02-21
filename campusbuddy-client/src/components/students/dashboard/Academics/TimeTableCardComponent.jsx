import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import cardBg from "../../../../assets/images/timeTableCard.png";
export default class TimeTableCardComponent extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Time Table</Card.Title>
          <Card.Text>
            Info about the class timings, professors, lecture halls etc
          </Card.Text>
          <Button href="time-table" variant="primary">
            Click Here
          </Button>
        </Card.Body>
      </div>
    );
  }
}
var cardStyle = {
  div: {
    height: "100%",
    border: "2px solid black",
    boxShadow: "8px 8px 4px black",
    padding: "1rem",
    margin: "2rem",
    textAlign: "center",
  },
  img: {
    width: "300px",
    height: "300px",
    margin: "auto",
  },
};