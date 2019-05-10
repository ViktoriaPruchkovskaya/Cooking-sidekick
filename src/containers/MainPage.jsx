import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Row, Col, Affix, Divider } from "antd";

import Menu from "../components/Menu/Menu";
import IngredientSearch from "../components/Menu/IngredientSearch/IngredientSearch";
import DailyRecipe from "../components/Content/DailyRecipe/DailyRecipe";
import Cards from "../components/Content/Cards/Cards";
import AuthBtn from "../components/Auth/AuthBtn";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const MainPage = () => {
  const [recipes, setList] = useState([]);
  const [slider, setSlider] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = new URL("/api/recipes", window.location.href);
      console.log(filter);
      url.search = new URLSearchParams(filter);
      const response = await fetch(url);
      const parsed_response = await response.json();
      // console.log(parsed_response);
      setList(parsed_response);
      const dailyResponse = await fetch("/api/dailyRecipe");
      const parsed_dailyRecipe = await dailyResponse.json();
      setSlider(parsed_dailyRecipe);
    }

    fetchData();
  }, [filter]);

  return (
    <div className="App">
      <Row>
        <Col span={6}>
          <Col span={5}>
            <Affix>
              <Breadcrumbs />
              <AuthBtn />
              <Menu setFilter={setFilter} />
              <IngredientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={16}>
          <DailyRecipe slider={slider} />
          <Divider>Daily Recipe</Divider>
          <Cards list={recipes} />
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MainPage);
