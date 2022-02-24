import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AcademicComponent from "./Academics/AcademicComponent";
import { Link } from "react-router-dom";
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
      <div className="container">
        <h1 style={dashboardStyle.heading}> Student Dashboard</h1>
        <div>
          <table
            className="table table-striped table-borderded"
            style={tableStyle.table}
          >
            <thead>
              <tr style={tableStyle.row}>
                <th>Name </th>
                <th>Email</th>
                <th>Semester</th>
                <th>Branch</th>
                <th>Contact</th>
                <th>Edit Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableStyle.row}>
                <td style={tableStyle.col}>{this.state.studentObj.name}</td>
                <td style={tableStyle.col}>{this.state.studentObj.email}</td>
                <td style={tableStyle.col}>{this.state.studentObj.semester}</td>
                <td style={tableStyle.col}>{this.state.studentObj.branch}</td>
                <td style={tableStyle.col}>
                  {this.state.studentObj.contactNumber}
                </td>
                <td style={tableStyle.col}>
                  <Link
                    to={{
                      pathname: "edit-profile",
                      state: this.state.studentObj,
                    }}
                  >
                    <Button style={tableStyle.btn}>Click Here</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AcademicComponent props={this.state.studentObj} />
      </div>
    );
  }
}

var dashboardStyle = {
  heading: {
    margin: "2rem",
    textAlign: "center",
  },
};

var tableStyle = {
  table: {},
  row: {
    textAlign: "center",
  },
  col: {
    fontWeight: "bold",
    verticalAlign: "middle",
  },
  btn: {
    fontWeight: "bold",
    backgroundColor: "#6C63FF",
  },
};
