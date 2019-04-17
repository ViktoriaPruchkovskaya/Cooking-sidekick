import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Row, Col, Affix } from "antd";
import Menu from "../components/Menu/Menu";
import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
import DailyRecipe from "../components/Content/DailyRecipe/DailyRecipe";
import Cards from "../components/Content/Cards/Cards";
import AuthBtn from "../components/Auth/AuthBtn";

const MainPage = () => {
  return (
    <div className="App">
      <h1>My new project</h1>
      <Row>
        <Col span={6}>
          <Col span={4}>
            <Affix>
              <AuthBtn />
              <Menu />
              <IngridientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={18} >
          <DailyRecipe />
          <Cards className="center" />
        </Col>
      </Row>
      {/* <Route path="/recipe" component={Recipe} /> */}
    </div>
  );
};

export default MainPage;
