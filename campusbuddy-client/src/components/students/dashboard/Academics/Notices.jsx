import React, { Component } from "react";
import StudentService from "../../../../services/StudentService";

export default class Notices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeList: [],
    };
  }
  componentDidMount() {
    StudentService.getNotices().then((res) => {
      this.setState({ noticeList: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center" style={noticeTableStyle.heading}>
          Notices
        </h2>
        <div className="row">
          <table
            className="table table-striped table-borderded"
            style={noticeTableStyle.table}
          >
            <thead>
              <tr style={noticeTableStyle.tr}>
                <th style={noticeTableStyle.th}>Type </th>
                <th style={noticeTableStyle.th}>Description</th>
                <th style={noticeTableStyle.th}>Posted By Admin Name</th>
                <th style={noticeTableStyle.th}>Posted By Admin Email</th>
              </tr>
            </thead>
            <tbody style={noticeTableStyle.tbody}>
              {this.state.noticeList.map((element) => (
                <tr key={element.id}>
                  <td style={noticeTableStyle.td}>{element.type}</td>
                  <td style={noticeTableStyle.td}>{element.description}</td>
                  <td style={noticeTableStyle.td}>{element.admin.name}</td>
                  <td style={noticeTableStyle.td}>{element.admin.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var noticeTableStyle = {
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
