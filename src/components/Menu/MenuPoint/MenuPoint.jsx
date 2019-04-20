import React, { useState } from "react";
import Button from "antd/lib/button";
import MenuList from "../MenuList/MenuList";

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
      {isShowed ? <MenuList subpoints={items} /> : null}
    </div>
  );
};

export default MenuPoint;
