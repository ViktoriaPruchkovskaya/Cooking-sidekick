import React from "react";
import MenuPoint from "./MenuPoint/MenuPoint";
import shortid from "shortid";
import LinkContext from "../../context/linkContext";

const Menu = () => {
  const menuLayout = [
    {
      id: shortid.generate(),
      name: "Category",
      items: [
        { name: "Breakfast", path: "/breakfast" },
        { name: "Desserts", path: "/desserts" },
        { name: "Dinners", path: "/dinners" },
        { name: "Lunch", path: "/lunch" }
      ]
    },
    {
      id: shortid.generate(),
      name: "Origin",
      items: [
        { name: "Chinese", path: "/chinese" },
        { name: "Indian", path: "/indian" },
        { name: "Italian", path: "/italian" },
        { name: "Mexican", path: "/mexican" }
      ]
    },
    {
      id: shortid.generate(),
      name: "Difficulty",
      items: [
        { name: "Easy", path: "/easy" },
        { name: "Medium", path: "/medium" },
        { name: "Hard", path: "/hard" }
      ]
    }
  ];

  return menuLayout.map(menuItem => (
    <div key={menuItem.id}>
      <LinkContext.Provider
        value={{
          path: menuItem.items.path
        }}
      >
        <MenuPoint name={menuItem.name} items={menuItem.items} />
      </LinkContext.Provider>
    </div>
  ));
};

export default Menu;
