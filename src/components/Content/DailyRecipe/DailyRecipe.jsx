import React from "react";
import "./DailyRecipe.css";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Pic from "../../Pic/Pic";

const style = { width: "70em", height: "21em", position:"absolute" };

const DailyRecipe = ({ slider }) => {
  const elements = slider.map((slide, index) => {
    return (
      <Link to={("/recipe/" + slide.id)} key={index} className="slide">
        <Pic img={slide.pic} style={style} />
        <h1>{slide.title}</h1>
      </Link>
    );
  });
  return (
    <Carousel autoplay >
      {elements}
    </Carousel>
  );
};

export default DailyRecipe;
