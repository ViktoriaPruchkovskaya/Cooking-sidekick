import React from "react";
import "./App.css";
import { Row, Col, Affix, Divider } from "antd";

import Steps from "../components/Content/Recipe/Steps/Steps";
import Pic from "../components/Pic/Pic";
import AuthBtn from "../components/Auth/AuthBtn";
import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
import Menu from "../components/Menu/Menu";
import IngridientsTab from "../components/Content/Recipe/IngridientsTab/IngridientsTab";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const Recipe = () => {
  return (
    <div className="App">
      <h1>Recipe</h1>
      <Row>
        <Col span={6}>
          <Col span={4}>
            <Affix>
              <Breadcrumbs />
              <AuthBtn />
              <Menu />
              <IngridientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={18}>
          <Divider orientation="left" style={{ fontSize: 30 }}>
            Recipe Title
          </Divider>
          <Pic />
          <Divider dashed />
          <IngridientsTab />
          <Divider dashed />
          <Steps />
        </Col>
      </Row>
    </div>
  );
};

export default Recipe;
