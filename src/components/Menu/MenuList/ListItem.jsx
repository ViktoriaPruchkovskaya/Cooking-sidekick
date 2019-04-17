import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => {
  return <Link to={props.path}>{props.label}</Link>; 
};

export default ListItem;
