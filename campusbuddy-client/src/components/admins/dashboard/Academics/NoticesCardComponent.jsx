import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import cardBg from "../../../../assets/images/noticesCard.png";
export default class NoticesCardComponent extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Notices</Card.Title>
          <Card.Text>Info about all the events , activites etc.</Card.Text>
          <Button href="notices" variant="primary">
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
    margin: "2rem",
    textAlign: "center",
  },
  img: {
    objectFit: "cover",
    width: "300px",
    height: "300px",
    margin: "auto",
  },
};
