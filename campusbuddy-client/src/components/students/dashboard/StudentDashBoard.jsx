import React, { Component } from "react";

import AcademicComponent from "./Academics/AcademicComponent";

export default class StudentDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentObj: {},
    };
  }
  componentDidMount() {
    this.setState({ studentObj: this.props.location.state });
  }
  render() {
    return (
      <div>
        StudentDashBoard
        <div>
          <span>name </span>
          <span>email </span>
          <span>semester </span>
          <span>branch </span>
          <span>contact </span>
          <br />

          <div>
            <span>{this.state.studentObj.name} </span>
            <span>{this.state.studentObj.email} </span>
            <span>{this.state.studentObj.semester} </span>
            <span>{this.state.studentObj.branch} </span>
            <span>{this.state.studentObj.contact} </span>
          </div>
        </div>
        <AcademicComponent props={this.state.studentObj} />
      </div>
    );
  }
}
