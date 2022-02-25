import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <div style={contactStyle.div}>
        <div style={contactStyle.wrapper}>
          <div className="left" style={contactStyle.left}>
            <h1 style={contactStyle.leftText}>Contacts</h1>
          </div>
          <table
            className="table table-striped table-borderded"
            style={timeTableStyle.table}
          >
            <thead>
              <tr style={timeTableStyle.tr}>
                <th style={timeTableStyle.th}>Department </th>
                <th style={timeTableStyle.th}>Name</th>
                <th style={timeTableStyle.th}>Email</th>
                <th style={timeTableStyle.th}>Number</th>
              </tr>
            </thead>
            <tbody style={timeTableStyle.tbody}>
              <tr>
                <td style={timeTableStyle.td}>HOD</td>
                <td style={timeTableStyle.td}>Megha Kamble</td>
                <td style={timeTableStyle.td}>megha123@gmail.com</td>
                <td style={timeTableStyle.td}>9876543210</td>
              </tr>
              <tr>
                <td style={timeTableStyle.td}>BUS</td>
                <td style={timeTableStyle.td}>Vinod Kumar</td>
                <td style={timeTableStyle.td}>vinod234@gmail.com</td>
                <td style={timeTableStyle.td}>9876543211</td>
              </tr>
              <tr>
                <td style={timeTableStyle.td}>Reception</td>
                <td style={timeTableStyle.td}>Sanjana Singh</td>
                <td style={timeTableStyle.td}>ssanjana@gmail.com</td>
                <td style={timeTableStyle.td}>9876543212</td>
              </tr>
              <tr>
                <td style={timeTableStyle.td}>Exam Cell</td>
                <td style={timeTableStyle.td}>Sandeep Maheshwari</td>
                <td style={timeTableStyle.td}>smaheshwari@gmail.com</td>
                <td style={timeTableStyle.td}>9876543213</td>
              </tr>
              <tr>
                <td style={timeTableStyle.td}>Admission Cell</td>
                <td style={timeTableStyle.td}>Sujeet Agrawal</td>
                <td style={timeTableStyle.td}>sujeetag@gmail.com</td>
                <td style={timeTableStyle.td}>9876543214</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var contactStyle = {
  div: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "70vw",
    backgroundColor: "#6C63FF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  leftText: {
    textAlign: "center",
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  rightText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    padding: "1rem",
  },
};
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
