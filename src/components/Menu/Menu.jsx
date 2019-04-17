import React, { useContext } from "react";
import MenuPoint from "./MenuPoint/MenuPoint";
import LinkContext from "../../context/linkContext";

const Menu = () => {
const menu = useContext(LinkContext) ;

  return menu.layout.map(menuItem => (
    <div key={menuItem.id}>
        <MenuPoint name={menuItem.name} items={menuItem.items} />
    </div> 
  ));
};

export default Menu;
