import React, { Component } from "react";
import StudentService from "../services/StudentService";
import Alert from "react-bootstrap/Alert";

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
      alertMessage: "",
      isAlertShow: false,
      alertType: "danger",
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
  nameValidator(name) {
    if (name.trim().length > 3) {
      return true;
    }
    this.setState({ alertMessage: "Name Length must be greater than 3" });
    this.setState({ isAlertShow: true });
    return false;
  }
  emailValidator(email) {
    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (isValid) {
      return true;
    }
    this.setState({ alertMessage: "Invalid Email" });
    this.setState({ isAlertShow: true });
    return false;
  }
  passwordValidator(password) {
    if (password.trim().length >= 6) {
      return true;
    }
    this.setState({
      alertMessage: "Password Length must be minimum 6 characters",
    });
    this.setState({ isAlertShow: true });
    return false;
  }
  confirmPasswordValidator(confirmpassword) {
    if (this.state.password === confirmpassword) return true;
    this.setState({ alertMessage: "Passwords do not match" });
    this.setState({ isAlertShow: true });
    return false;
  }
  restFieldsValidator(enNumber, branch, semester, contactNumber) {
    var isValid = true;
    [enNumber, branch, semester, contactNumber].forEach((value) => {
      if (value.trim().length === 0) {
        this.setState({ alertMessage: "Fields cannot be empty" });
        this.setState({ isAlertShow: true });
        isValid = false;
        return false;
      }
    });
    return isValid;
  }
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
    var isNameValid = this.nameValidator(this.state.name);

    if (!isNameValid) {
      return;
    }
    var isEmailValid = this.emailValidator(this.state.email);
    if (!isEmailValid) {
      return;
    }
    var isPasswordValid = this.passwordValidator(this.state.password);
    if (!isPasswordValid) {
      return;
    }
    var isConfirmPasswordValid = this.confirmPasswordValidator(
      this.state.confirmPassword
    );
    if (!isConfirmPasswordValid) {
      return;
    }
    var isValidRestFields = this.restFieldsValidator(
      this.state.enNumber,
      this.state.branch,
      this.state.semester,
      this.state.contactNumber
    );
    if (!isValidRestFields) {
      return;
    }
    console.log("Student => " + JSON.stringify(Student));
    this.setState({ alertMessage: "Account Created Successfully" });
    this.setState({ isAlertShow: true });
    this.setState({ alertType: "success" });
    setTimeout(() => {
      StudentService.createStudent(Student).then((res) => {
        this.props.history.push("/students");
      });
    }, 3000);
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
                      type="email"
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
                  <div
                    className="btn btn-success"
                    onClick={this.saveStudent}
                    style={{ marginTop: "10px" }}
                  >
                    Save
                  </div>
                  <div
                    className="btn btn-danger"
                    onClick={() => history.push("/students")}
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    Cancel
                  </div>
                </form>
                <Alert
                  show={this.state.isAlertShow}
                  variant={this.state.alertType}
                  style={{ marginTop: "10px" }}
                >
                  {this.state.alertMessage}
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupComponent;
