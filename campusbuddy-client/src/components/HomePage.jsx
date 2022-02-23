import React, { Component } from "react";
import "../assets/css/homePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div className="homePageWrapper">
        <h1 className="heroText">Welcome to Campus Buddy</h1>
        <div className="buttons">
          <Link to="/login">
            <Button className="loginButton" variant="primary" size="lg">
              Student Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="signUpButton" variant="secondary" size="lg">
              Student Sign Up
            </Button>
          </Link>
          <Link to="/admins/login">
            <Button className="AdminLoginButton" variant="danger" size="lg">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
