import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkContext from "../../../context/linkContext";

const ListItem = props => {
  const linkContext = useContext(LinkContext);
  return <Link to={linkContext.path}>{props.label}</Link>; // link to
};

export default ListItem;
