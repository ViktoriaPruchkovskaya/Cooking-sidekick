import React, { useState } from "react";
import Button from "antd/lib/button";
import MenuList from "../MenuList/MenuList";
import LinkContext from "../../../context/linkContext";

const MenuPoint = ({ name, items }) => {
  const [isShowed, setShowed] = useState(false);
  return (
    <div>
      <Button
        style={{ width: 250 }}
        type="dashed"
        onClick={() => setShowed(!isShowed)}
      >
        {name}
      </Button>
      {/* <LinkContext.Provider
        value={{
          path: items.path
        }} */}
      
        {isShowed ? <MenuList subpoints={items} /> : null}
      {/* </LinkContext.Provider> */}
    </div>
  );
};

export default MenuPoint;
