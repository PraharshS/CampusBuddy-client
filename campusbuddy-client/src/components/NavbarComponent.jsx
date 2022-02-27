import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
class NavbarComponent extends Component {
  render() {
    return (
      <Navbar style={navbarStyle.div}>
        <Container>
          <Navbar.Brand href="/" style={navbarStyle.brand}>
            Campus Buddy
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={navbarStyle.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={navbarStyle.link}>
              About
            </Nav.Link>
            <Nav.Link href="contact" style={navbarStyle.link}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
var navbarStyle = {
  div: {
    backgroundColor: "#6C63FF",
  },
  brand: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  },
  link: {
    fontSize: "1.5rem",
    marginLeft: "2rem",
    fontWeight: "600",
    color: "black",
  },
};
export default NavbarComponent;
