import React, { Component } from "react";

import AcademicComponent from "./Academics/AcademicComponent";

export default class StudentDashBoard extends Component {
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
          {this.props.location.state.map((student) => (
            <div key={student.id}>
              <span>{student.name} </span>
              <span>{student.email} </span>
              <span>{student.semester} </span>
              <span>{student.branch} </span>
              <span>{student.contact} </span>
            </div>
          ))}
        </div>
        <AcademicComponent />
      </div>
    );
  }
}
