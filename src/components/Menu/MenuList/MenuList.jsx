import React from "react";
import ListItem from "./ListItem";
import "./MenuList.css";

const MenuList = ({ subpoints, setFilter }) => {
  const elements = subpoints.map(subpoint => {
    return (
      <li key={subpoint.id} className = "links">
        <ListItem label={subpoint.name} query={subpoint.query} setFilter={setFilter} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default MenuList;
