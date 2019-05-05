import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Recipe from "./Recipe";
import WrappedRegistrationForm from "../components/Registration/Registration";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/recipe" component={Recipe} />
        <Route path='/registration' component={WrappedRegistrationForm}/>
      </Router>
    );
  }
}

export default App;
