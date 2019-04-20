import React from "react";
import "./App.css";
import { Row, Col, Affix } from "antd";

import Steps from "../components/Content/Recipe/Steps/Steps";
import Pic from "../components/Pic/Pic";
import AuthBtn from "../components/Auth/AuthBtn";
import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
import Menu from "../components/Menu/Menu";
import IngridientsTab from "../components/Content/Recipe/IngridientsTab/IngridientsTab";

const Recipe = () => {
  return (
    <div className="App">
      <h1>Recipe</h1>
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
        <Col span={18}>
          <Pic />
          <IngridientsTab />
          <Steps />
        </Col>
      </Row>
    </div>
  );
};

export default Recipe;
