import React, { Component } from "react";
import StudentService from "../../../../services/StudentService";
import { Alert } from "react-bootstrap";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      student: "",
      isAlertShow: false,
      isAlertType: "danger",
    };
    this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }
  componentDidMount() {
    this.setState({ student: this.props.location.state });
    this.setState({ name: this.props.location.state.name });
    this.setState({ email: this.props.location.state.email });
  }
  changeMessageHandler = (e) => {
    this.setState({ message: e.target.value });
  };
  sendFeedback = (e) => {
    e.preventDefault();
    let feedBackObj = {
      student: this.state.student,
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(feedBackObj);
    if (feedBackObj.message.length === 0) {
      this.setState({ alertMessage: "Feedback message cannot be empty" });
      this.setState({ isAlertShow: true });
      this.setState({ alertType: "danger" });
      return;
    }
    this.setState({
      alertMessage:
        "Feedback Submitted Successfully , Redirecting to dashboard",
    });
    this.setState({ isAlertShow: true });
    this.setState({ alertType: "success" });
    setTimeout(() => {
      StudentService.sendFeedback(feedBackObj).then((res) => {
        this.props.history.push("dashboard", this.state.student);
      });
    }, 3000);
  };
  render() {
    return (
      <div>
        <div className="container" style={containerStyle.div}>
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={containerStyle.card}
            >
              <h3 className="text-center" style={containerStyle.heading}>
                Feedback Form
              </h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label style={containerStyle.label}>Name</label>
                    <input
                      style={containerStyle.input}
                      disabled
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Email</label>
                    <input
                      style={containerStyle.input}
                      disabled
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <label style={containerStyle.label}>Message</label>
                    <input
                      style={containerStyle.input}
                      type="text"
                      placeholder="Feedback Message"
                      className="form-control"
                      onChange={this.changeMessageHandler}
                    />
                  </div>
                  <div style={submitButtonStyle.buttonWrapper}>
                    <div
                      className="btn btn-success"
                      onClick={this.sendFeedback}
                      style={submitButtonStyle.button}
                    >
                      Submit
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
    width: "70%",
    paddingBottom: "2rem",
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
var submitButtonStyle = {
  buttonWrapper: {
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
