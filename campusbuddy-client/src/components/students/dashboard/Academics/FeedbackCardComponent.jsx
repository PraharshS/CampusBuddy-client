import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import cardBg from "../../../../assets/images/feedbackCard.png";
export default class FeedbackCardComponent extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Feedback</Card.Title>
          <Card.Text>Submit a feedback about the portal, college etc</Card.Text>
          <Link
            to={{
              pathname: "feedback",
              state: this.props.props.props,
            }}
          >
            <Button>Click Here</Button>
          </Link>
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
