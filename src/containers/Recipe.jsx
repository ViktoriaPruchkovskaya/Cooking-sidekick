import React, { useState, useEffect } from "react";
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
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("request is sent");
      const response = await fetch("api/recipes");
      const parsed_response = await response.json();
      console.log(parsed_response);
      setRecipes(parsed_response);
    }

    fetchData();
  }, []);

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
          {recipes.map(recipe => (
            <React.Fragment key={recipe.id}>
              <Divider orientation="left" style={{ fontSize: 30 }}>
                {recipe.title}
              </Divider>
              <Pic picture={recipe.pic} />
              <Divider dashed />
              <IngridientsTab ingridients={recipe.Ingridients} />
              <Divider dashed />
              <Steps steps={recipe.Steps} />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Recipe;
