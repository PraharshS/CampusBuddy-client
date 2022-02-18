import React, { Component } from "react";
import StudentService from "../../services/StudentService";
export default class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Students List</h2>
        <div className="row">
          <table className="table table-striped table-borderded">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Semester</th>
                <th>Student Branch</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.semester}</td>
                  <td>{student.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
