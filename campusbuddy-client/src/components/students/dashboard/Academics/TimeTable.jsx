import React, { Component } from "react";
import StudentService from "../../../../services/StudentService";

export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTableList: [],
    };
  }
  componentDidMount() {
    StudentService.getTimeTable().then((res) => {
      this.setState({ timeTableList: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center" style={timeTableStyle.heading}>
          TIME TABLE
        </h2>
        <div className="row">
          <table
            className="table table-striped table-borderded"
            style={timeTableStyle.table}
          >
            <thead>
              <tr style={timeTableStyle.tr}>
                <th style={timeTableStyle.th}>Subject </th>
                <th style={timeTableStyle.th}>Hall Number</th>
                <th style={timeTableStyle.th}>Professor</th>
                <th style={timeTableStyle.th}>Timing</th>
              </tr>
            </thead>
            <tbody style={timeTableStyle.tbody}>
              {this.state.timeTableList.map((element) => (
                <tr key={element.id}>
                  <td style={timeTableStyle.td}>{element.subject}</td>
                  <td style={timeTableStyle.td}>{element.hallNumber}</td>
                  <td style={timeTableStyle.td}>{element.professor}</td>
                  <td style={timeTableStyle.td}>{element.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var timeTableStyle = {
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "2rem auto",
  },
  table: {
    border: "2px solid black",
    boxShadow: "6px 6px 2px black",
    backgroundColor: "#6C63FF",
  },
  tr: {
    padding: "2rem 1rem",
    margin: "1rem",
  },
  th: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    padding: "1rem 1rem",
  },
  td: {
    fontSize: "1.2rem",
    fontWeight: "300",
    color: "white",
    padding: "1rem 1rem",
  },
};
