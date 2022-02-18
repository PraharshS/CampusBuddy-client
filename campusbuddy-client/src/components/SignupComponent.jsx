import React, { Component } from "react";
import StudentService from "../services/StudentService";

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      enNumber: "",
      branch: "",
      semester: "",
      contactNumber: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeConfirmPasswordHandler =
      this.changeConfirmPasswordHandler.bind(this);
    this.changeEnNumberHandler = this.changeEnNumberHandler.bind(this);
    this.changeBranchHandler = this.changeBranchHandler.bind(this);
    this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
    this.changeContactNumberHandler =
      this.changeContactNumberHandler.bind(this);

    this.saveStudent = this.saveStudent.bind(this);
  }
  changeNameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  changeEmailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  changeConfirmPasswordHandler = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
  changeEnNumberHandler = (e) => {
    this.setState({ enNumber: e.target.value });
  };
  changeBranchHandler = (e) => {
    this.setState({ branch: e.target.value });
  };
  changeSemesterHandler = (e) => {
    this.setState({ semester: e.target.value });
  };
  changeContactNumberHandler = (e) => {
    this.setState({ contactNumber: e.target.value });
  };

  saveStudent = (e) => {
    e.preventDefault();
    let Student = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      enNumber: this.state.enNumber,
      branch: this.state.branch,
      semester: this.state.semester,
      contactNumber: this.state.contactNumber,
    };
    console.log("Student => " + JSON.stringify(Student));

    StudentService.createStudent(Student).then((res) => {
      this.props.history.push("/students");
    });
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Create your Student Account</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      placeholder="Password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="form-control"
                      value={this.state.confirmPassword}
                      onChange={this.changeConfirmPasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enrollment Number</label>
                    <input
                      type="text"
                      placeholder="Enrollment Number"
                      className="form-control"
                      value={this.state.enNumber}
                      onChange={this.changeEnNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Branch</label>
                    <input
                      type="text"
                      placeholder="Branch"
                      className="form-control"
                      value={this.state.branch}
                      onChange={this.changeBranchHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Semester</label>
                    <input
                      type="text"
                      placeholder="Semester"
                      className="form-control"
                      value={this.state.semester}
                      onChange={this.changeSemesterHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="form-control"
                      value={this.state.contactNumber}
                      onChange={this.changeContactNumberHandler}
                    />
                  </div>
                  <div className="btn btn-success" onClick={this.saveStudent}>
                    Save
                  </div>
                  <div
                    className="btn btn-danger"
                    onClick={() => history.push("/Students")}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupComponent;
