import React from "react";
import { Button } from "antd";

const ListItem = props => {
  return <Button onClick={() => { console.log(props.query); props.setFilter(props.query); }}>{props.label}</Button>;
};

export default ListItem;
