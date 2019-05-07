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
  const [recipe, setRecipe] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const action = window.location.pathname.split("/").slice(-1)[0];
      console.log("request is sent");
      const response = await fetch(`/api/recipe/${action}`);
      const parsed_response = await response.json();
      console.log(parsed_response);
      setRecipe(parsed_response);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <h1>Recipe</h1> */}
      <Row>
        <Col span={6}>
          <Col span={5}>
            <Affix>
              <Breadcrumbs />
              <AuthBtn />
              <Menu />
              <IngridientSearch />
            </Affix>
          </Col>
        </Col>
        <Col span={18}>
          {recipe.map(recipeItem => (
            <React.Fragment key={recipeItem.id}>
              <Divider orientation="left" style={{ fontSize: 30 }}>
                {recipeItem.title}
              </Divider>
              <Pic img={recipeItem.pic} style={{ width: 500 }} />
              <p>{recipeItem.description}</p>
              <Divider dashed />
              <IngridientsTab ingridients={recipeItem.Ingridients} />
              <Divider dashed />
              <Steps steps={recipeItem.Steps} />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Recipe;
