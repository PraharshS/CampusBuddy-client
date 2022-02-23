import React, { Component } from "react";
import StudentService from "../../../../services/StudentService";

export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTableList: [],
    };
  }
  componentDidMount() {
    StudentService.getTimeTable().then((res) => {
      this.setState({ timeTableList: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center my-2">TIME TABLE</h2>
        <div className="row">
          <table className="table table-striped table-borderded">
            <thead>
              <tr>
                <th>Subject </th>
                <th>Hall Number</th>
                <th>Professor</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody>
              {this.state.timeTableList.map((element) => (
                <tr key={element.id}>
                  <td>{element.subject}</td>
                  <td>{element.hallNumber}</td>
                  <td>{element.professor}</td>
                  <td>{element.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
