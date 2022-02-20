import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";

import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import AllStudents from "./components/students/AllStudents";

import StudentDashBoard from "./components/students/dashboard/StudentDashBoard";
import TimeTable from "./components/students/dashboard/Academics/TimeTable";
import Holidays from "./components/students/dashboard/Academics/Holidays";
import Notices from "./components/students/dashboard/Academics/Notices";

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/signup" component={SignupComponent}></Route>
        <Route path="/students" component={AllStudents}></Route>
        <Route path="/student/dashboard" component={StudentDashBoard}></Route>
        <Route path="/student/time-table" component={TimeTable}></Route>
        <Route path="/student/holidays" component={Holidays}></Route>
        <Route path="/student/notices" component={Notices}></Route>
      </Switch>

      <FooterComponent />
    </Router>
  );
}

export default App;
