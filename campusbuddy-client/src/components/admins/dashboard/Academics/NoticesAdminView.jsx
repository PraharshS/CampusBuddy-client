import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import AdminService from "../../../../services/AdminService";
import { Link } from "react-router-dom";
export default class NoticesAdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeList: [],
      admin: props.history.location.state,
      type: "Exams",
      description: "physics exam on 20th march",
      isAlertShow: false,
      alertType: "danger",
    };
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.addNotice = this.addNotice.bind(this);
  }
  changeTypeHandler = (e) => {
    this.setState({ type: e.target.value });
  };
  changeDescriptionHandler = (e) => {
    this.setState({ description: e.target.value });
  };

  addNotice = (e) => {
    e.preventDefault();
    let noticeObj = {
      admin: this.state.admin,
      type: this.state.type,
      description: this.state.description,
    };
    console.log(noticeObj);
    AdminService.addNotice(noticeObj).then((res) => {
      this.setState({ alertMessage: "Notice Added" });
      this.setState({ alertType: "success" });
      this.setState({ isAlertShow: true });
      setTimeout(() => {
        this.setState({ isAlertShow: false });
      }, 1000);
    });
  };
  render() {
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={containerStyle.card}
          >
            <h3 className="text-center" style={containerStyle.heading}>
              Add Notice
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label style={containerStyle.label}>Admin Name</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={this.state.admin.name}
                    onChange={this.changeTypeHandler}
                    style={containerStyle.input}
                  />
                </div>
                <div className="form-group">
                  <label style={containerStyle.label}>Admin Email</label>
                  <input
                    disabled
                    type="email"
                    className="form-control"
                    value={this.state.admin.email}
                    onChange={this.changeTypeHandler}
                    style={containerStyle.input}
                  />
                </div>
                <div className="form-group">
                  <label style={containerStyle.label}>Type</label>
                  <input
                    type="text"
                    placeholder="Type"
                    className="form-control"
                    value={this.state.type}
                    onChange={this.changeTypeHandler}
                    style={containerStyle.input}
                  />
                </div>
                <div className="form-group">
                  <label style={containerStyle.label}>Description</label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.changeDescriptionHandler}
                    style={containerStyle.input}
                  />
                </div>
                <div className="form-group" style={addButtonStyle.parent}>
                  <div
                    className="btn btn-primary"
                    onClick={this.addNotice}
                    style={addButtonStyle.button}
                  >
                    Add Notice
                  </div>
                  <Link
                    to={{
                      pathname: "all-notices",
                      state: this.state.admin,
                    }}
                  >
                    <div
                      className="btn btn-primary"
                      onClick={this.viewAllNotices}
                      style={addButtonStyle.button}
                    >
                      View All Notices
                    </div>
                  </Link>
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
var addButtonStyle = {
  parent: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
  },
  button: {
    marginTop: "1rem",
    margin: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#6C63FF",
    borderRadius: "0",
    border: "2px solid black",
    width: "40%",
  },
};
