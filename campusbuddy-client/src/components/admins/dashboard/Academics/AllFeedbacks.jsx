import React, { Component } from "react";
import AdminService from "../../../../services/AdminService";

export default class AllFeedbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackList: [],
    };
  }
  componentDidMount() {
    AdminService.getFeedbacks().then((res) => {
      this.setState({ feedbackList: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center" style={feedbackTableStyle.heading}>
          Notices
        </h2>
        <div className="row">
          <table
            className="table table-striped table-borderded"
            style={feedbackTableStyle.table}
          >
            <thead>
              <tr style={feedbackTableStyle.tr}>
                <th style={feedbackTableStyle.th}>Message </th>
                <th style={feedbackTableStyle.th}> Student Email</th>
                <th style={feedbackTableStyle.th}> Student Name</th>
                <th style={feedbackTableStyle.th}> Student Enrollment</th>
              </tr>
            </thead>
            <tbody style={feedbackTableStyle.tbody}>
              {this.state.feedbackList.map((element) => (
                <tr key={element.id}>
                  <td style={feedbackTableStyle.td}>{element.message}</td>
                  <td style={feedbackTableStyle.td}>{element.student.email}</td>
                  <td style={feedbackTableStyle.td}>{element.student.name}</td>
                  <td style={feedbackTableStyle.td}>
                    {element.student.enNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var feedbackTableStyle = {
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
