import React, { Component } from "react";
import "../assets/css/homePage.css";
import HeroImg from "../assets/images/homePageHeroImg.png";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div className="homePageWrapper">
        <h1 className="heroText">Campus Buddy</h1>
        <div className="heroWrapper">
          <div className="left">
            <img src={HeroImg} alt="hero img" />
          </div>
          <div className="right">
            <Link to="/login">
              <div className="loginButton" variant="primary" size="lg">
                Student Login
              </div>
            </Link>
            <Link to="/signup">
              <div className="signUpButton" variant="secondary" size="lg">
                Student Sign Up
              </div>
            </Link>
            <Link to="/admins/login">
              <div className="AdminLoginButton" variant="danger" size="lg">
                Admin Login
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
