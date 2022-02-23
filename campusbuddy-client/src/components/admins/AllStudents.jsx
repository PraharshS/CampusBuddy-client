import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminService from "../../services/AdminService";
import StudentService from "../../services/StudentService";
export default class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent(id) {
    AdminService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter((e) => e.id !== id),
      });
    });
  }
  componentDidMount() {
    AdminService.getStudents().then((res) => {
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.semester}</td>
                  <td>{student.branch}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "edit-student-profile",
                        state: student,
                      }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      className="mx-2"
                      variant="danger"
                      onClick={() => this.deleteStudent(student.id)}
                    >
                      Delete
                    </Button>
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
