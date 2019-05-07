import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Row, Col, Affix, Divider } from "antd";

import Menu from "../components/Menu/Menu";
import IngridientSearch from "../components/Menu/IngridientSearch/IngridientSearch";
import DailyRecipe from "../components/Content/DailyRecipe/DailyRecipe";
import Cards from "../components/Content/Cards/Cards";
import AuthBtn from "../components/Auth/AuthBtn";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const MainPage = () => {
  const [recipes, setList] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = new URL("/api/recipes", window.location.href);
      console.log(filter);
      url.search = new URLSearchParams(filter);
      const response = await fetch(url);
      const parsed_response = await response.json();
      console.log(parsed_response);
      setList(parsed_response);
    }

    fetchData();
  }, [filter]);

  return (
    <div className="App">
      {/* <h1>My new project</h1> */}
      <Row>
        <Col span={6}>
          <Col span={5}>
            <Affix>
              <Breadcrumbs />
              <AuthBtn />
              <Menu setFilter={setFilter}/>
              <IngridientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={16}>
          <DailyRecipe />
          <Divider>Daily Recipe</Divider>
          <Cards list={recipes} />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MainPage);
