import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AcademicComponent from "./Academics/AcademicComponent";
import { Link } from "react-router-dom";
export default class StudentDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminObj: {},
    };
  }
  componentDidMount() {
    this.setState({ adminObj: this.props.location.state });
  }
  render() {
    return (
      <div className="container">
        <h1 style={dashboardStyle.heading}> Admin Dashboard</h1>
        <div>
          <table
            className="table table-striped table-borderded"
            style={tableStyle.table}
          >
            <thead>
              <tr style={tableStyle.row}>
                <th>Name </th>
                <th>Email</th>
                <th>View All Students</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableStyle.row}>
                <td style={tableStyle.col}>{this.state.adminObj.name}</td>
                <td style={tableStyle.col}>{this.state.adminObj.email}</td>
                <td style={tableStyle.col}>
                  <Link
                    to={{
                      pathname: "all-students",
                      state: this.state.adminObj,
                    }}
                  >
                    <Button>Click Here</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AcademicComponent props={this.state.adminObj} />
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
};
