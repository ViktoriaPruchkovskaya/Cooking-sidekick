import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card, Icon } from "antd";
import "./RecipeCard.css";

const { Meta } = Card;

const RecipeCard = props => {
  const [showFav, setShowFav] = useState(false);
  let heartTheme = "outlined";
  let heartColor = "";

  if (showFav) {
    heartTheme = "twoTone";
    heartColor = "#eb2f96";
  }
  return (
    <div>
      <Card
        style={{ width: 250 }}
        cover={<img alt="" src={props.img} />}
        actions={[
          <Icon
            type="heart"
            theme={heartTheme}
            twoToneColor={heartColor}
            onClick={() => setShowFav(!showFav)}
          />,
          <Icon
            type="more"
            onClick={() => props.history.push("/recipe/" + props.position)}
          />
        ]}
        hoverable={true}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default withRouter(RecipeCard);
