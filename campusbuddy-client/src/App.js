import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";

import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/signup" component={SignupComponent}></Route>
      </Switch>

      <FooterComponent />
    </Router>
  );
}

export default App;
