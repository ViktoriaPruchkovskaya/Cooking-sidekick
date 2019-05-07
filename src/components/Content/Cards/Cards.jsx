import React from "react";
// import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Col } from "antd";

const Cards = ({ list }) => {
  // const cardsData = [
  //   {
  //     id: shortid.generate(),
  //     title: "card title1",
  //     description: "This is the description",
  //     src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //   },
  //   {
  //     id: shortid.generate(),
  //     title: "card title2",
  //     description: "This is the description",
  //     src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //   },
  //   {
  //     id: shortid.generate(),
  //     title: "card title3",
  //     description: "This is the description",
  //     src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //   },
  //   {
  //     id: shortid.generate(),
  //     title: "card title4",
  //     description: "This is the description",
  //     src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //   },
  //   {
  //     id: shortid.generate(),
  //     title: "card title5",
  //     description: "This is the description",
  //     src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  //   }
  // ];

  return list.map(recipe => (
    <Col key={recipe.id} span={8}>
      <RecipeCard
        title={recipe.title}
        description={[recipe.Category.name, recipe.Origin.name].join(", ")}
        img={recipe.pic}
        position={recipe.id}
      />
    </Col>
  ));
};

export default Cards;
