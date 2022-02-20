import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import StudentService from "../services/StudentService";
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "praharsh535@gmail.com",
      loginPassword: "abcdef",
      isAlertShow: false,
      alertType: "danger",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.loginStudent = this.loginStudent.bind(this);
  }
  changeEmailHandler = (e) => {
    this.setState({ loginEmail: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  emailValidator(email) {
    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (isValid) {
      return true;
    }
    return false;
  }
  passwordValidator(password) {
    if (password.trim().length === 0) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return false;
    }
    return true;
  }
  loginStudent = (e) => {
    e.preventDefault();
    let Student = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    var isEmailValid = this.emailValidator(this.state.loginEmail);
    if (!isEmailValid) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return;
    }
    var isPasswordValid = this.passwordValidator(this.state.loginPassword);
    if (!isPasswordValid) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return;
    }
    var studentList = [];
    StudentService.findByEmailAndPassword(Student).then((res) => {
      console.log(res.data);
      studentList = res.data;
      console.log(studentList);
      if (studentList.length === 0) {
        this.setState({ alertMessage: "Invalid Credentials" });
        this.setState({ isAlertShow: true });
        return;
      }

      console.log("Student List => " + JSON.stringify(studentList));
      this.setState({
        alertMessage: "Student Login Successfull, Redirecting to Dashboard",
      });
      this.setState({ isAlertShow: true });
      this.setState({ alertType: "success" });
      setTimeout(() => {
        this.props.history.push("/student/dashboard", studentList);
      }, 3000);
    });
  };
  render() {
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Login your Student Account</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={this.state.loginEmail}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control"
                    value={this.state.loginPassword}
                    onChange={this.changePasswordHandler}
                  />
                </div>
                <div className="form-group" style={loginButtonStyle.parent}>
                  <div
                    className="btn btn-primary"
                    onClick={this.loginStudent}
                    style={loginButtonStyle.button}
                  >
                    Login
                  </div>
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
    );
  }
}
var containerStyle = {};
var loginButtonStyle = {
  parent: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    marginTop: "10px",
  },
};
