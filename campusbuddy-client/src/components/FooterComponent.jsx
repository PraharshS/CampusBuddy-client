import React, { Component } from "react";
import "../assets/css/footer.css";
export default class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <h2 className="text center">FOOTER IS HERE </h2>
        </footer>
      </div>
    );
  }
}
