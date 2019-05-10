import React from "react";

const ListItem = props => {
  return (
    <a
      role="button"
      href
      onClick={() => {
        console.log(props.query);
        props.setFilter(props.query);
      }}
    >
      {props.label}
    </a>
  );
};

export default ListItem;
