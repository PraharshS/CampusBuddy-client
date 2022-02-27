import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import StudentService from "../services/StudentService";
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "praharsh535@gmail.com",
      loginPassword: "Praharsh123",
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
    var studentObj;
    StudentService.findByEmailAndPassword(Student).then((res) => {
      studentObj = res.data;
      if (studentObj.id === 0) {
        this.setState({ alertMessage: "Invalid Credentials" });
        this.setState({ isAlertShow: true });
        return;
      }
      this.setState({
        alertMessage: "Student Login Successfull, Redirecting to Dashboard",
      });
      this.setState({ isAlertShow: true });
      this.setState({ alertType: "success" });
      setTimeout(() => {
        this.props.history.push("/student/dashboard", studentObj);
      }, 3000);
    });
  };
  render() {
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div className="card" style={containerStyle.card}>
            <h3 className="text-center" style={containerStyle.heading}>
              Student Login
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label style={containerStyle.label}>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={this.state.loginEmail}
                    onChange={this.changeEmailHandler}
                    style={containerStyle.input}
                  />
                </div>
                <div className="form-group">
                  <label style={containerStyle.label}>Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control"
                    value={this.state.loginPassword}
                    onChange={this.changePasswordHandler}
                    style={containerStyle.input}
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
var containerStyle = {
  div: {
    marginTop: "4rem",
    maxWidth: "400px",
    width: "80%",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    padding: "2rem",
  },
  card: {
    border: "4px solid #6C63FF",
  },
  label: {
    fontSize: "1.2rem",
    margin: "0.7rem auto",
  },
  input: {
    padding: "1rem 1rem",
    fontWeight: "bold",
  },
};
var loginButtonStyle = {
  parent: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#6C63FF",
    borderRadius: "0",
    border: "2px solid black",
    width: "30%",
  },
};
