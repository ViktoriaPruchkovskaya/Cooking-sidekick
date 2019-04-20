import React, { useContext } from "react";
import MenuPoint from "./MenuPoint/MenuPoint";
import MenuContext from "../../context/menuContext";

const Menu = () => {
  const menu = useContext(MenuContext);

  return menu.layout.map(menuItem => (
    <div key={menuItem.id}>
      <MenuPoint name={menuItem.name} items={menuItem.items} />
    </div>
  ));
};

export default Menu;
