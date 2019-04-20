import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";
import shortid from "shortid";
import { Col } from "antd";

const Cards = () => {
  const cardsData = [
    {
      id: shortid.generate(),
      title: "card title1",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title2",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title3",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title4",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
      id: shortid.generate(),
      title: "card title5",
      description: "This is the description",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    }
  ];

  return cardsData.map(cardData => (
    <Col key={cardData.id} span={7}>
      <Link to="/recipe">
        <RecipeCard
          title={cardData.title}
          description={cardData.description}
          img={cardData.src}
        />
      </Link>
    </Col>
  ));
};

export default Cards;
