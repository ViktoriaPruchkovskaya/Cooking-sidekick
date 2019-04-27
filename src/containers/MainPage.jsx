import React from "react";
import { withRouter } from "react-router-dom";
// import "./App.css";
import { Row, Col, Affix, Divider } from "antd";

import Menu from "../components/Menu/Menu";
import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
import DailyRecipe from "../components/Content/DailyRecipe/DailyRecipe";
import Cards from "../components/Content/Cards/Cards";
import AuthBtn from "../components/Auth/AuthBtn";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const MainPage = () => {
  return (
    <div className="App">
      <h1>My new project</h1>
      <Row>
        <Col span={6}>
          <Col span={5}>
            <Affix>
              <Breadcrumbs/>
              <AuthBtn />
              <Menu />
              <IngridientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={16}>
          <DailyRecipe />
          <Divider>Daily Recipe</Divider>
          <Cards/>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MainPage);
