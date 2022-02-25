import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import AdminLoginComponent from "./components/admins/AdminLoginComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./components/HomePage";
import LoginComponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import SignupComponent from "./components/SignupComponent";
import AllStudents from "./components/students/AllStudents";
import AllStudentsAdminView from "./components/admins/AllStudents";
import Feedback from "./components/students/dashboard/Academics/Feedback";
import Holidays from "./components/students/dashboard/Academics/Holidays";
import Notices from "./components/students/dashboard/Academics/Notices";
import TimeTable from "./components/students/dashboard/Academics/TimeTable";
import EditProfile from "./components/students/dashboard/EditProfile";
import EditProfileAdminView from "./components/admins/dashboard/EditProfile";
import StudentDashBoard from "./components/students/dashboard/StudentDashBoard";
import AdminDashBoard from "./components/admins/dashboard/AdminDashBoard";
import ContactPage from "./components/ContactPage";
import NoticesAdminView from "./components/admins/dashboard/Academics/NoticesAdminView";

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
        <Route path="/student/edit-profile" component={EditProfile}></Route>
        <Route path="/student/time-table" component={TimeTable}></Route>
        <Route path="/student/holidays" component={Holidays}></Route>
        <Route path="/student/notices" component={Notices}></Route>
        <Route path="/student/feedback" component={Feedback}></Route>

        <Route path="/admins/login" component={AdminLoginComponent}></Route>
        <Route path="/admins/dashboard" component={AdminDashBoard}></Route>
        <Route
          path="/admins/all-students"
          component={AllStudentsAdminView}
        ></Route>
        <Route
          path="/admins/edit-student-profile"
          component={EditProfileAdminView}
        ></Route>
        <Route path="/admins/time-table" component={TimeTable}></Route>
        <Route path="/admins/holidays" component={Holidays}></Route>
        <Route path="/admins/notices" component={NoticesAdminView}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>

      <FooterComponent />
    </Router>
  );
}

export default App;
