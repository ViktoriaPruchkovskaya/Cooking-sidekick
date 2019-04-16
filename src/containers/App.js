import React, { Component } from "react";
import "./App.css";
import { Row, Col, Affix } from "antd";

// import Menu from "../components/Menu/Menu";
// import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
// import Cards from "../components/Content/Cards/Cards";
// import DailyRecipe from "../components/Content/DailyRecipe/DailyRecipe";
// import AuthBtn from "../components/Auth/AuthBtn";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainPage from "./MainPage";

class App extends Component {

  render() {

    return (
      <Router>
        <Route exact path="/" component={MainPage} />
          {/* <Route path="/recipe" component={Recipe} /> */}
      </Router>
    );
  }
}

export default App;
