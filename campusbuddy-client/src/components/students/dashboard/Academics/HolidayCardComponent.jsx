import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import cardBg from "../../../../assets/images/holidayCard.png";
export default class HolidayCardComponent extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Holidays</Card.Title>
          <Card.Text>
            Check the holiday calender so you can plan your vacation
          </Card.Text>
          <Button href="holidays" variant="primary">
            Click Here
          </Button>
        </Card.Body>
      </div>
    );
  }
}
var cardStyle = {
  div: {
    minHeight: "100%",
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
{
  /* <Link
            to={{
              pathname: "feedback",
              state: this.props.props,
            }}
          >
            Feedback
          </Link> */
}
