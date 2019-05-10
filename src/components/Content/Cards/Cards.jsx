import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Col } from "antd";

const Cards = ({ list }) => {

  return list.map(recipe => (
    <Col key={recipe.id} span={8}>
      <RecipeCard
        title={recipe.title}
        description={[recipe.Category.name, recipe.Origin.name, recipe.Difficulty.difficulty].join(", ")}
        img={recipe.pic}
        position={recipe.id}
      />
    </Col>
  ));
};

export default Cards;
