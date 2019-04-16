import React from "react";
import "./DailyRecipe.css";
import { Carousel } from "antd";
const DailyRecipe = () => {
  return (
    <Carousel autoplay >
      <div className="slide">
        <img alt = "" src = "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
      </div>

      <div className="slide">
      <img alt = "" src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
      </div>
    </Carousel>
  );
};

export default DailyRecipe;
