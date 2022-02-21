import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import AcademicBg from "../../../../assets/images/Academics.png";
import { Link } from "react-router-dom";
export default class AcademicComponent extends Component {
  render() {
    return (
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={AcademicBg} style={{ width: "200px" }} />
        <Card.Body>
          <Card.Title>Academics</Card.Title>
          <Card.Text>Will always keep you up to date with the events</Card.Text>
          <Button href="time-table" variant="primary">
            Time Table
          </Button>
          <Button href="holidays" variant="secondary">
            Holidays
          </Button>
          <Button href="notices" variant="warning">
            Notices
          </Button>

          <Link
            to={{
              pathname: "feedback",
              state: this.props.props,
            }}
          >
            Feedback
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
