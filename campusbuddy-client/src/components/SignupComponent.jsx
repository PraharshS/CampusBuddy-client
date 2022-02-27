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
        this.props.history.push("/login");
      });
    }, 3000);
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="container" style={containerStyle.div}>
          <div className="row">
            <div className="card" style={containerStyle.card}>
              <h3 className="text-center" style={containerStyle.heading}>
                Create Student
              </h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label style={containerStyle.label}>Name</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Email</label>
                    <input
                      style={containerStyle.input}
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Password</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Confirm Password</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Confirm Password"
                      className="form-control"
                      value={this.state.confirmPassword}
                      onChange={this.changeConfirmPasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>
                      Enrollment Number
                    </label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Enrollment Number"
                      className="form-control"
                      value={this.state.enNumber}
                      onChange={this.changeEnNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Branch</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Branch"
                      className="form-control"
                      value={this.state.branch}
                      onChange={this.changeBranchHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Semester</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Semester"
                      className="form-control"
                      value={this.state.semester}
                      onChange={this.changeSemesterHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Contact Number</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Contact Number"
                      className="form-control"
                      value={this.state.contactNumber}
                      onChange={this.changeContactNumberHandler}
                    />
                  </div>
                  <div className="form-group" style={loginButtonStyle.parent}>
                    <div
                      className="btn btn-success"
                      onClick={this.saveStudent}
                      style={loginButtonStyle.button1}
                    >
                      Save
                    </div>
                    <div
                      className="btn btn-danger"
                      onClick={() => history.push("/students")}
                      style={loginButtonStyle.button2}
                    >
                      Cancel
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
  button1: {
    marginTop: "1rem",
    marginRight: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#6C63FF",
    borderRadius: "0",
    border: "2px solid black",
    width: "30%",
  },
  button2: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "red",
    borderRadius: "0",
    border: "2px solid black",
    width: "30%",
  },
};

export default SignupComponent;
