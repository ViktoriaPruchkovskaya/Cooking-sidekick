import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Recipe from "./Recipe";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/recipe" component={Recipe} />
      </Router>
    );
  }
}

export default App;
