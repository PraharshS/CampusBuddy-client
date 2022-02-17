import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Campus Buddy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="feedback">Feedback</Nav.Link>
            <Nav.Link href="notices">Notices</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
